<template>
  <div class="WorkflowDetail">

    <x-header  :left-options="{showBack: true}">公文处理</x-header>

    <div v-html="html"></div>

    <child-tabar :data= "tabars" @itemClickonChild="itemClick"></child-tabar>

  </div>
</template>

<script>
import { XHeader } from 'vux'
import childTabar from '@/components/childTab'

export default {
  name: 'WorkflowDetail',
  data () {
    return {
      html: '',
      DetailData: [],
      tabars: [],
      tag: 0
    }
  },
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var tag = self.$route.query.tag
      var str = self.$route.query.data
      self.DetailData = JSON.parse(str)
      self.tag = tag
      var inboxId = self.DetailData.inboxId
      // alert(inboxId)
      var userId = localStorage.getItem('userId')
      var token = localStorage.getItem('token')
      var url = ''

      if (tag == 0) {
          self.tabars =[{
                    title:"111"
                  },{
                    title:"222"
                  },{
                    title:"333"
                  },{
                    title:"444"
                  }]
          url = '/api/plugins/mobile/workflowFileinbox_mobile_form_enter.jsp?type=0&boxId='+inboxId+'&tokenId'+token
      } else {
        self.tabars =[{
                  title:"跟踪"
                },{
                  title:"流程图"
                }]
          url = '/api/plugins/mobile/workflowFileinbox_mobile_form_enter.jsp?boxId='+inboxId+'&tokenId'+token
      }

      this.$http.get('/api/plugins/mobile/workflowFileinbox_mobile_form_enter.jsp?boxId='+inboxId+'&tokenId'+token, {
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
      itemClick(index){
          if (this.tag == 0) {
              if (index == 0) {

              } else if (index== 1) {

              } else if (index == 2) {

              } else {

              }
          } else {
              if (index == 0) {
                  var boxid = this.DetailData.inboxId
                  this.$router.push({path:'/FollowDetaild',query:{boxId:boxid}})
              } else {
                var boxid = this.DetailData.inboxId
                this.$router.push({path:'/FlowChart',query:{boxId:boxid}})
              }
          }
      }
  },
  components: {
      XHeader,
      'child-tabar': childTabar

    }
}
</script>


<style scoped>



</style>
