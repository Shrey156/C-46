var database,form,player,playerCount,game;
var gameState = 0;
var allPlayers,plr;
var player1,player2;

function preload() {

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  game = new Game();
  game.getGameState();
  game.start();
}

function draw() {
  background(255);  
if(playerCount===2){
  game.updateGameState(1); 
}
if(gameState===1){
  clear();
  game.play();
}
  
  drawSprites();
}

function mouseDragged(){
player.distance = player.distance+50;
player.y = player.y+mouseY;
}