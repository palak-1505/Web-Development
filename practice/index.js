// {
// let $age=25;
// console.log($age);
// }
// let age=18;
// if(age>18){
//     console.log("Eligible to vote")
// }else if(age==18){
//     console.log("just Eligible to vote")
// }else{
//     console.log("Not Eligible to vote")
// }
// console.log(age>18?"Vote":"Not Vote");
// let name;
// console.log(name);
// let a = 5;
// let b = "5";
// console.log(a===b);
// console.log(a++);

// for(let i = 5; i >=0 ; i--){
//     console.log(i)
// }

// let str = "HealloPallaklll"
// console.log(str.split('l'))

// function getSumMulti(a,b,c){
//     let sum = a+b+c;
//     let product = a*b*c;
//     return sum,product;
// }

// let sum=getSumMulti(2,3,4); product=getSumMulti(2,3,4);
// console.log(`sum is ${sum} and Product is ${product}`)


// let multiplication = function(a,b){
//     return a*b;
// };

// console.log(multiplication(3,4));

// let power = (a,b)=>{
//     return a ** b
// }

// console.log(power(2,4));  

// let obj = {
//     name: "Palak Gangwar",
//     "roll number":"23CS40",
//     greet : function(){
//         console.log("Hello");
//     }
// }

// console.log(obj);
// obj.greet();

// let arr = [1,3,5,7,9,2];
// console.log(arr);
// arr.push(11);
// arr.unshift(0);
// console.log(arr);
// console.log(arr.splice(2,4,'kunal'));
// console.log(arr);
// let ans = arr.filter((Number) => {
//     if(Number % 2 == 0) return true;
//     else return false;

// });

// console.log(ans);

// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr); 
// let ans = arr.find((num)=>{
//     return num%2 !== 0
// })
// console.log(a);
// var a = 30;
// let b = 50;

// sayHello(a,b);

// function sayHello(a,b){
//     console.log(a+b)
// }

// let x = "12" , y = 3;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);

// let r = require('readline-sync');
// let number1 = r.question('Enter First Number : ');
// let n1 = Number(number1);
// let number2 = r.question('Enter Second Number : ');
// let n2 = Number(number2);
// console.log(n1+n2);

// let age = 10;
// if(age>18 && age<40){
//     console.log('young')
// }else{
//     console.log('Teenager')
// }

// class Human{
//     #name;
//     #age=20;

    

//     study(){
//         console.log("B.Tech CSE");
//     }g
//     get NameValue(){
//         return this.#age;
//     }
//     set modify(val){
//         this.#age=val;
//     }
//     Name(){
//         console.log(this.#name);
    
//     }
// }
// let h = new Human();
// h.modify="Falak";
// console.log(h.NameValue);
// h.Name();
// console.log()

// let src = {
//     age:19,
//     name:'Palak',
//     wt:55
// }

// let dest={};
// dest = JSON.parse(JSON.stringify(src));
// console.log(dest )
// // console.log(obj );wt=55;
// src.color="white";
// console.log(src );
// console.log(dest )

// let obj2={...obj};
// console.log(obj2);
// obj2.color="white";
// console.log(obj2 );
// console.log(obj );


// function clickMe(){
//     let fdiv = document.getElementsByClassName('.fDiv');
//     // fdiv.style.cssText="background-color:purple";
//     fdiv.textContent="palak gangwar";
// }
//     let fdiv = document.getElementsByClassName('.fDiv');
//     fdiv.addEventListner('click',clickMe());


// function add(n1,n2,...args){
//     return n1+n2+args;
// }

// let r = require('readline-sync');
// let arr = {};
// for(let i =0 ; i < 100 ; i++ ){
//     arr[i]=r.question("");
// }
// console.error("Hello");
// console.warn("Hello dosto");
// console.log(typeof(NaN));
// let q1 = document.querySelector('h1');
// console.log(q1);
// // q1.innerHTML="Hello hipiee";
// console.log(q1.innerHTML);

// class person{
//       firstName = 'Palak';
//       lastName= 'Gangwar';
//       fullname(fName,lName){
//         this.fName=fName;
//         this.lName=lName;
//         return this.fName+' '+this.lName;
//       }
// }

// let p1 = new person();
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullname('Raghav','Mittal'));

// 

// let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     btn.innerHTML="Submit it";
// })

let name = window.document.prompt("Enter your name : ");
if(name!==String){
    window.document.alert("Enter valid name");
}else{
    window.document.alert("Good!");
}