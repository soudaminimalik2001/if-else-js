var input=require("readline-sync");
cha=input.question("enter alphabet");
if (cha>'A' || cha<'Z'){
    console.log(cha,"upper case");
}
else if (cha>'a' && cha<'z'){
    console.log(cha,"lower case");
}