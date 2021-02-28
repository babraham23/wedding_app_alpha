import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Location = () => {
	const { colors }: any = useTheme();
	return (
		<View style={styles.container}>
            <Ionicons size={30} style={{ marginBottom: -3 }} name={'md-location-outline'} color={colors.text}  />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: 'green',
        minHeight: 20
		// alignItems: 'center',
		// justifyContent: 'center',
		// paddingTop: 50,
	},
});

export default Location;
