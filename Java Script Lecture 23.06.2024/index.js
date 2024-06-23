// Chapter 22
// Strings: Measuring length and extracting parts//

// let city="Karachi";
// let part=city.slice(0,3);
// console.log(part); 

// Chapter 23
// Strings: Finding segments

// let text=" It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them to grasp their minds and motives in ways that they cannot grasp his."

// let firstChar = text.indexOf("World War II"); // indexOf would tell the first time of the word while loop will tell us overall. 
// console.log(firstChar); 
// now change the word World War II from Second World War
// Chapter 24
//Strings: Finding a character at a location

// Chapter 25
// Strings: Replacing characters

// text = text.replace("World War II", "the Second World War"); 
 
// Task 1
// use charat, slice, uppercase, lowercase 

// input----> kAraChI
// output ----> Karachi

//let input=prompt("Enter any word...");
//let firstChar=input.charAt(0).toUpperCase();
//let otherChars=input.slice(1).toLowerCase();
// alert(firstChar + otherChars); 

// Chapter 27 Generating random numbers

// let num= Math.random();
// let dice= Math.ceil(num*6);
// console.log(dice); 

// task 2

//let tickets = ["Sana", "Aina", "Shumaila", "Erum", "Alishba" , "Sara" ,"Dua" , "Amna", "Any", "Hira"]; 
//let randomName= Math.random();
//let index = Math.floor(randomName*tickets.lenght)
//console.log("Winner is  ${tickets[index]}"); 

// task 3 

let newtickets=[]
let ticketNumber;
let numberoftickets= +prompt ("Enter ticket number"); // + sign before prompt is used to convert string into integar 
for (let i = numberoftickets; i >=1; i--) {
ticketNumber=prompt("Enter ticket number")
newtickets.push(ticketNumber)
}
let randomName=Math.round(Math.random()*(ticket.length-1))
alert(newtickets[randomName])





