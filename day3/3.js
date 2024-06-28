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

let arr=[[1,4,5],[1,3,4],[2,6]]
let newArr=[]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
        newArr.push(arr[i][j])
    }
}
selectionSort(newArr)
console.log('Новый массив '+newArr)

