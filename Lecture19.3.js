const arr = [5, 1, 3, 2, 6];

function findSum(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr)
{
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);
//acc(umulator) is acting as sum and curr(ent) is arr[i]

//BOTH THE ABOVE FUNCTIONS GIVE THE SAME RESULT
//2ND FUNCTION IS IMPLEMENTED WITH THE REDUCE FUNCTION