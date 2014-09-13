MobManager = require './mobs'

class Game

	constructor: (game) ->
		@player = null
		@mobGroup = null

		@spawnTimer = null
		@spawnInterval = null

		@fontStyle = null
		@scoreText = null
		@score = 0

	create: () ->
		console.log 'GAME STARTED'

		# initialise helper classes
		@mobs = new MobManager()

		# physics and gravity
		@physics.startSystem Phaser.Physics.ARCADE
		@physics.arcade.gravity.y = 200

		# display images
		@background = @add.tileSprite 0, 0, Axe.GAME_WIDTH, Axe.GAME_HEIGHT, 'background'
		@floor = @add.tileSprite 0, Axe.GAME_HEIGHT - 80, Axe.GAME_WIDTH, 83, 'floor'
		@add.sprite 10, 5, 'score-bg'

		# floor physics
		@physics.enable @floor, Phaser.Physics.ARCADE
		@floor.body.allowGravity = false
		@floor.body.immovable = true

		# add pause button
		@add.button Axe.GAME_WIDTH - 106, 5, 'button-pause', @managePause, this

		# create the player and animations
		@player = @add.sprite (Axe.GAME_WIDTH / 2), Axe.GAME_HEIGHT - 83, 'player'
		#@player.animations.add 'idle', [0,1,2,3,4,5,6,7,8,9,10,11,12], 10, true
		#@player.animations.play 'idle'
		@player.anchor.setTo 0.5, 1

		# player physics
		@physics.enable @player, Phaser.Physics.ARCADE
		@player.immovable = true
		
		# axe
		@axe = @add.sprite 0, 0, 'axe'
		@axe.anchor.setTo 0, 1
		@axe.position.x = @player.position.x + 20
		@axe.position.y = @player.position.y - 70
		@axe.angle = 10

		# set fonts
		@fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" }

		# initialise variables
		@spawnTimer = 0
		@spawnInterval = 3000
		@mobGroup = @add.group()
		@scoreText = @add.text 120, 20, "0", @fontStyle
		@score = 0

		@difficultyTimer = @time.create false
		@difficultyTimer.loop 5000, @increaseDifficulty, this

		@cursors = @input.keyboard.createCursorKeys()
		@mobs.spawnEnemy this

	managePause: () ->
		@game.paused = true
		@pausedText = @add.text (Axe.GAME_WIDTH)/4, 250, "Game paused.\nClick anywhere to continue.", @fontStyle
		self = @
		@input.onDown.add () ->
			self.pausedText.destroy()
			self.game.paused = false

	update: () ->
		@physics.arcade.collide @player, @floor

		if @cursors.left.isDown
			@player.scale.x = -1
			@background.tilePosition.x += 3
			@floor.tilePosition.x += 3
		if @cursors.right.isDown
			@player.scale.x = 1
			@background.tilePosition.x -= 3
			@floor.tilePosition.x -= 3

		@time.elapsed

		@spawnTimer += @time.elapsed
		if @spawnTimer > @spawnInterval
			@spawnTimer = 0
			@mobs.spawnEnemy this

		@mobGroup.forEach (enemy) =>
			@physics.arcade.collide enemy, @player, @gameOver, null, this
			@physics.arcade.collide enemy, @floor

			speed = 60
			if enemy.position.x >= Axe.GAME_WIDTH / 2
				enemy.scale.x = -1
				speed = 0 if @cursors.left.isDown
				speed = 120 if @cursors.right.isDown
			else
				enemy.scale.x = 1
				speed = 120 if @cursors.left.isDown
				speed = 0 if @cursors.right.isDown

			@physics.arcade.moveToObject enemy, @player, speed

	gameOver: () ->
		@add.sprite((Axe.GAME_WIDTH - 594)/2, (Axe.GAME_HEIGHT - 271)/2, 'game-over')
		@game.paused = true

	increaseDifficulty: () ->
		if @spawnInterval > 0
			@spawnInterval -= 50
		else
			@spawnInterval = 0

module.exports = Game