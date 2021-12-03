class Alien {
    constructor(object) {
        this.pos;
        this.size;
        this.color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
    }
}