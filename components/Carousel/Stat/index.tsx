import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useTheme } from '@react-navigation/native';


export const Stat = (props: any) => {
const { colors }: any = useTheme()
  const { label, value } = props;

  return (
    <View style={[styles.stat, { backgroundColor: colors.background }]}>
      <Text style={{ ...styles.statText, color: colors.text }}>
        {value}
      </Text>
      <View style={styles.statHold}>
        <Text style={{ ...styles.statLabel, color: colors.text }}>
          {label}
        </Text>
      </View>
    </View>
  );
}

export default Stat;