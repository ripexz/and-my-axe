class MobManager

	constructor: () ->
		#nattin

	spawnEnemy: (game) ->
		#position
		pos = Axe.GAME_WIDTH - 30

		# add to stage
		mob = game.add.sprite pos, Axe.GAME_HEIGHT - 80, 'enemy'
		mob.anchor.setTo 0.5, 1
		mob.scale.x = -1

		# enable physics
		game.physics.enable mob, Phaser.Physics.ARCADE

		# add to group
		game.mobGroup.add mob

	killEnemy: (enemy, axe) ->
		enemy.kill()
		@score += 10
		@scoreText.text = "Score: " + @score

module.exports = MobManager