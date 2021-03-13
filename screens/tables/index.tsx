import * as React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TableItem from '../../components/table/tableItem';
import StandardInput from '../../components/inputs/standardInput';
import SeperatorAccordion from '../../components/accordions/seperatorAccordion'

/**
 * @param
 * Time
 * Description
 */

 const guests = [
     { Id: 1, Guest: 'Emily Robinson' },
     { Id: 2, Guest: 'Emma Watson' },
     { Id: 3, Guest: 'Brett Abraham' },
 ]

const TableScreen = ({ navigation }: any) => {
    const { colors } = useTheme();
    const [ filteredData, setFilteredData ] = React.useState<any>(guests);
    const title = 'Seating Arrangement';
    const searchData = (text: any) => {
		const FILTERED_DATA = guests.filter((item: any) => {
			const itemData = item.Guest.toLowerCase();
			return itemData.indexOf(text.toLowerCase()) > -1;
		});
        setFilteredData(FILTERED_DATA)
	};
	return (
		<ScrollContextProvider headerTitle={title}>
			<View style={styles.container}>
                <BoldText style={styles.title} >{title}</BoldText>
                <SeperatorAccordion onChangeText={searchData} />
                {filteredData.map((item: any) => {
                    return <TableItem tableNo={item.Id} key={item.Id} guest={item.Guest} />
                })}
			</View>
		</ScrollContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        paddingTop: 20
    },
    tableWrapper: {
        paddingTop: 20
    },
	title: {
        marginLeft: 20
    },
    timeWrapper: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        borderRightWidth:1, 
    },
});

export default TableScreen