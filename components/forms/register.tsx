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

const RegisterForm = () => {
	const { colors }: any = useTheme();
    const navigation: any = useNavigation()
    const [{ Name, Email, Password, NameError, EmailError, PasswordError }, setState] = React.useState(new RegisterModel())
    const handleRegister = () => {
        const data = {
            username: 'Test1',
            email: 'test@1.io',
            password: 'password',
        }
        RegisterUser(data)
        .then(res => console.log('res -->', res))
        .catch(err => console.log('err -->', err))
    }
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.inputWrapper} >
            <BigInput 
                title={'Whats your name?'} 
                autoCorrect={false}
				onChangeText={(item: any) => setState((prevState: any) => ({ ...prevState, Name: item }))}
				error={NameError}
            />
            <BigInput 
                title={'Whats your email?'} 
				keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState) => ({ ...prevState, Email: item }))}
				error={EmailError}
            />
            <BigSecureInput 
                title={'Whats your password?'} 
				keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState) => ({ ...prevState, Email: item }))}
				error={EmailError}
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
