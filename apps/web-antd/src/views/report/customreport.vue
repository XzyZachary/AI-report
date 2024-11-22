<script lang="ts" setup>
import { ref } from 'vue';

import { Page, useVbenModal } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

const list = ref<number[]>([]);
const [Modal, modalApi] = useVbenModal({
  draggable: true,
  onCancel() {
    modalApi.close();
  },
  onOpenChange(isOpen) {
    if (isOpen) {
      handleUpdate(10);
    }
  },
  onConfirm() {
    message.info('onConfirm');
    // modalApi.close();
  },
});

function handleUpdate(len: number) {
  modalApi.setState({ loading: true });
  setTimeout(() => {
    list.value = Array.from({ length: len }, (_v, k) => k + 1);
    modalApi.setState({ loading: false });
  }, 2000);
}

const openBaseModal = () => {
  modalApi.open();
};
</script>

<template>
  <Page description="根据已有的报告模版进行生成" title="自定义报告">
    <template #extra>
      <Button type="primary" @click="openBaseModal">打开弹窗</Button>
    </template>
    <Modal class="w-1/2" title="新建报告">
      <div class="flex w-full flex-wrap justify-center">
        <div
          v-for="item in list"
          :key="item"
          class="even:bg-heavy bg-muted flex-center m-2 h-[220px] w-[30%]"
        >
          {{ item }}
        </div>
      </div>
    </Modal>
  </Page>
</template>
