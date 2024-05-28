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
let port=document.getElementById('ttt')
console.log(port);
let fff=document.getElementsByClassName('ana')
console.log(fff)


port.innerHTML='AYSE'

function ok() {
let gelen=document.getElementById('gelen');
let newImageSource='images/WhatsApp Görsel 2024-01-16 saat 14.32.35_4ed68785.jpg'
gelen.setAttribute('src', newImageSource);
}
function yaz(){
    let yazyaz=document.getElementById('yazyaz');
    yazyaz.classList.add('italic')

}
let rrr=document.getElementById('child')


function createNewDiv(){
    let newDiv=document.createElement('div');
    newDiv.classList.add('newDiv')
    newDiv.textContent='daha fazla için'
    document.body.appendChild(newDiv)
}
let mymy=document.getElementById("ButtonMy");

mymy.addEventListener("click", function(event)
{
    console.log("Button Clicked!",event);
});

function ayseee(){
    for(let i=1; i<=3; i++){
        alert("merak ediyorsanız " +i);
    }
}
