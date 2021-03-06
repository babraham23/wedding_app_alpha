import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';
import { MediumText, BoldText, Separator } from '../../style/typography';
import { useTheme } from '@react-navigation/native';


const TimeItem = ({ style, time, item }: any) => {
	const { colors } = useTheme();
	return (
		<View style={[style]}>
			<View style={styles.timeWrapper}>
				<FontAwesome name={'cards-diamond-outline'} color={colors.primary} size={17} style={styles.icon} />
				<MediumText fontSize={20}>{time}: </MediumText>
				<MediumText fontSize={20}>{item}</MediumText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    timeWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 7
	},
	icon: {
		paddingBottom: 5,
		paddingRight: 5,
		borderRightWidth: 1,
	},
});

export default TimeItem;
