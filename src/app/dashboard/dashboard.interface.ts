export interface IRouteInfo {
	path: string;
	title: string;
	type: string;
	icontype: string;
	permitTo: string[];
	children?: IChildrenItems[];
}

export interface IChildrenItems {
	path: string;
	title: string;
	ab: string;
	type?: string;
}

export interface IUserDetails {
	name: string;
	username: string;
	email: string;
	roles:  string[];
}
