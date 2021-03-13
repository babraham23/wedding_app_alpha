import React from "react";
import { StyleSheet, Dimensions, Alert, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
export const MIN_HEIGHT = 208;
export const MAX_HEIGHT = height / 2;
const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "500",
    fontFamily: 'Bold', 
    textShadowColor: '#000',
    textShadowOffset:{ width: 1, height: 1},
    textShadowRadius: 0,
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: "center",
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Bold', 
    textShadowColor: '#000',
    textShadowOffset:{ width: 1, height: 1},
    textShadowRadius: 0,
  },
});

export interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
}

interface ItemProps {
  index: number;
  y: Animated.SharedValue<number>;
  item: Item;
  onPress: any;
}

const Item = ({
  y,
  index,
  item: { title, subtitle, picture, top },
  onPress,
}: any) => {
  const style = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
        [MIN_HEIGHT, MAX_HEIGHT],
        Extrapolate.CLAMP
      ),
    };
  });
  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP
    );
    return {
      opacity,
    };
  });
  const pictureStyle = useAnimatedStyle(() => ({
    height: MAX_HEIGHT,
    top: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [-top, 0]
    ),
  }));
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style]}>
        <Animated.Image
          source={picture}
          style={[styles.picture, pictureStyle]}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{subtitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={titleStyle}>
              {/* <Text style={styles.subtitle}>{title.toUpperCase()}</Text> */}
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
