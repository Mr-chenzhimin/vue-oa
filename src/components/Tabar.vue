<template>
  <div>
    <tabbar slot="bottom">
      <tabbar-item  link="/message" selected>
        <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item  link="/Address" >
        <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_tweet_actived.png">
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item  link="/workbench">
        <img slot="icon" src="../assets/image/ic_nav_discover_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_discover_actived.png">
        <span slot="label">工作台</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/my">
        <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
        <img slot="icon-active" src="../assets/image/ic_nav_my_pressed.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  data () {
    return {

    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
