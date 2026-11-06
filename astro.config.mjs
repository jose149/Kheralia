import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://kheralia.com",
  output: "static",
  adapter: vercel(),
  trailingSlash: "always",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
});
