const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const first_part = arr.slice(0, middle);
    const second_part = arr.slice(middle);
    const leftSort = mergeSort(first_part);
    const rightSort = mergeSort(second_part);

    return merge(leftSort, rightSort);
}

function merge(left, right) {
    let res = [];
    let leftI = 0;
    let rightI = 0;

    while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            res.push(left[leftI]);
            leftI++;
        } else {
            res.push(right[rightI]);
            rightI++;
        }
    }
    return res.concat(left.slice(leftI), right.slice(rightI));
}

rl.question('Введіть елементи: ', (input) => {
    const array = input.split(' ').map(Number);
    const sortedArray = mergeSort(array);
    console.log('Результат:', sortedArray);

    rl.close();
});
