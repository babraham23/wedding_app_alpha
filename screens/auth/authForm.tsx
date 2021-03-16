import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import RegisterForm from '../../components/forms/register';
import SignInForm from '../../components/forms/signInForm';
import BackButton from '../../components/buttons/backButton'
import { Ionicons } from '@expo/vector-icons';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';

const AuthFormScreen = ({ navigation, route }: any) => {
	const { type }: any = route.params;
	const title = `Please enter your details to ${type == 'SignIn' ? 'Sign In' : type}`;
	const { colors }: any = useTheme();
	return (
        <ScrollView style={styles.container} bounces={false}>
			<View>
				<MediumText center fontSize={20}>
					{title}
				</MediumText>
                <BackButton style={styles.backButton} />
			</View>
			{type == 'SignIn' ? <SignInForm /> : <RegisterForm />}
		{/* </View> */}
        <View style={{ height: 300 }} />
        </ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
	},
    backButton: {
        paddingLeft: 20,
        paddingTop: 40
    }
});

export default AuthFormScreen;
