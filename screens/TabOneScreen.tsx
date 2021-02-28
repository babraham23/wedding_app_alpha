import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
	interpolateColor,
} from 'react-native-reanimated';




export default function TabOneScreen() {
    const randomWidth = useSharedValue(10);
    const [ tabsVisible, setTabsVisible ] = React.useState(false)
	const translateX = useSharedValue(0);
	const onScroll = useAnimatedScrollHandler({
		onScroll: (event) => {
			translateX.value = event.contentOffset.x;
		},
	});
    
	// const backgroundColorInter = useAnimatedStyle((): any => {
	// 	const backgroundColor = interpolateColor(
	// 		translateX.value,
	// 		products.map((_, i) => width * i),
	// 		products.map((product) => product.color2)
	// 	);
	// 	return { backgroundColor };
	// });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
