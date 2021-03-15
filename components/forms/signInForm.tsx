import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import BigInput from '../inputs/bigInput';
import BigSecureInput from '../inputs/bigSecureInput';
import { RegisterModel } from '../../_models/register.model';
import StandardButton from '../buttons/standardButton';

const SignInForm = () => {
	const { colors }: any = useTheme();
    const navigation: any = useNavigation()
    const [{ Name, Email, Password, NameError, EmailError, PasswordError }, setState] = React.useState(new RegisterModel())
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.inputWrapper} >
            <BigInput 
                title={`What's your name or email?`} 
                autoCorrect={false}
				onChangeText={(item: any) => setState((prevState: any) => ({ ...prevState, Name: item }))}
				error={NameError}
            />
            <BigSecureInput 
                title={'Whats your password?'} 
				keyboardType={'email-address'}
				onChangeText={(item: any) => setState((prevState) => ({ ...prevState, Email: item }))}
				error={EmailError}
                secureTextEntry={true}
            />
            </View>
            <StandardButton title={'Sign In'} style={{ marginVertical: 50 }} onPress={() => navigation.navigate('HomeScreen')} />
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

export default SignInForm;
