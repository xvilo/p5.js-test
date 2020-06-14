class Game {
    constructor() {
        this.player = new Player();

        /**
         * @type {Drawable[]}
         */
        this.drawables = [
            this.player,
        ];

        /**
         * @type {Loadable[]}
         */
        this.loadables = [
            this.player
        ];
    }

    setup() {
        createCanvas(1000, 400);
    }

    preload() {
        this.loadables.forEach(loadable => loadable.load())
    }

    draw() {
        background('#f4eddd'); // Where to move this?
        this.drawables.forEach(drawable => drawable.draw())
    }
}


