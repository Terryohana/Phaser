
// You can write more code here

/* START OF COMPILED CODE */

class Countdown {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Countdown"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/** @type {Phaser.Time.TimerEvent} */

		this.timerEvent




		const scene= this.gameObject.scene

		/* END-USER-CTR-CODE */
	}

	/** @returns {Countdown} */
	static getComponent(gameObject) {
		return gameObject["__Countdown"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	start(callback, duration = 45000)
	{

		const scene =this.gameObject.scene

		this.duration = duration

		this.stop()


		this.timerEvent = scene.time.addEvent({
		delay: duration,
		callback: () => {
			this.gameObject.text = '0' // 👈 set to 0 since time is up

			this.stop()

			// 3️⃣ execute callback when finished
			if (callback)
			{
				callback()
			}
		}
	})

	}

	stop()
	{
			if (this.timerEvent)
		{
			this.timerEvent.destroy()
			this.timerEvent = undefined
		}
	}

	update()
	{
		if (!this.timerEvent || this.duration <= 0)
	{
		return
	}

	// 1️⃣ get the elapsed time
	const elapsed = this.timerEvent.getElapsed()

	// 2️⃣ subtract from total duration
	const remaining = this.duration - elapsed

	// 3️⃣ convert from milliseconds to seconds
	const seconds = remaining / 1000

	// 4️⃣ change label to show new value
	this.gameObject.text = seconds.toFixed(2)

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
