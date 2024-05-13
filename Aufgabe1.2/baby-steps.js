var nums = [];
let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
    nums.push(Number(process.argv[i]));
}
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum)