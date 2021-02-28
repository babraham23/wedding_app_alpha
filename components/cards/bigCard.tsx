import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { BoldText, LightText } from '../../style/typography';


const BigCard = ({ product: { color1, title, description, textColor } }: any) => {
    const { border }: any = useTheme()
	return (
		<View style={styles.container}>
			<View style={[styles.card, { backgroundColor: color1, borderRadius: border.bigCard }]} >
				<BoldText style={styles.title} color={textColor} >{title}</BoldText>
                <LightText style={styles.subtitle} color={textColor} >{description}</LightText>			
            </View>
		</View>
	);
};

const { width } = Dimensions.get('window');
export const CARD_HEIGHT = (width * 1250) / 974;
const styles = StyleSheet.create({
	container: {
		width,
		height: CARD_HEIGHT,
	},
    card: {
        borderRadius: 16,
        margin: 32,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
	title: {
		textAlign: 'center',
		// marginBottom: 16,
        marginTop: 20
	},
	subtitle: {
		fontFamily: 'Light',
		fontSize: 16,
		textAlign: 'center',
		color: '#432406',
	},
});

export default BigCard;
