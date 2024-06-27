function createPalindrome(str){
    return str+str.substring(0,str.length-1).split('').reverse().join('')
}
let string='дим'
let string2='манек'
let string3='рота'
console.log(string)
console.log(createPalindrome(string))
console.log(string2)
console.log(createPalindrome(string2))
console.log(string3)
console.log(createPalindrome(string3))
