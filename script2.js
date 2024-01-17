function countNumberWithView(number) {
    let count = 0;

    for (let i = 0; i < number.length; i++) { //Boucle (for avec i) : Parcourt chaque nombre dans la liste numbers.
        let hasView = true;
        
        for (let j = i + 1; j < number.length; j++) {
            if (number[j] >= number[i]) {
                hasView = false;
                break;
            }
        }

        if (hasView) {
            count++;
        }
    }

    return count;
}


const number1 = [3, 7, 8, 3, 6, 1];
const result1 = countNumberWithView(number1);

const number2 = [1, 4, 5, 8];
const result2 = countNumberWithView(number2);

console.log(result1);
console.log(result2); 
