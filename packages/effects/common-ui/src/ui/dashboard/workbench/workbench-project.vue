<script setup lang="ts">
import type { WorkbenchProjectItem } from '../typing';

import { Ellipsis, FileUp, Settings } from '@vben/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@vben-core/shadcn-ui';

interface Props {
  items: WorkbenchProjectItem[];
  title: string;
}

defineOptions({
  name: 'WorkbenchProject',
});

withDefaults(defineProps<Props>(), {
  items: () => [],
});

defineEmits(['click']);
</script>

<template>
  <Card>
    <CardHeader class="py-4">
      <CardTitle class="text-lg">{{ title }}</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-wrap p-0">
      <template v-for="(item, index) in items" :key="item.title">
        <div
          :class="{
            'border-r-0': index % 3 === 2,
            'border-b-0': index < 3,
          }"
          class="border-border group w-full cursor-pointer border-b border-r border-t pb-0 pl-4 pr-4 pt-4 transition-all hover:shadow-xl md:w-1/2 lg:w-1/3"
        >
          <div>
            <img
              alt="example"
              class="w-full"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </div>
          <div class="mb-2 mt-2">测试报告</div>
          <div class="border-t">
            <ul class="flex">
              <li
                class="mb-4 mt-4 flex justify-center border-e leading-6 lg:w-1/3"
              >
                <FileUp class="size-4 text-gray-400" />
              </li>
              <li
                class="mb-4 mt-4 flex justify-center border-e leading-6 lg:w-1/3"
              >
                <Settings class="size-4 text-gray-400" />
              </li>
              <li class="mb-4 mt-4 flex justify-center leading-6 lg:w-1/3">
                <Ellipsis class="size-4 text-gray-400" />
              </li>
            </ul>
          </div>
          <div>
            <!-- <img alt="example" src="https://joeschmoe.io/api/v1/random" /> -->
          </div>
          <!-- <div
            class="v-card hover:border-primary flex w-full cursor-pointer flex-col rounded border-2 border-solid border-transparent p-2 pb-0"
            style="height: 378px"
          >
            <div
              class="bg-base-900 box-border flex w-full justify-center overflow-hidden rounded p-3 pb-0"
              style="height: 247px"
            >
              <img :src="item.img" alt="" class="block h-full rounded-sm" />
            </div>
            <div class="flex-1 p-3 pb-0" style="height: 113px">
              <div class="text-base-content truncate text-sm">
                <el-tooltip
                  :content="item.name"
                  effect="light"
                  placement="bottom"
                >
                  {{ item.name }}
                </el-tooltip>
              </div>
              <div class="text-base-500 mt-3 text-xs">
                {{ item.createTime }} {{ item.createUser }} 创建
              </div>
            </div>
          </div> -->
        </div>
      </template>
    </CardContent>
  </Card>
</template>
