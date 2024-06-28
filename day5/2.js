class MyString{
    reverse(string){
        return string.split('').reverse().join('')
    }
    ucFirst(string){
        
        return string[0].toUpperCase()+string.slice(1);
    }
    ucWords(string){
        let strArr= string.split(' ');
        for(let i=0;i<strArr.length;i++){
            strArr[i]= strArr[i][0].toUpperCase()+strArr[i].slice(1);;
        }
        return strArr.join(' ')
    }
}

let strClass =new MyString()
console.log(strClass.reverse('привет'))
console.log(strClass.ucFirst('привет'))
console.log(strClass.ucWords('привет мир'))