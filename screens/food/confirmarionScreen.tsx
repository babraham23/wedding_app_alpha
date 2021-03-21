import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TimeItem from '../../components/schedule/timeItem';
import Carousel from '../../components/Carousel';
import FoodSlider from '../../components/foodSlider'
import { statsData, slideData } from '../../components/Carousel/dummyData';
import StandardButton from '../../components/buttons/standardButton';
import {foodData } from '../../components/foodSlider/dummyData';
import {ValidateFoodChoices} from '../../functions/validators'
import {FoodModel} from '../../_models/food.model';

const ConfirmationScreen = ({ navigation }: any) => {
	const { colors } = useTheme();
    const [ { Starter, Main, Dessert }, setState ] = React.useState(new FoodModel())
	const title = 'Food';
    const description = 'Confirmation Screen'
    const handleValidation = () => {
        const data = { Starter, Main, Dessert }
        const ValidateStep = ValidateFoodChoices(data)
        if (ValidateStep.valid) {
            console.log('VALID')
        } else {
            // ValidateStep.errors.map((item: any) => {
            //     setState(prevState => ({ ...prevState, [item.name]: item.error }))
            // })
            console.log('ERROR')
        }
    }
	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
				<BoldText style={styles.title}>{title}</BoldText>
                <Separator style={{ marginHorizontal: 10 }}/>
                <View style={styles.aboutWrapper}>
                    {/* <BoldText style={styles.header} center>Information</BoldText> */}
                    <MediumText center>{description}</MediumText>
                </View>
                {foodData.map((item: any, i: any) => {
                    return <FoodSlider key={i} title={item.title} items={item.options} />
                })}
                <StandardButton style={{ marginTop: 30 }} title={'Select'} onPress={() => handleValidation()} />
			</View>
		</ScrollContextProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
        marginBottom: 50
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	scheduleWrapper: {
		paddingTop: 20,
	},
	aboutWrapper: {
		// paddingTop: 30,
		paddingHorizontal: 10,
	},
	header: {
		paddingTop: 30,
		// paddingBottom: 10
	},
	title: {
		paddingLeft: 20,
		paddingBottom: 10,
	},
});

export default ConfirmationScreen;
