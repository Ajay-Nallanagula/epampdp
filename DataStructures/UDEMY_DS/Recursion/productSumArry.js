//add elements of an array and multiply by its depth.

function productSumArry(arr, initDepth =1){
let sum = 0
 if(!Array.isArray(arr)){
    return console.log('Please give input as an array!!')
 }

 for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
       sum = sum+ productSumArry(arr[i], initDepth+1)
    }else{
        sum = (sum+arr[i])
    }
 }

 return sum * initDepth ;
}


const arr = [1,2,[3,2],6,[[2,3],1],7]
console.log(productSumArry(arr))

//16+ 10+2+18 = 46
