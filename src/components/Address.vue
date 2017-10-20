<template>
  <div class="address" style="height:100%">

    <x-header :left-options="{showBack: showback, preventGoBack: true}" @on-click-back="clickBack">通讯录</x-header>
<view-box ref="viewBox" >
    <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"></search>

  <div class="box2">
    <group >
        <cell is-link v-for="item in data" :key="item.id" v-if="item.type == 0" :title="item.name" @click.native="onClick(item.id)"></cell>
        <cell v-else :title="item.name" is-link :inline-desc="item.position" @click.native="presonClick(item)">
          <img slot="icon" width="35" style="display:block;margin-right:5px;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
        </cell>
    </group>
</div>

</view-box>
  </div>
</template>

<script>
import { ViewBox, Cell, CellBox, CellFormPreview, Group, Badge, XHeader, Search } from 'vux'

export default {
  name: 'address',
  created () {
      this.$store.commit('isfoo',true)
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get('/api/mobile/addressModule/deptNav?deptId=2', {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody))
        var body = response.data.rspBody
        self.data = body

      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
  },
  methods: {

    onSubmit () {
     this.$refs.search.setBlur()
    },
    onClick(index){

        let self = this;
        var token = localStorage.getItem('token')
        self.deptId.push(index)
        this.$http.get('/api/mobile/addressModule/deptNav?deptId='+index, {
          headers:{"token": token}
        })
        .then(function (response) {
          // alert(JSON.stringify(response.data.rspBody))
          var body = response.data.rspBody
          self.data = body
          self.showback = true
        })
        .catch(function (error) {
          console.log(error)
          alert(JSON.stringify(error))
        })
    },
    presonClick(parm){
        var strparm = JSON.stringify(parm)
        this.$router.push({path:'/PresonInfo',query:{data:strparm}})
    },
    clickBack(){
        let self = this;
        self.deptId.pop();
        var id = self.deptId[self.deptId.length-1]

        if (id == 2) {
          self.showback = false
        }
        var token = localStorage.getItem('token')
        this.$http.get('/api/mobile/addressModule/deptNav?deptId='+id, {
          headers:{"token": token}
        })
        .then(function (response) {
          // alert(JSON.stringify(response.data.rspBody))
          var body = response.data.rspBody
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
      name: '',
      deptId: ['2'],
      showback: false,
      data: [],
    }
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    XHeader,
    Search,
    ViewBox
    }
}
</script>
<style scoped>


</style>
