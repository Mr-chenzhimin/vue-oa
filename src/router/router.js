import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/message'
import Login from '@/components/Login'
import My from '@/components/my'
import Address from '@/components/Address'
import presoninfo from '@/components/presoninfo'
import workbench from '@/components/workbench'
import  workflowlist from '@/components/workflowlist'
import  FlowCreadlist from '@/components/FlowCreadlist'
import  NewWorkFlow from '@/components/NewWorkFlow'
import  workflowDetail from '@/components/workflowDetail'
import  followDetaild from '@/components/followDetaild'
import  FlowChart from '@/components/FlowChart'
import  noticeList from '@/components/noticeList'
import  noticeDetail from '@/components/noticeDetail'
import  AttachmentList from '@/components/AttachmentList'
import  AttachmentDetail from '@/components/AttachmentDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/message',
      component: Message
    }, {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/Address',
      component: Address
    },
    {
      path: '/PresonInfo',
      component: presoninfo
    },
    {
      path: '/workbench',
      component: workbench
    },
    {
      path: '/workflowlist',
      component: workflowlist
    },
    {
      path: '/FlowCreadlist',
      component: FlowCreadlist
    },
    {
      path: '/NewWorkFlow',
      component: NewWorkFlow
    },
    {
      path: '/WorkflowDetail',
      component: workflowDetail
    },
    {
      path: '/FollowDetaild',
      component: followDetaild
    },
    {
      path: '/FlowChart',
      component: FlowChart
    },
    {
      path: '/NoticeList',
      component: noticeList
    },
    {
      path: '/NoticeDetail',
      component: noticeDetail
    },
    {
      path: '/AttachmentList',
      component: AttachmentList
    },
    {
      path: '/AttachmentDetail',
      component: AttachmentDetail
    }
]

})
