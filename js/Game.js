class Game{
    constructor(){

    } 
    gameState(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on("value",function(data){
        gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })

    }  
  start(){
      if(gamestate===0){
      form = new Form();
      form.display();
      player = new Player();
      player.getCount();    
      }
  }
}