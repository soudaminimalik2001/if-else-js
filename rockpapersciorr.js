var input=require("readline-sync");
var a=["rock","paper","scissors"]
var randomname=a[Math.floor(Math.random() * a.length)];;
var name=input.question("what is your name:-");
console.log("Hii",name);
console.log("choose one of the element:");
var elementname=input.question("enter name:-");
if (randomname==elementname){
    console.log("match draw:");
}
else if(elementname =="rock" && randomname == "paper"){
    console.log("computer won the match");
 }
 else if(elementname=="rock" && randomname == "scissors"){
    console.log(playerName+" Won the match");
 }
 else if(elementname=="scissors" && randomname == "rock"){
    console.log("computer won the match");
 }
 else if(elementname=="scissors" && randomname == "paper"){
    console.log(playerName+" Won the match");
 }
 else if(elementname=="paper" && randomname == "rock"){
    console.log(playerName+" Won the match");
 }
 else if(elementname=="paper" && randomname == "scissors"){
    console.log("computer won the match");
 }