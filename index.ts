//largest number among array
var num = [4,5,1,3];
console.log(Math.max.apply("Largest Number is",num)); 

// by using loop
var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest:number= 0;
var i:number;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log("largest numbetr is :" + largest);

//reverse array 
var arr = [0, 1, 2, 3].reverse(); 
console.log("Reversed array is : " + arr );

// Prime Number for n digits
var enterNumber : any = prompt ("Enter number: ");
for(var i=2; i<=enterNumber ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    }
