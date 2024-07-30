// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Viriyah',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  dir: {
    layouts: 'layouts'
  },
  css: ['~/assets/css/main.css', 'bootstrap-icons/font/bootstrap-icons.css'],
  plugins: ['~/plugins/font-awesome.js' , '~/plugins/router.ts'],
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false
  },
  image: {
    // ... other options
    debug: true,
    dir: 'assets', // หรือ 'assets' ขึ้นอยู่กับที่คุณเก็บรูป
    domains: ['localhost'],
    format: ['webp']
  },
  vite: {
    optimizeDeps: {
      exclude: ['vee-validate']
    }
  },
  modules: [
    'nuxt-bootstrap-icons',
    '@pinia/nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage'
        }
      }
    ]
  ],
  runtimeConfig: {
    public: {

    }
  }
})
