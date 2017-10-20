<template>
  <div class="FlowChart">

    <x-header  :left-options="{showBack: true}">流程图</x-header>

    <div :src="html"></div>

  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'FlowChart',
  data () {
    return {
      html: ''
    }
  },
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var inboxId = self.$route.query.boxId
      var token = localStorage.getItem('token')
      // var url = 'http://oa.sznoda.com:7890/oa/plugins/mobile/workflowFileinbox_mobile_flowshow.jsp?inboxId='+inboxId+'&tokenId'+token
      // self.html = url
      this.$http.get('/api/plugins/mobile/workflowFileinbox_mobile_flowshow.jsp?inboxId='+inboxId+'&tokenId'+token, {
        // headers:{"token": token}
        accept: 'text/html, text/plain'
      })
      .then(function (response) {
        alert(JSON.stringify(response.data))
        self.html = response.data
      })
      .catch(function (error) {
        console.log(error)
        // alert(JSON.stringify(error))
      })
  },
  methods: {

  },
  components: {
      XHeader

    }
}
</script>


<style scoped>



</style>
