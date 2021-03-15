import React from 'react';
import { View, Text, TextInput, Platform, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';


const BigInput = ({
	style,
	title,
	placeholder,
	autoCapitalize,
	onChangeText,
	onEndEditing,
	autoCorrect,
	keyboardType,
	spellCheck,
    errors
}:any) => {
    const { colors }: any = useTheme();
	return (
		<View style={[style, styles.container ]}>
			<BoldText style={styles.title} >{title}</BoldText>
			<View style={[styles.inputWrapper, { borderBottomColor: colors.seperator }]}>
				<TextInput
					placeholder={placeholder}
					placeholderTextColor="#666666"
					style={[styles.textInput, { color: colors.text }]}
					autoCapitalize={autoCapitalize}
					onChangeText={onChangeText}
					onEndEditing={onEndEditing}
					autoCorrect={autoCorrect}
					keyboardType={keyboardType}
					spellCheck={spellCheck}
					underlineColorAndroid="transparent"
				/>
			</View>
			{errors ? (
				<Animatable.View animation="fadeInLeft" duration={500}>
					<Text style={styles.errorMsg}>{errors}</Text>
				</Animatable.View>
			) : (
				<View style={styles.paddingView} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
	title: {
        paddingTop: 30
	},
	inputWrapper: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 2,
        paddingBottom: 5,
    },
	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        fontSize: 30,
        fontFamily: 'Medium', 
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
		height: 16,
	},
	paddingView: {
        height: 16,
        backgroundColor: 'transparent'
	},
});

export default BigInput;
