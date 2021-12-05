class Alien {
    constructor(pos,size,color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0],this.pos[1],this.size,this.color);
    }
    // shoot() {
       
    // }
    
}
export default Alien;