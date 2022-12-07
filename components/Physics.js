
// You can write more code here

/* START OF COMPILED CODE */

class Physics {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Physics"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)



		/* END-USER-CTR-CODE */
	}

	/** @returns {Physics} */
	static getComponent(gameObject) {
		return gameObject["__Physics"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {boolean} */
	static = false;
	/** @type {number} */
	width = 0;
	/** @type {number} */
	height = 0;
	/** @type {number} */
	offsetX = 0;
	/** @type {number} */
	offsetY = 0;

	/* START-USER-CODE */

start()


	{


	this.scene.physics.add.existing(this.gameObject ,this.static)

	const body = this.gameObject.body

	body.setSize(this.width ,this.height)
	body.setOffset(this.offsetX , this.offsetY)	

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
