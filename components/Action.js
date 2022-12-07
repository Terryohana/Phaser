
// You can write more code here

/* START OF COMPILED CODE */

class Action {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Action"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene


		scene.input.keyboard.on('keydown-SPACE' ,() => {

			scene.events.emit('open-box')

		})	

		/* END-USER-CTR-CODE */
	}

	/** @returns {Action} */
	static getComponent(gameObject) {
		return gameObject["__Action"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
