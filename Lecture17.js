console.log("Start");

setTimeout(function cb()
{
    console.log("Callback");
}, 5000);


//EVEN IF THE DURATION IS 0 MILLISEC THEN ALSO IT NEEDS TO MOVE IN THE CALLBACK QUEUE
// setTimeout(function cb()
// {
//     console.log("Callback");
// }, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000)
{
    endDate = new Date().getTime();
}

console.log("While Expires");
