import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StandardInput from '../inputs/standardInput';
import { useTheme } from '@react-navigation/native';

const Accordion = ({ title, ProductAllergens, style, noTopBorder, onChangeText }: any) => {
    const [open, setOpen] = useState(false);
    const [ search, setSearch ] = React.useState('')
    const { colors } = useTheme()
	const animatedController = useRef(new Animated.Value(0)).current;
	const [bodySectionHeight, setBodySectionHeight] = useState(0);

	const bodyHeight = animatedController.interpolate({
		inputRange: [0, 1],
		outputRange: [0, bodySectionHeight],
	});

	const arrowAngle = animatedController.interpolate({
		inputRange: [0, 1],
		outputRange: ['0rad', `${Math.PI}rad`],
	});

	const toggleListItem = () => {
		if (open) {
			Animated.timing(animatedController, {
				duration: 300,
				toValue: 0,
				useNativeDriver: false,
			}).start();
		} else {
			Animated.timing(animatedController, {
				duration: 300,
				toValue: 1,
				useNativeDriver: false,
			}).start();
		}
		setOpen(!open);
    };
    
	return (
		<View style={[style, { borderBottomWidth: 0.5, borderBottomColor: '#C8C7CC', marginHorizontal: 10 }]}>
			<TouchableWithoutFeedback onPress={() => toggleListItem()}>
				<View style={styles.titleContainer}>
                    {!open ?
                    <FontAwesome 
                        name={'search'} 
                        color={colors.text}
                        size={23} 
                        style={styles.icon} />
                        :
                        <FontAwesome 
                        name={'close'} 
                        color={colors.text}
                        size={23} 
                        style={styles.icon} />
                    }
				</View>
			</TouchableWithoutFeedback>

			<Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
				<View
					style={styles.bodyContainer}
					onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}
				>
                    <StandardInput onChangeText={onChangeText} icon={'search'} placeholder={'Please enter your name'} />
				</View>
			</Animated.View>

		</View>
	);
};

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        alignItems: 'flex-end',
        // borderBottomWidth: 0.5, 
        // borderBottomColor: '#C8C7CC', 
        paddingBottom: 10,
	},
	bodyBackground: {
		overflow: 'hidden',
	},
	bodyContainer: {
		position: 'absolute',
        // bottom: 0,
        width: '100%'
    },
    icon: {
        alignSelf: 'flex-end',
        paddingRight: 10
    }
});

export default Accordion;
