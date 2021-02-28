import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

const AnimtedView = ({ children }: any) => {
	const { colors }: any = useTheme();
	return (
		<View style={[styles.container, { backgroundColor: colors.primary }]}>
			<Animatable.View style={[styles.footer, { backgroundColor: colors.background }]} animation="fadeInUpBig">
				{children}
			</Animatable.View>
		</View>
	);
};

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		flex: 1,
		backgroundColor: '#fff',
		borderRadius: 40,
		// paddingVertical: 50,
		// padding: 10,
        paddingTop: 10,
        paddingHorizontal: 8,
        paddingBottom: 2,
		margin: 5,
	},
	title: {
		color: '#05375a',
		fontSize: 30,
		fontWeight: 'bold',
	},
});

export default AnimtedView;
