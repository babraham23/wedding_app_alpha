import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LightText, BoldText } from '../../style/typography';
// import FoodCheckBox from '../checkbox/foodCheckBox';
import FoodCheckBoxes from '../checkbox/foodCheckBoxes';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const FoodCard = ({ style, title, food_courses, foodType }: any) => {
	// console.log('food_courses -->', food_courses)
	const { colors }: any = useTheme();
    const [check, toggleCheck] = React.useState(false);
	const handleCheck = () => {
		toggleCheck(!check)
    }
	return (
		<View style={style}>
			<View style={styles.titleWrapper}>
				<BoldText color={colors.primary} >{title}</BoldText>
			</View>
			<View style={[styles.card, { backgroundColor: colors.card }]}>


			{/* <View style={[style, styles.container]}>
				{food_courses.map((item: any) => {
                    return (
					<View key={item.id} style={[styles.wrapper]}>
						<TouchableOpacity
							onPress={() => handleCheck()}
							activeOpacity={0.5}
							style={[styles.checkboxWrapper]}
						>
							<View style={[styles.check, { backgroundColor: colors.background }]}>
								{check ? (
									<Animatable.View animation={'bounceIn'} style={[style]}>
										<Feather name={'check'} color={colors.text} size={40} />
									</Animatable.View>
								) : null}
							</View>
						</TouchableOpacity>

						<View style={styles.contentWrapper}>
							<BoldText fontSize={20}>Option {item.option}</BoldText>
							<Text style={[styles.description, { color: colors.text }]}>{item.description}</Text>
						</View>
					</View>)
				})}
			</View> */}


                <FoodCheckBoxes food_courses={food_courses} />

	
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	titleWrapper: {
		marginLeft: 10,
		marginTop: 40,
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
    container: {
		marginVertical: 20,
	},
	wrapper: {
		width: '100%',
		// height: 66,
		flexDirection: 'row',
		// borderWidth: 1.5,
        marginBottom: 20
	},
	contentWrapper: {
		width: '80%',
	},
	description: {
		marginTop: 5,
		fontFamily: 'Bold',
		fontSize: 16,
		lineHeight: 20,
		// textAlign: 'center'
	},
	text: {
		fontFamily: 'HELVETICA',
		fontSize: 20,
		paddingLeft: 10,
	},
	bold: {
		fontFamily: 'HELVETICA_BOLD',
		fontSize: 18,
		paddingLeft: 10,
		textDecorationLine: 'underline',
	},
	checkboxWrapper: {
		width: '20%',
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	check: {
		height: 50,
		width: 50,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
	},
});

export default FoodCard;


			// {/* {food_courses.map((item: any) => {
			// 		return (
			// 			<FoodCheckBoxes
			// 				key={item.id}
			// 				option={1}
			// 				description={item.description}
			// 				onChangeCheck={(option: number) => console.log(item)}
			// 			/>
			// 		);
			// 	})} */


// {food_courses.map((item: any) => {
//     console.log('item -->', item)
//     switch (foodType) {
//         case 'Starters':
//             return (
//                 <FoodCheckBox
//                     key={item.id}
//                     option={1}
//                     description={item.description}
//                     onChangeCheck={(option: number) => console.log(item)}
//                 />
//             );
//         case 'Mains':
//             return (
//                 <FoodCheckBox
//                     key={item.id}
//                     option={1}
//                     description={item.description}
//                     onChangeCheck={(option: number) => console.log(item)}
//                 />
//             );
//         case 'Desserts':
//             return (
//                 <FoodCheckBox
//                     key={item.id}
//                     option={1}
//                     description={item.description}
//                     onChangeCheck={(option: number) => console.log(item)}
//                 />
//             );
//         default:
//             return (
//                 <FoodCheckBox
//                     key={item.id}
//                     option={1}
//                     description={item.description}
//                     onChangeCheck={(option: number) => console.log(item)}
//                 />
//             );
//     }
// })