const list1 = [10, 15, 3, 7];
const list2 = [1, 8, 10, 21];
const k1 = 17;
const k2 = 19;



function pairSum(numbers, k) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                return true;
            }
        }
    }
    return false;
}


const result1 = pairSum(list1, k1);
const result2 = pairSum(list2, k2);

console.log(result1); 
console.log(result2); 
