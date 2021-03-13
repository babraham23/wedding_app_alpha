import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Slide = ({ title, onPress, interval }: any) => {
	const { colors }: any = useTheme();
    const [ select, handleSelection ] = React.useState('')
	return (
		<TouchableOpacity activeOpacity={0.9} style={[styles.slide, { backgroundColor: colors.card }]} onPress={onPress}>
				<Text style={{ ...styles.slideText, color: colors.text }}>{title}</Text>
		</TouchableOpacity>
	);
};

export const styles = StyleSheet.create({
    slide: {
      paddingHorizontal: 20,
      paddingBottom: 10,
      paddingTop: 30,
      flexBasis: '100%',
      flex: 1,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: 200,
      width: '100%',
      backgroundColor: 'green'
    },
    slideText: {
      width: '100%',
      textAlign: 'left',
      fontSize: 20,
    },
  });

export default Slide;