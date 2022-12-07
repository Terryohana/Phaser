
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// player
		const player = this.add.sprite(356, 276, "player_2323");

		this.player = player;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	player;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		
		this.player.play('down-walk')
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
