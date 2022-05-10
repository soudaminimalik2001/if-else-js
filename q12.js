var input=require("readline-sync");
num=input.questionInt("enter number:-");
if (num%5==0 || num%15==0){
    console.log(num,"divisible by both")
}
else{
    console.log(num,"not divisible by both")
}