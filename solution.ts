
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

const getLength=<T>(value:GetLength<T>):number | undefined=>{
    if(typeof value==='string'){
        return value.length;
    }

    if(Array.isArray(value)){
        return value.length;
    }
}




class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}';`
    }

}




type TFilterByRating={
    title:string;
    rating:number;
}

const filterByRating=(value:TFilterByRating[])=>{
    return value.filter((item)=>{
        if(item.rating>=4){
            return item;
        }  
    })
}



type TFilterActiveUsers={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

const filterActiveUsers=(value:TFilterActiveUsers[]):TFilterActiveUsers[]=>{
    return value.filter((item)=>item.isActive)
}



interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

const printBookDetails=(book:Book)=>{
    const viewDetails= `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable?"Yes":"No"}`

    console.log(viewDetails);
   
}



