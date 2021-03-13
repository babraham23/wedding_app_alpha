import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

const StandardButton = ({ onPress, title, clear, style }: any) => {
	const { colors }: any = useTheme();
	return (
		<>
			{!clear ? (
				<TouchableOpacity
					activeOpacity={0.8}
					style={[style, styles.wrapper, { backgroundColor: colors.text }]}
					onPress={onPress}
				>
					{/* <LinearGradient colors={[colors.blue, colors.blue_grad]} style={styles.wrapper}> */}
					<Text style={[styles.text, { color: colors.card }]}>{title}</Text>
					{/* </LinearGradient> */}
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={onPress} style={styles.clearWrapper}>
					<Text style={[styles.text, { color: '#713ab2' }]}>{title}</Text>
				</TouchableOpacity>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		// width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
        marginHorizontal: 10
	},
	clearWrapper: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderColor: '#009387',
		borderWidth: 1,
		marginTop: 15,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default StandardButton;
