import { axiosInstance } from "../../network/apis";
const handlerEnabled = false;

const getInfo = async (id) => {
	return await axiosInstance.get(`partners/info/`, {
		handlerEnabled,
		headers: {
			"x-api-key": "HIXNBTV3VY4COKVRCELRJIRD",
		},
	});
};
export default {
	getInfo,
};
