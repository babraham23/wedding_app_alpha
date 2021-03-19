import React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { MediumText, BoldText, Separator } from '../../style/typography';

// option1 box
// option2 box

const FoodCheckBoxes = ({ style, option, onChangeCheck, description, food_courses }: any) => {
    console.log('checkbox -->', food_courses)
	const { colors } = useTheme();
	const [check1, toggleCheck1] = React.useState(false);
	const [check2, toggleCheck2] = React.useState(false);
	const handleCheck = (option: number) => {
		if (option == 1) {
			toggleCheck1(true);
			toggleCheck2(false);
		} else if (option == 2) {
			toggleCheck1(false);
			toggleCheck2(true);
		}

		const handleCheck = () => {
			if (check1) toggleCheck2(false);
			else if (check2) toggleCheck1(false);
		};
		// onChangeCheck(option);
	};
	return (
		<>
			<View style={[style, styles.container]}>
				<View style={[styles.wrapper]}>
					<TouchableOpacity
						onPress={() => handleCheck(1)}
						activeOpacity={0.5}
						style={[styles.checkboxWrapper]}
					>
						<View style={[styles.check, { backgroundColor: colors.background }]}>
							{check1 ? (
								<Animatable.View animation={'bounceIn'} style={[style]}>
									<Feather name={'check'} color={colors.text} size={40} />
								</Animatable.View>
							) : null}
						</View>
					</TouchableOpacity>

					<View style={styles.contentWrapper}>
						<BoldText fontSize={20}>Option 1</BoldText>
						<Text style={[styles.description, { color: colors.text }]}>description 1</Text>
					</View>
				</View>
				<View style={[style, styles.container]}>
					<View style={[styles.wrapper]}>
						<TouchableOpacity
							onPress={() => handleCheck(2)}
							activeOpacity={0.5}
							style={[styles.checkboxWrapper]}
						>
							<View style={[styles.check, { backgroundColor: colors.background }]}>
								{check2 ? (
									<Animatable.View animation={'bounceIn'} style={[style]}>
										<Feather name={'check'} color={colors.text} size={40} />
									</Animatable.View>
								) : null}
							</View>
						</TouchableOpacity>

						<View style={styles.contentWrapper}>
							<BoldText fontSize={20}>Option 2</BoldText>
							<Text style={[styles.description, { color: colors.text }]}>description2</Text>
						</View>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	wrapper: {
		width: '100%',
		// height: 66,
		flexDirection: 'row',
		// borderWidth: 1.5,
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

export default FoodCheckBoxes;
