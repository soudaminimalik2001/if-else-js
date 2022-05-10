var input=require("readline-sync");
num=input.questionInt("enter number:-");
num1=input.questionInt("enter number:-");
num2=input.questionInt("enter number:-");
if (num<num1 && num1>num2){
    console.log(num1,"is maximum");
}
if (num1<num && num>num2){
    console.log(num,"is maximum");
}
if (num<num2 && num2>num1){
    console.log(num2,"is maximum");
}