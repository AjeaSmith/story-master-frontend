import axios from 'axios';
export const axiosGet = async (url, token) => {
	try {
		const data = await axios.get(url, {
			headers: { authorization: `Bearer ${token}` },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
export const axiosPost = async (url, data, token) => {
	try {
		const response = await axios.post(url, data, {
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
