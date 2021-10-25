function fizzBuzz(num){
    if(Number.isNaN(num)){
        return num;
    } else if(num % 3 === 0 && num % 5 ===0){
        return 'FizzBuzz';
    } else if(num % 3 === 0){
        return 'Fizz'
    } else if (num % 5 === 0){
        return 'Buzz';
    } else{
        return num;
    }
}

console.log(fizzBuzz('a'));

for(let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
}

// Tudo acima foi feito por mim
