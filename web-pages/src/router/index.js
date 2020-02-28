import Vue from 'vue'
import Router from 'vue-router'

import Shell from '@/components/common/Shell.vue'
import LogViewer from '@/components/common/LogViewer.vue'

import Data from '@/components/data/Index'
import EditData from '@/components/data/Edit'
import CreateData from '@/components/data/Create'
import PreprocessData from '@/components/data/Preprocessing'

import DataSet from '@/components/dataset/Index'
import EditDataSet from '@/components/dataset/Edit'
import CreateDataSet from '@/components/dataset/Create'

import Preprocessing from '@/components/preprocessing/Index'
import CreatePreprocessing from '@/components/preprocessing/Create'
import EditPreprocessing from '@/components/preprocessing/Edit'
import RunPreprocessing from '@/components/preprocessing/Run'
import PreprocessingHistory from '@/components/preprocessing/PreprocessingHistory'
import PreprocessingHistoryEdit from '@/components/preprocessing/PreprocessingHistoryEdit'

import NotebookIndex from '@/components/notebook/Index'
import CreateNotebook from '@/components/notebook/Create.vue'
import EditNotebook from '@/components/notebook/Edit.vue'
import NotebookFileIndex from '@/components/notebook/FileIndex.vue'

import InferenceIndex from '@/components/inference/Index'
import CreateInference from '@/components/inference/Create'
import EditInference from '@/components/inference/Edit'
import FileIndexInference from '@/components/inference/FileIndex'

import ManageRoleIndex from '@/components/tenant-manage/role/Index'
import ManageRoleCreate from '@/components/tenant-manage/role/Create'
import ManageRoleEdit from '@/components/tenant-manage/role/Edit'

import ManageUserIndex from '@/components/tenant-manage/user/Index'
import ManageUserEdit from '@/components/tenant-manage/user/Edit'

import ManageTenantSetting from '@/components/tenant-manage/tenant/Setting'

import QuotaIndex from '@/components/system-setting/quota/Index'

import ClusterResource from '@/components/system-setting/cluster-resource/Index'
import ClusterResourceEdit from '@/components/system-setting/cluster-resource/Edit'
import ClusterResourceNode from '@/components/system-setting/cluster-resource/Node'
import ClusterResourceTenant from '@/components/system-setting/cluster-resource/Tenant'
import ClusterResourceContainerList from '@/components/system-setting/cluster-resource/ContainerList'

import AccountLogin from '@/components/account/Login'
import AccountSetting from '@/components/account/Setting'
import DashBoardIndex from '@/components/dashboard/Index'
import MenuIndex from '@/components/system-setting/menu/Index'
import ManageMenuIndex from '@/components/tenant-manage/menu/Index'
import Error from '@/components/error/Error'
import ManageResourceIndex from '@/components/tenant-manage/resource/Index'
import VersionIndex from '@/components/version/Index'

import training from '@/router/training'
import git from '@/router/git'
import node from '@/router/node'
import registry from '@/router/registry'
import role from '@/router/role'
import storage from '@/router/storage'
import tenant from '@/router/tenant'
import user from '@/router/user'

Vue.use(Router)

