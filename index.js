let userScore=0;
let compScore=0;
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('comp-score');
const scoreBoard_div=document.querySelector('.score-board');
const result_p=document.querySelector('.result > p');

const rock_div=document.getElementById('rock');
const scissor_div=document.getElementById('scissor');
const paper_div=document.getElementById('paper');


function converttoWord(letter){
    if (letter==='r') return 'Rock';
    if (letter==='p') return 'Paper';
    return 'Scissors';
}

function getcomputerChoice(){
    const choices=['r','p','s'];
    const randomNumber= (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    const smalluWord="user".fontsize(3).sub();
    const smallcWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${converttoWord(userChoice)} ${smalluWord} beats  ${converttoWord(computerChoice)}${smallcWord} You win`;  
    document.getElementById(userChoice).classList.add('green-glow');  
}
function draw(userChoice,computerChoice){
    
    const smalluWord="user".fontsize(3).sub();
    const smallcWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${converttoWord(userChoice)} ${smalluWord} equals  ${converttoWord(computerChoice)}${smallcWord} It's a draw`; 
}
function loose(userChoice,computerChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    const smalluWord="user".fontsize(3).sub();
    const smallcWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${converttoWord(userChoice)} ${smalluWord} looses to  ${converttoWord(computerChoice)}${smallcWord} You lost`;  
}
function game(userChoice){
    const computerChoice=getcomputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            loose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;

    }

}

function main(){

    rock_div.addEventListener('click',function(){
        game('r');
    })

    scissor_div.addEventListener('click',function(){
        game('s');
    })
    paper_div.addEventListener('click',function(){
        game('p');
    })
}


main();