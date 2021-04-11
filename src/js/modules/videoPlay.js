export default class VideoPlayer {
    constructor(trigers, overlay) {
        this.btns = document.querySelectorAll(trigers);
        this.overlay = document.querySelector(overlay);
        this.close - this.overlay.querySelector('.close');
    
    }
    play(){
        this.btns.forEach(btn =>{ 
            btn.addEventListener('click', () => {
                console.log('Hello');
            });
        });
    }
}