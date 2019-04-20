let deleteScreenResult = () => {
    document.getElementById('textview').value = '0';
};

let deleteScreenNum = () => {
    document.getElementsByClassName('number-input').value = '0';
}

let deleteAll = () => {
    deleteScreenNum();
    deleteScreenResult();
}


let handler = (str) => {
    let last = str.charAt(str.length - 1);
    let first = str.charAt(0)
    if(last === '+' || last === '-' || last === '*' || last === '/'){
        return false;
    }
    let check = false;
    if(first === '+' || first === '-'){
        if(first === '-') check = true;
        str = str.substring(1,str.length);
    }  
    let arr = str.split(/[*-+/]/g);
    if(check){
        arr[0] = '-' + arr[0];
    }
    let index = 1;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === '*' || str.charAt(i) === '+' || str.charAt(i) === '-' || str.charAt(i) === '/'){
            arr.splice(index,0,str.charAt(i));
            index += 2;
        }
    }

    let res = 0;
    while(arr.indexOf('*') !== -1 || arr.indexOf('/') !== -1){
        let opt_multi = arr.indexOf('*');
        let opt_div   = arr.indexOf('/');
        if(arr.indexOf('*') !== -1){
            res = Number(arr[opt_multi-1]) * Number(arr[opt_multi+1]);
            arr.splice(opt_multi-1,3,res);
        }else{
            res = Number(arr[opt_div-1]) / Number(arr[opt_div+1]);
            arr.splice(opt_div-1,3,res);
        }
    }
    while(arr.indexOf('+') !== -1 || arr.indexOf('-') !== -1){
        let opt_plus = arr.indexOf('+');
        let opt_sub  = arr.indexOf('-');
        if(arr.indexOf('+') !== -1){
            res = Number(arr[opt_plus-1]) + Number(arr[opt_plus+1]);
            arr.splice(opt_plus-1,3,res);
        }else{
            res = Number(arr[opt_sub-1]) - Number(arr[opt_sub+1]);
            arr.splice(opt_sub-1,3,res);
        }
    }
    return arr[0];
}

console.log(handler('-100+1.45454/2+3.'))