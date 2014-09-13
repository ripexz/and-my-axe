class MainMenu

	constructor: (game) ->
		#nattin

	create: () ->
		#@add.sprite 0, 0, 'background'
		#@add.sprite -130, Axe.GAME_HEIGHT-514, 'monster-cover'
		@add.sprite (Axe.GAME_WIDTH-395)/2, 60, 'title'

		# add the start button
		#@add.button((Axe.GAME_WIDTH/2), (Axe.GAME_HEIGHT-100), 'button-start', @startGame, this, 1, 0, 2)
		@add.button(@world.centerX - 95, @world.centerY + 100, 'button-start', @startGame, this, 1, 0, 2)

	startGame: () ->
		console.log('CLICKED')
		@state.start 'play'

module.exports = MainMenu