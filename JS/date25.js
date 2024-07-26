// Statements

// Statements are the foundation of all logic in JS, they expect boolean which is a type in JS that is always either true or false.
// To explain the mechanics of an if statement we will use the greater or less than operators:

//if, if else and else-if ladder

// if (condition)
// {
//     Statements...
// }

// let marks = 65;

// if(marks>=60)
// {
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }

//else-if ladder

// if(condition)
// {
//     statements...
// }
// else if(condition)
// {
//     statements...
// }
// else if(condition)
// {
//     statements...
// }
// else{
//     statements...
// }

// let number= 1 ;

// if(number>0)
// {
//     console.log("Positive");
// }
// else if(number<0)
// {
//     console.log("Negative");
// }
// else{
//     confirm.log("neither negative nor positive")
// }


//Nested if

// if (condition){
//     if (condition){
//         statements;
//     }
//     else(condition){
//         statements;
//     }
// }

// let height = 168;
// let weight = 65;

// if(height>=175)
// {
//     if(weight>=60)
//     {
//         console.log("Eligible for NCC")
//     }
//     else{
//         console.log("Not ELigible")
//     }
// }
// else{
//     console.log("Not Eligible")
// }

//Write a program to check whether a no. is odd or even.

// let num = 0;

// if(num%2==0)
// {
//     if(num==0)
//     {
//         console.log("Number is neither odd nor even")
//     }
//     else{
//         console.log("Even")
//     }
// }
// else
// {
//     console.log("Odd")
// }

//Write a program to display the smallest no. among two.

// let a = 30
// let b = 20

// if(a>b)
// {
//     console.log(b)
// }
// else if(b>a)
// {
//     console.log(a)
// }
// else{
//     console.log("Both are same")
// }

// Write a program to odisplay the greatest normalize. among throw.

// let c = 10
// let d = 20

// if(c<d)
// {
//     console.log(d)
// }
// else if(c>d)
// {
//     console.log(c)
// }
// else{
//     console.log("Both are same")
// }

//Write a program to check the no. if it is greater than 90 then add two and display the result otherwise add 5 and display the result.

// let n=85;

// if(n>90)
// {
//     console.log(n+2);
// }
// else{
//     console.log(n+5);
// }

//Program to check whether a year is leap year or not.

// let year=1900;

// if((year%4==0 && year%100 != 0) || (year%400==0))
// {
//     console.log("Its a leap year")
// }
// else{
//     console.log("Its not a leap year.")
// }

//Write a program to check whether a student is eligible for scolarship or not as per the below rules-
//1.If math marks>=90 then eligible.
//2.If agr>=60 then eligible.
//3.If science & math both >=75 then eligible.

// let math = 85;
// let agr = 55;
// let science = 75;

// if(math>=90)
// {
//     console.log("Eligible");
// }
// else if(agr>=60)
// {
//     console.log("Eligible");
// }
// else if(science>=75 && math >= 75)
// {
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }

// Write a program to check the largest number among 5 numbers using else if ladder.

// let a = 9;
// let b = 8;
// let c = 7;
// let d = 6;
// let e = 5;

// if(a>b && a>c && a>d && a>e)
// {
//     console.log(a +" is the greatest.");
// }
// else if(b>c && b>d && b>e)
// {
//     console.log(b + " is the gratest.");
// }
// else if(c>d && c>e)
// {
//     console.log(c + " is the greatest.");
// }
// else if(d>e)
// {
//     console.log(d + " is the greatest.");
// }
// else{
//     console.log(e + " is the greatest.");
// }

//Write a program to check the smallest number among four numbers using else if ladder.

// let b = 8;
// let c = 7;
// let d = 6;
// let e = 5;


// if(b<c && b<d && b<e)
// {
//     console.log(b + " is the smallest.");
// }
// else if(c<d && c<e)
// {
//     console.log(c + " is the smallest.");
// }
// else if(d<e)
// {
//     console.log(d + " is the smallest.");
// }
// else{
//     console.log(e + " is the smallest.");
// }

//Switch case

// let type = 1;

// switch(type)
// {
//     case '1':
//         statements;
//         break;
//     case '2':
//         statements;
//         break;
//     case '3':
//         statements;
//         break;
//     default:
//         statements;    
// }

// let days = 8;

// switch(days){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Choice")
// }