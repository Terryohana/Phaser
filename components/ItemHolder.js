
// You can write more code here

/* START OF COMPILED CODE */

class ItemHolder {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ItemHolder"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.display = undefined

		/* END-USER-CTR-CODE */
	}

	/** @returns {ItemHolder} */
	static getComponent(gameObject) {
		return gameObject["__ItemHolder"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	itemName = "bear";

	/* START-USER-CODE */


	get isRevealed()
	{
		return this.display && this.display.visible

	}

	setTint(tint)
	{

	if(!this.display){

	return	
	}

	this.display.setTint(tint)
	}

	// Write your code here.
		reveal(callback)
	    {


		if(this.isRevealed)
		{

		return
		}

			const scene = this.gameObject.scene
			const{x ,y }= this.gameObject

			if(!this.display)

			{

			this.display = scene.add.image(x ,y , this.itemName)
				.setDepth(3000)

			}
	this.display.alpha = 0
	this.display.scale = 0
	this.display.visible = true


	scene.tweens.add({
		targets: this.display,
		y: '-=50',
		alpha: 1,
		scale: 0.4,
		duration: 500,
		onComplete: ()=>{
			if (callback)
			{
			 callback()	
			}
			}
		})


	}

	hide(callback)
	{
		const scene = this.gameObject.scene		
		scene.tweens.add({
					targets: this.display,
					y: '+=50',
					alpha: 0,
					scale: 0,
					duration: 300,
					delay: 1000,
					onComplete: () => {
						this.display.visible = false

						if(callback)
						{
							callback()

						}

					}
				})


		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
