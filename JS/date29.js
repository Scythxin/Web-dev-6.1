// Strings wrapped up  with single and double quotes are just plain text.

// const single = 'Hi, this is a normal text';
// const double = "Hi, this is also a normal text";

// String wrapped inside a backtick has extended personality. 
// const backtick = `An extended Functionality ${double}
// provided to strings`;
// console.log(backtick);

//String: length, indexof, lastIndexOf,slice,sunstring,replace,split,trim,toUpperCase,toLowerCase

//length:
// let len = backtick.length;
// console.log(len);

//indexOf:
// let str = "Hello World";
// let index = str.indexOf("World");
// console.log(index);

//lastIndexOf
// let lstr = "Hello World";
// let lindex = str.lastIndexOf("World");
// console.log(lindex);

// function getSlice(str, start, end){

//     console.log("After slice:", str.slice(start,end));
// }
// getSlice("Hello World", 0, 5);

//substring
// function getSubstring(str, start, end){

//     console.log("After substring:", str.substring(start,end));
// }
// getSubstring("Hello World", 0, 5);

//replace
// function replaceString(str,target,replacement){
//     console.log("Original String:", str);
//     console.log("After replace:", str.replace(target, replacement));
// }
// replaceString("Hello World","World", "Java Script");

//split
// let str = "Hello World";
// let out = str.split(" ");
// console.log(out);

//trim:removes space around element

// function trimString(str){
//     console.log(str);
//     console.log(str.trim());
// }
// trimString("         Hello          ");

// toUpperCase
// function toUpper(str){
//     console.log(str);
//     console.log(str.toUpperCase());
// }
// toUpper("Hello");

let arr = [1,2,3,'Hello', true, "null"]
// let len = arr.length;
// console.log(len);

// for(let i = 0; i < len; i++)
// {
//     console.log(arr[i]);
// }

// arr.push("last value");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift(); //Pop at start
// console.log(arr);

// arr.unshift(1);
// console.log(arr);

// arr.splice(2, 0 , "Shruti");//Add or remove element from a particular position
// console.log(arr);

//Array slice: Copies certain parts of an array and creates a new array
// const newArra3y = arr.slice(1);
// console.log(newArray);
// console.log(arr);