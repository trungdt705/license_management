import { axiosInstance } from "./index";
const handlerEnabled = false;

// Replace endpoint and change api name
const getList = async (payload) => {
	console.log("getList", payload);
	return await axiosInstance.get(payload.path, {
		handlerEnabled,
		headers: {
			"x-api-key": "HIXNBTV3VY4COKVRCELRJIRD",
		},
	});
};

const create = async (payload) => {
	return await axiosInstance.post(`${payload.path}/`, payload.data, {
		handlerEnabled,
		headers: {
			"x-api-key": "HIXNBTV3VY4COKVRCELRJIRD",
		},
	});
};

const update = async (payload) => {
	return await axiosInstance.post(
		`${payload.path}/${payload.id}`,
		payload.data,
		{
			handlerEnabled,
			headers: {
				"x-api-key": "HIXNBTV3VY4COKVRCELRJIRD",
			},
		}
	);
};

const getOne = async (payload) => {
	return await axiosInstance.get(`${payload.path}/${payload.id}`, {
		handlerEnabled,
		headers: {
			"x-api-key": "HIXNBTV3VY4COKVRCELRJIRD",
		},
	});
};
export default {
	getList,
	create,
	getOne,
	update,
};
