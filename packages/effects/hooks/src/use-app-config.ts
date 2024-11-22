import type { ApplicationConfig } from '@vben/types/global';

/**
 * 由 vite-inject-app-config 注入的全局配置
 */
export function useAppConfig(): ApplicationConfig {
  return {
    apiURL: 'https://mock-napi.vben.pro/api',
  };
}
