var input=require("readline-sync");
age=input.questionInt("enter age:-");
if (age>=5){
    console.log("you can go to school");
}
if (age>=18){
    console.log("you can vote in election");
}
if (age>=21){
    console.log("you can drive");
}
if (age>=24){
    console.log("you can marry");
}
if (age>=25){
    console.log("you can drink legally")
}