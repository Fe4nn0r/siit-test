export type Service = {
	id: number;
	name: string;
	website_url: string;
	logo_url: string;
	price: {
		cost_per_user: number;
		flat_cost: number;
		nb_users_included: number;
	};
};
