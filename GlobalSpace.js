var a = 10;
function b()
{
    var x = 10;
}

console.log(window.a);
console.log(a);
console.log(this.a);
//both above will give same answer 
//AT GLOBAL LEVEL THIS POINTS TO WINDOW
//SEARCHES FOR THE VARIABLE A IN THE GLOBAL SPACE(HERE->WINDOW)
console.log(x)
//will throw error
//THIS IS B/C X IS NOT DECLARED IN THE GLOBAL SPACE 