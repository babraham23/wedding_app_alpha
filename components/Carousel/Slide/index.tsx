import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';

export const Slide = ({ title, onPress }: any) => {
	const { colors }: any = useTheme();
	return (
		<TouchableOpacity activeOpacity={0.9} style={[styles.slide, { backgroundColor: colors.background }]} onPress={onPress}>
				<Text style={{ ...styles.slideText, color: colors.text }}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Slide;
