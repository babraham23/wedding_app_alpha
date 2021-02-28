import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';
import PersonItem from './personItem';

const TableItem = ({ style, tableNo, guest }: any) => {
	const { colors } = useTheme();
	return (
        <View style={[style, styles.cardWrapper]}>
            <View style={[styles.container, { backgroundColor: colors.card }]}>
                <BoldText>Table {tableNo}:</BoldText>
                <View style={styles.wrapper}>
                    <PersonItem guest={guest} />
                </View>
		    </View>
        </View>
	);
};

const styles = StyleSheet.create({
    cardWrapper: {
        marginTop: 20,
		height: 280,
    },
	container: {
		flex: 1,
		height: 280,
		width: '100%',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0.5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 0.2,
        // elevation: 9,
        padding: 20
	},
	wrapper: {
		paddingTop: 10,
	},
});

export default TableItem;
