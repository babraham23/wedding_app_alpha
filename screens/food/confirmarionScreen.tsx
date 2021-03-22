import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HomeButton from '../../components/buttons/homeButton'
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TimeItem from '../../components/schedule/timeItem';
import StandardButton from '../../components/buttons/standardButton';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER } from '../../state/reducers/userReducer';
import { Get_Information, Get_Shedule, Get_Foods, Get_Seating } from '../../functions/api';
import Logo from '../../components/logo'


const ConfirmationScreen = ({ navigation }: any) => {
    const { colors } = useTheme()
    const dispatch = useDispatch()
    const userInfo: any = useSelector((state: any) => state.userReducer)
    const title = `Welcome ${userInfo.username}.`;
	return (
		<ScrollView bounces={false} style={styles.container} >
                <HomeButton />
                <View style={{ flexDirection: 'row'}} >
                    <BoldText style={styles.title}>Thank you </BoldText>
                    <BoldText color={colors.primary} >{userInfo.username}.</BoldText>
                </View>
                {/* <Separator /> */}
                    <MediumText fontSize={20} center style={styles.header}>Your order has been placed</MediumText>

                <View>
                    <Logo style={{ alignSelf: 'center', marginTop: 80 }} />
                </View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        paddingTop: 80,
        padding: 20
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
        // paddingLeft: 20,
        paddingBottom: 10
    }
});

export default ConfirmationScreen