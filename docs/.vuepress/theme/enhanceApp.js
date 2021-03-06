import Quasar from 'quasar'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(Quasar)
  router.addRoutes([
    { path: '/en-us/datasheet/', redirect: '/en-us/datasheet/gateways/rak831/' }
  ])
}