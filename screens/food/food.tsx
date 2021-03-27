import * as React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { BoldText, MediumText } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import FoodCard from '../../components/cards/foodCard'
import StandardButton from  '../../components/buttons/standardButton';
import { Get_Foods, Post_Orders } from '../../functions/api'
import { ValidateFoodChoices } from '../../functions/validators'
import * as SecureStore from 'expo-secure-store';
import ActivityIndicatorElement from '../../components/activityIndicator';
import { SET_HAS_ORDERED } from '../../state/reducers/foodReducer';


const FoodScreen = ({ navigation }: any) => {
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const title = 'Food Selection';
    // const description = "Please select an option for each meal"
    const description = "Please note: If you are selecting a vegan or gluten free option please ensure this is consistent throughout all courses. For example, if selecting a vegan main, you must also chose a vegan starter and dessert."
    const [ foodData, setFoodData ] = React.useState([])
    const [ starter, setStarter ] = React.useState("");
    const [ main, setMain ] = React.useState("");
    const [ dessert, setDessert ] = React.useState("");
    const [ loading, setLoading ] = React.useState(false)
    const userInfo: any = useSelector((state: any) => state.userReducer)

    const getFood = () => {
        Get_Foods()
        .then(res => {
            // console.log('res -->', res.data)
            setFoodData(res.data)
        })
        .catch(err => alert(err))
    }

    const handleOption = (type:any, option: any) => {
            if (type == "Starter") setStarter(option)
            if (type == 'Main') setMain(option)
            if (type == 'Dessert') setDessert(option)
    }

    const handleValidation = () => {
        // navigation.navigate()
        const choices = {
            starter,
            main,
            dessert,
            guest: userInfo.username
        }
        const ValidateStep = ValidateFoodChoices(choices);
		if (ValidateStep.valid) {
			showAlert()
		} else {
            alert('Please select an option for each meal')
		}
    }

    const postOrders = async () => {
        const choices = {
            starter,
            main,
            dessert,
            guest: userInfo.username
        }
        setLoading(true)
        Post_Orders(choices)
        .then(res => {
            storeOrderPlaced()
            dispatch({ type: SET_HAS_ORDERED, payload: true })
            navigation.navigate('ConfirmationScreen')
            // setFoodData(res.data)
        })
        .catch(err => alert(err))
        setLoading(false)
    }

    const storeOrderPlaced = async () => {
        await SecureStore.setItemAsync('orderPlaced', 'orderPlaced');
    }

    React.useEffect(() => {
        getFood()
    }, [])

    const showAlert = () => {
        Alert.alert(
            'Confirm Selection?',
            'Once your options have been submitted they cannot be changed.',
            [
                {
                    text: 'Yes',
                    onPress: (() => postOrders()),
                    // style: 'cancel',
                },
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                },
            ],
        );
    }  


	return (
		<ScrollContextProvider title={title}>
            {loading ? <ActivityIndicatorElement /> : null}
			<View style={styles.container}>

                <View style={styles.aboutWrapper}>
                    <BoldText fontSize={20} style={{ paddingHorizontal: 20 }} center>{description}</BoldText>
                </View>

                {foodData.map((item: any, i: any) => {
                    return <FoodCard title={item.title} key={item.id} options={item.meals} handleOption={(option: any) => handleOption(item.title, option)} />
                })}
                
                <StandardButton onPress={() => handleValidation()} style={styles.button} title={'Submit'} />

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