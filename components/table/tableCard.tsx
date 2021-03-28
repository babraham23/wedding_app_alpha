import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';
import PersonItem from './personItem';

const TableCard = ({ tableNo, style, seat1, seat2, seat3, seat4, seat5, seat6, seat7, seat8 }: any) => {
	const { colors } = useTheme();
	return (
		<View style={[style, styles.cardWrapper]}>
			<BoldText color={colors.primary} style={[styles.title]} >Table {tableNo}</BoldText>
			<View style={[styles.container, { backgroundColor: colors.card }]}>
				<View style={styles.wrapper}>
                    {seat1 ? <PersonItem  guest={seat1} /> : null}
                    {seat2 ? <PersonItem  guest={seat2} /> : null}
                    {seat3 ? <PersonItem  guest={seat3} /> : null}
                    {seat4 ? <PersonItem  guest={seat4} /> : null}
                    {seat5 ? <PersonItem  guest={seat5} /> : null}
                    {seat6 ? <PersonItem  guest={seat6} /> : null}
                    {seat7 ? <PersonItem  guest={seat7} /> : null}
                    {seat8 ? <PersonItem  guest={seat8} /> : null}
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
		paddingVertical: 10,
	},
    title: {
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 10
    }
});

export default TableCard;
