function rot13(str) { // LBH QVQ VG!
  
    let arrCode = str.split('').map(el => {
      let code = el.charCodeAt()
      let check = el.charCodeAt() + 13
      if(code >= 65 && code <= 90 )
         return check > 90 ? code - 13 : code + 13
       return code
    })
    return String.fromCharCode(...arrCode)
   }
   
   // Change the inputs below to test
   console.log(rot13("SERR PBQR PNZC"))