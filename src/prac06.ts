import dayjs from "dayjs";

const dtFmt = "YYYY/MM/DD(dd) HH:mm";
const deadline: Date = new Date(2025, 9, 2, 14, 15);
const createdAt: Date = new Date(2025, 8, 25, 9, 45);

const str =
  `期限 ${dayjs(deadline).format(dtFmt)}` +
  `(登録日 ${dayjs(createdAt).format(dtFmt)})`;
console.log(str);