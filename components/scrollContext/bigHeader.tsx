import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Easing, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { useScroller } from './scrollContext'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BoldText } from '../../style/typography'
import SearchAccordion from '../accordions/searchAccordion';
import Loction from '../../components/location';

export const BigHeader = (props: any) => {
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
        <SearchAccordion title={'Order to Table'} />
        <Loction />
    </View>
  )
}

const styles = StyleSheet.create({
	header: {
		// display: 'flex',
		width: '100%',
		// minHeight: 250,
        // padding: 20,
		// // flexDirection: 'row',
		// flexWrap: 'wrap',
		// justifyContent: 'center',
		// alignItems: 'center',
		// alignContent: 'center',
		// // backgroundColor: '#fff',
		// shadowRadius: 0,
		// shadowOffset: {
		// 	width: 0.5,
		// 	height: 1,
		// },
		// zIndex: 9,
        // borderBottomWidth: 0.5,
	},
});

export default BigHeader;