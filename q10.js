var input=require("readline-sync");
varx=input.questionInt("enter number:-");
vary=input.questionInt("enter number:-");
if (varx%vary==0){
    console.log("divisible");
}
else{
    console.log("not divisible");
}