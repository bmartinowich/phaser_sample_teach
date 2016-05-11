# Basic Object Interactions Using Phaser

## INTRO
**What separates videogames from similar media formats, such as film and television?**
User interactivity!

Using the javascript library Phaser, we'll create a simple game to demonstrate the basics of user input and object interactions in a vidogame.

Before we begin, make sure you clone down this repo and checkout the branch named **starter**.

Keep in mind that there is a lot of code provided in this lesson, but we don't have the time to cover everything.  I've done my best to comment the code and explain all that is happening, but if you have any questions don't hesitate to ask me at the end of the lesson or after class!

## LESSON
In a 2D game everything displayed on screen has a x and y coordinate that tells our code where to draw our game objects on screen.  

In videogame language, the pictures we draw on screen are called **Sprites**.

Lets take a look at the following code in our create function.
    ```
    this.background = this.add.sprite(0, 0, 'background');
    this.dadBod = this.add.sprite(900, 175, 'dadBod');
    this.burger = this.add.sprite(200, 600, 'burger');
    ```
- **this** is referring to the instance of our game.
- **add** is telling our game we want to add an object to the game world.
- **sprite** is telling add that we want to add an image to the game world.
- The first argument of the sprite function is telling at what x coordinate to draw our sprite.
- The second refers to the y coordinate we want to draw our sprite at.
- The final argument tells our game the sprite we want to draw, using the name we gave our sprite during the preload function.

## Player Movement
Our sprites are on the screen, but they're not doing anything videogamey...  How can we fix that?

The update function of our game is the core loop that our game will run through.  That's the perfect spot to check for user input!

```
if(this.moveLeftKey.isDown){
  // TODO: Add code to move the player left below this comment
  this.dadBod.x -= 10;
}
```
Notice that our sprite has an attribute **x** that refers to it's position on the x-axis.  By decreasing this value we've moved our sprite 10 pixels to the left.

## Object collision
So now we can move our player to the left, but try as he might, he can never eat the burger. Let's begin to fix that.

In our update function, after we check for player input, we call a function called **checkCollision**.
```
checkCollision: function(){
    // Get bounding boxes for the player and burger
    var dadBodBounds = this.dadBod.getBounds();
    var burgerBounds = this.burger.getBounds();
    // Check for collision
    if(Phaser.Rectangle.intersects(dadBodBounds, burgerBounds)){

    }
}
```
The **getBounds** function is basically returning a rectangle that represents our sprites position in the game world.

Notice the if statement.  Here we're using the **intersects** function to determine if two rectangles overlap, if the do we have a **collision**.

## YOU DO!
Now that we've covered the basics, I'd like you to finish up this simple game.  
- Your first mission is to give the user the ability to move the player sprite right.
- Your final mission is to remove the burger sprite from the screen when there is a collision between the player sprite and the burger sprite.
- **HINT** Every sprite object has a function **kill()** which will remove it from the game world, but which sprite should call this function and where shoudld it be called in the code?

 ## LINKS
   - [Phaser](http://phaser.io/)
   - [Phaser - Official Tutorials](http://phaser.io/learn/official-tutorials)
   - [Phaser - Community Tutorials](http://phaser.io/learn/community-tutorials)
   - [Phaser - Documentation](http://phaser.io/docs/2.4.4/index)
