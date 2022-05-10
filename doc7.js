let input=require("readline-sync");
alpha=input.question("enter alphabet:-");
if (alpha=="a" || alpha=="e" || alpha=="i" || alpha=="o" || alpha=="u"){
    console.log(alpha,"vowel")
}
else{
    console.log(alpha,"consonat");
}