import type { Todo } from "../types.js";

// 期限超過判定関数
export const isOverdueTodo = (todo: Todo): boolean => {
  return !todo.isDone && new Date() > todo.deadline;
};

// 状態付き文字列生成関数
export const formatTodoStatus = (todo: Todo): string => {
  const now = new Date();
  const hoursDiff = Math.floor(Math.abs(now.getTime() - todo.deadline.getTime()) / (1000 * 60 * 60));
  if (todo.isDone) {
    return `【済】${todo.name}`;
  } else if (now <= todo.deadline) {
    return `【未】${todo.name} (期限まで残り${hoursDiff}時間)`;
  } else {
    return `【未】${todo.name} (期限を${hoursDiff}時間超過)`;
  }
};