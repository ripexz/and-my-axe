class Preloader

	constructor: (game) ->
		Axe.GAME_WIDTH = 960
		Axe.GAME_HEIGHT = 640

	create: () ->
		@state.start 'menu'

	preload: () ->
		@stage.backgroundColor = '#444444'

		@preloadBar = @add.sprite((Axe.GAME_WIDTH-311)/2, (Axe.GAME_HEIGHT-27)/2, 'preloaderBar')
		@load.setPreloadSprite @preloadBar
		
		# load images
		@load.image 'background', 'images/background.png'
		@load.image 'floor', 'images/floor.png'
		@load.image 'monster-cover', 'images/monster-cover.png'
		@load.image 'title', 'images/title.png'
		@load.image 'game-over', 'images/gameover.png'
		@load.image 'score-bg', 'images/score-bg.png'
		@load.image 'button-pause', 'images/button-pause.png'

		# load spritesheets
		@load.spritesheet('candy', 'images/candy.png', 82, 98);
		@load.spritesheet('monster-idle', 'images/monster-idle.png', 103, 131);
		@load.spritesheet('button-start', 'images/button-start.png', 401, 143);

module.exports = Preloader