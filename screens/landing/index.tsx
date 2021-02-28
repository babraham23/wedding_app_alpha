import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import MenuTabButton from '../buttons/menuTabButton';
// import MenuItems from '../../components/cards/menuItem';
// import MenuScroll from '../../components/menu/menuScroll';
// import { menuModel } from '../../_models/menuModel';
import { ScrollContextProvider } from '../../components/scrollContext/scrollContext'
import Carousel from '../../components/Carousel';
import { statsData, slideData } from '../../components/Carousel/dummyData';

const LandingScreen = () => {
	// const { colors }: any = useTheme();
	return (
        <ScrollContextProvider title={'din dins'} >
            <View style={styles.container}>
			<Text>Statistics Carousel:</Text>
			<Carousel
				style="stats"
				itemsPerInterval={3}
				items={statsData}
			/>

			<Text style={{ marginTop: 30, paddingLeft: 20 }}>In my area:</Text>
			<Carousel
				style="slide"
				items={slideData}
			/>
		</View>
        </ScrollContextProvider>

	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		paddingTop: 50,
	}
});

export default LandingScreen;
