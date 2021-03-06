import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import BigInput from '../inputs/bigInput';
import BigSecureInput from '../inputs/bigSecureInput';
import { RegisterModel } from '../../_models/register.model';
import StandardButton from '../buttons/standardButton';
import { RegisterUser } from '../../functions/api'
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER } from '../../state/reducers/userReducer';
import ActivityIndicatorElement from '../activityIndicator';
import { HTTP_ERROR } from '../../functions/http';
import { ValidateRegister } from '../../functions/validators';


const RegisterForm = () => {
	const { colors }: any = useTheme();
    const dispatch = useDispatch();
    const navigation: any = useNavigation()
    // const { data, loading } = this.state;
    const [ loading, setLoading ] = React.useState(false)
    const [{ username, email, password, usernameError, emailError, passwordError }, setState] = React.useState(new RegisterModel())
    const handleValidation = () => {
        // navigation.navigate()
        const data = {
            username,
            email,
            password,
        }
        const ValidateStep = ValidateRegister(data);
		if (ValidateStep.valid) {
			handleRegister()
		} else {
            alert('Please complete the form correctly.')
		}
    }
    const handleRegister = async () => {
        const data = {
            username,
            email,
            password,
        }
        setLoading(true)
        RegisterUser(data)
        .then(res => {
            storeToken(res.data.jwt)
            saveUserDetailsLocally(res.data.user)
            dispatch({ type: SET_USER, payload: res.data.user })
            navigation.navigate('HomeScreen')
        })
        .catch(err => alert(HTTP_ERROR(err)))
        .then(() => setLoading(false))
    }
    const storeToken = async (token: any) => {
        await SecureStore.setItemAsync('token', token);
    }
    const saveUserDetailsLocally = async (userDetails: any) => {
		await SecureStore.setItemAsync('userDetails', JSON.stringify(userDetails));
	};
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
            {loading ? <ActivityIndicatorElement /> : null}
            <View style={styles.inputWrapper} >
            <BigInput 
                title={`What's your name?`} 
                autoCorrect={false}
				onChangeText={(item: any) => setState((prevState: any) => ({ ...prevState, username: item }))}
				error={usernameError}
            />
            <BigInput 
                title={`What's your email?`} 
				keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState) => ({ ...prevState, email: item }))}
				error={emailError}
            />
            <BigSecureInput 
                title={`What's your password?`} 
				// keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState) => ({ ...prevState, password: item }))}
				error={emailError}
                secureTextEntry={true}
            />
            </View>
            <StandardButton title={'Register'} style={{marginVertical: 50}} 
                // onPress={() => navigation.navigate('HomeScreen')} 
                onPress={() => handleValidation()}
            />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
    inputWrapper: {
        paddingTop: 40
    }
});

export default RegisterForm;
