function palindrome(str) {
    // Good luck!
    let newStr = str.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/g,'')
    let count = 0
    var len = newStr.length
    for(let i = 0; i < Math.floor(len/2) ; i ++){
      if(newStr[i] === newStr[len - i -1]) count ++
    }
    return count === Math.floor(len/2)
  }
  
  
  
  console.log(palindrome("eye"))