import React from 'react';
import { View, Text, TextInput, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';


const BigSecureInput = ({ 
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
}: any) => {
    const [ state, setState ] = React.useState({ secureTextEntry: true });
    const { colors }: any = useTheme();
    return (
            <View style={[style, styles.container]}>
			<BoldText fontSize={20} style={styles.title} >{title}</BoldText>
            <View style={[styles.inputWrapper, { borderBottomColor: colors.seperator }]}>
                <TextInput 
                    secureTextEntry={state.secureTextEntry ? true : false}
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
                <TouchableOpacity
                    onPress={() => setState({ ...state, secureTextEntry: !state.secureTextEntry })}
                >
                    {state.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color={colors.text}
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color={colors.text}
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            {errors ? (
				<Animatable.View animation="fadeInLeft" duration={500}>
					<Text style={styles.errorMsg}>{errors}</Text>
				</Animatable.View>
			) : (
				<View style={styles.paddingView} />
			)}
        </View>
    )
}

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
        fontSize: 20,
        fontFamily: 'Medium', 
	},
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      paddingView: {
        height: 16,
        backgroundColor: 'transparent'
	},
})

export default BigSecureInput