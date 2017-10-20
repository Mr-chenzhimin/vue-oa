



const state = {

count:1,
isFooter: false, // 是否显示底部

}

const actions = {
  addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    },


}

const mutations = {
      add(state,n){
          state.count+=n;
      },
      reduce(state){
          state.count-=1;
      },
      isfoo: (state, status) => {
      state.isFooter = status
    },

}

export default {
    state,
    actions,
    mutations
}
