<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup>
let productStore = getStoreById('newsletter')
console.log('111111111111111',productStore,productStore?.products)
if (productStore?.products == undefined) {
  
  //生产一个产品的对象
const data = {productList: '123'}
console.log('222222222222222',data)
 // const xx = registerStore('newsletter')().init(data); 
  const NewsListtore = useNewsLetterStore().init(data); 
  console.log('News',NewsListtore)
}

</script>

