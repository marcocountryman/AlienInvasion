class Player{
    constructor() {
        this.lives = 3;
    }
    removeHeart() {
        //HIDE THE THIRD HEART
        if (this.lives === 2) {
            const h3 = document.getElementById('.heart3');
        }
        //HIDE THE SECOND HEART
        if (this.lives === 1) {
            const h2 = document.getElementById('.heart2');
        }
        //HIDE THE FINAL HEART AT THIS POINT IT IS GAME OVER
        if (this.lives === 0) {
            const h1 = document.getElementById('.heart1')
        }
    }
}
export default Player;