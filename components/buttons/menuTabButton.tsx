import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const MenuTabButton = ({ label, onPress }: any) => {
    const { border, colors }: any = useTheme()
	return (
		<View style={[styles.container, { borderRadius: border.smallButton, backgroundColor: colors.smallButton }]}>
			<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
				<Text style={styles.label}>{label}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		height: 25,
		minWidth: 50,
        marginLeft: 5,
        marginRight: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignContent: 'center'
	},
	label: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Bold',
		alignSelf: 'center',
	},
});
export default MenuTabButton;
