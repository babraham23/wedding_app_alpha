import React from 'react';
import { View, Text, TextInput, Platform, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const SearchInput = ({
	style,
	title,
	icon,
	placeholder,
	autoCapitalize,
	onChangeText,
	onEndEditing,
	autoCorrect,
	keyboardType,
	spellCheck,
	showIcon,
	errors,
}:any) => {
    const { colors }: any = useTheme();
	return (
		<View style={[style, styles.container ]}>
			<Text style={[styles.title, {color: colors.border}]}>{title}</Text>
			<View style={[styles.action, { borderBottomColor: colors.text }]}>
                
                <View style={[styles.iconWrapper, { borderColor: colors.text }]}>
                    <FontAwesome 
                        name={icon} 
                        color={colors.text}
                        size={23} 
                        style={styles.icon} />
                </View>

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
				{/* {showIcon ? (
					<Animatable.View animation="bounceIn">
						<Feather name="check-circle" color="green" size={20} />
					</Animatable.View>
				) : null} */}
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
        width: '100%'
    },
	title: {
		fontSize: 18,
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		// borderBottomWidth: 1,
        // paddingBottom: 5,
    },
    iconWrapper: {
		borderRightWidth: 1,
        paddingLeft: 5,
        paddingRight: 10
    },
    icon: { 
        // paddingBottom: 5, 
        // paddingRight: 5, 
        // borderRightWidth:1, 
    },
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		// borderBottomWidth: 1,
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		// marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        fontSize: 16,
        fontFamily: 'Medium', 
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
		height: 16,
	},
	paddingView: {
        height: 8,
        backgroundColor: 'transparent'
	},
});

export default SearchInput;