let router = new Router({
  routes: [
    ...training,
    ...git,
    ...node,
    ...registry,
    ...role,
    ...storage,
    ...tenant,
    ...user,
    {
      path: '/login',
      name: 'Login',
      component: AccountLogin,
    },
    {
      path: '/setting',
      name: 'Setting',
      component: AccountSetting,
    },
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoardIndex,
    },
    {
      path: '/data',
      name: 'Data',
      component: Data,
      children: [
        {
          path: 'create',
          component: CreateData,
        },
        {
          path: ':id',
          component: EditData,
          props: true,
        },
        {
          path: ':id/preprocessing',
          component: PreprocessData,
          props: true,
        },
      ],
    },
    {
      path: '/dataset',
      name: 'DataSet',
      component: DataSet,
      children: [
        {
          path: 'create/:parentId?',
          component: CreateDataSet,
          props: true,
        },
        {
          path: ':id',
          component: EditDataSet,
          props: true,
        },
      ],
    },
    {
      path: '/preprocessing',
      name: 'Preprocessing',
      component: Preprocessing,
      children: [
        {
          path: 'create',
          component: CreatePreprocessing,
        },
        {
          path: 'create/:originId?',
          component: CreatePreprocessing,
          props: true,
        },
        {
          path: ':id/edit',
          component: EditPreprocessing,
          props: true,
        },
        {
          path: 'run',
          component: RunPreprocessing,
          props: true,
        },
        {
          path: ':id/:dataId',
          component: PreprocessingHistoryEdit,
          props: true,
        },
        {
          path: ':id/:dataId/shell',
          component: Shell,
          props: true,
        },
      ],
    },
    {
      path: '/preprocessingHistory/:id',
      name: 'preprocessingHistory',
      component: PreprocessingHistory,
      props: true,
      children: [
        {
          path: ':dataId',
          component: PreprocessingHistoryEdit,
          props: true,
        },
        {
          path: ':dataId/shell',
          component: Shell,
          props: true,
        },
        {
          path: ':dataId/log',
          component: LogViewer,
          props: true,
        },
      ],
    },
    {
      path: '/notebook',
      name: 'notebook',
      component: NotebookIndex,
      children: [
        {
          path: 'run/:originId?',
          component: CreateNotebook,
          props: true,
        },
        {
          path: ':id',
          component: EditNotebook,
          props: true,
        },
        {
          path: ':id/files',
          component: NotebookFileIndex,
          props: true,
        },
        {
          path: ':id/shell',
          component: Shell,
          props: true,
        },
        {
          path: ':id/log',
          component: LogViewer,
          props: true,
        },
      ],
    },
    {
      path: '/inference',
      name: 'inference',
      component: InferenceIndex,
      children: [
        {
          path: 'create/:originId?',
          component: CreateInference,
          props: true,
        },
        {
          path: ':id',
          component: EditInference,
          props: true,
        },
        {
          path: ':id/files',
          component: FileIndexInference,
          props: true,
        },
        {
          path: ':id/shell',
          component: Shell,
          props: true,
        },
        {
          path: ':id/log',
          component: LogViewer,
          props: true,
        },
      ],
    },
    {
      path: '/manage/tenant',
      name: 'ManageTenant',
      component: ManageTenantSetting,
    },
    {
      path: '/manage/role',
      name: 'ManageRole',
      component: ManageRoleIndex,
      children: [
        {
          path: 'create',
          component: ManageRoleCreate,
        },
        {
          path: ':id',
          component: ManageRoleEdit,
          props: true,
        },
      ],
    },
    {
      path: '/manage/user',
      name: 'ManageUser',
      component: ManageUserIndex,
      children: [
        {
          path: ':id',
          component: ManageUserEdit,
          props: true,
        },
      ],
    },
    {
      path: '/manage/menu',
      name: 'ManageMenu',
      component: ManageMenuIndex,
    },
    {
      path: '/manage/resource',
      name: 'ManageResource',
      component: ManageResourceIndex,
    },
    {
      path: '/quota',
      name: 'Quota',
      component: QuotaIndex,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuIndex,
    },
    {
      path: '/cluster-resource',
      name: 'ClusterResource',
      component: ClusterResource,
      children: [
        {
          path: '',
          component: ClusterResourceNode,
          children: [
            {
              path: ':id/:name',
              component: ClusterResourceEdit,
              props: true,
            },
          ],
        },
        {
          path: 'tenant',
          component: ClusterResourceTenant,
          children: [
            {
              path: ':id/:name',
              component: ClusterResourceEdit,
              props: true,
            },
          ],
        },
        {
          path: 'container-list',
          component: ClusterResourceContainerList,
          children: [
            {
              path: ':id/:name',
              component: ClusterResourceEdit,
              props: true,
            },
          ],
        },
      ],
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
    },
    {
      path: '/version',
      name: 'Version',
      component: VersionIndex,
    },
  ],
})
/* eslint-disable */
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/error?url=' + to.path)
  } else {
    next()
  }
})

// clear notification
router.afterEach((to, from) => {
  let vue = new Vue()
  vue.$notify.closeAll()
})
/* eslint-enable */

export { router as default }
