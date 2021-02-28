import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const SIZE = 200;
const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		marginTop: 70,
		alignItems: 'center',
	},
});

const Products = ({ x, products }: any) => {
	return (
		<View style={styles.container} pointerEvents="none">
			{products.map((product: any, index: any) => {
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const style = useAnimatedStyle(() => {
					const translateX = interpolate(
						x.value,
						[(index - 1) * width, index * width, (index + 1) * width],
						[width / 2, 0, -width / 2]
					);
					const scale = interpolate(
						x.value,
						[(index - 1) * width, index * width, (index + 1) * width],
						[0.61, 1, 0.61]
					);
					return {
						transform: [{ translateX }, { scale }],
					};
				});
				return (
					<Animated.View key={index} style={[styles.container, style]}>
						<Image
							source={product.picture}
							style={{ width: SIZE, height: SIZE * product.aspectRatio, resizeMode: 'contain' }}
						/>
					</Animated.View>
				);
			})}
		</View>
	);
};

export default Products;
