import React from 'react';
import { View, Image, StyleSheet, useColorScheme } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Logo = ({ label, onPress, style }: any) => {
    const { border, colors }: any = useTheme()
    const navigation = useNavigation()
    const scheme = useColorScheme()
	return (
		<View style={[style, styles.container]}>
            {scheme === 'dark' ? <Image source={require('../../assets/images/logoDark.png')} style={styles.logo} /> :
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} /> }
		</View>
	);
};

const styles = StyleSheet.create({
	container: {

	},
    logo: {
        height: 250,
        width: 250,
        resizeMode: 'contain'
    }
});
export default Logo;
