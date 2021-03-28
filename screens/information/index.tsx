import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TimeItem from '../../components/schedule/timeItem';
import * as SecureStore from 'expo-secure-store';
import { Get_Information, Get_Shedule } from '../../functions/api'


const InformationScreen = ({ navigation }: any) => {
    const { colors } = useTheme()

    const [ info, setInfo ] = React.useState([]);
    const [ shedule, setShedule ] = React.useState([]);
    const [ Name, setName ]: any = React.useState('')
    const title = `Welcome ${Name}.`;
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

    const getLocalData = async () => {
		let result: any = await SecureStore.getItemAsync('userDetails');
		result = JSON.parse(result);
		if (result) setName(result.username);
	};

    React.useEffect(() => {
        getInformation()
        getLocalData()
    }, [])


    
	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
                <View style={{ flexDirection: 'row'}} >
                    <BoldText style={styles.title}>Welcome </BoldText>
                    <BoldText color={colors.primary} >{Name}.</BoldText>
                </View>

                <View style={styles.aboutWrapper}>
                    {info.map((item: any) => {
                        return <MediumText fontSize={20} key={item.id} center>{item.description}</MediumText>
                    })}
                    
                </View>

                {shedule.length ? <View style={styles.scheduleWrapper}>
                    <BoldText center style={styles.header}>Schedule</BoldText>
                    {shedule.map((item: any) => {
                        return <TimeItem key={item.id} time={item.time} item={item.item} />
                    })}
                </View>: null}
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