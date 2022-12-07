
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		this.activeBox = undefined


		this.selectedBoxes = []


		this.matchesCount = 0

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// player
		const player = this.add.sprite(384, 288, "player_2323");

		// crate_06
		const crate_06 = this.add.image(752, 192, "crate_06");

		// crate_06_1
		const crate_06_1 = this.add.image(48, 176, "crate_06");

		// crate_06_1_1
		const crate_06_1_1 = this.add.image(384, 416, "crate_06");

		// crate_06_1_2
		const crate_06_1_2 = this.add.image(384, 192, "crate_06");

		// crate_06_1_3
		const crate_06_1_3 = this.add.image(384, 560, "crate_06");

		// crate_06_1_4
		const crate_06_1_4 = this.add.image(208, 320, "crate_06");

		// crate_06_1_5
		const crate_06_1_5 = this.add.image(560, 320, "crate_06");

		// crate_06_1_6
		const crate_06_1_6 = this.add.image(128, 512, "crate_06");

		// crate_06_1_7
		const crate_06_1_7 = this.add.image(688, 512, "crate_06");

		// countdownText
		const countdownText = this.add.text(384, 80, "", {});
		countdownText.setOrigin(0.5, 0.5);
		countdownText.text = "45";
		countdownText.setStyle({ "fontSize": "48px" });

		// lists
		const boxes = [crate_06_1_3, crate_06_1_5, crate_06_1_4, crate_06_1_6, crate_06_1, crate_06_1_1, crate_06_1_2, crate_06, crate_06_1_7];

		// player (components)
		const playerPhysics = new Physics(player);
		playerPhysics.width = 40;
		playerPhysics.height = 16;
		playerPhysics.offsetX = 12;
		playerPhysics.offsetY = 38;
		new Movment(player);
		new DepthSortY(player);
		new Action(player);

		// crate_06 (components)
		const crate_06Physics = new Physics(crate_06);
		crate_06Physics.static = true;
		crate_06Physics.width = 64;
		crate_06Physics.height = 32;
		crate_06Physics.offsetY = 32;
		new DepthSortY(crate_06);
		const crate_06ItemHolder = new ItemHolder(crate_06);
		crate_06ItemHolder.itemName = "parrot";

		// crate_06_1 (components)
		const crate_06_1Physics = new Physics(crate_06_1);
		crate_06_1Physics.static = true;
		crate_06_1Physics.width = 64;
		crate_06_1Physics.height = 32;
		crate_06_1Physics.offsetY = 32;
		new DepthSortY(crate_06_1);
		const crate_06_1ItemHolder = new ItemHolder(crate_06_1);
		crate_06_1ItemHolder.itemName = "chicken";

		// crate_06_1_1 (components)
		const crate_06_1_1Physics = new Physics(crate_06_1_1);
		crate_06_1_1Physics.static = true;
		crate_06_1_1Physics.width = 64;
		crate_06_1_1Physics.height = 32;
		crate_06_1_1Physics.offsetY = 32;
		new DepthSortY(crate_06_1_1);
		const crate_06_1_1ItemHolder = new ItemHolder(crate_06_1_1);
		crate_06_1_1ItemHolder.itemName = "penguin";

		// crate_06_1_2 (components)
		const crate_06_1_2Physics = new Physics(crate_06_1_2);
		crate_06_1_2Physics.static = true;
		crate_06_1_2Physics.width = 64;
		crate_06_1_2Physics.height = 32;
		crate_06_1_2Physics.offsetY = 32;
		new DepthSortY(crate_06_1_2);
		new ItemHolder(crate_06_1_2);

		// crate_06_1_3 (components)
		const crate_06_1_3Physics = new Physics(crate_06_1_3);
		crate_06_1_3Physics.static = true;
		crate_06_1_3Physics.width = 64;
		crate_06_1_3Physics.height = 32;
		crate_06_1_3Physics.offsetY = 32;
		new DepthSortY(crate_06_1_3);
		const crate_06_1_3ItemHolder = new ItemHolder(crate_06_1_3);
		crate_06_1_3ItemHolder.itemName = "duck";

		// crate_06_1_4 (components)
		const crate_06_1_4Physics = new Physics(crate_06_1_4);
		crate_06_1_4Physics.static = true;
		crate_06_1_4Physics.width = 64;
		crate_06_1_4Physics.height = 32;
		crate_06_1_4Physics.offsetY = 32;
		new DepthSortY(crate_06_1_4);
		const crate_06_1_4ItemHolder = new ItemHolder(crate_06_1_4);
		crate_06_1_4ItemHolder.itemName = "penguin";

		// crate_06_1_5 (components)
		const crate_06_1_5Physics = new Physics(crate_06_1_5);
		crate_06_1_5Physics.static = true;
		crate_06_1_5Physics.width = 64;
		crate_06_1_5Physics.height = 32;
		crate_06_1_5Physics.offsetY = 32;
		new DepthSortY(crate_06_1_5);
		const crate_06_1_5ItemHolder = new ItemHolder(crate_06_1_5);
		crate_06_1_5ItemHolder.itemName = "duck";

		// crate_06_1_6 (components)
		const crate_06_1_6Physics = new Physics(crate_06_1_6);
		crate_06_1_6Physics.static = true;
		crate_06_1_6Physics.width = 64;
		crate_06_1_6Physics.height = 32;
		crate_06_1_6Physics.offsetY = 32;
		new DepthSortY(crate_06_1_6);
		const crate_06_1_6ItemHolder = new ItemHolder(crate_06_1_6);
		crate_06_1_6ItemHolder.itemName = "chicken";

		// crate_06_1_7 (components)
		const crate_06_1_7Physics = new Physics(crate_06_1_7);
		crate_06_1_7Physics.static = true;
		crate_06_1_7Physics.width = 64;
		crate_06_1_7Physics.height = 32;
		crate_06_1_7Physics.offsetY = 32;
		new DepthSortY(crate_06_1_7);
		const crate_06_1_7ItemHolder = new ItemHolder(crate_06_1_7);
		crate_06_1_7ItemHolder.itemName = "parrot";

		// countdownText (components)
		new Countdown(countdownText);

		this.player = player;
		this.countdownText = countdownText;
		this.boxes = boxes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Text} */
	countdownText;
	/** @type {Phaser.GameObjects.Image[]} */
	boxes;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.player.play('down-walk')

		this.physics.add.collider(this.player , this.boxes ,this.handlePlayerBoxCollide , undefined , this)

		this.events.on('open-box' , this.handleOpenBox , this)

		Countdown.getComponent(this.countdownText).start(this.handleCountdownFinished.bind(this), 45000)

	}

		handleCountdownFinished()
	{
		// disable player like we've done before
		this.player.active = false
		const body =this.player.body
		body.setVelocity(0, 0)

		// create a You Lose! message
		const { width, height } = this.scale
		this.add.text(width * 0.5, height * 0.5, 'You Lose!', { fontSize: 48 })
			.setOrigin(0.5)
			.setDepth(5000)
	}

	handlePlayerBoxCollide(player , box)

	{

			const itemHolder =ItemHolder.getComponent(box)
			if(itemHolder && itemHolder.isRevealed)
			{
				return

			}


			if (this.activeBox)
		{
			return
		}

		this.activeBox = box

		this.activeBox.setTexture('crate_05')

		}	

	handleOpenBox()

	{
	if (!this.activeBox)

	{
	 return
	}

	const itemHolder =ItemHolder.getComponent(this.activeBox)

		if (!itemHolder)

		{

		return
		}

		if (itemHolder.isRevealed)

		{
		return
		}



	this.selectedBoxes.push({
		box: this.activeBox

	})	

		itemHolder.reveal(() =>{

			if (itemHolder.itemName === 'bear')

			{

			this.handleBearSelected()	
			return 

			}

			if (this.selectedBoxes.length < 2)
					{
						return
					}

					// we have to create this method
					this.checkForMatch()



		})
	}



		handleBearSelected()
	{
		// get the selected box information
		const { box  } = this.selectedBoxes.pop()

		const itemHolder = ItemHolder.getComponent(box)


		// tint the bear red
		itemHolder.setTint(0xff0000)

		// set the box to frame 7 (a red box)
		box.setTexture('crate-06')

		// disable the player and any movement
		this.player.active = false

		const body = this.player.body

		body.setVelocity(0, 0)

		// wait 1 second and then return to normal
		this.time.delayedCall(1000, () => {

			itemHolder.hide(() =>{
			itemHolder.setTint(0xffffff)
			box.setTexture('crate_06')
			this.player.active = true // 👈 re-activate the player


			})


		})
	}







		checkForMatch()
	{
		// pop from end to get second and first opened boxes
		const second = this.selectedBoxes.pop()
		const first = this.selectedBoxes.pop()

		const firstHolder = ItemHolder.getComponent(first.box)
		const secondHolder = ItemHolder.getComponent(second.box)

		// no match if the revealed items are not the same texture
		if (firstHolder.itemName !== secondHolder.itemName)
		{
			firstHolder.hide()
			secondHolder.hide()


			return
		}

			++this.matchesCount // 👈 add this line

		// we have a match! wait 1 second then set box to frame 8
		this.time.delayedCall(1000, () => {
			first.box.setTexture('crate_04')
			second.box.setTexture('crate_04')

			if (this.matchesCount >= 4)
		{
			// game won

			Countdown.getComponent(this.countdownText).stop()

			// 👇 disable and stop player like before
			this.player.active = false


			const body =this.player.body
			body.setVelocity(0, 0)

			// add a You Win! text 👇
			const { width, height } = this.scale
			this.add.text(width * 0.5, height * 0.5, 'You Win!', {
				fontSize: 48
			})
			.setOrigin(0.5)
			.setDepth(5000)
		}

		})
	}


	updateActiveBox()
{
	if (!this.activeBox)
	{
		return
	}

	// get the distance here 👇
	const distance = Phaser.Math.Distance.Between(
		this.player.x, this.player.y,
		this.activeBox.x, this.activeBox.y
	)

	if (distance < 64) // 👈 do nothing if still near
	{
		return
	}

	// return to using frame 10 when too far
	this.activeBox.setTexture('crate_06')

	// and make activeBox undefined
	this.activeBox = undefined
}





	update()
	{
	this.updateActiveBox()

	this.children.each(c => {
		/** @type {Phaser.Physics.Arcade.Sprite} */
		// @ts-ignore
		const child = c
	if(!DepthSortY.getComponent(child))
{
	return

}

		child.setDepth(child.y)
	})




	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
