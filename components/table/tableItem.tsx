import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';
import PersonItem from './personItem';

const TableItem = ({ tableNo, guests, style }: any) => {
	const { colors } = useTheme();
	return (
		<View style={[style, styles.cardWrapper]}>
			<BoldText color={colors.primary} style={[styles.title]} >Table {tableNo}</BoldText>
			<View style={[styles.container, { backgroundColor: colors.card }]}>
				<View style={styles.wrapper}>
                    {guests.map((item: any) => {
                        return <PersonItem key={item.id} guest={item.fullName} />
                    })}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardWrapper: {
		// marginTop: 20,
		minHeight: 250,
	},
	container: {
		flex: 1,
		// height: 280,
		width: '100%',
		borderRadius: 10,
		// shadowColor: '#000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 0.5,
		// },
		// shadowOpacity: 0.2,
		// shadowRadius: 0.2,
		// elevation: 9,
		// padding: 20
	},
	wrapper: {
		paddingTop: 10,
	},
    title: {
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 10
    }
});

export default TableItem;
