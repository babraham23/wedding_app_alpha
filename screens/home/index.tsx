import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item, { MAX_HEIGHT } from "../../components/homeScroll/item";
import { items } from "../../_models/homeScroll.model";

const styles = StyleSheet.create({
  container: {
    height: (items.length) * MAX_HEIGHT,
    backgroundColor: "black",
  },
});

const Home = ({ navigation }: any) => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });
  const handleNavigate = (route: any) => {
      navigation.navigate(route)
  }
  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        decelerationRate='fast'
        snapToInterval={MAX_HEIGHT}
>
        <Animated.View style={styles.container}>
          {items.map((item, index) => (
            <Item onPress={() => handleNavigate(item.route)} item={item} key={index} y={y} index={index} />
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
};

export default Home;
