<template>
  <div class="my">

    <x-header :left-options="{showBack: false}">我的</x-header>
    my
    <h3>{{$store.state.text.count}}</h3>
    <div>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
    </div>



  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapActions} from 'vuex';
import { XHeader } from 'vux'
import Tabar from '@/components/Tabar'
export default {
  name: 'my',
  data () {
    return {

    }
  },
  created () {
      this.$store.commit('isfoo',true)
  },
  store,
  components: {
      XHeader,
      'main-tabar': Tabar,

  },
  methods:{
    ...mapMutations([
        'add','reduce'
    ]),
    ...mapActions(['addAction','reduceAction'])
},
computed: {

}

  //computed:mapState(["count"])
}
</script>
