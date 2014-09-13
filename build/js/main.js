!function t(e,i,a){function r(n,o){if(!i[n]){if(!e[n]){var l="function"==typeof require&&require;if(!o&&l)return l(n,!0);if(s)return s(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=i[n]={exports:{}};e[n][0].call(u.exports,function(t){var i=e[n][1][t];return r(i?i:t)},u,u.exports,t,e,i,a)}return i[n].exports}for(var s="function"==typeof require&&require,n=0;n<a.length;n++)r(a[n]);return r}({1:[function(t){(function(e){var i,a,r,s,n;e.Axe={},i=t("./boot"),r=t("./load"),s=t("./menu"),n=t("./play"),a=new Phaser.Game(960,640,Phaser.AUTO,"game"),a.state.add("boot",i),a.state.add("load",r),a.state.add("menu",s),a.state.add("play",n),a.state.start("boot")}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./boot":2,"./load":3,"./menu":4,"./play":5}],2:[function(t,e){var i;i=function(){function t(){}return t.prototype.create=function(){return this.input.maxPointers=1,this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.scale.setScreenSize(!0),this.state.start("load")},t.prototype.preload=function(){return this.load.image("preloaderBar","images/loading-bar.png")},t}(),e.exports=i},{}],3:[function(t,e){var i;i=function(){function t(){Axe.GAME_WIDTH=960,Axe.GAME_HEIGHT=640}return t.prototype.create=function(){return this.state.start("menu")},t.prototype.preload=function(){return this.stage.backgroundColor="#444444",this.preloadBar=this.add.sprite((Axe.GAME_WIDTH-311)/2,(Axe.GAME_HEIGHT-27)/2,"preloaderBar"),this.load.setPreloadSprite(this.preloadBar),this.load.image("background","images/background.png"),this.load.image("floor","images/floor.png"),this.load.image("monster-cover","images/monster-cover.png"),this.load.image("title","images/title.png"),this.load.image("game-over","images/gameover.png"),this.load.image("score-bg","images/score-bg.png"),this.load.image("button-pause","images/button-pause.png"),this.load.spritesheet("candy","images/candy.png",82,98),this.load.spritesheet("monster-idle","images/monster-idle.png",103,131),this.load.spritesheet("button-start","images/button-start.png",401,143)},t}(),e.exports=i},{}],4:[function(t,e){var i;i=function(){function t(){}return t.prototype.create=function(){return this.add.sprite((Axe.GAME_WIDTH-395)/2,60,"title"),this.add.button(this.world.centerX-95,this.world.centerY+100,"button-start",this.startGame,this,1,0,2)},t.prototype.startGame=function(){return console.log("CLICKED"),this.state.start("play")},t}(),e.exports=i},{}],5:[function(t,e){var i;i=function(){function t(){this.player=null,this.spawnTimer=null,this.mobGroup=null,this.fontStyle=null,this.scoreText=null,this.score=0,this.health=0}return t.prototype.create=function(){return console.log("GAME STARTED"),this.physics.startSystem(Phaser.Physics.ARCADE),this.physics.arcade.gravity.y=200,this.add.sprite(0,0,"background"),this.add.sprite(-30,Axe.GAME_HEIGHT-160,"floor"),this.add.sprite(10,5,"score-bg"),this.add.button(Axe.GAME_WIDTH-96-10,5,"button-pause",this.managePause,this),this.player=this.add.sprite(5,760,"monster-idle"),this.player.animations.add("idle",[0,1,2,3,4,5,6,7,8,9,10,11,12],10,!0),this.player.animations.play("idle"),console.log(this.player),this.fontStyle={font:"40px Arial",fill:"#FFCC00",stroke:"#333",strokeThickness:5,align:"center"},this.spawnTimer=0,this.mobGroup=this.add.group(),this.scoreText=this.add.text(120,20,"0",this.fontStyle),this.score=0,this.health=100},t.prototype.managePause=function(){var t,e;return this.game.paused=!0,t=this.add.text(100,250,"Game paused.\nClick anywhere to continue.",this.fontStyle),e=this,this.input.onDown.add(function(){return t.destroy(),e.game.paused=!1})},t.prototype.update=function(){return this.spawnTimer+=this.time.elapsed,this.spawnTimer>1e3&&(this.spawnTimer=0),this.mobGroup.forEach(function(){return function(t){return t.angle+=t.rotateMe}}(this)),this.health<=0?(this.add.sprite((Candy.GAME_WIDTH-594)/2,(Candy.GAME_HEIGHT-271)/2,"game-over"),this.game.paused=!0):void 0},t}(),e.exports=i},{}]},{},[1]);