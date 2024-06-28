
function bubbleSort(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j+1]<arr[j]){
                let tmp =arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    return arr
}
let arr =[1,2,3,6,8,1,6,3,2,1,0,4]
let strArr=['one', 'two','three'] 
console.log(bubbleSort(arr))
let newArr=arr.concat(strArr)
console.log(newArr)