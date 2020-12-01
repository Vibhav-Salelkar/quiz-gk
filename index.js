const readLineSync =require('readline-sync');
const chalk = require('chalk');

var isGameOn=true;
var score=0;
var highScore=4;

console.log(chalk.bold.red("Welcome to Vibhav's quiz. Play and win a chance to be in our \"Hall Of Fame\".\n\n"));
var playGame=readLineSync.question(chalk.yellow("Do you want to play this game? Y/N\n")); 

if(playGame==='N'||playGame==='n'){
  isGameOn=false;
} 

var highScorers=[
  {
    name:'Tanay',
    score: highScore
  },
  {
    name:'Kanishk',
    score: highScore
  },
]

var questions=[{
question:`Grand Central Terminal, Park Avenue, New York is the world's
A. highest railway station
B. largest railway station
C. longest railway station`,
answer:'B'
},{
question:`For which of the following disciplines is Nobel Prize awarded?
A. Physics and Chemistry
B. Physiology or Medicine
C. All of the above`,
answer:'C'
},{
question:`Hitler party which came into power in 1933 is known as
A. Nazi Party
B. Labour Party
C. Democratic Party`,
answer:'A'
},{
question:`Who was known as Iron man of India?
A. Sardar Vallabhbhai Patel
B. Jawaharlal Nehru
C. Subhash Chandra Bose`,
answer:'A'
},{
question:`Jude Felix is a famous Indian player in which of the fields?
A. Football
B. Hockey
C. Tennis`,
answer:'B'
}];

play();

function play(){
  score=0;
  if(isGameOn){
    function ask(question,answer){
      var userAnswer=readLineSync.question(chalk.yellowBright(question)+chalk.cyan('\n\tEnter:- '));
      if(userAnswer.toUpperCase()===answer){
        score++;
        console.log(chalk.greenBright.bold("Correct"));
       
      }else{
        score--;
        console.log(chalk.redBright.bold('Oops!! Wrong answer'));
        
      }
      console.log(chalk.bgBlue("Your current score is: "+score+"\n\n"));
    }
    for(var i=0; i<questions.length; i++){
      ask(questions[i].question,questions[i].answer);
    }
    console.log(chalk.bgMagenta("Your final score is: "+score+"\n\n"))
    console.log(chalk.redBright.bold("!!********Hall Of Fame********!! "))
    for(var j=0; j<highScorers.length;j++){
    console.log(chalk.yellowBright('Name:- '+highScorers[j].name+', '+'Score:- '+highScorers[j].score));
    }
    if(score>highScore){
      console.log(chalk.greenBright.bold('\nCongratulations!!! You have beaten the high score, Send us a screenshot and get chance to be in "Hall Of Fame"\n\n'));
    }else{
      console.log(chalk.greenBright.bold('\nWell Played! Try again and beat the high scorers and get a chance to be in the "Hall Of Fame"\n\n'));
    }
    var wantPlay=readLineSync.question(chalk.yellow("Do you want to play again? Y/N\n")); 
    if(wantPlay==='Y'||wantPlay==='y'){
      play();
    }else{
      isGameOn=false;
      play();
    }
  }else{
    isGameOn=false;
    score=0;
    console.log(chalk.bold.bgGreen.black('\nBye'))
  }
}