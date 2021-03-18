import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LightText, BoldText } from '../../style/typography';
import FoodCheckBox from '../checkbox/foodCheckBox';

const FoodCard = ({ style, title, food_courses }: any) => {
    console.log('food_courses -->', food_courses)
    const { colors }: any = useTheme();
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad consectetur adipiscing elit';
	return (
		<View style={style}>
            <View style={styles.titleWrapper} >
            <BoldText  >{title}</BoldText>
            </View>
			<View style={[styles.card, { backgroundColor: colors.card }]}>
                {food_courses.map((item: any) => {
                    return <FoodCheckBox key={item.id} option={1} description={item.description} onChangeCheck={(option: number) => console.log(item)} />
                })}
                {/* <LightText style={styles.description}>{description}</LightText> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    titleWrapper: {
        marginLeft: 10,
        marginTop: 40
    },
	card: {
		minHeight: 150,
		width: '100%',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 5.46,
        elevation: 9,
        marginTop: 10,
        padding: 10,
    },
    description: {
        paddingTop: 20
    }
});

export default FoodCard;
