class Boot

	constructor: (game) ->
		#nattin

	create: () ->
		# set scale options
		this.input.maxPointers = 1
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		this.scale.pageAlignHorizontally = true
		this.scale.pageAlignVertically = true
		this.scale.setScreenSize true

		# start the Preloader state
		this.state.start 'load'

module.exports = Boot