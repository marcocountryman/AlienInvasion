class Alien {
    constructor(object,ctx) {
        this.pos = object.pos;
        this.size = object.size;
        this.color = object.color;
        this.alive = "yes"
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
    }
    shoot() {

    }
}
export default Alien;