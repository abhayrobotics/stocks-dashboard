import { yahooKey } from "./constant";

export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': yahooKey,
		'x-rapidapi-host': 'yahoo-finance127.p.rapidapi.com'
	}
};

