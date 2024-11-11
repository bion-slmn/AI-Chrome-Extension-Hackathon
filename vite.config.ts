import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { viteStaticCopy } from "vite-plugin-static-copy";

// export default defineConfig({
// 	plugins: [
// 		react(),
// 		viteStaticCopy({
// 			targets: [
// 				{
// 					src: "./manifest.json",
// 					dest: ".",
// 				},
// 			],
// 		}),
// 	],
// 	resolve: {
// 		alias: {
// 			"@": path.resolve(__dirname, "./src"),
// 		},
// 	},
// 	build: {
// 		outDir: "build",
// 		rollupOptions: {
// 			input: {
// 				main: "./index.html",
// 			},
// 		},
// 	},
// });
