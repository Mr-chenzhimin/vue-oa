<template>
  <div class="work">

    <x-header :left-options="{showBack: false}">工作台</x-header>
    <!-- <main-text></main-text> -->

    <grid style="margin-top:20px; ">
      <grid-item style="border:0px hidden #00F" :label="item" v-for="item in items" :key="item.id" @on-item-click="onItemClick(item)">
        <img slot="icon" src="../assets/logo.png">
      </grid-item>
    </grid>




  </div>
</template>

<script>
import { XHeader, Grid, GridItem } from 'vux'
import Tabar from '@/components/Tabar'
import text from '@/components/text'
export default {
  name: 'work',
  data () {
    return {
      items: ['协同审批','协同办公','通知','会议','轻应用','车辆']
    }
  },
  created () {
      this.$store.commit('isfoo',true)
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get('/api/mobile/message/getCount', {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody))
      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
  },
  methods: {
    onItemClick(index){

      if (index == '协同审批') {
        this.$router.push('/workflowlist')
      } else if (index =='通知') {
        this.$router.push('/NoticeList')
      }
    }
  },
  components: {
      XHeader,
      'main-tabar': Tabar,
      'main-text': text,
      Grid,
      GridItem

    }
}
</script>
