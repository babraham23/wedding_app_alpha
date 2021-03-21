import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { LightText, BoldText } from '../../style/typography';
// import FoodCheckBox from '../checkbox/foodCheckBox';
import FoodCheckBoxes from '../checkbox/foodCheckBoxes';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const FoodCard = ({ style, title, handleOption, options }: any) => {
	const { colors }: any = useTheme();
    const [ option1, setOption1 ] = React.useState(false);
    const [ option2, setOption2 ] = React.useState(false);
    const [ option3, setOption3 ] = React.useState(false);
	const handleCheck = (option: any) => {
		if (option == 1) {
            setOption1(true)
            setOption2(false)
            setOption3(false)
            handleOption(1)
        }
        if (option == 2) {
            setOption1(false)
            setOption2(true)
            setOption3(false)
            handleOption(2)
        }
        if (option == 3) {
            setOption1(false)
            setOption2(false)
            setOption3(true)
            handleOption(3)
        }
	};
	return (
		<View style={style}>
			<View style={styles.titleWrapper}>
				<BoldText color={colors.primary}>{title}</BoldText>
			</View>
			<View style={[styles.card, { backgroundColor: colors.card }]}>
				<View style={[style, styles.container]}>
					<View style={[styles.wrapper]}>
						<TouchableOpacity
							onPress={() => handleCheck(1)}
							activeOpacity={0.5}
							style={[styles.checkboxWrapper]}
						>
							<View style={[styles.check, { backgroundColor: colors.background }]}>
								{option1 ? (
									<Animatable.View animation={'bounceIn'} style={[style]}>
										<Feather name={'check'} color={colors.primary} size={40} />
									</Animatable.View>
								) : null}
							</View>
						</TouchableOpacity>

						<View style={styles.contentWrapper}>
							<BoldText fontSize={20}>Option 1</BoldText>
							<Text style={[styles.description, { color: colors.text }]}>{options[0].description}</Text>
						</View>
					</View>
                    <View style={[styles.wrapper]}>
						<TouchableOpacity
							onPress={() => handleCheck(2)}
							activeOpacity={0.5}
							style={[styles.checkboxWrapper]}
						>
							<View style={[styles.check, { backgroundColor: colors.background }]}>
								{option2 ? (
									<Animatable.View animation={'bounceIn'} style={[style]}>
										<Feather name={'check'} color={colors.primary} size={40} />
									</Animatable.View>
								) : null}
							</View>
						</TouchableOpacity>

						<View style={styles.contentWrapper}>
							<BoldText fontSize={20}>Option 2</BoldText>
							<Text style={[styles.description, { color: colors.text }]}>{options[1].description}</Text>
						</View>
					</View>
                    <View style={[styles.wrapper]}>
						<TouchableOpacity
							onPress={() => handleCheck(3)}
							activeOpacity={0.5}
							style={[styles.checkboxWrapper]}
						>
							<View style={[styles.check, { backgroundColor: colors.background }]}>
								{option3 ? (
									<Animatable.View animation={'bounceIn'} style={[style]}>
										<Feather name={'check'} color={colors.primary} size={40} />
									</Animatable.View>
								) : null}
							</View>
						</TouchableOpacity>

						<View style={styles.contentWrapper}>
							<BoldText fontSize={20}>Vegan Option</BoldText>
							<Text style={[styles.description, { color: colors.text }]}>{options[2].description}</Text>
						</View>
					</View>
				</View>
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
		// marginVertical: 10,
	},
	wrapper: {
		width: '100%',
		// height: 66,
		flexDirection: 'row',
		// borderWidth: 1.5,
		marginVertical: 20,
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
		borderRadius: 15,
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
