var input=require("readline-sync");
num=input.questionInt("enter number:-");
if (num<1 && num!=0){
    console.log(num,"is negative");
}
else if (num>1){
    console.log(num,"is positive");
}
else if (num==0){
    console.log(num,"is zero");
}