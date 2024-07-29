//looping

// 1. initialisation;
// 2. condition;
// 3. execution;
// 4. increment/dectement

// while(condition)
// {
//     statements;
// }

// //1-500

// let n = 1;

// while(n <= 500)
// {
//     console.log(n);

//     n=n+1;
// }

// do{
//     statements;
// }while(condition);

// let a = 1;

// do{
//     console.log(a);

//     a++;

// }while(a<=5);

// for(initialisation; condition; increment/decrement){
//     statements;
// }

// let val;

// for(val = 1; val<=5; val+=1){
//     console.log(val);
// }

// let no;
// for(no = 1; no <= 10; no++){

//     if(no%2==0)
//     {
//         console.log(no);
//     }
// }

// 1.WAP TO FIND THE FACTORIAL OF A NUMBER 

// let n = 6;
// let m=1;

// while(n != 0){
//     m=m*n;
//     n--;
// }
// console.log(m);

// 2.WAP TO FIND THE FACTORS OF A NUMBER 

// let n = 12;
// let i = 1;

// while(i<=n)
// {
//     if(n%i==0){
//         console.log(i)
//     }
//     i++;
// }

// 3. WAP TO COUNT THE NUMBER OF FACTORS IN A NUMBER 

// let n = 12;
// let i = 1;
// let c = 0;

// while(i<=n)
// {
//     if(n%i==0){
//         c=c+1;
//     }
//     i++;
// }
// console.log(c);

// 4.WAP TO FIND WHETHER A NUMBER IS PRIME OR NOT 

// let n=10;
// let i = 1;
// let c = 0;

// while(i<=n){
//      if(n%i==0)
//     {
//         c=c+1;
//     }
//     i++;
// }
// if(c==2){
//     console.log("Number is Prime");
// }
// else{
//     console.log("Number is not prime");
// }

// function functionName (){

// }

// function sum(){
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
// }

// sum();
// sum();
// sum();

// functions with arguments

function sum(a,b){
    console.log(a+b);
}

sum(2,3);
sum(100,200);