// //basic recursion
// let a
// function sum(n){
//     if(n<=0)
//     return 0
//     else
//      a= n+sum(n-1)
//     return a
// }
// console.log(sum(10));
// function factorial(m){
//     if(m<=1)
//     return m
//     else
//     return m*factorial(m-1)
// }
// console.log(factorial(5));
// Write a question to to take an input n and print all the multiples of 5 less than n in a recursive way.
// example input n=30
// output 1 5 10 15 20 25
// let i=1;
// function count(i,n=60) {
//   if (i*5>=n) {
//     return;
//   }else{
//     if (i==1) {
//       console.log(i)
//     }
//      console.log(i*5)
//   count(i+1)
//       }
//    }
//  count(1,60);
// Write a function which will take the input n from the user and return back an integer
// which will contain the sum of n natural number .
// Example input n=5
// return 1+2+3+4+5 = 15 will be returned back from the function
// let i=0;
// function rec(i,n) {
//   if (i>n) {
//     return 0
//   }
//   return i +rec(i+1,n)
// }
// console.log(rec(1,5));
// Write a program to write a function factorial which takes an input n and prints the factorial of the number
//  in a recursive way
// Example :- n=5;
// Output = 1*2*3*4*5 = 120
// let i=1
// function rec(i,n) {
//   if (i>n) {
//     return 1
//   }
//   return i*rec(i+1,n)
// }
// console.log(rec(1,5));
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that
//  each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// function fib(n) {
//   if(n === 0) return 0;
//   if(n === 1) return 1;
//   return fib(n-1)+fib(n-2);
//   };
//   console.log(fib(9));
//******************************************************************** */
// let str=`abc`
// let n=str.length-1
// let result=[]
// function permute(str,l,r) {
//   if (l==r) {
//     result.push(str)
//   }else{
//     for (let i=l;i<=r;i++) {
//       str= swap(str,l,i)
//       permute(str,l+1,r)
//       str= swap(str,l,i)
//     }
//   }
//   return result
// }
// function swap(str,l,i) {
//   let array=str.split(``)
//   let temp=array[l]
//   array[l]=array[i]
//   array[i]=temp
//      return array.join('')
//     }
//                                          OR
// let str=`let`
// function permutation(str,result){
//   if(str.length==0){
//     console.log(result);
//   }
//   for(let i=0;i<str.length;i++){
//     let rest=str.substring(0,i)+str.substring(i+1)
//     permutation(rest,result+str[i])
//   }
// }
// permutation(str,``)
//function numberOfMatches(n) {
//   let matches=0
//   function Matches(n){
//      if(n==1){
//     return
//   }
//   if(n%2==0){
//     matches+=n/2
//     Matches(n/2)
//   }else{
//     matches+=(n-1)/2
//     Matches((n-1)/2+1)
//   }
//   }
//   Matches(n)
//     return matches
// };
//1079   LETTER TILES POSSIBILITIES
// var numTilePossibilities = function(tiles) {
//   if (tiles.length === 0) {
//       return 0;
//   }
  
//   let count = 0;
//   const set = new Set();
  
//   // break down tiles and count possible combinations
//   for (let i = 0; i < tiles.length; i++) {
//       // skip if the tile is visited before for duplicated tiles
//       if (set.has(tiles[i])) {
//         continue;
//       }
//       // count all the sub combinations
//       count += numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;
// set.add(tiles[i]);
//   }
  
//   return count;
// };

// let name='labeeb'
// let age=21
// let address='kollengode ,palakkad'
// let PersonalDetails=`my name is  ${name}, my age is    ${age} , my address is   ${address}`
// console.log(PersonalDetails);
// let array=PersonalDetails.split(",")
// console.log(array);
// let array=[`apple`,`mango`,`grapes`]
// array.push(`pineapple`)
// array.push(`watermelon`)
// array.pop()
// array.unshift(1)
// array.shift()
// console.log(array);
// console.log(array.indexOf(`apple`))
// console.log(Array.isArray(`hello`));
// let person ={
//     fname:'john',
//     lname:'doe',
//     age:30,
//     hobbies:['music','movies','sports'],
//     address:{
//         street:'50 main',
//         city:'boston',
//         state:'la'
//     }
// }
// console.log(person.hobbies[1]);
// console.log(person.address.state);
// let convertTemp=(temp,unit)=>{return unit===`C`?temp-273:temp+273}
// console.log(convertTemp(308,`C`));
// console.log(convertTemp(35,`K`));
// function Student(firstname,lastname,rollno,sex,dateofbirth){
//     this.firstname=firstname
//     this.lastname=lastname
//     this.rollno=rollno
//     this.sex=sex
//     this.dateofbirth=dateofbirth
//     this.getfullname= function (){
//         return`${this.firstname} ${this.lastname}`
//     }
// }
// let  student1=new Student(`john`,`don`,`21`,`male`,`03-12-2000`)
// let  student2=new Student(`mary`,`jjack`,`51`,`female`,`04-11-1999`)
// if(this.)
// console.log(Student.getfullname(student1));
function Student(firstName,lastName,rollNo,sex,dob) {
  this.firstName=firstName;
    this.lastName=lastName;
    this.rollNo=rollNo
    this.sex=sex
    this.dob=new Date(dob) 
    this.fullName=function(){
      return (`${this.firstName} ${this.lastName}`)
    }
    this.getBirthyear=function(){
      return this.dob.getFullYear()
    }
  }
  function minAge(std) {
    let today=new Date()
       let age=today.getFullYear()-std.getBirthyear()
    return age>=18? `eligible`:`not eligible`
  }
  let std1=new Student(`abijith`,`dev`,21,`male`, '1998-08-18')
  let std2=new Student(`rahul`,`mon`,22,`male`,`2005-08-12`)
  console.log(std1.fullName());
  console.log(std1.getBirthyear());
  console.log(minAge(std1));
   console.log(minAge(std2));