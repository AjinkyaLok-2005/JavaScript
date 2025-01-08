const arr = [5, 1, 3, 2, 6];

function isOdd(x)
{
    return x % 2; //Returns true (1) for odd numbers,false (0) for even numbers
}

function isEven(x)
{
    return x % 2 === 0;
}

const output = arr.filter(isOdd);

const output1 = arr.filter((x) => x < 3);

console.log(output);
console.log(output1);