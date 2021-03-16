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


const SignInForm = () => {
	const { colors }: any = useTheme();
    const navigation: any = useNavigation()
    const dispatch = useDispatch()
    const [{ username, password, usernameError, passwordError }, setState] = React.useState(new SignInModel())
    const handleSignIn = async () => {
        const data = {
            identifier: username,
            password,
        }
        console.log('data -->', data)
        LogInUser(data)
        .then(res => {
            console.log('res -->', res.data)
            storeToken(res.data.jwt)
            storeUser(res.data.user.username)
            dispatch({ type: SET_USER, payload: res.data.user })
            navigation.navigate('HomeScreen')
        })
        .catch(err => alert(err))
    }
    const storeToken = async (token: any) => {
        await SecureStore.setItemAsync('token', token);
    }
    const storeUser = async (token: any) => {
        await SecureStore.setItemAsync('user', token);
    }
    return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
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
            <StandardButton title={'Sign In'} style={{ marginVertical: 50 }} onPress={() => handleSignIn()} />
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
