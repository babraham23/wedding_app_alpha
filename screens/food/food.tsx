import * as React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText, MediumText } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import FoodCard from '../../components/cards/foodCard'
import StandardButton from  '../../components/buttons/standardButton';
import { Get_Information, Get_Shedule, Get_Foods } from '../../functions/api'


const FoodScreen = ({ navigation }: any) => {
    const { colors } = useTheme()
    const title = 'Food Selection';
    const description = "Please select an item for each meal"
    const [ foodData, setFoodData ] = React.useState([])
    const handleNav = (route: string) => {
        navigation.navigate(route)
    }
    const getFood = () => {
        Get_Foods()
        .then(res => {
            setFoodData(res.data)
        })
        .catch(err => alert(err))
    }
    React.useEffect(() => {
        getFood()
    }, [])
	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
                {/* <BoldText style={styles.title}>{title}</BoldText> */}
                {/* <Separator /> */}

                <View style={styles.aboutWrapper}>
                    {/* <BoldText style={styles.header} center>Information</BoldText> */}
                    <BoldText fontSize={20} style={{ paddingHorizontal: 20 }} center>{description}</BoldText>
                </View>
                {foodData.map((item: any) => {
                    return <FoodCard key={item.id} title={item.title} food_courses={item.food_courses} />
                })}
                
                <StandardButton style={styles.button} title={'Submit'} />

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
    aboutWrapper: {
        // paddingTop: 10,
        paddingHorizontal: 10,
    },
    title: {
        paddingLeft: 20,
        paddingBottom: 10
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
    button: {
        marginVertical: 30
    }
});

export default FoodScreen