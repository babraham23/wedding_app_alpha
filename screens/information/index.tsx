import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TimeItem from '../../components/schedule/timeItem';
import StandardButton from '../../components/buttons/standardButton';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER } from '../../state/reducers/userReducer';
import { Get_Information, Get_Shedule, Get_Foods, Get_Seating } from '../../functions/api'


const InformationScreen = ({ navigation }: any) => {
    const { colors } = useTheme()
    const dispatch = useDispatch()
    const userInfo: any = useSelector((state: any) => state.userReducer)
    // console.log('userInfo -->', userInfo)
    // const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad';
    const title = `Welcome ${userInfo.username}.`;
    const [ info, setInfo ] = React.useState([]);
    const [ shedule, setShedule ] = React.useState([]);
    const [ Name, setName ]: any = React.useState('')
    const getInformation = () => {
        Get_Information()
        .then(res => {
            setInfo(res.data)
        })
        .catch(err => alert(err))
        Get_Shedule()
        .then(res => {
            setShedule(res.data)
        })
        .catch(err => alert(err))
    }

    // const getLocalData = async () => {
	// 	let result: any = await SecureStore.getItemAsync('userDetails');
	// 	result = JSON.parse(result);
	// 	if (result) setName(result.username);
	// };

    // const getFood = () => {
    //     Get_Seating()
    //     .then(res => {
    //         // setInfo(res.data)
    //         console.log('food -->', res.data)
    //     })
    //     .catch(err => alert(err))
    // }

    

    // const signOut = async () => {
    //     dispatch({ type: SET_USER, payload: {} })
    //     await SecureStore.setItemAsync('token', '')
    //     navigation.navigate('SplashScreen')
    // }

    React.useEffect(() => {
        getInformation()
        // getLocalData()
    }, [])


    
	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
                <View style={{ flexDirection: 'row'}} >
                    <BoldText style={styles.title}>Welcome </BoldText>
                    <BoldText color={colors.primary} >{userInfo.username}.</BoldText>
                </View>
                {/* <Separator /> */}

                <View style={styles.aboutWrapper}>
                    {info.map((item: any) => {
                        return <MediumText key={item.id} center>{item.description}</MediumText>
                    })}
                    
                </View>

                <View style={styles.scheduleWrapper}>
                    <BoldText center style={styles.header}>Schedule</BoldText>
                    {shedule.map((item: any) => {
                        return <TimeItem key={item.id} time={item.time} item={item.item} />
                    })}
                </View>
                {/* <StandardButton title={'getFood'} onPress={() => getFood()} /> */}
                {/* <StandardButton title={'Sign Out'} onPress={() => signOut()} /> */}
			</View>
		</ScrollContextProvider>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        paddingTop: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    scheduleWrapper: {
        paddingTop: 20,
    },
    aboutWrapper: {
        paddingTop: 30,
        paddingHorizontal: 10
    },
    header: {
        paddingTop: 30,
        // paddingBottom: 10
    },
    title: {
        paddingLeft: 20,
        paddingBottom: 10
    }
});

export default InformationScreen