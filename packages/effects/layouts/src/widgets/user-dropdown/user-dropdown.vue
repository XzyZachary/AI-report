<script setup lang="ts">
import type { AnyFunction } from '@vben/types';

import type { Component } from 'vue';
import { ref } from 'vue';

import { $t } from '@vben/locales';
import { useVbenModal } from '@vben-core/popup-ui';
import {
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  VbenAvatar,
} from '@vben-core/shadcn-ui';

interface Props {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * @zh_CN 描述
   */
  description?: string;
  /**
   * 是否启用快捷键
   */
  enableShortcutKey?: boolean;
  /**
   * 菜单数组
   */
  menus?: Array<{ handler: AnyFunction; icon?: Component; text: string }>;

  /**
   * 标签文本
   */
  tagText?: string;
  /**
   * 文本
   */
  text?: string;
}

defineOptions({
  name: 'UserDropdown',
});

const props = withDefaults(defineProps<Props>(), {
  avatar: '',
  description: '',
  enableShortcutKey: true,
  menus: () => [],
  showShortcutKey: true,
  tagText: '',
  text: '',
});

const emit = defineEmits<{ logout: [] }>();
const openPopover = ref(false);

const [LogoutModal, logoutModalApi] = useVbenModal({
  onConfirm() {
    handleSubmitLogout();
  },
});

function handleLogout() {
  // emit
  logoutModalApi.open();
  openPopover.value = false;
}

function handleSubmitLogout() {
  emit('logout');
  logoutModalApi.close();
}
</script>

<template>
  <LogoutModal
    :cancel-text="$t('common.cancel')"
    :confirm-text="$t('common.confirm')"
    :fullscreen-button="false"
    :title="$t('common.prompt')"
    centered
    content-class="px-8 min-h-10"
    footer-class="border-none mb-3 mr-3"
    header-class="border-none"
  >
    {{ $t('ui.widgets.logoutTip') }}
  </LogoutModal>

  <DropdownMenu>
    <DropdownMenuTrigger>
      <div class="hover:bg-accent ml-1 mr-2 cursor-pointer rounded-full p-1.5">
        <div class="hover:text-accent-foreground flex-center">
          <VbenAvatar
            :alt="props.text"
            :src="props.avatar"
            class="size-8"
            dot
          />
        </div>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="mr-2 min-w-[240px] p-0 pb-1">
      <DropdownMenuLabel class="flex items-center p-3">
        <VbenAvatar
          :alt="text"
          :src="avatar"
          class="size-12"
          dot
          dot-class="bottom-0 right-1 border-2 size-4 bg-green-500"
        />
        <div class="ml-2 w-full">
          <div
            v-if="props.tagText || props.text || $slots.tagText"
            class="text-foreground mb-1 flex items-center text-sm font-medium"
          >
            {{ text }}
            <slot name="tagText">
              <Badge v-if="props.tagText" class="ml-2 text-green-400">
                {{ props.tagText }}
              </Badge>
            </slot>
          </div>
          <div class="text-muted-foreground text-xs font-normal">
            {{ props.description }}
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        class="mx-1 flex cursor-pointer items-center rounded-sm py-1 leading-8"
        @click="handleLogout"
      >
        {{ $t('preferences.shortcutKeys.logout') }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
