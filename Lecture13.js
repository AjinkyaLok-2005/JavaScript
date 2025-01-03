a();
b();

//Function Statement aka Function Declaration
function a()
{
    console.log("a called");
}

//Function Expression
var b = function b()
{
    console.log("b called");
}

//MAIN DIFFERENCE BETWEEN ABOVE TWO ARE 1ST GIVES O/P BUT 2ND WILL NOT 
//SUPPORT HOISTING

//Named Function Expression

var b = function xyz()
{
    console.log(xyz);
}

// xyz();//this will give error (undefined) b/c func xyz not declared in 
//GLOBAL SCOPE
//we can access this func inside the xyz func


//Difference between PARAMETERS and ARGUMENTS 

function d(param1, param2)
//values that we pass in the func at the time of func declaration->parameters
{

}

d(1, 2)//value that we pass in the func at the time of func call->arguments


//First Class Functions
