!function t(e,i,s){function a(r,o){if(!i[r]){if(!e[r]){var h="function"==typeof require&&require;if(!o&&h)return h(r,!0);if(n)return n(r,!0);throw new Error("Cannot find module '"+r+"'")}var l=i[r]={exports:{}};e[r][0].call(l.exports,function(t){var i=e[r][1][t];return a(i?i:t)},l,l.exports,t,e,i,s)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<s.length;r++)a(s[r]);return a}({1:[function(t){(function(e){var i,s,a,n,r;e.Axe={},i=t("./boot"),a=t("./load"),n=t("./menu"),r=t("./play"),s=new Phaser.Game(960,640,Phaser.AUTO,"game"),s.state.add("boot",i),s.state.add("load",a),s.state.add("menu",n),s.state.add("play",r),s.state.start("boot")}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./boot":2,"./load":3,"./menu":4,"./play":6}],2:[function(t,e){var i;i=function(){function t(){}return t.prototype.create=function(){return this.input.maxPointers=1,this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.scale.setScreenSize(!0),this.state.start("load")},t.prototype.preload=function(){return this.load.image("preloaderBar","images/loading-bar.png")},t}(),e.exports=i},{}],3:[function(t,e){var i;i=function(){function t(){Axe.GAME_WIDTH=960,Axe.GAME_HEIGHT=640}return t.prototype.create=function(){return this.state.start("menu")},t.prototype.preload=function(){return this.stage.backgroundColor="#444444",this.preloadBar=this.add.sprite((Axe.GAME_WIDTH-311)/2,(Axe.GAME_HEIGHT-27)/2,"preloaderBar"),this.load.setPreloadSprite(this.preloadBar),this.load.image("background","images/background.png"),this.load.image("floor","images/floor.png"),this.load.image("title","images/title.png"),this.load.image("game-over","images/gameover.png"),this.load.image("button-pause","images/button-pause.png"),this.load.image("player","images/player.png"),this.load.image("enemy","images/enemy.png"),this.load.image("axe","images/axe.png"),this.load.spritesheet("button-start","images/button-start.png",401,143)},t}(),e.exports=i},{}],4:[function(t,e){var i;i=function(){function t(){}return t.prototype.create=function(){return this.add.sprite(0,0,"background"),this.add.sprite((Axe.GAME_WIDTH-395)/2,60,"title"),this.add.button(this.world.centerX-200,this.world.centerY+100,"button-start",this.startGame,this,1,0,2)},t.prototype.startGame=function(){return this.state.start("play")},t}(),e.exports=i},{}],5:[function(t,e){var i;i=function(){function t(){}return t.prototype.spawnEnemy=function(t){var e,i;return i=Axe.GAME_WIDTH-30,e=t.add.sprite(i,Axe.GAME_HEIGHT-80,"enemy"),e.anchor.setTo(.5,1),e.scale.x=-1,t.physics.enable(e,Phaser.Physics.ARCADE),t.mobGroup.add(e)},t.prototype.killEnemy=function(t){return t.kill(),this.score+=10,this.scoreText.text="Score: "+this.score},t}(),e.exports=i},{}],6:[function(t,e){var i,s;s=t("./mobs"),i=function(){function t(){this.player=null,this.mobGroup=null,this.spawnTimer=null,this.spawnInterval=null,this.fontStyle=null,this.scoreText=null,this.score=0}return t.prototype.create=function(){return this.mobs=new s,this.physics.startSystem(Phaser.Physics.ARCADE),this.physics.arcade.gravity.y=200,this.background=this.add.tileSprite(0,0,Axe.GAME_WIDTH,Axe.GAME_HEIGHT,"background"),this.floor=this.add.tileSprite(0,Axe.GAME_HEIGHT-80,Axe.GAME_WIDTH,83,"floor"),this.physics.enable(this.floor,Phaser.Physics.ARCADE),this.floor.body.allowGravity=!1,this.floor.body.immovable=!0,this.add.button(Axe.GAME_WIDTH-106,5,"button-pause",this.managePause,this),this.player=this.add.sprite(80,Axe.GAME_HEIGHT-83,"player"),this.player.anchor.setTo(.5,1),this.physics.enable(this.player,Phaser.Physics.ARCADE),this.player.immovable=!0,this.axe=this.add.sprite(0,0,"axe"),this.axe.anchor.setTo(0,1),this.axe.position.x=this.player.position.x+20,this.axe.position.y=this.player.position.y-70,this.axe.angle=10,this.axe.facing="right",this.axe.canSwing=!0,this.physics.enable(this.axe,Phaser.Physics.ARCADE),this.axe.body.allowGravity=!1,this.axe.body.immovable=!0,this.fontStyle={font:"40px Arial",fill:"#FFCC00",stroke:"#333",strokeThickness:5,align:"center"},this.spawnTimer=0,this.spawnInterval=3e3,this.mobGroup=this.add.group(),this.scoreText=this.add.text(20,10,"Score: 0",this.fontStyle),this.score=0,this.difficultyTimer=this.time.create(!1),this.difficultyTimer.loop(5e3,this.increaseDifficulty,this),this.cursors=this.input.keyboard.createCursorKeys(),this.mobs.spawnEnemy(this)},t.prototype.managePause=function(){var t;return this.game.paused=!0,this.pausedText=this.add.text(Axe.GAME_WIDTH/4,250,"Game paused.\nClick anywhere to continue.",this.fontStyle),t=this,this.input.onDown.add(function(){return t.pausedText.destroy(),t.game.paused=!1})},t.prototype.update=function(){return this.physics.arcade.collide(this.player,this.floor),this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)&&this.axe.canSwing&&!this.axe.swinging&&(this.axe.swinging=!0,this.axe.canSwing=!1,setTimeout(function(t){return function(){return t.axe.canSwing=!0}}(this),1e3)),this.axe.swinging&&("left"===this.axe.facing?(this.axe.angle-=3,this.axe.angle<=-80&&(this.axe.swinging=!1,this.axe.angle=-10)):(this.axe.angle+=3,this.axe.angle>=80&&(this.axe.swinging=!1,this.axe.angle=10))),this.cursors.left.isDown&&(this.player.scale.x=-1,this.background.tilePosition.x+=1,this.floor.tilePosition.x+=3,this.axe.position.x=this.player.position.x-20,"right"===this.axe.facing&&(this.axe.swinging=!1),this.axe.swinging||(this.axe.angle=-10),this.axe.scale.x=-1,this.axe.facing="left"),this.cursors.right.isDown&&(this.player.scale.x=1,this.background.tilePosition.x-=1,this.floor.tilePosition.x-=3,this.axe.position.x=this.player.position.x+20,"left"===this.axe.facing&&(this.axe.swinging=!1),this.axe.swinging||(this.axe.angle=10),this.axe.scale.x=1,this.axe.facing="right"),this.time.elapsed,this.spawnTimer+=this.time.elapsed,this.spawnTimer>this.spawnInterval&&(this.spawnTimer=0,this.mobs.spawnEnemy(this)),this.mobGroup.forEach(function(t){return function(e){var i;return t.physics.arcade.collide(e,t.floor),t.axe.swinging&&t.physics.arcade.collide(e,t.axe,t.mobs.killEnemy,null,t),i=60,t.cursors.left.isDown&&(i=0),t.cursors.right.isDown&&(i=120),t.physics.arcade.collide(e,t.player,t.gameOver,null,t),t.physics.arcade.moveToObject(e,t.player,i)}}(this))},t.prototype.gameOver=function(){return this.add.sprite((Axe.GAME_WIDTH-594)/2,(Axe.GAME_HEIGHT-271)/2,"game-over"),this.game.paused=!0,setTimeout(function(t){return function(){return t.game.paused=!1,t.state.start("menu")}}(this),3e3)},t.prototype.increaseDifficulty=function(){return this.spawnInterval>0?this.spawnInterval-=50:this.spawnInterval=0},t}(),e.exports=i},{"./mobs":5}]},{},[1]);