import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import RegisterForm from '../../components/forms/register';

const AuthFormScreen = ({ navigation, route }: any) => {
	const { type }: any = route.params;
	const title = `Please enter your details to ${type == 'SignIn' ? 'Sign In' : type}`;
	const { colors }: any = useTheme();
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<MediumText center fontSize={20}>
				{title}
			</MediumText>
			<RegisterForm />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
	},
});

export default AuthFormScreen;
