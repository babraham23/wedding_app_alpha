import React from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { Stat } from './Stat';
import { Slide } from './Slide';
import { styles } from './styles';
import { useTheme } from '@react-navigation/native';

export const Carousel = (props: any) => {
    const { colors }: any = useTheme()
	const { items, style } = props;
	const itemsPerInterval = props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

	const [interval, setInterval] = React.useState(1);
	const [intervals, setIntervals] = React.useState(1);
	const [width, setWidth] = React.useState(0);

	const init = (width: number) => {
		// initialise width
		setWidth(width);
		// initialise total intervals
		const totalItems = items.length;
		setIntervals(Math.ceil(totalItems / itemsPerInterval));
	};

	const getInterval = (offset: any) => {
		for (let i = 1; i <= intervals; i++) {
			if (offset + 1 < (width / intervals) * i) {
				return i;
			}
			if (i == intervals) {
				return i;
			}
		}
	};

	let bullets = [];
	for (let i = 1; i <= intervals; i++) {
		bullets.push(
			<Text
				key={i}
				style={{
					...styles.bullet,
					opacity: interval === i ? 0.5 : 0.1,
                    backgroundColor: colors.background,
                    color: colors.text
				}}
			>
				&bull;
			</Text>
		);
	}
    const screenWidrh = Dimensions.get('window').width
	return (
        <>
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<ScrollView
				horizontal={true}
				contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
				showsHorizontalScrollIndicator={false}
                snapToInterval={screenWidrh}
				onContentSizeChange={(w, h) => init(w)}
				onScroll={(data: any) => {
					setWidth(data.nativeEvent.contentSize.width);
					setInterval(getInterval(data.nativeEvent.contentOffset.x));
				}}
				scrollEventThrottle={200}
				pagingEnabled
				decelerationRate="fast"
			>
				{items.map((item: any, index: number) => {
					switch (style) {
						case 'stats':
							return <Stat key={index} label={item.label} value={item.value} />;
						default:
							return <Slide key={index} title={item.title} />;
					}
				})}
			</ScrollView>
			<View style={styles.bullets}>{bullets}</View>
		</View>
        <Text>Static</Text>
        </>
	);
};

export default Carousel;
