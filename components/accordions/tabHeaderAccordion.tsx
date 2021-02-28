import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, Text } from 'react-native';
// import { useTheme } from '@react-navigation/native';
import TabScrollHeader from '../headers/tabScrollHeader'

const TabHeaderAccordion = ({ style, tabsVisible }: any) => {
    const [open, setOpen] = useState(false);
    // const { colors } = useTheme()
	const animatedController = useRef(new Animated.Value(0)).current;
	const [bodySectionHeight, setBodySectionHeight] = useState(0);

	const bodyHeight = animatedController.interpolate({
		inputRange: [0, 1],
		outputRange: [0, bodySectionHeight],
	});

	// const toggleListItem = () => {
    //     console.log('toggling')
	// 	if (open) {
	// 		Animated.timing(animatedController, {
	// 			duration: 300,
	// 			toValue: 0,
	// 			useNativeDriver: false,
	// 		}).start();
	// 	} else {
	// 		Animated.timing(animatedController, {
	// 			duration: 300,
	// 			toValue: 1,
	// 			useNativeDriver: false,
	// 		}).start();
	// 	}
	// 	setOpen(!open);
    // };

    React.useEffect(() => {
        // console.log('tabsVisible -->', tabsVisible)
        if (!tabsVisible) {
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
		setOpen(!tabsVisible);
    })

    
    
	return (
		<View style={[style]}>

			{/* <TouchableWithoutFeedback onPress={() => toggleListItem()}>
				<View style={styles.titleContainer}>
                    <Text>OPEN</Text>
				</View>
			</TouchableWithoutFeedback> */}

			<Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
				<View
					style={styles.bodyContainer}
					onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}
				>
                    <TabScrollHeader />
				</View>
			</Animated.View>

		</View>
	);
};

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        backgroundColor: 'green',
        height: 70
	},
	bodyBackground: {
		overflow: 'hidden',
	},
	bodyContainer: {
		position: 'absolute',
        bottom: 0,
        width: '100%'
    },
});

export default TabHeaderAccordion;
