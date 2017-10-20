//登录

<template>

<div class="login" id="login">

  <div class="login-logo">
        <img src="../assets/logo.png" />
  </div>

  <div class="login-form">

    <group >
      <x-input required v-model="username" placeholder="用户名">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
      <x-input required v-model="password" placeholder="用户密码">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>


    </group>
    <div class="login-btn">
      <x-button type="primary" @click.native="login">登陆</x-button>
    </div>
  </div>


</div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '../fetch/api'
import { XInput, XButton, Group } from 'vux'

export default {
  components: {
    XInput,
    XButton,
    Group
  },
  created: function () {

    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({ setUserInfo: 'setUserInfo' }),

        // 用户登录
        login(){
            let self = this;
            if (!this.username || !this.password) {
                this.$vux.toast.text('请填写完整')
                return
            }
            this.$http.post('/api/mobile/loginModule', {
              'loginId': this.username,
              'passwd': this.password,
              'appName': 'iphone',
              'mobileVer': '1.0.1',
              'deviceId': '000000'
            })
            .then(function (response) {
              // alert(JSON.stringify(response.data.rspBody))
                var token = response.data.rspBody.tokenId
                var deptName = response.data.rspBody.deptName
                var userId = response.data.rspBody.userId
                var loginId = response.data.rspBody.loginId

                localStorage.setItem('token', token)
                localStorage.setItem('deptName', deptName)
                localStorage.setItem('userId', userId)
                localStorage.setItem('loginId', loginId)
                self.$router.push('/message')

            })
            .catch(function (error) {
              console.log(error)
              // self.$router.push('/message')
              // alert(JSON.stringify(error))
            })

          //   var data = {
          //       'loginId': 'zhimin_chen',
          //       'passwd': '000000',
          //       'appName': 'iphone',
          //       'mobileVer': '1.0.1',
          //       'deviceId': '000000'
          //   }
          //  this.$store.dispatch('setLoadingState', true)
          //   api.Login(data)
          //     .then(res => {
          //           console.log(res)
          //           if(res.success) {
          //               // this.setUserInfo(res.data)
          //               this.$router.replace('/Hello')
          //           }
          //       })
          //     .catch(error => {
          //           console.log(error)
          //           alert('eeee')
          //           this.$router.replace('/Hello')
          //       })
        }
    }
}
</script>





<style scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px
}
.login-logo{
  margin-top: 40px;
}
.login-form{

}
.login-btn{
  margin-top: 40px
}
.common-icon{
  width: 60px;
  height: 60px;
  background-color:red

}
</style>
