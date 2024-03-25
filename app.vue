<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup>
let productStore = getStoreById('newsletter')
console.log('111111111111111',productStore,productStore?.products)
if (productStore?.products == undefined || productStore?.products == null) {
  
  //生产一个产品的对象
const data = {productList: [
  {
    id: 1,
    name: 'product 1',
    price: 100
  },
  {
    id: 2,
    name: 'product 2',
    price: 200
  },
  {
    id: 3,
    name: 'product 3',
    price: 30011
  }
]}
console.log('222222222222222',data)
 const NewsListtore = registerStore('newsletter')().init(data); 
  //const NewsListtore = useNewsLetterStore().init(data); 

  
  console.log('News',NewsListtore.value)
}else{
  console.log('clear')
  //useNewsLetterStore().clear()
  
}

</script>

