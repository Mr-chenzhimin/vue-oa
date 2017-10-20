<template>
<div class="workflowlist" style="height:100%">

<x-header  :left-options="{showBack: true}">协同审批</x-header>
<view-box ref="viewBox" >
    <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        ref="search"></search>

    <group >
        <!-- <cell is-link v-for="item in data" :key="item.id"
              :title="item.title"
              @click.native="onClick(item.id)">
              <img slot="icon" width="20" style="display:block;margin-right:10px;" src="../assets/image/ic_nav_my_normal.png">

              <div slot="inline-desc">
                  <img src="../assets/user.png" style="width:12px; height:12px">
                  <label>{{item.sender}}</label>
                  <img src="../assets/time.png" style="width:12px; height:12px; margin-left:20px">
                  <a>{{item.sendDate}}</a>
              </div>
          </cell> -->
          <child-cell :data= "data" @cellClickonChild="onClick"></child-cell>
    </group>
</view-box>
<tabbar >
  <tabbar-item  selected @on-item-click="itemClick(0)">
    <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
    <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
    <span slot="label">待办</span>
  </tabbar-item>
  <tabbar-item  @on-item-click="itemClick(1)">
    <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png">
    <img slot="icon-active" src="../assets/image/ic_nav_tweet_actived.png">
    <span slot="label">经办</span>
  </tabbar-item>
  <tabbar-item  @on-item-click="itemClick(2)">
    <img slot="icon" src="../assets/image/ic_nav_discover_normal.png">
    <img slot="icon-active" src="../assets/image/ic_nav_discover_actived.png">
    <span slot="label">拟稿</span>
  </tabbar-item>
  <tabbar-item @on-item-click="itemClick(3)">
    <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
    <img slot="icon-active" src="../assets/image/ic_nav_my_pressed.png">
    <span slot="label">新建</span>
  </tabbar-item>
</tabbar>

    <!-- <child-tab :data= "tabars" @itemClickonChild="itemClick"></child-tab> -->
</div>
</template>

<script>
import { ViewBox, Cell, CellBox, CellFormPreview, Group, Badge, XHeader, Search, Tabbar, TabbarItem } from 'vux'
import childTab from '@/components/childTab'
import childcell from '@/components/cell'
export default {
  name: 'workflowlist',
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get('/api/mobile/workflowModule/workflowfiles/todoList?s=0&c=50&isAll=1&type=0', {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody.todoList))
        var body = response.data.rspBody.todoList
        self.data = body

      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
  },
  methods: {
    onClick(index){
      // alert(index)
      var strparm = JSON.stringify(this.data[index])
      var tag = this.workTag
      this.$router.push({path:'/WorkflowDetail',query:{data:strparm,tag:tag}})
    },
    itemClick(index){
      this.workTag = index
      var url = ''
      if (index == 0) {
          url = '/api/mobile/workflowModule/workflowfiles/todoList?s=0&c=50&isAll=1&type=0'
      }else if (index == 1) {
        // url = '/api/mobile/workflowModule/workflowfiles/doneList?s=0&c=50&isAll=1&type=myDraft'
          url = '/api/mobile/workflowModule/workflowfiles/doneList?s=0&c=50&isAll=1&type=mySent'
      }else if (index == 2) {
          url = '/api/mobile/workflowModule/workflowfiles/doneList?s=0&c=50&isAll=1&type=myDraft'
      } else {
          this.$router.push('/FlowCreadlist')
      }
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get(url, {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody))
        var body = []
        if (index == 0) {
          body = response.data.rspBody.todoList
        } else if (index == 1) {
          body = response.data.rspBody.doneFileDescVOs
        } else if (index == 2){
          body = response.data.rspBody.doneFileDescVOs
        }
        self.data = body

      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
    },
    getResult(){

    },
    resultClick(){

    }
  },
  data () {
    return {
      tabars: [{
                title:"111"
              },{
                title:"222"
              },{
                title:"333"
              },{
                title:"444"
              }],
      name: '',
      workTag: 0,
      data: [],
      results: [],
      value: ''
    }
  },
  components: {
    ViewBox,
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    XHeader,
    Search,
    Tabbar,
    TabbarItem,
    "child-tab": childTab,
    "child-cell": childcell
    }
}
</script>
<style scoped>


</style>
