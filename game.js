// Create a new instance of a phaser game, using the ID of our HTML canvas element
var game = new Phaser.Game(1228, 768, Phaser.CANVAS, 'game');

// Create and initialize a new instance of our game
var PhaserGame = function(){
  // Declaring our attributes isn't completely necessary, but it gives us an easy place to refer to the objects we'll be working with when developing our game.
  this.background = null; // The background for our game.
  this.dadBod = null; // The player
  this.burger = null; // The goal
  this.moveLeftKey = null; // Player input for moving left
  this.moveRightKey = null; // Player input for moving right
};

PhaserGame.prototype = {
  init: function(){
    // Set the size of our game world.
    this.game.world.setBounds(0, 0, 1228, 768);
  },

  preload: function(){
    // Load sprites
    this.load.image('background', 'sprites/bg.jpg'); // Dimensions: 1228 x 768
    this.load.image('dadBod', 'sprites/TDB_FullBody.png'); // Dimensions: 285 x 591
    this.load.image('burger', 'sprites/Burger.png'); // Dimensions: 130 x 130
  },

  create: function(){
    // Draw sprites
    this.background = this.add.sprite(0, 0, 'background');
    this.dadBod = this.add.sprite(900, 175, 'dadBod');
    this.burger = this.add.sprite(200, 600, 'burger');
    // Declare input keys
    this.moveLeftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
    this.moveRightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
  },

  // This function is called repeatedly AFTER the preload and create functions have ran
  update: function(){
    // Input checks
    if(this.moveLeftKey.isDown){
      // TODO: Add code to move the player left below this comment

    }
    if(this.moveRightKey.isDown){
      // TODO: Add code to move the player right below this comment

    }
    // Call the function that will check if the player touches the burger
    this.checkCollision();
  },

  // This is a function I created, it's not native to Phaser.
  // I built this function to keep our update function DRY.
  checkCollision: function(){
      // Get bounding boxes for the player and burger
      var dadBodBounds = this.dadBod.getBounds();
      var burgerBounds = this.burger.getBounds();
      // Check for collision
      if(Phaser.Rectangle.intersects(dadBodBounds, burgerBounds)){

      }
  }
}
//  This is telling our game object to create a new state, with our PhaserGame object
game.state.add('game', PhaserGame, true);
