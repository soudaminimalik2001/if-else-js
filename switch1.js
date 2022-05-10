var input=require("readline-sync");
var age=input.questionInt("enter age:");
switch (age){
    case (age>=5):
        console.log("you can go to school");
        break;
    case (age>=18):
        console.log("you can give vote");
        break;
    case (age>=21):
        console.log("you can drive");
        break;
    case (age>=24):
        console.log("you can marriage");
        break;
    case (age>=25):
        console.log("you can drink");
        break;
    default:
        console.log("enter valid age");
}