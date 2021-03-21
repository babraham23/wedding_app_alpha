import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const HomeButton = ({ label, onPress, style }: any) => {
    const { border, colors }: any = useTheme()
    const navigation = useNavigation()
	return (
		<View style={[style, styles.container]}>
			<TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('HomeScreen')}>
				{/* <Text style={styles.label}>{label}</Text> */}
                <Ionicons size={30} style={{ marginBottom: -3 }} name={'ios-home'} color={colors.primary}  />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
        paddingLeft: 20,
        paddingBottom: 40
		// justifyContent: 'center',
		// height: 25,
		// minWidth: 50,
        // marginLeft: 5,
        // marginRight: 15,
        // paddingHorizontal: 15,
        // marginVertical: 10,
        // alignContent: 'center'
	},
	label: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Bold',
		alignSelf: 'center',
	},
});
export default HomeButton;
