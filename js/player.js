/**
 * @implements {Drawable|Loadable}
 */
class Player {
    constructor() {
        this.radius = 10;
        this.offsetX = 100;
        this.offsetY = 100;
        this.moveSize = 10;
    }

    draw() {
        // Create head
        fill('red');
        image(this.playerImg, this.offsetX, this.offsetY, 106, 174);
        let fps = Math.round(frameRate());
        text(`Some test game (${fps} fps)`, 10, 20);

        this.handlePlayerMovement();
    }

    load() {
        this.playerImg = loadImage('images/nook.webp');
    }

    handlePlayerMovement(key) {
        let isTop = keyIsDown(UP_ARROW);
        let isLeft = keyIsDown(LEFT_ARROW);
        let isRight = keyIsDown(RIGHT_ARROW);
        let isDown = keyIsDown(DOWN_ARROW);

        if (isTop) {
            let newOffset = this.offsetY - this.moveSize;
            if (newOffset >= 20) {
                this.offsetY = newOffset;
            }
        }

        if (isLeft) {
            this.offsetX -= this.moveSize;
        }

        if (isRight) {
            this.offsetX += this.moveSize;
        }

        if (isDown) {
            let newOffset = this.offsetY + this.moveSize;
            if (newOffset <= 230) {
                this.offsetY = newOffset;
            }
        }
    }
}