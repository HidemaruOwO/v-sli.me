// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import minifyHtmlSwc from "astro-minify-html-swc";

import { SITE } from "@/lib/consts";

// https://astro.build/config
export default defineConfig({
	site: SITE,

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [icon(), sitemap(), minifyHtmlSwc()],
});

