<template>
  <div class="presoninfo">

    <x-header :left-options="{showBack: true}">个人详情</x-header>
    <div align="center" style="margin-top:30px">
          <img  src="http://placeholder.qiniudn.com/640x300" style="width:100px; height:100px; display:block; ">
          <p>{{data.name}}</p>
          <p>{{data.position}}</p>
    </div>
    <group >
      <cell is-link title="手机" :value="data.mobile" @click.native="onClick(data.mobile)"></cell>
      <cell is-link title="部门电话" :value="data.officephone" @click.native="onClick(data.mobile)"></cell>
    </group>

    <group >
      <cell is-link title="邮箱" :value="data.email" @click.native="onClickemail(data.email)"></cell>
      <cell title="部门" :value="data.deptName" ></cell>
      <cell title="生日" :value="data.birthday" ></cell>

    </group>
  </div>
</template>

<script>
import { Cell, Group, XHeader } from 'vux'

export default {
  name: 'presoninfo',
  created () {
      let self = this
      this.$store.commit('isfoo',false)

      var str = self.$route.query.data
      self.data = JSON.parse(str)


  },
  methods: {
    onClick(index){
      if (index) {
        window.location.href = "tel:"+index;
      }
    },
    onClickemail(index){
      if (index) {
        window.location.href = "sms:"+index;
      }

    }
  },
  data () {
    return {
      name: '',
      data: {}
    }
  },
  components: {
    Group,
    Cell,
    XHeader
  }
}
</script>
<style scoped>


</style>
