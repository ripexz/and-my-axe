class Game

	constructor: (game) ->
		@player = null
		@spawnTimer = null

		@score = 0
		@health = 100

	create: () ->
		console.log 'GAME STARTED'

module.exports = Game