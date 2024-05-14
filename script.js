let fruits=["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[1]);
fruits.push("Grapes");
let person={
    firstName:"John",
    lastName:"Doe",
    age:30,
    hobbies:["Reading", "Travelling"],
        adress:{
            street:"123 Main St",
            city:"Anytown",
            country:"USA"
        }
};
console.log(person.firstName);
console.log(person.adress.city);
person.age=31;
person.hobbies.push("Cooking");
for(let i=0;i<5;i++){
    console.log(i);
}
for(let i=0;i<5;i++){
    console.log(i);
}
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
let N=10;
if(N>5){
    console.log("hello");
}else{
    console.log("bye");
    }
let age=25;
if(age>=18){
    if(age<21){
        console.log("You are an adult but not yet allowed to drink.");
    }else{
        console.log("You are an adult and allowed to drink.");
    }
}else{
    console.log("minor")
}