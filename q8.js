var input=require("readline-sync");
water=input.questionInt("enter water:-");
if (water<1){
    console.log("needs more water");
}
else if (water>1 && water<10){
    console.log("no need to fill")
}
else if (water>10){
    console.log("overflow the water")
}

