import { isOverdueTodo, formatTodoStatus } from "./utils/isOverdueTodo.js";
import type { Todo } from "./types.js";

// 期限が過去で未完了
const overdueTodo: Todo = {
  name: "基礎物理3の宿題",
  priority: 2,
  isDone: false,
  deadline: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2時間前
};

// 期限が未来で未完了
const futureTodo: Todo = {
  name: "基礎物理3の宿題",
  priority: 1,
  isDone: false,
  deadline: new Date(Date.now() + 1000 * 60 * 60 * 5), // 5時間後
};

// 期限が過去で完了
const doneTodo: Todo = {
  name: "基礎物理3の宿題",
  priority: 3,
  isDone: true,
  deadline: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1時間前
};

console.log(formatTodoStatus(overdueTodo)); // 【未】基礎物理3の宿題 (期限を2時間超過)
console.log(formatTodoStatus(futureTodo));  // 【未】基礎物理3の宿題 (期限まで残り5時間)
console.log(formatTodoStatus(doneTodo));    // 【済】基礎物理3の宿題