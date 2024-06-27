
function selectionSort(array){
 for(i=0;i<array.length;i++){
    let indexMin=i;
    for(j=i+1;j<array.length;j++){
        if(array[j]<array[indexMin]){
            indexMin=j
        }
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
 }
 return array
}

function binarySearch(array,item){
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while(found ===false && start<=end){
        middle=Math.floor((start+end)/2)
        if(array[middle]===item){
            found=true
            position = middle
            return position
        }
        if(item<array[middle]){
           end = middle-1
        }else{
            start=middle+1
        }
    }
    return position
}
let arr=[6,1,7,3,5,8,0,-1,3,2,4,5] 
selectionSort(arr)
console.log(arr.join(" "))
console.log("Индекс элемента 0: "+binarySearch(arr,0))