import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }: any) => {
	const title1 = `Welcome to`;
	const title2 = `Emma and Emily's Wedding.`;
	const { colors }: any = useTheme();
	return (
		<>
			<View style={[styles.container, { backgroundColor: colors.card }]}>
				<View style={styles.titleWrapper}>
					<BoldText fontSize={40}>{title1}</BoldText>
					<BoldText fontSize={40}>{title2}</BoldText>
				</View>
			</View>

			<Animatable.View animation="fadeInUpBig">
				<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('AuthFormScreen', { type: 'Register' })} style={[styles.button, {backgroundColor: colors.primary }]}>
					<BoldText color={'white'} fontSize={20}>REGISTER</BoldText>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('AuthFormScreen', { type: 'SignIn' })} style={[styles.button, { backgroundColor: 'black' }]}>
					<BoldText color={'white'} fontSize={20}>SIGN IN</BoldText>
				</TouchableOpacity>
			</Animatable.View>
            
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 150,
	},
	titleWrapper: {
		paddingHorizontal: 20,
	},
    button:{ 
        height: 100, 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SplashScreen;
