import { date2str } from "./utils/date2str.js"; // 関数date2strをインポート

const deadline: Date = new Date(2025, 9, 2, 14, 15);
const createdAt: Date = new Date(2025, 8, 25, 9, 45);

let str = `期限 ${date2str(deadline)} (登録日 ${date2str(createdAt)})`;
console.log(str);