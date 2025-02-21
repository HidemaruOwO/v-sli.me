// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import minifyHtmlSwc from "astro-minify-html-swc";

import path from "node:path";

import { SITE } from "@/lib/consts";

// https://astro.build/config
export default defineConfig({
	site: SITE,

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@node_modules": path.resolve(__dirname, "./node_modules"),
			},
		},
	},

	integrations: [icon(), sitemap(), minifyHtmlSwc()],

	redirects: {
		"/blog/how-to-build-minecraft-server-with-docker": {
			status: 302,
			destination: "https://hide0.net/blog/docker-minecraft",
		},
		"/blog/vim-plugin-manager": {
			status: 302,
			destination: "https://hide0.net/blog/jetpack-plugin-manager",
		},
		"/blog/starrail-how-to-use-controller-with-steam": {
			status: 302,
			destination:
				"https://hide0.net/blog/starrail-starrail-controller-with-steam",
		},
		"/blog/go-pointer": {
			status: 302,
			destination: "https://hide0.net/blog/go-pointer",
		},
		"/blog/github-ssh-key": {
			status: 302,
			destination: "https://hide0.net/blog/github-sshkey",
		},
		"/blog/mac-run-genshin-native": {
			status: 302,
			destination: "https://hide0.net/blog/m1-mac-genshin",
		},
		"/blog/linux-crlf-to-lf": {
			status: 302,
			destination: "https://hide0.net/blog/lf-crlf-conversion",
		},
	},
});
