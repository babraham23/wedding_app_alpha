import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CustomDefaultTheme, CustomDarkTheme } from '../style/themes';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import SplashScreen from '../screens/auth/splash';
import AuthFormScreen from '../screens/auth/authForm';
import HomeScreen from '../screens/home';
import FoodScreen from '../screens/food/food'
import ConfirmationScreen from '../screens/food/confirmarionScreen';
import InformationScreen from '../screens/information'
import TableScreen from '../screens/tables'


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;
	// const theme = CustomDefaultTheme
	// const theme = CustomDarkTheme
	return (
		<NavigationContainer linking={LinkingConfiguration} theme={theme}>
			{/* <RootNavigator /> */}
            <ScreenStack />
		</NavigationContainer>
	);
}

// // A root stack navigator is often used for displaying modals on top of all other content
// // Read more here: https://reactnavigation.org/docs/modal
// const Stack = createStackNavigator<RootStackParamList>();

// function RootNavigator() {
// 	const Drawer = createDrawerNavigator();
// 	return (
// 		<Drawer.Navigator screenOptions={{ headerShown: false }}>
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="InformationScreen" component={InformationScreen} />
//             <Drawer.Screen name="FoodScreen" component={FoodScreen} />
//             <Drawer.Screen name="TableScreen" component={TableScreen} />
// 		</Drawer.Navigator>
// 	);
// }

const RootStack = createStackNavigator();

const ScreenStack = ({}) => (
	<RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="AuthFormScreen" component={AuthFormScreen} />
		<RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="InformationScreen" component={InformationScreen} />
        <RootStack.Screen name="FoodScreen" component={FoodScreen} />
        <RootStack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <RootStack.Screen name="TableScreen" component={TableScreen} />
	</RootStack.Navigator>
);