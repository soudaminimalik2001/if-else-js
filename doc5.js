let input=require("readline-sync");
year=input.questionInt("enter number:-");
if (year%4==0 && year%100!=0 || year%400==0){
    console.log(year,"leap year");
}
else{
    console.log(year,"not a leap year")
}
