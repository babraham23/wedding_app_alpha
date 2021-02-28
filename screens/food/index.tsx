import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MediumText, LightText, BoldText, Separator } from '../../style/typography';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext';
import TimeItem from '../../components/schedule/timeItem';
import Carousel from '../../components/Carousel';
import { statsData, slideData } from '../../components/Carousel/dummyData';

const FoodScreen = ({ navigation }: any) => {
	const { colors } = useTheme();
	const title = 'Food';
	return (
		<ScrollContextProvider title={title}>
			<View style={styles.container}>
				<BoldText style={styles.title}>{title}</BoldText>
				<Text style={{ marginTop: 10, paddingLeft: 20 }}>Starters</Text>
				<Carousel style="slide" items={slideData} />
                <Text style={{ marginTop: 30, paddingLeft: 20 }}>Mains</Text>
				<Carousel style="slide" items={slideData} />
                <Text style={{ marginTop: 30, paddingLeft: 20 }}>Deserts</Text>
				<Carousel style="slide" items={slideData} />
			</View>
		</ScrollContextProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	scheduleWrapper: {
		paddingTop: 20,
	},
	aboutWrapper: {
		paddingTop: 30,
		paddingHorizontal: 10,
	},
	header: {
		paddingTop: 30,
		// paddingBottom: 10
	},
	title: {
		paddingLeft: 20,
		paddingBottom: 10,
	},
});

export default FoodScreen;
