const httpService = {
	
	get: async function (url: string) {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return await response.json();

		} catch (error) {
			throw error;
		}
	},

	signup: async function (url: string, {username, password}: {username: string, password: string}) {
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({username, password})
			})
			return await response.json()

		} catch (error) {
			throw error;
		}
	},
	signin: async function (url: string, {username, password}: {username: string, password: string}) {
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({username, password})
			})
			return await response.json()

		}catch (error){
			throw error;
		}
	},
	createAddress: async function(url: string, {street, popular_name, province, district, sector, long_lat, email, phone_number, twitter, facebook}: {street: string, popular_name: string, province: string, district: string, sector: string, long_lat: string, email: string, phone_number: string, twitter: string, facebook: string}) {
		// This method is used to send a request to create a new record of address
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({street, popular_name, province, district, sector, long_lat, email, phone_number, twitter, facebook})
			})
			return await response.json()

		}catch(error){
			throw error
		}
	},
	getAddress: async function(url: string, token: string | undefined) {
		// This method is used to get the addresses
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}` 
				}
			})
			return await response.json()

		}catch(error){
			throw error
		}
	},
	createProfile: async function(url: string, {first_name, last_name}: {first_name: string, last_name: string}){
		try{

			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({first_name, last_name})
			})
			return await response.json()

		}catch(error){
			throw error
		}
	}
};
export { httpService };