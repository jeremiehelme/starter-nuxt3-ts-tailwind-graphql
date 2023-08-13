// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ['leaflet', "@vue-leaflet/vue-leaflet"],
  },
  components: [
    { path: '~/components/button', prefix: 'Button' },
    '~/components'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    'nuxt-svgo',
  ],
  svgo: {
    defaultImport: 'component'
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST
    }
  },
  devtools: { enabled: true }
})
