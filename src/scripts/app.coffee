global.Axe = {}

boot = require './boot'
load = require './load'
menu = require './menu'
play = require './play'

game = new Phaser.Game 960, 640, Phaser.AUTO, 'game'

game.state.add 'boot', boot
game.state.add 'load', load
game.state.add 'menu', menu
game.state.add 'play', play

game.state.start 'boot'