var input=require("readline-sync");
ch=input.question("enter:-");
if (ch>"A" && ch<"Z" || ch>"a" && ch<"z"){
    console.log(ch,"it is a alphabet")
}
else if (ch>0 && ch<9){
    console.log(ch,"not a alphabet");
}