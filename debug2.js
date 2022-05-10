var input=require("readline-sync");
num=input.questionInt("enter number");
if (num%3==0){
    console.log("choco");
}
else if (num%7==0){
    console.log("late");
}
else if (num%3==0 || num%7==0){
    console.log("chocolate")
}
else{
    console.log("not divisible")
}