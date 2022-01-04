var value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 20);
}

console.log(sum);