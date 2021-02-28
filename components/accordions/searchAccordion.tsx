import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../inputs/searchInput';
import { useTheme } from '@react-navigation/native';
import { BoldText } from '../../style/typography';

const SearchAccordion = ({ title, ProductAllergens, style, noTopBorder, onChangeText }: any) => {
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
		<View style={[style]}>

			<TouchableWithoutFeedback onPress={() => toggleListItem()}>
				<View style={styles.titleContainer}>
                <BoldText style={styles.title}>{title}</BoldText>
                    {!open ?
                    <FontAwesome5 
                        name={'question'} 
                        color={colors.text}
                        size={23} 
                        style={styles.icon} />
                        :
                        <FontAwesome 
                        name={'arrow-up'} 
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
                    <SearchInput onChangeText={onChangeText} icon={'search'} placeholder={'Please enter your name'} />
				</View>
			</Animated.View>

		</View>
	);
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        width: '100%',
        alignContent: 'center',

        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
	},
	bodyBackground: {
		overflow: 'hidden',
	},
	bodyContainer: {
		position: 'absolute',
        bottom: 0,
        width: '100%',
        borderBottomWidth: 0.5, 
        borderBottomColor: '#C8C7CC', 
    },
    icon: {
        // alignSelf: 'flex-end',
        // paddingRight: 10
    },
    title: {
        // marginTop: 40
    }
});

export default SearchAccordion;
