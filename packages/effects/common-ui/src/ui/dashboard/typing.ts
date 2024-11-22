import type { Component } from 'vue';

interface AnalysisOverviewItem {
  icon: Component | string;
  title: string;
  totalTitle: string;
  totalValue: number;
  value: number;
}

interface WorkbenchProjectItem {
  readTimes?: string;
  name: string;
  createTime: string;
  downloadTimes: string;
  icon?: Component | string;
  createUser: string;
  img?: string;
}

interface WorkbenchTrendItem {
  avatar: string;
  content: string;
  date: string;
  title: string;
}

interface WorkbenchTodoItem {
  completed: boolean;
  content: string;
  date: string;
  title: string;
}

interface WorkbenchQuickNavItem {
  color?: string;
  icon: Component | string;
  title: string;
  url?: string;
}

export type {
  AnalysisOverviewItem,
  WorkbenchProjectItem,
  WorkbenchQuickNavItem,
  WorkbenchTodoItem,
  WorkbenchTrendItem,
};
