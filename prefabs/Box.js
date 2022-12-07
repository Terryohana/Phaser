
// You can write more code here

/* START OF COMPILED CODE */

class Box extends box {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture, frame);

		// this (components)
		const thisPhysics = new Physics(this);
		thisPhysics.static = true;
		const thisPhysics = Physics.getComponent(this);
		thisPhysics.static = true;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
