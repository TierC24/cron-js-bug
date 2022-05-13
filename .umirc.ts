import { defineConfig } from 'umi';
export default defineConfig({
  mfsu: {},
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/jobGroup',
      redirect: '/jobgroupapplications',
      routes: [
        {
          name: 'jobGroup',
          path: '/jobgroupapplications',
          component: './JobGroupApplications',
        },
      ],
    },
    {
      name: '搜索列表（应用）',
      path: '/listsearchapplications',
      component: './ListSearchApplications',
    },
    {
      name: '卡片列表',
      path: '/listcardlist',
      component: './ListCardList',
    },
    {
      name: '工作台',
      path: '/dashboardworkplace',
      component: './DashboardWorkplace',
    },
    {
      name: '高级表单',
      path: '/formadvancedform',
      component: './FormAdvancedForm',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
  fastRefresh: {},
});
