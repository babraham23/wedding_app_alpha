import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
	header: {
		display: 'flex',
		width: '100%',
		height: 100,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		// backgroundColor: '#fff',
		shadowRadius: 0,
		// shadowOffset: {
		// 	width: 0.5,
		// 	height: 1,
		// },
		zIndex: 9,
        // borderBottomWidth: 0.5,
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
		textAlign: 'center',
        fontFamily: 'Bold'
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
        height: 25,
        width: 40,
        resizeMode: 'stretch',
        marginLeft: 25
    },
});

export default styles;
