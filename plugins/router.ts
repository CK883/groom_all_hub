import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    let isBackButtonClicked = false

    window.addEventListener('popstate', () => {
      isBackButtonClicked = true
    })

    nuxtApp.hook('page:finish', () => {
      const router = useRouter()

      router.beforeEach((to, from, next) => {
        if (isBackButtonClicked) {
          isBackButtonClicked = false

          if (Object.keys(from.query).length > 0) {
            // ใช้ window.history.back() และ reload หน้า
            window.history.back()
            setTimeout(() => {
              window.location.reload()
            }, 100)
            next(false)
          } else {
            next()
          }
        } else {
          next()
        }
      })
    })
  }
})
