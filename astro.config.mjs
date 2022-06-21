import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({})],
    vite: {
        server: {
            hmr: {
                clientPort: process.env.HMR_HOST ? 443 : 24678,
                host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
            }
        }
    }
});
