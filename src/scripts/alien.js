class Alien {
    constructor(object) {
        this.pos = object.pos;
        this.size = object.size;
        this.color = object.color
        // this.alive = "yes"
        // const img = new Image();
        // img.source = "./images/alien.png"
        
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1],this.size[0],this.size[1]);
    }
    shoot() {
        setTimeout() {}
    }
}
export default Alien;