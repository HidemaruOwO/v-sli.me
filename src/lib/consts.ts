export const DOMAIN = "v-sli.me";
export const SITE = import.meta.env.DEV
	? "http://localhost:4321"
	: `https://${DOMAIN}`;
