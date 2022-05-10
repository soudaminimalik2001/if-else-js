let b=require("readline-sync")
let a=b.question("enter pw")

if (a.length>5 && a.length<15){
    if (a>"A" && a<"Z" || a>"a" && a<"z" || a>0 || a=="@" || a=="#" || a=="₹" || a=="$" || a=="*"){
        console.log("strong password")
    }
    else{
        console.log("no")
    } 
}
