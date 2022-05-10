let input=require("readline-sync");
var num=input.questionInt("enter number");
if (num<10) {
    console.log("less than 10");
}
else if (num>10 && num<20) {
    console.log("greater than 10");
}
else{
    console.log("greater than 20");
}


