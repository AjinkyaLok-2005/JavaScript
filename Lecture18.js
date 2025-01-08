const radius = [3, 5, 8, 2];

const area = function(radius)
{
    return Math.PI * radius * radius;
}

const circumference = function(radius)
{
    return 2 * Math.PI * radius;
}

const diameter = function(radius)
{
    return radius * radius;
}

Array.prototype.calculate = function(logic)
// The calculate function is the higher-order function because it 
// takes another function (logic) as an argument and uses it within its 
// implementation.
{
    const output = [];
    for(let i = 0; i < this.length; i++)
    {
        output.push(logic(this[i]));
    }
    
    return output;
}

console.log(radius.map(area));

console.log(radius.calculate(area));//SIMILAR IMPLEMENTATION LIKE MAP FUNCTION


// console.log("Areas are ", calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));const radius = [3, 5, 8, 2];

const area = function(radius)
{
    return Math.PI * radius * radius;
}

const circumference = function(radius)
{
    return 2 * Math.PI * radius;
}

const diameter = function(radius)
{
    return radius * radius;
}

Array.prototype.calculate = function(logic)
// The calculate function is the higher-order function because it 
// takes another function (logic) as an argument and uses it within its 
// implementation.
{
    const output = [];
    for(let i = 0; i < this.length; i++)
    {
        output.push(logic(this[i]));
    }
    
    return output;
}

console.log(radius.map(area));

console.log(radius.calculate(area));//SIMILAR IMPLEMENTATION LIKE MAP FUNCTION


// console.log("Areas are ", calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));