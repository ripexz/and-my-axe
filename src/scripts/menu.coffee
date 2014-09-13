class MainMenu

	constructor: (game) ->
		#nattin

	create: () ->
		#this.add.sprite 0, 0, 'background'
		#this.add.sprite -130, Axe.GAME_HEIGHT-514, 'monster-cover'
		#this.add.sprite (Axe.GAME_WIDTH-395)/2, 60, 'title'

		console.log('context', this)

		# add the start button
		this.add.button((Axe.GAME_WIDTH/2), (Axe.GAME_HEIGHT-100), 'button-start', @startGame, this, 1, 0, 2)

	startGame: () ->
		this.state.start 'game'

module.exports = MainMenu