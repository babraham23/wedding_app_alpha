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

const RegisterForm = () => {
	const { colors }: any = useTheme();
    const dispatch = useDispatch();
    const navigation: any = useNavigation()
    const [{ username, email, password, usernameError, emailError, passwordError }, setState] = React.useState(new RegisterModel())
    const handleRegister = async () => {
        const data = {
            username,
            email,
            password,
        }
        RegisterUser(data)
        .then(res => {
            storeToken(res.data.jwt)
            saveUserDetailsLocally()
            dispatch({ type: SET_USER, payload: res.data.user })
            navigation.navigate('HomeScreen')
        })
        .catch(err => alert(err))
    }
    const storeToken = async (token: any) => {
        await SecureStore.setItemAsync('token', token);
    }
    const saveUserDetailsLocally = async () => {
		const userDetails = { username, email, password };
		await SecureStore.setItemAsync('userDetails', JSON.stringify(userDetails));
	};
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
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
                onPress={() => handleRegister()}
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
