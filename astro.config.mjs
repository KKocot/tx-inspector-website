// @ts-nocheck
// Tooling configuration for Astro — Node-side only, not shipped to clients.
// `@tailwindcss/vite` plugin types intermittently mismatch Astro's vite plugin
// signature; we keep this file out of the strict TS pipeline to avoid noise.
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://tx-inspector.hive.io",
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
