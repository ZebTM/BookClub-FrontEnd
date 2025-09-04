import type { Actions } from './$types';


export const actions = {
	login: async (event) => {
		console.log("ATTEMPTING TO LOGIN USER: ");

		const res = await fetch('http://localhost:5208/User');
		if (!res.ok) throw new Error("Login Failed");

		const data = await res.json();

		console.log(data);

		return {
			success: true,
			Jsondata: data
		};
	}
} satisfies Actions;
