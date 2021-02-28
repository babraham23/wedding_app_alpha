import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';


export const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
	colors: {
        ...NavigationDefaultTheme.colors,
        primary: '#4DD2A5',
        smallButton: '#27251F',
        // separator: '#C6C6C8FF',
        seperator: '#C8C7CC',
        card: '#fff',
        background: '#fbfbfb',
    },
    border: {
        bigCard: 20,
        smallButton: 30
    }
};

export const CustomDarkTheme = {
	...NavigationDarkTheme,
	colors: {
        ...NavigationDarkTheme.colors,
        primary: '#4DD2A5',
        smallButton: '#27251F',
        // separator: '#38383AFF',
        seperator: '#C8C7CC'
	},
    border: {
        bigCard: 20,
        smallButton: 30,

    }
};
