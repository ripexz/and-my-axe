class MainMenu

	constructor: (game) ->
		#nattin

	create: () ->
		@add.sprite 0, 0, 'background'
		@add.sprite (Axe.GAME_WIDTH - 395) / 2, 60, 'title'

		# add the start button
		@add.button(@world.centerX - 200, @world.centerY + 100, 'button-start', @startGame, this, 1, 0, 2)

	startGame: () ->
		@state.start 'play'

module.exports = MainMenu