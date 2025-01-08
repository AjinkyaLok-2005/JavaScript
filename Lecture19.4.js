const users = [
    {firstName: "ABC", lastName: "DEF", age: 26},
    {firstName: "GHI", lastName: "JKL", age: 75},
    {firstName: "MNO", lastName: "PQR", age: 50},
    {firstName: "STU", lastName: "VWX", age: 26},
]

//list of full names

const output1 = users.map((x) => x.firstName + " " + x.lastName);

console.log(output1);


//acc = {26 : 2, 75 : 1, 50 : 1}

const output2 = users.reduce(function (acc, curr)
{
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age];
    }
    else
    {
        acc[curr.age] = 1;
    }
    return acc;

}, {});

console.log(output2);


//firstName of age less than 30 
const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output3);

