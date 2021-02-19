import { axiosInstance } from '../../network/apis';
import { getCookie } from '../../utils/helper';
const handlerEnabled = false;

const getInfo = async (id) => {
	return await axiosInstance.get(`partners/info/`, {
		handlerEnabled,
		headers: {
			'x-api-key': getCookie('token')
		}
	});
};
const verify = async (payload) => {
	return await axiosInstance.post(`authorize/`, payload, {
		handlerEnabled,
		headers: {
			'x-api-key': getCookie('token')
		}
	});
};
export default {
	getInfo,
	verify
};
