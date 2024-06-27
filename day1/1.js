function getUniqueChar(str){
    let uniqueCharStr=''
    for(i=0;i<str.length;i++){
        if(!uniqueCharStr.includes(str[i])) uniqueCharStr+=str[i];
    } 
    return uniqueCharStr
}
let string='DDADSADASDAAADS'
console.log(string)
console.log(getUniqueChar(string))