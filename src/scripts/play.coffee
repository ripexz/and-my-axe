#MobManager = require './mobs'
#ItemManager = require './items'

class Game

	constructor: (game) ->
		@player = null
		@spawnTimer = null
		@mobGroup = null

		@fontStyle = null
		@scoreText = null

		@score = 0
		@health = 0

	create: () ->
		console.log 'GAME STARTED'

		# initialise helper classes
		#@items = new ItemManager()
		#@mobs = new MobManager()

		# physics and gravity
		@physics.startSystem Phaser.Physics.ARCADE
		@physics.arcade.gravity.y = 200

		# display images
		#@add.sprite 0, 0, 'background'
		#@add.sprite 0, Axe.GAME_HEIGHT-80, 'floor'
		@background = @add.tileSprite 0, 0, Axe.GAME_WIDTH, Axe.GAME_HEIGHT, 'background'
		@floor = @add.tileSprite 0, Axe.GAME_HEIGHT-80, Axe.GAME_WIDTH, 83, 'floor'
		@add.sprite 10, 5, 'score-bg'

		# add pause button
		@add.button Axe.GAME_WIDTH-96-10, 5, 'button-pause', @managePause, this

		# create the player and animations
		@player = @add.sprite 5, Axe.GAME_HEIGHT-160, 'monster-idle'
		@player.animations.add 'idle', [0,1,2,3,4,5,6,7,8,9,10,11,12], 10, true
		@player.animations.play 'idle'

		# set fonts
		@fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" }

		# initialise variables
		@spawnTimer = 0
		@mobGroup = @add.group()
		@scoreText = @add.text 120, 20, "0", @fontStyle
		@score = 0
		@health = 100
		#@mobs.spawnEnemy this

	managePause: () ->
		@game.paused = true
		@pausedText = @add.text 100, 250, "Game paused.\nClick anywhere to continue.", @fontStyle
		self = @
		@input.onDown.add () ->
			self.pausedText.destroy()
			self.game.paused = false

	update: () ->
		#@background.tilePosition.x -= 1
		#@floor.tilePosition.x -= 1

		@spawnTimer += @time.elapsed
		if @spawnTimer > 1000
			@spawnTimer = 0
			#@items.spawnCandy this

		@mobGroup.forEach (enemy) =>
			enemy.angle += enemy.rotateMe

		# game over
		if @health <= 0
			@add.sprite((Candy.GAME_WIDTH-594)/2, (Candy.GAME_HEIGHT-271)/2, 'game-over')
			@game.paused = true

module.exports = Game