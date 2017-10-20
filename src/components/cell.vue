<template>
  <div>

    <cell is-link v-for="(item, index) in data" :key="item.id"
          :title="item.title"
          @click.native="onClick(index)">
          <img slot="icon" width="30" style="display:block;margin-right:10px;" src="../assets/p50.png">
          <img  width="25" v-if="item.attachCount" style="display:inline" src="../assets/icon_附件图标.png">
          <div slot="inline-desc">
              <img src="../assets/user.png" style="width:12px; height:12px">
              <label>{{item.sender ? item.sender : item.publisher}}</label>
              <img src="../assets/time.png" style="width:12px; height:12px; margin-left:20px">
              <a>{{item.sendDate ? item.sendDate : item.startDate }}</a>
          </div>
      </cell>

  </div>
</template>



<script>
import { Cell, Group, Badge } from 'vux'

export default {
  mounted () {

  },
  components: {
    Group,
    Cell,
    Badge
  },
  props:['data'],
  methods: {
      onClick(index){
        this.$emit('cellClickonChild',index)
      }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
