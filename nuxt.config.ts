// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/content',
  ],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        highlight: {
          langs: ['java', 'c', 'cpp', 'html', 'javascript'],
          theme: {
            default: 'min-dark',
            light: 'min-light',
            dark: 'min-dark',
            system: 'monokai',
          },
        },
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
});
