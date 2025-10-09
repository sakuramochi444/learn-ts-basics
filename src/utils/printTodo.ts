import dayjs from "dayjs";
import type { Todo } from "../types.js";

export const printTodo = ({name, priority, deadline}: Todo): void => {
  const todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
  console.log(todoSummary);
};