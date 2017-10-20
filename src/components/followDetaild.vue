<template>
  <div class="follwDetaild">
      <x-header  :left-options="{showBack: true}">跟踪信息</x-header>
    <timeline>
        <timeline-item v-for="(i, index) in DetailData" :key="index">
          <div class="right">
            <h4  class="dept">{{i.sendnode}}</h4>
            <p  class="recent">发送人：{{i.sendpeo}}</p>
            <p  class="recent1">处理结果：{{i.processresult}}</p>
            <p  >接收节点：{{i.receivenode}}</p>
            <p  >接收：{{i.receivepeo}}</p>
            <p  >相关信息：{{i.relateinfo}}</p>
            <p  >开始时间：{{i.starttime}}</p>
            <p  >签收时间：{{i.receivetime ? i.receivetime : ''}}</p>
            <p  >送出时间：{{i.sendtime ? i.receivetime : ''}}</p>
          </div>

        </timeline-item>
    </timeline>


  </div>
</template>

<script>
import { XHeader, Timeline, TimelineItem } from 'vux'

export default {
  name: 'follwDetaild',
  data () {
    return {
      html: '',
      DetailData: [],
      dataCurArray:[]
    }
  },
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var inboxId = self.$route.query.boxId

      // alert(inboxId)
      var token = localStorage.getItem('token')

      this.$http.get('/api/mobile/workflowModule/workflowfiles/getfollowinfo?boxId='+inboxId, {
        headers:{"token": token}
      })
      .then(function (response) {
        alert(JSON.stringify(response.data))
        self.dataCurArray = response.data.rspBody.followCurFinfo
        self.DetailData = response.data.rspBody.followInfoVOs
        self.DetailData.reverse()
      })
      .catch(function (error) {
        console.log(error)
        // alert(JSON.stringify(error))
      })
  },
  methods: {

  },
  components: {
      XHeader,
      Timeline,
      TimelineItem

    }
}
</script>


<style scoped>


p{
    color: #888;
    font-size: 0.8rem;
}
h4{
    color: #666;
    font-weight: normal;

}
.recent{

    display: inline;
}
.recent1{
    margin-left: 65px;
    display: inline;
}
.dept{
    color: rgb(4, 190, 2);

}


</style>
