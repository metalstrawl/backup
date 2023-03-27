//global variables

//functions
// function hourToMin(hours){
//     let score = 17; //global variable
//     let result = hours*60; //local only used by function
//     console.log(result)
//     return result
// }
// let a = hourToMin(38);
// let result = 16;

// function daysToHours(days){
//     return days*24
// }
// let day = daysToHours(16);
// console.log(day);
// day = daysToHours(1645);
// console.log(day);

// //checking an item
// let balance = 100
// let stock = 50
// let price = 5;
// //calling a function
// sellItem(10);
// //function declaration
// function sellItem(quantity){
//     if(stock >= quantity){
//     //stock -= quantity
//     stock = stock - quantity
//     balance = balance + price * quantity
//     //balance += price * quantity
//     console.log('purchase completed $' + balance, + stock, + 'items left')
//     }
//     else{
//         console.log('no sale, try again')
//     }
// }

// // //objects
// // let player = {
// //     age: 37,
// //     hp: 60006000,
// //     energy: '1000',
// //     size: 'extra-large',
// //     outfit: {
// //         color: 'black',
// //         fabric: 'leather',
// //         type: 'armor',
// //     }
// // };
// // console.log(player);

// // //access parts of an object
// // console.log(player.age) //console.log(player['age']); does same thing

// // //modify pieces of object
// // player.age = 555
// // console.log(player.age);
// // player.outfit.color = 'pink';
// // console.log(player);

// // //add stuff to object
// // player.name = 'Abbath';
// // console.log(player)

// // //delete parts of object
// // delete player.outfit;
// // console.log(player);

// //methods
// let player = {
//     health: 100,
//     fun: 0,
//     play: function(food){
//         if(food == 'apple'){
//             this.health += 10
//         }
//         else if(food == 'candy'){
//             this.health += 5
//             this.fun += 5
//         }
//     }
// }
// //call method
// player.play('apple');
// console.log(player)
// player.play('candy')
// console.log(player)

// //hippo object
// let hippo={
//     hippoMurder: true,
//     hippoAttack:function(player){
//         if(this.hippoMurder == true){
//             delete player
//             console.log('player is dead! a hippo demolished you')
//             console.log('better luck next time, buddy')
//         }
//     }
// }
// hippo.hippoAttack(player);

// //while loops
// function sendHelp(){
//     console.log('send help!')
// }
// let i = 10;
// while(i>0){
//     sendHelp();
//     i--; //i=i-1 or i-=1
// }
// //for loops
// for(let a = 10; a>0; a--){
//     sendHelp();
// }

// //arrays (lists)
// let list = ['immortal groundhog',138,'gobblers knob','correct 42% of the time'];
// console.log(list);
// //change info in list
// list[3] = 'he is right 50% of the time';
// console.log(list);
// //access info in list
// let groundhog = list[1];
// console.log(groundhog);
// //access last piece of list
// let log = list[list.length-1];
// let last = list.length; //see how long list is
// console.log(log);
// console.log(last);
// //add items
// list.push('lives in the library');
// console.log(list);
// //delete last item
// list.pop();
// console.log(list);
// //iterating over arrays
// let highScores = [78,97,105];
// //increase all scores by 1
// let j = 0;
// while(j<highScores.length){
//     highScores[j]++;
//     j++;
// }
// console.log(highScores);

// let bestDay = [
//     {
//         title: "Groundhog Day",
//         worth: "nothing",
//         person: "Mr. Black"
//     },
//     {
//         title: "Aug. 9th",
//         worth: "a bit",
//         person: "me"
//     },
//     {
//         title: "October 31st",
//         worth: "a lot",
//         person: "me"
//     }
// ];
// bestDay.forEach(function(entry){
//     if(entry.title == "Groundhog Day"){
//         entry.title = "GroundHog Day";
//     }
//     else if(entry.title != "Groundhog Day"){
//         entry.title = "groundHog Day";
//     }
// })
// console.log(bestDay);

// //multidimensional arrays
// let array = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(array);
// console.log(array[0][0]);
// let terrain = [
//     ['desert','desert','forest','beach'],
//     ['desert','forest','beach','island'],
//     ['forest','desert','corruption','forest','lake']
// ];
// console.log(terrain);
// terrain[0][3] = 'forest';
// terrain[1][2] = 'cliff';
// console.log(terrain);

//ASSIGNMENT HERE 
//the idea is that the astronauts are trying to find out the staff who is actually an alien

let astronauts = ['Astro 1-1, Astro 1-2, Astro 1-4, Astro 2-0, Astro*.>?'] //array to show astronauts, one is not like the other
console.log(astronauts)
let astronaut = { //astronaut attributes
    name: 'Astro 1-1',
    health: 100,
    intelligence: 50,
    strength: 20,
    paranoia: 5,
    reputation: function(friend){ //this function is to show if the astronaut is paranoid or not
        if (friend == 'normal'){
            this.paranoia -=5
            this.intelligence +=5
            console.log('this astronaut does not have suspiscions')
            function safe(){
                console.log("'everything seems to be fine.'")
            }
            let s = 3;
            while(s>0){
                safe();
                s--;
            }
        }
        else if (friend == 'suspiscious'){
            this.paranoia +=10
            console.log('this astronaut thinks a friend may be an extraterrestrial foe...')
            function sos(){
                console.log("'enemy alert!'")
            }
            let d = 3;
            while(d>0){
                sos();
                d--;
            }
        }
    }
}

astronaut.reputation('suspiscious')
console.log(astronaut)

let aliens = ['Alien0, ???, ???'] //array to show aliens in this situation, they aren't necissarily posing as astronauts
console.log(aliens)
let alien = { //alien attributes
    name: 'Astro*.>?, Alien0',
    health: 200,
    intelligence: 65,
    strength: 50,
    anger: 5,
    status: function(cover){ //function to show if the alien was found
        if (cover == 'blown'){
            this.anger +=30
        console.log('the aliens cover was blown! hes going berserk!')
        function berserk(){
            console.log("'ssSSSCRREEEEEE!!'")
        }
        let x = 5;
        while(x>0){
            berserk();
            x--;
        }
        }
        else if (cover == 'safe'){
            this.anger -=2
        console.log('the alien is relieved it was not spotted, it will continue lurking...')
        function relief(){
            console.log("'i am a normal astronaut!'")
        }
        let r = 3;
        while(r>0){
            relief();
            r--;
        }
        }
    }
}
alien.status('blown')
console.log(alien)
