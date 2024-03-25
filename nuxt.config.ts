// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [   
   '@pinia/nuxt'
  ],

  // pinia: {
  //   autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs', 'mapStores', 'getActivePinia','usePinia'],
  //  // storesDirs: ['./stores/**'],
  // },
  nitro: {
    logLevel: 4,
    // static:true,
    //dev:false,
    prerender: {
      //baseURL: "http://localhost:3000",
      crawlLinks: true,
      //routes: ['/', 'sitemap.xml'],
      // ignore: ['/tak', '/konfiguration', '/checkout'],
      ignore: ['/newsletter/Category/'],  //不需要生成这个标签到的内容页
      failOnError: false   //错误关闭,可以顺利生成站点地图
    },
    hooks: {
      'prerender:route'(route) {
        if (route.error) {
          console.log(route.error, route.contents);
        }
      },
    },
  },
})
