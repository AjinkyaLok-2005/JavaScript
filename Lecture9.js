// if(true)
// {
//     //compound statement   //the part in {} is a block
//     var a = 10;
//     console.log(a);
// }

var a = 100;
{
    var a = 10;   //global scope //var a is shadowed 
    let b = 20;   // block scope - has seperate memory space
    const c = 30; // block scope - has seperate memory space
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// SHADOWING :- Shadowing in JavaScript doesn't mean "modifying" a variable, 
//              but rather declaring a new variable with the same name in a 
//              different scope, which "shadows" the original variable.