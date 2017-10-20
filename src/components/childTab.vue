<template>
  <div>
    <tabbar >
      <tabbar-item  v-for="(item, index) in data" :key="item.id" @on-item-click="itemClick(index)">
        <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
        <span slot="label">{{item.title}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group } from 'vux'
export default {
  data () {
    return {
        
    }
  },
  props: ['data'],
  components: {
    Tabbar,
    TabbarItem,
    Group
  },
  methods: {
    itemClick(index){
      this.$emit('itemClickonChild',index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
