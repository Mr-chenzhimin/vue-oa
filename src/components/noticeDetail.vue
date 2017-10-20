<template>
  <div class="noticeDetail">
    <x-header>
          <span>overwrite-left</span>
          <img v-if="attachCount" @click="clickRight" width="25" slot="right" src="../assets/icon_附件图标.png">
        </x-header>
    <div v-html="html"></div>


  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'noticeDetail',
  data () {
    return {
      html: '',
      DetailData: [],
      tag: 0,
      attachCount: ''
    }
  },
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var tag = self.$route.query.tag
      var str = self.$route.query.data
      self.DetailData = JSON.parse(str)
      self.attachCount = self.DetailData.attachCount
      var resourceId = self.DetailData.id
      var token = localStorage.getItem('token')

      this.$http.get('/api/plugins/mobile/bulletins_enter.jsp?resourceId='+resourceId+'&type='+tag+'&tokenId'+token, {
        // headers:{"token": token}
        accept: 'text/html, text/plain'
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data))
        self.html = response.data
      })
      .catch(function (error) {
        console.log(error)
        // alert(JSON.stringify(error))
      })
  },
  methods: {
      clickRight(){
        var fildID = JSON.stringify(this.DetailData.id)
        this.$router.push({path:'/AttachmentList',query:{fildId:fildID,attachType:2}})
      }
  },
  components: {
      XHeader

    }
}
</script>


<style scoped>



</style>
