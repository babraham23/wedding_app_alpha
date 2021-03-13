import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './header';
import { ScrollView } from './scrollContext';
import { useTheme } from '@react-navigation/native'

export const Document = ({ children, headerLeft, title }: any) => {
    const { colors } = useTheme()
	return (
		<>
			<Header
				title={title}
				headerLeft={headerLeft}
			/>
			<ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>{children}</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
        // flex: 1,
        // padding: 10
	},
});

export default Document;
