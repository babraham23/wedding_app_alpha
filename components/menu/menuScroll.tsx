import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MenuTabButton from '../buttons/menuTabButton'; 
import { products } from '../../_models/mcdonalds.model';

const MenuScroll = () => {
	const { colors }: any = useTheme()
	return (
		<View style={[styles.container, { backgroundColor: 'blue', borderBottomColor: colors.separator }]}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                {products.map((item: any) => {
                    return <MenuTabButton label={item.title} key={item.Id} />
                })}
				{/* <MenuTabButton label={'Hamburger'} /> */}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,

	},
	scroll: {
		width: '100%',
	},
});
export default MenuScroll;