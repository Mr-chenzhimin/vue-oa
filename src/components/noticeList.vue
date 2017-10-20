<template>
<div class="noticeList" style="height:100%">

 <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>
 <div>
  <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="click"></actionsheet>
</div>
<view-box ref="viewBox" >
    <group >
          <child-cell :data= "data" @cellClickonChild="onClick"></child-cell>
    </group>
</view-box>

</div>
</template>

<script>
import { ViewBox, Cell, Group, XHeader, Actionsheet } from 'vux'
import childcell from '@/components/cell'
export default {
  name: 'noticeList',
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get('/api/mobile/bulletins/getBullNewsCatalog', {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody.todoList))
        var body = response.data.rspBody
        for (var index in body) {
          if (body.hasOwnProperty(index)) {
              var name = body[index].name
              if (name != '内部招聘') {
                self.menus.push(name)
              }

          }
        }
      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
      self.click()
  },
  methods: {
    onClick(index){
      // alert(index)
      var strparm = JSON.stringify(this.data[index])
      var tag = this.tag
      alert(tag)
      this.$router.push({path:'/NoticeDetail',query:{data:strparm,tag:tag}})
    },
    click(key, item){

      if (key) {
        this.tag = key
      }else {
        this.tag = 0
      }
      if (item) {
        this.title = item;
      }else {
        this.title = '最新公告'
      }

      var url = '/api/mobile/bulletins/getBulletinsList?s=0&c=50&title='+this.title
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get(url, {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody))
        var body = response.data.rspBody.bulletinsVOs
        self.data = body

      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
    }
  },
  data () {
    return {
      menus: [],
      showMenus: false,
      name: '',
      data: [],
      tag: 0,
      title: '最新公告'
    }
  },
  components: {
    ViewBox,
    Group,
    Cell,
    XHeader,
    "child-cell": childcell,
    Actionsheet
    }
}
</script>
<style scoped>


</style>
