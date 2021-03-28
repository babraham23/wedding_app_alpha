import * as React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TableItem from '../../components/table/tableItem';
import StandardInput from '../../components/inputs/standardInput';
import SeperatorAccordion from '../../components/accordions/seperatorAccordion';
import { Get_Seating } from '../../functions/api';
import TableCard from '../../components/table/tableCard';

/**
 * @param
 * Time
 * Description
 */

const tableData = [
	{
		tableNo: 1,
		seat1: 'Brett Abraham',
		seat2: 'Brett Abraham',
		seat3: 'Brett Abraham',
		seat4: 'Brett Abraham',
		seat5: 'Brett Abraham',
		seat6: 'Brett Abraham',
		seat7: 'Brett Abraham',
		seat8: 'Brett Abraham',
	},
	{
		tableNo: 2,
		seat1: 'Brett Abraham',
		seat2: 'Brett Abraham',
		seat3: 'Brett Abraham',
		seat4: 'Brett Abraham',
		seat5: 'Brett Abraham',
		seat6: 'Brett Abraham',
	},
	{
		tableNo: 3,
		seat1: 'Brett Abraham',
		seat2: 'Brett Abraham',
		seat3: 'Emily Robinson',
		seat4: 'Brett Abraham',
		seat5: 'Brett Abraham',
		seat6: 'Brett Abraham',
		seat7: 'Brett Abraham',
		seat8: 'Brett Abraham',
	},
];

var categoryGroups = [
	{
		Id: 1,
		Categories: [{ Id: 1 }, { Id: 2 }],
	},
	{
		Id: 2,
		Categories: [{ Id: 100 }, { Id: 200 }],
	},
];

//  const guests = [
//      { Id: 1, Guest: 'Emily Robinson' },
//      { Id: 2, Guest: 'Emma Watson' },
//      { Id: 3, Guest: 'Brett Abraham' },
//  ]

const TableScreen = ({ navigation }: any) => {
	const { colors } = useTheme();
	const [filteredData, setFilteredData] = React.useState([]);
	const [tables, setTables] = React.useState([]);
	const title = 'Seating Arrangement';

	const getSeating = () => {
		Get_Seating()
			.then((res) => {
				setTables(res.data);
				setFilteredData(res.data);
			})
			.catch((err) => alert(err));
	};

	React.useEffect(() => {
		getSeating();
	}, []);

	// const searchData = (text: any) => {
	// 	const FILTERED_DATA = tableData.filter((item: any) => {
	// 		const itemData = item.guests.toLowerCase();
	// 		return itemData.indexOf(text.toLowerCase()) > -1;
	// 	});
	//     console.log(FILTERED_DATA)
	//     setFilteredData(FILTERED_DATA)
	// };

	const searchData = (text: any) => {
		// const FILTERED_DATA = tables.flatMap((item: any) => item.guests).find((user: any) => user.fullName === text);

        const FILTERED_DATA = tables.filter((item: any) => {
            console.log(item)
        })
        

        // const FILTERED_DATA = tables.filter((item: any) => {
		//     const itemData = item.guests.filter((guest: any) => {
		//         guest.fullName.toLowerCase();
		//         console.log('itemData -->', itemData)
		//         return itemData.indexOf(text.toLowerCase()) > -1;
		//     })
		// });
		// setFilteredData(FILTERED_DATA);
	};

	// console.log('Tables -->', filteredData)

	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
				<BoldText style={styles.title}>{title}</BoldText>
				<SeperatorAccordion onChangeText={searchData} />

				{/* {tableData.map((item: any, i: any) => {
                    return <TableCard 
                        tableNo={item.tableNo} 
                        guests={item.guests}
                        seat1={item.seat1}
                        seat2={item.seat2}
                        seat3={item.seat3}
                        seat4={item.seat4}
                        seat5={item.seat5}
                        seat6={item.seat6}
                        seat7={item.seat7}
                        seat8={item.seat8}
                        key={i}  
                        />
                })} */}

				{filteredData.map((item: any) => {
					return <TableItem tableNo={item.tableNo} guests={item.guests} key={item.id} />;
				})}
				<View style={{ height: 60 }} />



                
			</View>
		</ScrollContextProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	tableWrapper: {
		paddingTop: 20,
	},
	title: {
		marginLeft: 20,
	},
	timeWrapper: {
		paddingTop: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
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

export default TableScreen;
