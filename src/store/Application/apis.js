import { axiosInstance } from '../../network/apis';
const handlerEnabled = false;

// Replace endpoint and change api name
const getList = async () => {
	return await axiosInstance.get(`applications/`, {
		handlerEnabled,
		headers: {
			'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
		}
	});
};

const create = async (payload) => {
	console.log('payload', payload);
	return await axiosInstance.post(`applications/`, payload, {
		handlerEnabled,
		headers: {
			'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
		}
	});
};

export default {
	getList,
	create
};
