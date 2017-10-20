<template>
  <div class="FlowCreadlist">

    <x-header :left-options="{showBack: true}" >新建公文</x-header>
    <group >


      <!-- <cell is-link v-for="item in data" :key="item.id" :title="item.name"  @click.native="onClick(item.id)"></cell> -->
      <div class="CellBox"  v-for="item in catetoryName" :key="item.id">
        <cell
        :title="item.catetoryName"
        is-link
        :border-intent="false"
        :arrow-direction="item.catetoryName == name ? 'up' : 'down'"
        @click.native="onClick(item.catetoryName)">
        <img slot="icon" width="35" style="display:block;margin-right:5px;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
        </cell>

        <template v-if="item.catetoryName == name">
          <cell :title="item1.fileosName" v-for="item1 in data" :key="item1.id" is-link @click.native="subClick(item1.fileID)">
            <img slot="icon" width="20" style="display:block;margin-left:15px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
          </cell>

        </template>
      </div>

    </group>
  </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge, XHeader, Search } from 'vux'

export default {
  name: 'FlowCreadlist',
  created () {
      this.$store.commit('isfoo',false)
      let self = this;
      var token = localStorage.getItem('token')
      this.$http.get('/api/mobile/workflowModule/workflowfiles/newFilelist?fT=0&fI=0', {
        headers:{"token": token}
      })
      .then(function (response) {
        // alert(JSON.stringify(response.data.rspBody.newFilelist))
        var tmp = new Array();
        self.object = response.data.rspBody.newFilelist
        self.catetoryName = self.getfileCaretoryname('')

      })
      .catch(function (error) {
        console.log(error)
        alert(JSON.stringify(error))
      })
  },
  methods: {
      onClick(index){
        this.name = index
        this.data = this.getfileCaretoryname(index)
      },
      subClick(id){
        this.$router.push({path:'/NewWorkFlow',query:{fildId:id}})
      },
      getfileCaretoryname(name){

        var  array = new Array()

        if (!name) {
          array.push(this.object[0])
          for (var i = 1; i < this.object.length; i++) {
            var isdouble = 'false'
            var dict = this.object[i]
            var arr = dict.catetoryName
            for (var j = 0; j < array.length; j++) {
              var arr1 = array[j].catetoryName
              if (arr == arr1) {
                isdouble = 'true'
                break;
              }
            }
            if (isdouble == 'false') {
                array.push(this.object[i])
            }
          }
        }else {

          for (var i = 0; i < this.object.length; i++) {
            var dict = this.object[i]
            var arr = dict.catetoryName
            if (name == arr ) {
                array.push(this.object[i])
            }
          }

        }
        return array
      }

  },
  data () {
    return {
      name: '',
      catetoryName: [],
      showback: false,
      data: [],
      object: []
    }
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    XHeader,
    Search
    }
}
</script>
<style scoped>


</style>
