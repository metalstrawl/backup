//this is a code comment (●__●)
//Variables. can be named anything. use lowercase and underscores. no numbers, uppercase as first letter. or numbers
let q='fork';
q='spoon';
q='knife';
console.log(q)
var life=25;  //no numbers in quotations
life=42;
life='pain';
var life = 'panic';  //avoid var i guess
console.log(life)
const cd = 'code';
console.log(cd);

//How to do Math
let a = 8;
let b = 25;
let x = a+b;
console.log(x);  //this line and line below do basically the same thing
console.log(a+b);
let y = b-a;
console.log(b-a);
let ko = a*b;
console.log(ko);
let r = a/b;
console.log(r);
console.log(r,x);
console.log(r-x);
//Modulus
let l=3;
let g=2;
let p= l%g;
console.log(p);
let v = g%l;
console.log(v);

//shortcuts
let was = a+=34
was=a++  //increase by 1
let what = a-=17;
what = a--  //decrease by 1

//Conditional Statements
let pet = "cat"
if(pet=='parrot'){
    console.log('I have a cool pet');
    a=117;
    console.log(a);
}
else if(pet=='cat'){
    console.log('I have a little gremlin in my private domacile')
    a=113;
    console.log(a);
}
else{
    console.log('I dont have a cool pet');
}

let example = pet+a;
console.log(example);

let age = 17;
let condition=age>=5 && age<=19;
if(age>=16){
    console.log('you can drive')
}
else if(condition){
    console.log('you could be in school')
}
else{
    console.log('nothing special is really happening')
}

let house=true;
if(house){
    console.log('you live in a house')
}
if(house!=true){
    console.log('you most likely live in a house')
}
else if(house || condition){
    console.log('you are a child')
}

//assignment notes
let energy = 4500;
let energyEfficiency = energy/12;
let obstacle = false;


//assignment starts here!! v

//this whole thing is pre-takeoff, to see if they are prepared to go to Venus
let inOrbit = false;
let fuel = 5000;
if(fuel>=5000){
    console.log('you have enough fuel to get to your destination')
}
else if(fuel<5000){
    console.log('you do not have enough fuel')
}
//see if they face the correct direction
let direction = 'north'
if(direction == 'north'){
    console.log('you are facing towards Venus')
}
else if(direction == 'west'){
    console.log('you are facing the moon')
}
else if(direction == 'east'){
    console.log('you are facing the sun')
}
else{
    console.log('your trajectory shows you have no destination')
}
//if supplies and passengers are on board
let passengers = 52;
if(passengers == 50){
    console.log('you have all passengers on board')
}
else if(passengers < 50){
    console.log('you are missing some passengers')
}
else if(passengers > 50){
    console.log('you may have an alien spy on board')
}
//showing ship weight divisions and total
let baseWeight = 4000;
let suppliesWeight = 5200;
let passengersWeight = 200;
let totalWeight = baseWeight + suppliesWeight + passengersWeight;
let onboardWeight = suppliesWeight + passengersWeight;
console.log(onboardWeight)
console.log(totalWeight)

