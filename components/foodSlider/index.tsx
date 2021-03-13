import React from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Slide } from './slide';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';

export const FoodSlider = (props: any) => {
	const { colors }: any = useTheme();
	const { items, style } = props;
	const itemsPerInterval = props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;
    const [ selection, setSelection ] = React.useState('')
	const [interval, setInterval]: any = React.useState(1);
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
					color: colors.text,
				}}
			>
				&bull;
			</Text>
		);
	}
    const handleSelection = (item: any) => {
        const data = (props.title, item.title)
        setSelection(data)
        console.log(data)
        // const data = {
            
        // }
        // console.log(props.title, item.title)
    }
	const screenWidrh = Dimensions.get('window').width;
	return (
		<View>
			<BoldText style={styles.title} fontSize={26} >{props.title}</BoldText>
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
						return <Slide key={index} title={item.title} onPress={() => handleSelection(item)} />;
					})}
				</ScrollView>
				<View style={styles.bullets}>{bullets}</View>
			</View>
            <View style={styles.optionSelectWrapper} >
                <Text>{selection}</Text>
			    {/* {interval == 1 ? <Text style={{ color: 'green' }} >Option 1</Text> : <Text>Option 1</Text> }
			    {interval == 2 ? <Text style={{ color: 'green' }} >Option 2</Text> : <Text>Option 2</Text> }
			    {interval == 3 ? <Text style={{ color: 'green' }} >Option 3</Text> : <Text>Option 3</Text> } */}
            </View>
		</View>
	);
};

export const styles = StyleSheet.create({
	statsHead: {
		paddingTop: 10,
		paddingHorizontal: 12,
	},
    title: {
        paddingLeft: 20,
        marginTop: 20
    },
	container: {
		width: '100%',
		// backgroundColor: '#fbfbfb',
		// borderColor: '#ebebeb',
		// borderWidth: 1,
		borderRadius: 8,
		// shadowColor: '#fcfcfc',
		// shadowOpacity: 1,
		// marginTop: 10,
		// shadowOffset: {
		//   width: 0,
		//   height: 5
		// },
	},
	scrollView: {
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
	},
	bullets: {
		position: 'absolute',
		top: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingTop: 5,
	},
	bullet: {
		paddingHorizontal: 5,
		fontSize: 20,
	},
    optionSelectWrapper: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});

export default FoodSlider;
