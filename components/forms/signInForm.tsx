import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import BigInput from '../inputs/bigInput';
import BigSecureInput from '../inputs/bigSecureInput';
import { SignInModel } from '../../_models/signIn.model';
import StandardButton from '../buttons/standardButton';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER } from '../../state/reducers/userReducer';
import { LogInUser } from '../../functions/api'
import * as SecureStore from 'expo-secure-store';
import ActivityIndicatorElement from '../activityIndicator';
import { HTTP_ERROR } from '../../functions/http'
import { ValidateSignIn } from '../../functions/validators';


const SignInForm = () => {
	const { colors }: any = useTheme();
    const navigation: any = useNavigation()
    const [ loading, setLoading ] = React.useState(false)
    const dispatch = useDispatch()
    const [{ username, password, usernameError, passwordError }, setState] = React.useState(new SignInModel())
    const handleValidation = () => {
        // navigation.navigate()
        const data = {
            username,
            password,
        }
        const ValidateStep = ValidateSignIn(data);
		if (ValidateStep.valid) {
			handleSignIn()
		} else {
            alert('Please complete the form correctly.')
		}
    }
    const handleSignIn = async () => {
        const data = {
            identifier: username,
            password,
        }
        setLoading(true)
        LogInUser(data)
        .then(res => {
            console.log(res)
            storeToken(res.data.jwt)
            storeUser(res.data.user)
            dispatch({ type: SET_USER, payload: res.data.user })
            navigation.navigate('HomeScreen')
        })
        .catch(err => alert(HTTP_ERROR(err)))
        .then(() => setLoading(false))
    }
    const storeToken = async (token: any) => {
        await SecureStore.setItemAsync('token', token);
    }
    const storeUser = async (user: any) => {
		await SecureStore.setItemAsync('userDetails', JSON.stringify(user));
	};
    return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
            {loading ? <ActivityIndicatorElement /> : null}
            <View style={styles.inputWrapper} >
            <BigInput 
                title={`What's your name or email?`} 
                autoCorrect={false}
				onChangeText={(item: any) => setState((prevState: any) => ({ ...prevState, username: item }))}
				error={usernameError}
            />
            <BigSecureInput 
                title={`What's your password?`} 
				keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState: any) => ({ ...prevState, password: item }))}
				error={passwordError}
                secureTextEntry={true}
            />
            </View>
            <StandardButton title={'Sign In'} style={{ marginVertical: 50 }} onPress={() => handleValidation()} />
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

export default SignInForm;
