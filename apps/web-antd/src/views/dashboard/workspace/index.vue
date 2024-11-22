<script lang="ts" setup>
import type { WorkbenchProjectItem } from '@vben/common-ui';

import { WorkbenchHeader, WorkbenchProject } from '@vben/common-ui';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';

const userStore = useUserStore();

// 这是一个示例数据，实际项目中需要根据实际情况进行调整
// url 也可以是内部路由，在 navTo 方法中识别处理，进行内部跳转
// 例如：url: /dashboard/workspace
const projectItems: WorkbenchProjectItem[] = [
  {
    readTimes: '2021-04-01',
    name: '学业成绩报告',
    createTime: '2021-04-01',
    downloadTimes: '2021-04-01',
    createUser: 'xzy',
    img: '',
  },
  {
    readTimes: '2021-04-01',
    name: '学业成绩报告',
    createTime: '2021-04-01',
    downloadTimes: '2021-04-01',
    createUser: 'xzy',
    img: '',
  },
  {
    readTimes: '2021-04-01',
    name: '学业成绩报告',
    createTime: '2021-04-01',
    downloadTimes: '2021-04-01',
    createUser: 'xzy',
    img: '',
  },
  {
    readTimes: '2021-04-01',
    name: '学业成绩报告',
    createTime: '2021-04-01',
    downloadTimes: '2021-04-01',
    createUser: 'xzy',
    img: '',
  },
  {
    readTimes: '2021-04-01',
    name: '学业成绩报告',
    createTime: '2021-04-01',
    downloadTimes: '2021-04-01',
    createUser: 'xzy',
    img: '',
  },
  {
    readTimes: '2021-04-01',
    name: '学业成绩报告',
    createTime: '2021-04-01',
    downloadTimes: '2021-04-01',
    createUser: 'xzy',
    img: '',
  },
];
</script>

<template>
  <div class="p-5">
    <WorkbenchHeader
      :avatar="userStore.userInfo?.avatar || preferences.app.defaultAvatar"
    >
      <template #title>
        早安, {{ userStore.userInfo?.realName }}, 开始您一天的工作吧！
      </template>
      <template #description> 今日晴，20℃ - 32℃！ </template>
    </WorkbenchHeader>

    <div class="mt-5">
      <div class="mr-4 w-full lg:flex-row">
        <WorkbenchProject :items="projectItems" title="最新定期报告" />
      </div>
      <div class="mr-4 mt-4 w-full lg:flex-row">
        <WorkbenchProject :items="projectItems" title="我的报告" />
      </div>
      <!-- <div class="w-full lg:w-2/5">
        <WorkbenchQuickNav
          :items="quickNavItems"
          class="mt-5 lg:mt-0"
          title="快捷导航"
          @click="navTo"
        />
        <WorkbenchTodo :items="todoItems" class="mt-5" title="待办事项" />
        <AnalysisChartCard class="mt-5" title="访问来源">
          <AnalyticsVisitsSource />
        </AnalysisChartCard>
      </div> -->
    </div>
  </div>
</template>
