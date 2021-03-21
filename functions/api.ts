import { HTTP } from './http';
import * as SecureStore from 'expo-secure-store';
import { REGISTER, LOG_IN, INFO, ACCOMODATION, SCHEDULE, FOODS, SEATING, ORDERS } from '../config/api';

export const RegisterUser = (DATA: any) => {
	return HTTP({
		Method: 'POST',
		Url: REGISTER,
		Data: DATA,
	});
};

export const LogInUser = (DATA: any) => {
	return HTTP({
		Method: 'POST',
		Url: LOG_IN,
		Data: DATA,
	});
};

export const Get_Information = async () => {
    const token = await SecureStore.getItemAsync('token');
	return HTTP({
		Method: 'GET',
		Url: INFO,
		Headers: { Authorization: token }
	});
};

export const Get_Shedule = async () => {
    const token = await SecureStore.getItemAsync('token');
	return HTTP({
		Method: 'GET',
		Url: SCHEDULE,
		Headers: { Authorization: token }
	});
};

export const Get_Foods = async () => {
    const token = await SecureStore.getItemAsync('token');
	return HTTP({
		Method: 'GET',
		Url: FOODS,
		Headers: { Authorization: token }
	});
};

export const Post_Orders = async (DATA: any) => {
    const token = await SecureStore.getItemAsync('token');
    console.log('DATA -->', DATA)
	return HTTP({
		Method: 'POST',
		Url: ORDERS,
        Data: DATA,
		Headers: { Authorization: token }
	});
};

export const Get_Seating = async () => {
    const token = await SecureStore.getItemAsync('token');
	return HTTP({
		Method: 'GET',
		Url: SEATING,
		Headers: { Authorization: token }
	});
};

export const Get_Accommodation = async () => {
    const token = await SecureStore.getItemAsync('token');
	return HTTP({
		Method: 'GET',
		Url: ACCOMODATION,
		Headers: { Authorization: token }
	});
};