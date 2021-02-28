import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
// import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme,DarkTheme as PaperDarkTheme } from 'react-native-paper';


export const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    // ...PaperDefaultTheme,
	colors: {
        ...NavigationDefaultTheme.colors,
        // ...PaperDefaultTheme.colors,
        // accent: '#22cbff',
        background: '#FEFDFD',
        border: '#AFAFB2',
        // // card: '#BADE71',
        // text: '#232323',
        primary: '#014421',

        blue: '#22cbff',
        blue_grad: '#4C9CD4',
        green: '#BADE71',
        green_grad: '#8DD24E',
        purple: '#713ab2',
        purple_grad: '#986acf'
    },
};

export const CustomDarkTheme = {
    ...NavigationDarkTheme,
    // ...PaperDarkTheme,
	colors: {
        ...NavigationDarkTheme.colors,
        // ...PaperDarkTheme.colors,
        // accent: '#22cbff',
        border: '#AFAFB2',
        card: '#292929',
        // text: '#f8d0a8',
        primary: '#014421',

        blue: '#22cbff',
        blue_grad: '#4C9CD4',
        green: '#BADE71',
        green_grad: '#8DD24E',
        purple: '#713ab2',
        purple_grad: '#986acf'
	},
};



// LIGHT
// Object {
//     "accent": "#03dac4",
//     "backdrop": "rgba(0, 0, 0, 0.5)",
//     "background": "#f6f6f6",
//     "border": "#AFAFB2",
//     "card": "rgb(255, 255, 255)",
//     "disabled": "rgba(0, 0, 0, 0.26)",
//     "error": "#B00020",
//     "notification": "#f50057",
//     "onBackground": "#000000",
//     "onSurface": "#000000",
//     "placeholder": "rgba(0, 0, 0, 0.54)",
//     "primary": "#ff225c",
//     "surface": "#ffffff",
//     "text": "#232323",
//   }

// DARK
// Object {
//     "accent": "#03dac6",
//     "backdrop": "rgba(0, 0, 0, 0.5)",
//     "background": "#121212",
//     "border": "#D8D8D8",
//     "card": "rgb(18, 18, 18)",
//     "disabled": "rgba(255, 255, 255, 0.38)",
//     "error": "#CF6679",
//     "notification": "#ff80ab",
//     "onBackground": "#FFFFFF",
//     "onSurface": "#FFFFFF",
//     "placeholder": "rgba(255, 255, 255, 0.54)",
//     "primary": "#ff225c",
//     "surface": "#121212",
//     "text": "#f8d0a8",
//   }