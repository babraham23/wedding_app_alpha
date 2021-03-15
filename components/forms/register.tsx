import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import BigInput from '../inputs/bigInput';
import { RegisterModel } from '../../_models/register.model';

const RegisterForm = () => {
	const { colors }: any = useTheme();
    const [{ Name, Email, Password, NameError, EmailError, PasswordError }, setState] = React.useState(new RegisterModel())
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
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
            <BigInput 
                title={'Whats your password?'} 
				keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState) => ({ ...prevState, Email: item }))}
				error={EmailError}
                secureTextEntry={true}
            />
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
    inputWrapper: {
        paddingTop: 80
    }
});

export default RegisterForm;
