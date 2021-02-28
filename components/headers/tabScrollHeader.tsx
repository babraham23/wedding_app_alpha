import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { useTheme } from '@react-navigation/native';
import Header from '../scrollContext/header';
import MenuScroll from '../menu/menuScroll';
import BigHeader from '../scrollContext/bigHeader'

const TabScrollHeader = ({ style }: any) => {
	// const { colors, border }: any = useTheme();
	return (
		<View style={[styles.container, style]}>
			<BigHeader />
			<MenuScroll />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
        // position: 'absolute',
        // top: 0,
        // zIndex: 99,
        // width: '100%'
	},
});

export default TabScrollHeader;
