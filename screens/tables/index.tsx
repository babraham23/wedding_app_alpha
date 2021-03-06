import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TableItem from '../../components/table/tableItem';
import StandardInput from '../../components/inputs/standardInput';
import SeperatorAccordion from '../../components/accordions/seperatorAccordion';
import { Get_Seating } from '../../functions/api';
import TableCard from '../../components/table/tableCard';


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

    React.useEffect(() => {
		getSeating();
	}, []);

	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
				<BoldText style={styles.title}>{title}</BoldText>

                {filteredData.length ? 
                <>
				<SeperatorAccordion onChangeText={searchData} />
				{filteredData.map((item: any) => {
					return <TableItem tableNo={item.tableNo} guests={item.guests} key={item.id} />;
				})}
				<View style={{ height: 60 }} />
                </>
                : 
                <BoldText fontSize={20} style={{ paddingTop: 40 }} center>Seating TBD</BoldText>
                }

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
