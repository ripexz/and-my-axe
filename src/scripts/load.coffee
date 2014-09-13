class Preloader

	constructor: (game) ->
		Axe.GAME_WIDTH = 960
		Axe.GAME_HEIGHT = 640

	create: () ->
		this.state.start 'menu'

	preload: () ->
		this.stage.backgroundColor = '#B4D9E7'

		this.preloadBar = this.add.sprite((Axe.GAME_WIDTH-311)/2, (Axe.GAME_HEIGHT-27)/2, 'preloaderBar')
		this.load.setPreloadSprite this.preloadBar
		
		# load images
		this.load.image 'background', 'images/background.png'
		this.load.image 'floor', 'images/floor.png'
		this.load.image 'monster-cover', 'images/monster-cover.png'
		this.load.image 'title', 'images/title.png'
		this.load.image 'game-over', 'images/gameover.png'
		this.load.image 'score-bg', 'images/score-bg.png'
		this.load.image 'button-pause', 'images/button-pause.png'

		# load spritesheets
		this.load.spritesheet('candy', 'images/candy.png', 82, 98);
		this.load.spritesheet('monster-idle', 'images/monster-idle.png', 103, 131);

module.exports = Preloader