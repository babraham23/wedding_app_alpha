import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Easing, Image, TouchableOpacity } from 'react-native'
import { useScroller } from './scrollContext'
import { styles } from './style'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export const Header = (props: any) => {
    const { colors }: any = useTheme()
    const navigation: any = useNavigation();
  const { titleShowing, opacity } = useScroller();

  const [titleFade] = useState(
    new Animated.Value(0)
  );

  useEffect(() => {
    titleShowing === false &&
      Animated.timing(
        titleFade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin
      }).start();

    titleShowing === true &&
      Animated.timing(
        titleFade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin
      }).start();
  });

  return (
    <View style={{
      ...styles.header,
      shadowOpacity: opacity,
      backgroundColor: colors.card,
      borderBottomColor: colors.separator,
      shadowColor: colors.separator,
    }}>

      <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.9} style={styles.headerLeft}>
        {/* {props.headerLeft !== undefined && props.headerLeft} */}
        <Image source={require('../../assets/images/menu.png')} style={styles.menu} />
      </TouchableOpacity>

      <Animated.View
        style={{
          opacity: titleFade,
          ...styles.headerTitle,
        }}
      >
        <Text style={[styles.title, { color: colors.primary }]}>
          {props.title}
        </Text>
      </Animated.View>

      <View style={styles.headerRight}>
        {/* {props.headerRight !== undefined && props.headerRight} */}
        <Image source={require('../../assets/images/mcdonalds_logo.png')} style={styles.menu} />
      </View>
      
    </View>
  )
}

export default Header;