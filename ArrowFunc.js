const square = (x) => x * x;
console.log(square(5));

// The reason you don't have to specify the datatype of the 
// parameter x in JavaScript is that JavaScript is a dynamically typed language

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Ajinkya"));

const a = 5;
const b = 3;
const result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result);


//WITHOUT CONSTRUCTOR
// function Person(name)
// {
//     this.name = name;
//     this.sayHello = () => 
//     {
//         console.log(`Hi, I'm ${this.name}`);
//     };
// }


// WITH CONSRTUCTOR
class Person
{
    constructor(name)
    {
        this.name = name;
        // This line assigns the value of the name parameter (passed to the constructor) to the name property of the object.
        // this refers to the specific object being created.
        this.sayHello = () => 
        {
            console.log(`Hi, I'm ${this.name}`);
        };
    }
}


const person = new Person("Ajinkya");
person.sayHello();

const Per = (name) =>
{
    this.name = name;
}

const per = new Per("Ajinkya");

//ARROW FUNCTIONS CANNOT BE USED AS A CONSTRUCTOR