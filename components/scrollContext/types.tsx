import { StyleProp, TextStyle } from 'react-native';

export interface TextProps {
	primaryColor?: string;
	style?: StyleProp<TextStyle>;
}

export interface ScrollContextInterface {
	opacity: number;
	maxOffset: number;
	offset: number;
	titleShowing: boolean;
	updateOffset(val: number): void;
}

export interface ChildProps {
	children: JSX.Element[] | JSX.Element;
}

export interface HeaderProps {
	headerLeft?: JSX.Element;
	headerRight?: JSX.Element;
	title: string;
}
