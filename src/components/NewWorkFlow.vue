<template>
  <div class="NewWorkFlow">

    <x-header>新建<a slot="right" @click="onSend()">发送</a></x-header>

    <div v-html="html"></div>



  </div>
</template>

<script>
import { XHeader } from 'vux'
import Tabar from '@/components/Tabar'
export default {
  name: 'NewWorkFlow',
  data () {
    return {
      html: ''
    }
  },
  created () {
      this.$store.commit('isfoo',false)

      let self = this;
      var inboxId = self.$route.query.fildId
      alert(inboxId)
      var userId = localStorage.getItem('userId')
      var token = localStorage.getItem('token')
      this.$http.get('/api/plugins/mobile/workflowfileinbox_moble_newfileshow.jsp?flowId='+inboxId+'&username='+userId+'&tokenId'+token, {
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
    onSend(){

    }
  },
  components: {
      XHeader,
      'main-tabar': Tabar

    }
}
</script>
