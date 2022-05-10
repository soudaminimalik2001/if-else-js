let input=require("readline-sync");
num1=input.questionInt("enter num1:-");
num2=input.questionInt("enter num2:-");
if (num1>num2){
    console.log(num1,"greater than",num2);
}
else{
    console.log(num1,"less than",num2)
}