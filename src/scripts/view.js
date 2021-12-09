class View {
    constructor (game,context,canvas) {
        
        this.game = game;
        this.context = context;
        this.canvas = canvas;
    }
    //STARTS GAME
    start() {
        this.game.characterSequence(this.context);
        
    }
    
}
export default View;