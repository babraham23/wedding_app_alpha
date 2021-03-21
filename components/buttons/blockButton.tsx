import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const BlockButton = ({ title, onPress, style }: any) => {
    const { border, colors }: any = useTheme()
	return (
		<View style={[style]} >
			<TouchableOpacity style={[styles.container, { backgroundColor: colors.primary }]} activeOpacity={0.7} onPress={onPress}>
				<Text style={[styles.label, { color: colors.text }]}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// justifyContent: 'center',
		height: 150,
		width: '100%',
        // paddingHorizontal: 15,
        // marginVertical: 10,
        // alignContent: 'center'
	},
	label: {
        paddingTop: 10,
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "500",
        fontFamily: 'Bold', 
        textShadowColor: '#000',
        textShadowOffset:{ width: 1, height: 1},
        textShadowRadius: 0,
	},
});
export default BlockButton;
