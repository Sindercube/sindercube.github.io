import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
	site: "https://sindercu.be",
	output: "server",
	adapter: deno(),
});
