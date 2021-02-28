import React from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Text } from 'react-native';
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
	interpolateColor,
} from 'react-native-reanimated';

import { products } from '../../_models/mcdonalds.model';
// import { products } from '../../_models/burgerKing.model';
import Card, { CARD_HEIGHT } from '../../components/cards/bigCard';
import Products from '../../components/products/products';
import MenuCard from '../../components/cards/menuCard';
import CardHeader from '../../components/headers/cardHeader';
import TabHeaderAccordion from '../../components/accordions/tabHeaderAccordion';


const { width } = Dimensions.get('window');

const snapToOffsets = [0, CARD_HEIGHT - 120];  // this jumps down card height, so fucking cool!

const MenuScreen = () => {
    const [ tabsVisible, setTabsVisible ] = React.useState(false)
	const translateX = useSharedValue(0);
	const onScroll = useAnimatedScrollHandler({
		onScroll: (event) => {
			translateX.value = event.contentOffset.x;
		},
	});
	const backgroundColorInter = useAnimatedStyle((): any => {
		const backgroundColor = interpolateColor(
			translateX.value,
			products.map((_, i) => width * i),
			products.map((product) => product.color2)
		);
		return { backgroundColor };
	});
    const handleScrollHeader = (nativeEvent: any) => {
        if (nativeEvent.contentOffset.y > 150) {
            setTabsVisible(true)
        }
        else if (nativeEvent.contentOffset.y < 250) {
            setTabsVisible(false)
        }
    }
	return (
        <View style={{flex: 1}} >
            {/* <Text>Menu Screen</Text> */}
		<Animated.View style={backgroundColorInter}>
            <TabHeaderAccordion style={styles.tabHeader} tabsVisible={tabsVisible} />
			<ScrollView
				bounces={false}
				showsVerticalScrollIndicator={false}
				snapToOffsets={snapToOffsets}
				snapToEnd={false}
				decelerationRate="fast"
                scrollEventThrottle={16}
                onScroll={({nativeEvent}: any) => handleScrollHeader(nativeEvent)}	>
				<View style={styles.slider}>
                    <View style={styles.tabHeader} >
                        <CardHeader />
                    </View>
					<Animated.ScrollView
						onScroll={onScroll}
						scrollEventThrottle={16}
						decelerationRate="fast"
						snapToInterval={width}
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{products.map((product, index) => (
							<Card product={product} key={index} />
						))}
					</Animated.ScrollView>
					<Products products={products} x={translateX} />
				</View>
				<MenuCard />
			</ScrollView>
		</Animated.View>
        </View>
	);
};

const styles = StyleSheet.create({
	slider: { height: CARD_HEIGHT },
    tabHeader: {
        position: 'absolute',
        top: 0,
        zIndex: 3,
        width: '100%'
    }
});

export default MenuScreen;


            {/* <TabAccordion tabsVisible={tabsVisible}  /> */}
