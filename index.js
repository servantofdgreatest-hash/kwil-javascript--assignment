let number= prompt("Enter A Number");

if(number>=0){
    console.log("This Is A Positive Number!");
}
else if(number<0){
    console.log("This Is A Negative Number!")
}
else{
    console.log("This Is Zero");
}


let age = prompt("Enter Age");
if(age>=15){
    console.log("You Can Register")
}
else{
    console.log("You Are Too Young To Register")
}


let score = prompt ("Enter Score");
if (score>=70 && score<=100){
    console.log("GRADE A");
}
else if(score>=60 && score<=69){
    console.log("GRADE B");
}
else if(score>=50 && score<=59){
    console.log("GRADE C");
}
else if(score>=40 && score<=49){
    console.log("GRADE D");
}
else if(score>=30 && score<=39){
    console.log("GRADE E");
}
else if(score>=0 && score<=30){
    console.log("GRADE F");
}
else{
    console.log("Enter a number between 0 and 100.");
}

