import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';


export const BoldText = ({ style, children, color, fontSize, center }: any) => {
    const { colors }: any = useTheme()
    const styles = StyleSheet.create({
        BoldText: { 
            fontFamily: 'Bold', 
            color: color ? color : colors.text,
            fontSize: fontSize ? fontSize : 30,
            textAlign: center ? 'center' : 'left'
        }
    })
    return <Text style={[style, styles.BoldText]} >{children}</Text>
}

export const MediumText = ({ style, children, color, fontSize, center }: any) => {
    const { colors }: any = useTheme()
    const styles = StyleSheet.create({
        MediumText: { 
            fontFamily: 'Regular', 
            color: color ? color : colors.text,
            fontSize: fontSize ? fontSize : 16,
            textAlign: center ? 'center' : 'left'
        }
    })
    return <Text style={[style, styles.MediumText]} >{children}</Text>
}

export const LightText = ({ style, children, color, fontSize, numberOfLines }: any) => {
    const { colors }: any = useTheme()
    const styles = StyleSheet.create({
        LightText: { 
            fontFamily: 'Light', 
            color: color ? color : colors.text,
            fontSize: fontSize ? fontSize : 16,
        }
    })
    return <Text numberOfLines={numberOfLines} style={[style, styles.LightText]} >{children}</Text>
}

export const Separator = ({ style, color }: any) => {
    const { colors }: any = useTheme()
	return <View style={[style, { borderBottomWidth: 0.5, borderBottomColor: color ? color : colors.separator, marginBottom: 20, marginTop: 7 }]} />;
}