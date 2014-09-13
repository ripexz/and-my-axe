global.Axe = {}

boot = require './boot'
load = require './load'
menu = require './menu'
game = require './game'

game = new Phaser.Game 960, 640, Phaser.AUTO, 'game'

game.state.add 'boot', boot
game.state.add 'load', load
game.state.add 'menu', menu
game.state.add 'game', game

game.state.start 'boot'