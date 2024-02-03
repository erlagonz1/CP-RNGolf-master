// Code Practice: RNGolf
// Name: 
// Date:

'use strict'

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scene: [ Play ]
}

let game = new Phaser.Game(config)

let { width, height } = game.config