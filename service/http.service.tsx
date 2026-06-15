const httpService = {
	
	get: async function (url: string) {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error('Error fetching data:', error);
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
	}
};
export { httpService };