// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://vgrateauge1.github.io",
  base: "/portfolio/",
  output: "static",
  build: {
    assetsPrefix: "/portfolio/",
  },
  integrations: [react(), tailwind({ applyBaseStyles: false })],
})
