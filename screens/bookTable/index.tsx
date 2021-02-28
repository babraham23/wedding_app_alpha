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


const BookTableScreen = () => {
    const title = 'Book Table';
    const todo = 'Add qr code scanner';
	// const { colors }: any = useTheme();
	return (
        <ScrollContextProvider title={title} >
            <View style={styles.container}>
			<Text>{title}</Text>
            <Text>{todo}</Text>
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

export default BookTableScreen;
