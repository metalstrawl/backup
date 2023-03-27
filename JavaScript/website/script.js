// // 1. select element you want to modify
// let sign = document.getElementById('sign');
// console.log(sign);

// // 2. modify
// //modifying text
// sign.textContent = 'godbye wrodl!!';

// sign.innerHTML = sign.innerHTML + '<p style="color:red">pills here!</p>'

// //mod the color
// sign.style.color = 'green';

// let question = {
//     title: 'When is Groundhog Day?',
//     alternatives: ['Feb. 2', 'March 4', 'April 2', 'May 8'],
//     correctAnswer: 0
// }
let questions = [
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2', 'March 4', 'April 2', 'May 8'],
        correctAnswer: 0
    },
    {
        title: 'How many bosses are in vanilla Terraria?',
        alternatives: ['7', '23', '17', '53'],
        correctAnswer: 2
    },
    {
        title: 'How many bosses does the Terraria Calamity Mod add?',
        alternatives: ['19', '28', '51', '7'],
        correctAnswer: 1
    },
    {
        title: 'How many bossses are in Dark Souls Remastered?',
        alternatives: ['26', '9', '16', '30'],
        correctAnswer: 0
    },
    {
        title: 'How many bosses are in Dark Souls III?',
        alternatives: ['13', '22', '37', '25'],
        correctAnswer: 3
    },
    {
        title: 'How many bosses are in Elden Ring?',
        alternatives: ['<100', '>100', '100', '0'],
        correctAnswer: 1
    },
    {
        title: 'When is National Grilled Cheese Day?',
        alternatives: ['Jan. 5', 'March 2', 'April 12', 'September 24'],
        correctAnswer: 2
    },
    {
        title: 'How many survivors (playable characters) are in Risk of Rain 2?',
        alternatives: ['13', '11', '20', '9'],
        correctAnswer: 0
    },
    {
        title: 'How many strings does the standard guitar have?',
        alternatives: ['4', '7', '10', '6'],
        correctAnswer: 3
    },
    {
        title: 'How many questions are on this quiz?',
        alternatives: ['1', '11', '17', '<100'],
        correctAnswer: 3
    }

]

let app = {
    start:function(){
        this.currentPosition = 0
        this.score = 0
        let alts = document.querySelectorAll('.alternative')
     //show alternatives
     //bind approach
     alts.forEach(function(element, index){
         element.addEventListener('click', function(){
            this.checkAnswer(index);
         }.bind(this))
     }.bind(this))
     this.showQuestion(questions[this.currentPosition]);
     this.updateStats();
    },
    showQuestion:function(q){
        this.currentQuestion = q
        let titleDiv = document.getElementById('title')
        //modify
        titleDiv.textContent = q.title;
        //select by query
        let alts = document.querySelectorAll('.alternative')
        //show alternatives
        alts.forEach(function(element, index){
            element.textContent = q.alternatives [index];
        })
    },
    checkAnswer:function(userSelected){
        let currentQuestion = questions[this.currentPosition]
        if(currentQuestion.correctAnswer == userSelected){
            console.log("correct!")
            this.score ++;
            this.showResults(true);
        }
        else{
            console.log('incorrect')
            this.showResults(false);
        }
        //add next class
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currentPosition])
        this.updateStats();
    },
    increasePosition:function(){
        //increase current position
        this.currentPosition++;
        //send back to start
        if(this.currentPosition == questions.length){
            this.currentPosition = 0;
        }
    },
    updateStats: function(){
        //select score div
        let scoreDiv = document.getElementById('score')
        //mod text
        scoreDiv.textContent = 'Your Score: '+this.score
    },
    showResults: function(isCorrect){
        //select results
        let resultsDiv = document.getElementById('results');
        let result = ''
        if(isCorrect){
            result = 'correct answer';
        }
        else{
            //what is the current question
            let currentQuestion = questions[this.currentPosition]
            //get correct answer
            let currentAnsIndex = currentQuestion.correctAnswer
            //answer text
            let correctText = currentQuestion.alternatives[currentAnsIndex];
            result = correctText;
            result = "incorrect, the correct answer is "+correctText
        }
        resultsDiv.textContent = result;
    }
}
app.start();

// 1. select element
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
//     console.log('+1 cookie');
// })
