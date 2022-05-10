let input=require("readline-sync");
num=input.questionInt("enter number:-");
if (num%2==0){
    console.log(num,"even");
}
else if (num%2!=0){
    console.log(num,"odd");
}