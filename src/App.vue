<template>
  <div id="app" style="height:100%">
    <view-box ref="viewBox">
      <router-view></router-view>

    </view-box>
    <main-tabar slot="bottom" v-show="isFooter"></main-tabar>
  </div>
</template>

<script>
import Tabar from '@/components/Tabar'
import { ViewBox, XHeader} from 'vux'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {

      'main-tabar': Tabar,
      ViewBox,
      XHeader

  },
  created () {


  },
  computed: {
      isFooter: function () {
        return this.$store.state.text.isFooter
      },
  }
}
</script>

<style>
<style lang="less">
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body {
   height: 100%;
   width: 100%;
   overflow-x: hidden;
 }
</style>
