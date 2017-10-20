<template>
  <div class="AttachmentList" style="height:100%">

    <x-header :left-options="{showBack: true}" >附件列表</x-header>
<view-box ref="viewBox" >

  <div class="box2">
    <group >
      <cell is-link v-for="(item, index) in data" :key="item.id"
            :title="item.name"
            @click.native="onClick(index)">
            <img slot="icon" width="30" style="display:block;margin-right:10px;" src="../assets/p50.png">
            <img  width="25" v-if="item.attachCount" style="display:inline" src="../assets/icon_附件图标.png">
            <div slot="inline-desc">

                <label>{{parseInt((item.size)/1024)}}kb</label>

            </div>
        </cell>
    </group>
</div>

</view-box>
  </div>
</template>

<script>
import { ViewBox, Cell, CellBox, CellFormPreview, Group, Badge, XHeader } from 'vux'

export default {
  name: 'AttachmentList',
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      self.fildID = self.$route.query.fildId
      self.attachType = self.$route.query.attachType
      var urlAddress = ''
      if (self.attachType == 1) {  //消息
          urlAddress = "/api/mobile/message/findAttachs?s=0&c=50&msgId="+self.fildID
      } else if (self.attachType == 2) {  // 公告
          urlAddress = "/api/mobile/bulletins/findAttachs?s=0&c=50&bulletinsId="+self.fildID
      } else {  //  工作流
          urlAddress = "/api/mobile/workflowModule/attachs?s=0&c=50&fid="+self.fildID
      }
      self.path = urlAddress
      var token = localStorage.getItem('token')
      this.$http.get(urlAddress, {
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

    onClick(index){
      var ext = this.data[index].ext
      this.ext = parseInt(ext/1024)
      this.$router.push({path:'/AttachmentDetail',query:{ext:this.ext,path: this.path,fildID: this.fildID }})

    }

  },
  data () {
    return {
      name: '',
      data: [],
      attachType: '',
      fildID: '',
      ext: '',
      path: ''
    }
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    XHeader,
    ViewBox
    }
}
</script>
<style scoped>


</style>
