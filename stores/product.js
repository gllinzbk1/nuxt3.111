import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from "pinia";
// export const registerStore = (id) => {
//   //export const useProductList = defineStore('productStore', {
//     return id = defineStore(id, {
  export const useNewsLetterStore = defineStore('newsletter', {
    state: () => ({
   
      products: '',         //产品列表 
      



    }),

    getters: {
     
    },

    actions: {
      init(pdata){
        console.log('storeInitDataLength',pdata,pdata?.productList)
        this.products = pdata?.productList ?? [];

        return this
      },


    }
  })
//}
