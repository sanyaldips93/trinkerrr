// Space - 0(m) where m is the bigger number
// Time - 0(m^2) where m is the bigger number
function backToBinary(num1, num2) {
    // change from binary to decimal
    const dec1 = binaryToDecimal(num1);
    const dec2 = binaryToDecimal(num2);

    // get the list of the numbers
    const list = generateArrayBetweenTwoNumber(dec1, dec2);

    // find prime numbers and return
    return findListOfPrimeNumbers(list);
}

function binaryToDecimal(num1) {
    return parseInt(String(num1), 2);
}

function generateArrayBetweenTwoNumber(dec1, dec2) {
    const array = [];
    for(let i=dec1; i<=dec2; i++) {
        array.push(i);
    }
    return array;
}

function findListOfPrimeNumbers(list) {
    const res = [];

    for(let i=0; i<list.length; i++) {
        const number = list[i];
        let isPrime = true;
        
        if(number === 1) continue;
        else if(number > 1){
            for(let j=2; j<number; j++) {
                if(number % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) {
                
                res.push(number);
            }
        }
    }
    return res;
}

console.log(backToBinary(101, 11111));