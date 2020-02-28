import Index from '@/views/system-setting/user/Index'
import Edit from '@/views/system-setting/user/Edit'

export default [
  {
    path: '/user',
    name: 'User',
    component: Index,
    children: [
      {
        path: 'edit/:id?',
        component: Edit,
        props: true,
      },
    ],
  },
]
