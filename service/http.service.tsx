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

	signup: async function (url: string, { username, password }: { username: string, password: string }) {
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			})
			return await response.json()

		} catch (error) {
			throw error;
		}
	},
	signin: async function (url: string, { username, password }: { username: string, password: string }) {
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			})
			return await response.json()

		} catch (error) {

			throw error;

		}
	},
	createAddress: async function (url: string, { street, popular_name, province, district, email, phone_number, twitter, facebook, instagram}: { street: string, popular_name: string, province: string, district: string, email: string, phone_number: string, twitter: string, facebook: string, instagram: string }) {
		// This method is used to send a request to create a new record of address
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ street, popular_name, province, district, email, phone_number, twitter, facebook, instagram })
			})
			return await response.json()

		} catch (error) {

			throw error

		}
	},
	getAddress: async function (url: string, token: string | undefined) {
		// This method is used to get the addresses
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
			return await response.json()

		} catch (error) {

			throw error

		}
	},
	createProfile: async function (url: string, token: string, { first_name, last_name }: { first_name: string, last_name: string }) {
		try {

			const response = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify({ first_name, last_name })
			})
			return await response.json()

		} catch (error) {

			throw error

		}
	},
	getProfile: async function(url: string, token: string){
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
			return await response.json()
		}catch(error){

			throw(error)

		}
	},
	createBusiness: async function(url: string, token: string, formData: FormData) {
		// createBusiness used to create business
		try{
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${token}`
				},
				body: formData
			})
			return await response.json()
		}catch(error){
			throw(error)
		}
	},
	getBusiness: async function(url: string, token: string) {
		try{
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
			return await response.json()
		}catch(error) {
			throw(error)
		}
	},
	createProduct: async function(url: string, token: string, formData: FormData) {
		// createProduct function creates business
		try{
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${token}`
				},
				body: formData
			})
			return await response.json()
		}catch(error){
			throw(error)
		}
	},
	getProduct: async function(url: string, token: string) {
		try{
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
			return await response.json()
		}catch(error) {
			throw(error)
		}
	},
	getProductCategory: async function(url: string, token: string) {
		try{
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})
			return await response.json()
		}catch(error) {
			throw(error)
		}
	},
};
export { httpService };