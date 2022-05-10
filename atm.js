console.log('welcome to SBl bank');
console.log('insert your card');
var Total=10000
var input=require("readline-sync");
language=input.question('select language');
if (language=="english" || language=="hindi"){
    var pin=5555
	pin=input.questionInt('enter pin');
	if (pin==5555){
        console.log('transaction');
		transaction=input.questionInt('select transaction 1.withdraw 2.deposit 3.total');
		if (transaction==1){
            withdraw=input.questionInt('enter amount');
			var total=Total-withdraw
			console.log('balance is:',total);
        }
		else if (transaction==2){
            deposit=input.questionInt('enter amount');
			var balance=Total+deposit
			console.log('balance is:',balance);
        }
		else if (transaction==3){
            console.log('balance is:',balance);
        }
		else{
			console.log('quite');
        }
    }
    else{
        console.log('incorrect pin');
        }
    }
else{
	console.log('incorrect language');
    }