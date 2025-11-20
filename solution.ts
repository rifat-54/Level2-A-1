
type Value= string | number | boolean;

const formatValue=(value:Value)=>{
     if(typeof value==='string'){
        return value.toUpperCase()
     }else if(typeof value==='number'){
        return value*10;
     }else{
        return !value;
     }
}



type GetLength<T> =string | T[] 

const getLength=<T>(value:GetLength<T>)=>{
    if(typeof value==='string'){
        return value.length;
    }

    if(Array.isArray(value)){
        return value.length;
    }
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
console.log(getLength(["a","b","c"]));


