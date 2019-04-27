let deleteScreenResult = () => {
    let arr = document.querySelectorAll("[id='textview']");
    arr[0].value = ''
};

let start = true;
let deleteScreenNum = () => {
    let arr = document.querySelectorAll("[id='textview']");
    arr[1].value = '0'
}

let deleteAll = () => {
    deleteScreenNum();
    deleteScreenResult();
    start = true;
}

let next = false;
let insert = (num) => {
    let arr = document.querySelectorAll("[id='textview']");
    //console.log('next:'+next)
    if(change){
        arr[0].value = result + num;
        arr[1].value = num;
        change = false;
    }
    else{
        if(num === '+' || num === '-' ||num === '*' ||num === '/'){
            if(next){
                let newStr = arr[0].value;
                arr[0].value = newStr.substring(0,newStr.length - 1) + num;
            }
            else{
                arr[0].value += num;
            }
        }
        else{
            arr[0].value += num;
        }
        if(start){
            arr[1].value = num;
            start = false;
        }
        else{
            if(num === '+' || num === '-' ||num === '*' ||num === '/'){
                arr[1].value = num;
                next = true;
            }
            else{
                if(next){
                    arr[1].value = num;
                }
                else{
                    arr[1].value += num;
                }
                next = false;
            }
        }
    }
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
    let arr = str.split(/[-*+/]/g);
    console.log(arr)
    if(check){
        arr[0] = '-' + arr[0];
    }
    console.log(arr)
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
            console.log('ok')
            res = Number(arr[opt_plus-1]) + Number(arr[opt_plus+1]);
            arr.splice(opt_plus-1,3,res);
        }else{
            // console.log(`1: ${arr[opt_sub-1]}
            // 2: ${arr[opt_sub+1]}
            // 3: ${opt_sub}
            // 4: arr : ${arr}`)
            res = Number(arr[opt_sub-1]) - Number(arr[opt_sub+1]);
            arr.splice(opt_sub-1,3,res);
        }
    }
    return arr[0];
}

let change = false;
let result = 0;
let equal = () => {
    let arr = document.querySelectorAll("[id='textview']");
    result = handler(arr[0].value);
    arr[0].value  = arr[0].value + '=' + result;
    arr[1].value = result;
    change = true;
}
console.log(handler('-100+1.45454/2+3.'))