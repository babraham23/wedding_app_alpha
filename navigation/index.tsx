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
import FoodScreen from '../screens/food/food';
import ConfirmationScreen from '../screens/food/confirmarionScreen';
import InformationScreen from '../screens/information';
import TableScreen from '../screens/tables';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER } from '../state/reducers/userReducer';



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



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const dispatch = useDispatch()
	const theme = colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;
	// const theme = CustomDefaultTheme
	// const theme = CustomDarkTheme

    const getLocalData = async () => {
        let result: any = await SecureStore.getItemAsync('userDetails');
        result = JSON.parse(result);
        console.log('user details local -->', result)
        if (result) dispatch({ type: SET_USER, payload: result });
    };


    React.useEffect(() => {
        getLocalData()
    })

	return (
		<NavigationContainer linking={LinkingConfiguration} theme={theme}>
			{/* <RootNavigator /> */}
            <ScreenStack />
		</NavigationContainer>
	);
}
