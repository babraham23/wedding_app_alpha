import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native'

const ActivityIndicatorElement = () => {
    const { colors } = useTheme()
	return (
		<View style={styles.activityIndicatorStyle}>
			<ActivityIndicator color={colors.primary} size="large" />
		</View>
	);
};

const styles = StyleSheet.create({
	activityIndicatorStyle: {
		flex: 1,
		position: 'absolute',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
	},
});

export default ActivityIndicatorElement;
