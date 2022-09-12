<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

import {useStore} from 'vuex'
export default {
  name:"About",
  setup(props) {
    const store =  useStore()
      
         
         //console.log(store.getters['userName/name'])   
         // console.log(store.getters['products/name']) 
          store.dispatch('products/getProducts','') 

          console.log(store.state)

    

  }
}


</script>
