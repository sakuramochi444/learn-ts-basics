import type { Todo } from "./types.js";

const todo1: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
};

// ここで行なわれるのは「浅いコピー」、
// つまり「参照」のコピーであることに注意
const todo2 = todo1;

todo2.name = "COBOLの勉強をする";
todo2.priority = 3;

console.log(todo1 === todo2); // 比較結果は「true」

console.log(todo1.name);