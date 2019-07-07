<template>
  <div id="app">
    <router-view />
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'
  export default {
    name:'App',
    data(){
      return{
        msg:'tomorrow wil be better'
      }
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    color red
 
</style>
