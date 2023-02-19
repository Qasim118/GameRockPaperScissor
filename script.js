

let user_choice;
let array = ["rock" ,"paper ","scissor"];

// function computerselect () {

// let ran = Math.floor(Math.random() * 3 );

// computer_choice = array[ran];
// return  computer_choice;

// }

function ComputerPlayy(){

    let random = array[Math.floor(Math.random()*array.length)];
    return random.toString();

}

let round=0;
function userselect (select) {
    
    user_choice=select;
    gamerounds();
     
}

var user_score = 0;
var comp_score = 0;
let CompareResult ;

function gamerounds() {
   user_selection =  user_choice;
  comp_selection = ComputerPlayy();

 if(user_selection==comp_selection){
    round++;    
    document.getElementById('compareResult').innerHTML=`Round  ${round} is tie`;

            console.log("Your round # " + round + " is tie" );
        }
          else if(user_selection=="rock" && comp_selection =="paper"){
            round++;
            document.getElementById('compareResult').innerHTML="Coputer Won the round " + round ;
             console.log("Coputer Won the round " + round + "and it's scoore is " + ++comp_score );
             
         }else  if(user_selection=="paper" && comp_selection =="rock"){
            CompareResult.style.color="green";
            round++;
            CompareResult=  document.getElementById('compareResult').innerHTML="you Won the round " + round ;
           
          console.log("You Won the " + round + " and your scoore is " + ++user_score );
            
       }else if(user_selection=="rock" && comp_selection =="scissor"){
        round++;
        CompareResult = document.getElementById('compareResult').innerHTML="you Won the round " + round;
        CompareResult.style.color="green";  
        console.log("You Won the " + round + " and your scoore is " + ++user_score );
            
    }else if(user_selection=="scissor" && comp_selection =="rock"){
        round++;
        document.getElementById('compareResult').innerHTML="Coputer Won the round " + round;
        console.log("Coputer Won the " + round + " and it's scoore is " + ++comp_score );
            
    }else if(user_selection=="scissor" && comp_selection =="paper"){
        CompareResult.style.color="green";  
        round++;
        CompareResult = document.getElementById('compareResult').innerHTML="you Won the round " + round;
          
       console.log("You Won the " + round + "and your scoore is " + ++user_score );
            
        }else if(user_selection=="paper" && comp_selection =="scissor"){
            round++;
            document.getElementById('compareResult').innerHTML="Coputer Won the round " + round;
            console.log("Coputer Won the " + round + " and it's scoore is " + ++comp_score );  
            
        }
        
    if(round==5){
        winner();
        let showButton = document.getElementById('playagain');
        showButton.style.display = "inline";
        disableInput();
        
    }
    

    }


    
function winner(){
    document.getElementById('compScoore').innerHTML=`Computer Total Scoore is : ${comp_score}`;
    console.log("Computer Total Scoore = " + comp_score);
    document.getElementById('playerScoore').innerHTML=`Your Total Scoore is : ${user_score}`;
    console.log("Your total Scoore = "+ user_score);
    if(comp_score>user_score){
        document.getElementById('result').innerHTML="Computer Win The Game";
        console.log("Computer win the game ")
    }else if(user_score>comp_score){
        document.getElementById('result').innerHTML="You Win The Game";
        console.log("You win the game ")
    }else if(comp_score==user_score){
        document.getElementById('result').innerHTML="No one is Winner! Both have same Scoore play again";
        console.log("Both have same scoore no one wins ")
    }
}

function disableInput(){
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissor = document.getElementById("scissor");

    let crock = document.getElementById("crock");
    let cpaper = document.getElementById("cpaper");
    let cscissor = document.getElementById("cscissor");
    
    let hcrock = document.getElementById("hcrock");
    let hcpaper = document.getElementById("hcpaper");
    let hcscissor = document.getElementById("hcscissor");
    

    let hrock = document.getElementById("hrock");
    let hpaper = document.getElementById("hpaper");
    let hscissor = document.getElementById("hscissor");
    

    rock.style.display="none";
    paper.style.display="none";
    scissor.style.display="none";

    
    crock.style.display="none";
    cpaper.style.display="none";
    cscissor.style.display="none";

    hcrock.style.display="none";
    hcpaper.style.display="none";
    hcscissor.style.display="none";


    hrock.style.display="none";
    hpaper.style.display="none";
    hscissor.style.display="none";
}



