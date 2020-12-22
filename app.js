 var scores,roundScore,activePlayer,dice,gamePlaying;
init();
//dice=Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+activeplayer).textContent =dice;
///document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'</em>';


 document.querySelector('.btn-roll').addEventListener('click',function(){
     if(gamePlaying){
  var dice=Math.floor(Math.random()*6)+1;//generate a random number
        
  var diceDOM=document.querySelector('.dice');//display the result
     document.querySelector('.dice').style.display='block';
          
    document.querySelector('.dice').src='dice-'+dice+'.png';
 
 
//3 update the round score if the rolled number was not 1
if (dice!==1){
    //add score
    roundScore+=dice;
    document.querySelector('#current-'+activePlayer).textContent =roundScore;  
}
 
else{
    nextPlayer();
}
     }
 });
document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){
    //add current score to global score
    scores[activePlayer]+=roundScore;
    //update the ui user interface 
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
   
    //check if player won the game
    if(scores[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent='WINNER';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
        
    //next player
    nextPlayer();// 
    }
   }
});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;//by default set activeplayer is player 0 if we want to select player 1 then we have to select activeplayr equal to 0 means when player 0 is not selected then player 1 is selected;
//document.querySelector('.player-0-panel').classList.remove('active');
 //document.querySelector('.player-1-panel').classList.add('active');
 roundScore=0;
    document.querySelector('#current-0').textContent ='0';
    //document.getElementById('current-0').textContent='0';
    document.querySelector('#current-1').textContent ='0';
    //document.getElementById('current-1').textContent='0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none;'
}
/*document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});*/ //one way to written as new button but here we use anonmys function
document.querySelector('.btn-new').addEventListener('click',init);
    
  function init(){
      scores=[0,0];
roundScore=0;
activePlayer=0;
      gamePlaying=true;
      document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1 ").textContent=0;
document.querySelector('.dice').style.display='none';
      document.querySelector('#name-0').textContent='Player 1';
      document.querySelector('#name-1').textContent='Player 2';
        
document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');
      
  }//follow dry principle



// state variable simply tell the condition of the variable










 