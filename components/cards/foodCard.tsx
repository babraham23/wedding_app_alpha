import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LightText, BoldText } from '../../style/typography';
import FoodCheckBox from '../checkbox/foodCheckBox';

const FoodCard = ({ style, title }: any) => {
    const { colors }: any = useTheme();
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad consectetur adipiscing elit';
	return (
		<View style={style}>
            <View style={styles.titleWrapper} >
            <BoldText>{title}</BoldText>
            </View>
			<View style={[styles.card, { backgroundColor: colors.card }]}>
                <FoodCheckBox option={1} description={description} onChangeCheck={(option: number) => console.log(option)} />
                <FoodCheckBox option={2} description={description} />
                <LightText style={styles.description}>{description}</LightText>
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
		shadowOpacity: 0.32,
		shadowRadius: 5.46,
        elevation: 9,
        marginTop: 20,
        padding: 20
    },
    description: {
        paddingTop: 20
    }
});

export default FoodCard;
