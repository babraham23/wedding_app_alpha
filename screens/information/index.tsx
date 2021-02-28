import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TimeItem from '../../components/schedule/timeItem';


const InformationScreen = ({ navigation }: any) => {
    const { colors } = useTheme()
    const title = 'About the Day';
    // const title2 = '  the Day';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad';
	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
                <BoldText style={styles.title}>{title}</BoldText>
                {/* <Separator /> */}

                <View style={styles.aboutWrapper}>
                    {/* <BoldText style={styles.header} center>Information</BoldText> */}
                    <MediumText center>{description}</MediumText>
                </View>

                <View style={styles.scheduleWrapper}>
                    <BoldText center style={styles.header} >Schedule</BoldText>
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                </View>

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