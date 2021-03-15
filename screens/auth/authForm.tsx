import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import RegisterForm from '../../components/forms/register';
import SignInForm from '../../components/forms/signInForm';
import { Ionicons } from '@expo/vector-icons';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';

const AuthFormScreen = ({ navigation, route }: any) => {
	const { type }: any = route.params;
	const title = `Please enter your details to ${type == 'SignIn' ? 'Sign In' : type}`;
	const { colors }: any = useTheme();
	return (
        <ScrollContextProvider title={'Register'}>
		{/* <View style={[styles.container, { backgroundColor: colors.card }]}> */}
			<View>
				{/* <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.9}>
					<Ionicons size={34} style={{ marginLeft: 20, marginBottom: 40 }} name={'arrow-back-sharp'} color={colors.text} />
				</TouchableOpacity> */}
				<MediumText center fontSize={20}>
					{title}
				</MediumText>
			</View>
			{type == 'SignIn' ? <SignInForm /> : <RegisterForm />}
		{/* </View> */}
        <View style={{ height: 300 }} />
        </ScrollContextProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
	},
});

export default AuthFormScreen;
