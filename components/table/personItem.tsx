import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText } from '../../style/typography';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';

const PersonItem = ({ style, guest }: any) => {
	const { colors } = useTheme();
	return (
		<View style={styles.wrapper}>
			<FontAwesome name={'cards-diamond-outline'} color={colors.text} size={15} style={styles.icon} />
			<MediumText>{guest}</MediumText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 280,
		width: '100%',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
		elevation: 9,
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontFamily: 'regular',
	},
	wrapper: {
		paddingTop: 5,
		flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 20,
	},
	titleBold: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	icon: {
		paddingBottom: 5,
		paddingRight: 5,
		borderRightWidth: 1,
	},
});

export default PersonItem;
