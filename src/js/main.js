import Slider from './modules/slider';
import VideoPlayer from './modules/videoPlay';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.play();
});

