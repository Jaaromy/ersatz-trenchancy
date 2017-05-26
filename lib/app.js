window.onload = function () {

	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'main', { preload: preload, create: create });

	function preload() {
		game.load.image('boid', 'images/triangle.png');
		game.load.image('logo', 'images/phaser.png');

	}

	function create() {
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
		var boid = game.add.sprite(0, 0, 'boid');
		boid.scale.setTo(0.1, 0.1);

	}

};
