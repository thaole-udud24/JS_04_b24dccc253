let n;
do {
  n = parseInt(prompt("Nhập một số nguyên dương: "), 10);
} while (n <= 0);

if (n % 2 === 0) {
  console.log(`${n} là số chẵn`);
} else {
  console.log(`${n} là số lẻ`);
}
