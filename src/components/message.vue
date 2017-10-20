<template>
  <div class="message">
    <x-header :left-options="{showBack: false}">消息</x-header>
    eee

  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'message',
  data () {
    return {

    }
  },
  created () {
      this.$store.commit('isfoo',true)
      
  },
  components: {
    XHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}


</style>
