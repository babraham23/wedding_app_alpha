import React, { useState, useEffect } from 'react'
import { View, Text, Animated, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native'
// import { useScroller } from './scrollContext'
// import { styles } from '../scrollContext/style'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export const CardHeader = (props: any) => {
    const { colors } = useTheme()
    const navigation: any = useNavigation();
//   const { titleShowing, opacity } = useScroller();

  const [titleFade] = useState(
    new Animated.Value(0)
  );

//   useEffect(() => {
//     titleShowing === false &&
//       Animated.timing(
//         titleFade, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//         easing: Easing.sin
//       }).start();

//     titleShowing === true &&
//       Animated.timing(
//         titleFade, {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: true,
//         easing: Easing.sin
//       }).start();
//   });

  return (
    <View style={{
      ...styles.header,
    //   shadowOpacity: opacity,
    //   backgroundColor: colors.card
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

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		width: '100%',
		height: 100,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		zIndex: 9,
	},
	headerTitle: {
		display: 'flex',
		flexBasis: '33%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		paddingTop: Platform.OS === 'ios' ? 30 : 0,
	},
	headerLeft: {
		flexBasis: '33%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',
		paddingTop: Platform.OS === 'ios' ? 30 : 0,
        zIndex: 99
	},
	headerRight: {
		flexBasis: '33%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignContent: 'center',
		paddingTop: Platform.OS === 'ios' ? 30 : 0,
        paddingRight: 20,
	},
	title: {
		fontSize: 17,
		fontWeight: '600',
		textAlign: 'center',
	},
	headerText: {
		textAlign: 'center',
		paddingHorizontal: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',
		fontSize: 17,
		fontWeight: '600',
    },
    menu: {
        height: 40,
        width: 40,
        // resizeMode: 'contain',
        marginLeft: 25
    }
});

export default CardHeader;