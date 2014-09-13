class Boot

	constructor: (game) ->
		#nattin

	create: () ->
		# set scale options
		@input.maxPointers = 1
		@scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		@scale.pageAlignHorizontally = true
		@scale.pageAlignVertically = true
		@scale.setScreenSize true

		# start the Preloader state
		@state.start 'load'

module.exports = Boot