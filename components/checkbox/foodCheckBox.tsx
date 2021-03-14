import React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { MediumText, BoldText, Separator } from '../../style/typography';

const FoodCheckBox = ({ style, option, onChangeCheck, description}: any) => {
	const { colors } = useTheme();
	const [check, toggleCheck] = React.useState(false);
	const handleCheck = () => {
		toggleCheck(!check);
		onChangeCheck(option);
	};
	return (
		<View style={[style, styles.container]}>
			<View style={[styles.wrapper]}>
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
					<BoldText fontSize={23}>Option {option}</BoldText>
                    <MediumText style={styles.description}>{description}</MediumText>
				</View>

			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
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
        marginTop: 5
    },
	text: {
		fontFamily: 'HELVETICA',
		fontSize: 18,
		paddingLeft: 10,
    },
    bold: {
		fontFamily: 'HELVETICA_BOLD',
		fontSize: 18,
        paddingLeft: 10,
        textDecorationLine: 'underline'
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

export default FoodCheckBox;
