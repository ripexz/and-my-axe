class MobManager

	constructor: () ->
		#nattin

	spawnEnemy: (game) ->
		#position
		pos = if Math.random() > 0.5 then Axe.GAME_WIDTH - 30 else 30

		# add to stage
		mob = game.add.sprite pos, Axe.GAME_HEIGHT - 80, 'enemy'
		mob.anchor.setTo 0.5, 1

		# enable physics
		game.physics.enable mob, Phaser.Physics.ARCADE

		# add to group
		game.mobGroup.add mob

module.exports = MobManager