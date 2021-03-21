import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useTheme, useIsFocused } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';

import Item, { MAX_HEIGHT } from '../../components/homeScroll/item';
import { items } from '../../_models/homeScroll.model';
import { SET_USER } from '../../state/reducers/userReducer';

const Home = ({ navigation }: any) => {
	const dispatch = useDispatch();
	const { colors }: any = useTheme();
    const [ orderPlaced, setOrderPlaced ] = React.useState(null)
    // const isFocused = useIsFocused();
	const y = useSharedValue(0);
	const onScroll = useAnimatedScrollHandler({
		onScroll: ({ contentOffset: { y: value } }) => {
			y.value = value;
		},
	});
    const getLocalData = async () => {
        let orderPlaced: any = await SecureStore.getItemAsync('orderPlaced');
        if (orderPlaced) setOrderPlaced(orderPlaced)
		let result: any = await SecureStore.getItemAsync('userDetails');
		result = JSON.parse(result);
		if (result) dispatch({ type: SET_USER, payload: result });
	};
	const signOut = async () => {
		dispatch({ type: SET_USER, payload: {} });
		await SecureStore.setItemAsync('token', '');
		navigation.navigate('SplashScreen');
	};
	const handleNavigate = (route: any) => {
        if (route == 'FoodScreen' && orderPlaced) {
            navigation.navigate('ConfirmationScreen')
        } else navigation.navigate(route);
        
		
	};
    const clearToken = async () => {
        await SecureStore.setItemAsync('orderPlaced', '');
    }
    React.useEffect(() => {
        // console.log(isFocused)
        getLocalData()
    })
	return (
		<>
			<StatusBar hidden />
			<Animated.ScrollView
				onScroll={onScroll}
				scrollEventThrottle={16}
				decelerationRate="fast"
				snapToInterval={MAX_HEIGHT}
			>
				<Animated.View style={[styles.container, { backgroundColor: '#014421' }]}>
					{items.map((item, index) => (
						<Item onPress={() => handleNavigate(item.route)} item={item} key={index} y={y} index={index} />
					))}
					<View style={[styles.logoutWrapper, { backgroundColor: '#014421' }]}>
						<TouchableOpacity style={styles.logout} onPress={() => signOut()}>
							<Text style={styles.text}>Logout</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
			</Animated.ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		height: items.length * MAX_HEIGHT,
	},
    logoutWrapper: {
        width: '100%', 
        height: 180, 
        marginTop: 60,
    },
    logout: {
        width: '100%',
        height: 50,
        marginTop: 5
    },
    text: {
        paddingTop: 10,
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        fontFamily: 'Bold', 
        textShadowColor: '#000',
        textShadowOffset:{ width: 1, height: 1},
        textShadowRadius: 0,
    }
});

export default Home;
