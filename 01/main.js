const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

const fileContent = fs.readFileSync(filePath, 'utf8');

const leftArr = [];
const rightArr = [];

fileContent.split('\n').forEach((line) => {
    const nums = line.split(' ').filter(v => v != '')
    if (nums.length < 2) {
        return;
    }
    leftArr.push(Number(nums[0]));
    rightArr.push(Number(nums[1]));
});

leftArr.sort();
rightArr.sort();

let sum = 0;
const frequencyMap = new Map();
let similarity = 0;


for (let i = 0; i < rightArr.length; i++) {
    if (frequencyMap[rightArr[i]] === undefined) {
        frequencyMap[rightArr[i]] = 0;
    }
    frequencyMap[rightArr[i]]++;
}


for (let i = 0; i < leftArr.length; i++) {
    sum += Math.abs(leftArr[i] - rightArr[i]);
    similarity += leftArr[i] * Number(frequencyMap[leftArr[i]] ?? 0);    
}

console.log(sum, similarity);