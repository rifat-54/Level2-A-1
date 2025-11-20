

1.  using union and intersection types in TypeScript 

intersection type =>  এখানে যতগুলো টাইপ থাকবে তার সবগুলো প্রপার্টি থাকতে হবে

union type => এখানে কমপক্ষে যেকোনো একটা টাইপ এর সব গুলো প্রপার্টি থাকতে হবে


Example: 

type User={
    id:number;
    name:string;
}

type Admin={
    id:number
    isAdmin:boolean
}

type IsAdmin=User & Admin;  

const admin:IsAdmin={
    id:213,
    name:'rakib',
    isAdmin:true
}

এখানে IsAdmin টাইপে থাকতে হবে => id , name ,isAdmin  অর্থাৎ এখানে উভয় টাইপের সব প্রপার্টি থাকতে হবে |
অর্থাৎ User + Admin = IsAdmin


type Guest= User | Admin;   
এখানে যেকোনো একটি টাইপের সবগুলো প্রপার্টি থাকলেই হবে

যেমন
const guest:Guest={
    id:34,
    name:"guest"
}

অথবা
const guest:Guest={
    id:23424
    isAdmin:false
}



2. What is the use of the keyof keyword in TypeScript?

 keyof => এটি object type এর সব keys কে একটি union type হিসেবে রিটার্ন করে

example: 

type User={
    id:number,
    name:string,
    age:number
}

type Person= keyof User   

এখানে User type এর সব key  চলে আসবে | এখন এর মান হবে  "id" | "name" | "age"


















