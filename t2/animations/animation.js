
class Animation {
    /**
     * Abstract animation constructor.
     * @param scene Scene to apply the animation to
     * @param id Animation identification string.
     * @param speed Animation time span.
     */
    constructor(scene, speed) {
        this.scene = scene;
        this.speed = speed;
        this.done = false;
    }


}
