
// You can write more code here

/* START OF COMPILED CODE */

class Movment {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Movment"] = this;

		/* START-USER-CTR-CODE */

		const scene = this.gameObject.scene

		this.cursors = scene.input.keyboard.createCursorKeys()

		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	/** @returns {Movment} */
	static getComponent(gameObject) {
		return gameObject["__Movment"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

update()

	{

	const speed = 200

	const player = this.gameObject

	if(!player.active)
	{

	return
	}


	const body = player.body

	if(!body)
	{
		return

	}


	if (this.cursors.left.isDown)
	{
		body.setVelocity(-speed, 0)
		player.play('left-walk', true)
	}
	else if (this.cursors.right.isDown)
	{
		body.setVelocity(speed, 0)
		player.play('right-walk', true)
	}
	else if (this.cursors.up.isDown)
	{
		body.setVelocity(0, -speed)
		player.play('up-walk', true)
	}
	else if (this.cursors.down.isDown)
	{
		body.setVelocity(0, speed)
		player.play('down-walk', true)
	}
	else
	{
		body.setVelocity(0, 0)
		const key = player.anims.currentAnim.key
		const parts = key.split('-')
		const direction = parts[0]
		player.play(`${direction}-idle`)
	}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
