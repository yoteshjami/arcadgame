# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [How to download starter code](#how-to-download-starter-code)
-   [Steps built the game](#steps-built-the-game)
-   [How to play](#how-to-play)
-   [How it Works](#how-it-works)
-   [Contributing](#contributing)

    ## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## How to download starter code

we cloned the starter code from github <https://github.com/udacity/frontend-nanodegree-arcade-game>

## Steps built the program

Inside the app.js file, I implemented the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided in scratch code, and I completed the following: The Enemy function, which initiates the Enemy by:

-   Loading the image by setting this.sprite to the appropriate image in the image folder
-   Setting the Enemy initial location
-   Setting the Enemy speed
-   The update method for the Enemy
-   Updates the Enemy location
-   Handles collision with the Player

    implemented the Player class, and use the Enemy class as an example on how to get started. At minimum I implement the following: The Player function, which initiates the Player by:

-   Loading the image by setting this.sprite to the appropriate image in the image folder

-   Setting the Player initial location
-   The update method for the Player
-   The render method for the Player
-   The handleInput method, which should receive user input, allowedKeys and move the player according to that input.

## How to play:

1.The player should use the respective arrow keys to move left , right , top and bottom. 2.You can run the code either:

-   Download the html file and run through the web browser
-   Use 200OK server for the better output.
-   You can have fun with the game [here.](https://yoteshjami.github.io/arcadgame/)

## How it Works!

-   In this game you have a Player and Enemies (Bugs).
-   You can select the character that you want
-   The goal of the player is to reach the water, without colliding into any one of the enemies.
-   The player can move left, right, up and down.
-   The enemies move in varying speeds on the paved block portion of the scene.
-   Once a the player collides with an enemy, the game is reset and the player moves back to the start square.
-   Once the player reaches the water the game is won

    ## Tools used in this game!

Object-Oriented JavaScript Scopes, closures and prototype chains. The 'this' keyword Superclasses and subclasses HTML5 Canvas

## In particular:

-   Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
-   Recall that the player cannot move off screen
-   If the player reaches the water the game should be reset by moving the player back to the initial location by adding reset Player method to that handle

Also implemented the Player and Enemy, it instantiated them by:

-   Creating a new Player object
-   Creating several new Enemies objects and placing them in an array called allEnemies

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
