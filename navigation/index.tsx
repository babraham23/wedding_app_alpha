import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomDefaultTheme, CustomDarkTheme } from '../style/themes';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import LandingScreen from '../screens/landing';
import BookTableScreen from '../screens/bookTable';
import SelectedItemScreen from '../screens/menu/selectedItemScreen';
import Rainbow from '../screens/Rainbow';
import Duolingo from '../screens/Duolingo';

import Home from '../screens/home';
import InformationScreen from '../screens/information'
// FoodScreen // use carousel from landing
// TableScreen
// AccommodationScreen
// MessageBoardScreen


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;
	// const theme = CustomDefaultTheme
	// const theme = CustomDarkTheme
	return (
		<NavigationContainer linking={LinkingConfiguration} theme={theme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="InformationScreen" component={InformationScreen} />



        {/* <Drawer.Screen name="Rainbow" component={Rainbow} /> 
            <Drawer.Screen name="Duolingo" component={Duolingo} />*/}
        {/* <Drawer.Screen name="LandingScreen" component={LandingScreen} />
			<Drawer.Screen name="BookTableScreen" component={BookTableScreen} />
			<Drawer.Screen name="SelectedItemScreen" component={SelectedItemScreen} />
			<Drawer.Screen name="Menu" component={BottomTabNavigator} />
			<Drawer.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
		</Drawer.Navigator>
	);
}
