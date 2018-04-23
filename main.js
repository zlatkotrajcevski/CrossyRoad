var player, pravoagolnici, pravoagolnik;
var GameState = {
	preload: function(){
		this.load.image('background', 'grafiki/pozadina.png');
        this.load.image('pravoagolnik', 'grafiki/pravoagolnik.png');
		this.load.image('topche', 'grafiki/topche.png');
		
	},
	create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
		this.background = this.game.add.sprite(0, 0, 'background');
		player = game.add.sprite(490, 450, 'topche');
        

        pravoagolnici = game.add.physicsGroup();
        
        
    var y = 142;

    for (var i = 0; i < 3; i++) {
        pravoagolnik = pravoagolnici.create(game.world.randomX, y, 'pravoagolnik');
        pravoagolnik.body.velocity.x = -300;
        y += 102;
  }
        
   var y = 192;

    for (var i = 0; i < 3; i++) {
        pravoagolnik = pravoagolnici.create(game.world.randomX, y, 'pravoagolnik');
        pravoagolnik2 = pravoagolnici.create(game.world.randomX, y, 'pravoagolnik');
        pravoagolnik.body.velocity.x = 300;
        pravoagolnik2.body.velocity.x = 300;
        y += 102;
      }
    

        
         game.physics.arcade.enable(player);
     
    },
	update: function(){
        
        pravoagolnici.forEach(checkPos, this);
        
        game.physics.arcade.overlap(player, pravoagolnici, collisionHandler, null, this);

        
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            player.y -= 1.5;
            if(player.y < 90){
            player.y = 90;
            }
            
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            player.y += 1.5;
            if(player.y > 458){
            player.y = 458;
            }
        }
function checkPos (pravoagolnik) {

    if (pravoagolnik.x > 1024) {
        pravoagolnik.x = -100;
    } else if (pravoagolnik.x <= -100) {
        pravoagolnik.x = 1024;
    }

}
        


function collisionHandler (player, pravoagolnik) {

    player.x = 490;
    player.y = 450;

}
}
    
};

var game = new Phaser.Game(1024, 576, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');