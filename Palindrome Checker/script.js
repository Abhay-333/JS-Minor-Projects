let str = 'abhay'

const splittedText= str.split("")

let reversedStr = ``

for(let i = splittedText.length -1; i >=0;i--){        // for reversing the str
    reversedStr += splittedText[i]
}

function palindrome(){      // to compare the str and reversed str
    if(str === reversedStr){
        console.log("The given str is palindrome")
    }else{
        console.log("The given str is not palindrome")
    }
}

palindrome()
