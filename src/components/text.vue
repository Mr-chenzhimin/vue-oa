<template>
  <div class="m">

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

export default {
  name: 'my',
  data () {
    return {

    }
  },
  store,
  components: {


  },
  methods:{
    ...mapMutations([
        'add','reduce'
    ]),
    ...mapActions(['addAction','reduceAction'])
},

}
</script>
