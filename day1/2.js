function setFirstСharToStr(str){
    let newStr=str.split(' ')
    let fStr=''
    for(i=0;i<newStr.length;i++){
         fStr+=newStr[i][0].repeat(newStr[i].length)
         fStr+=' '
    }
    return fStr
}
let str='hello alexandr!'
console.log(str)
console.log(setFirstСharToStr(str))
