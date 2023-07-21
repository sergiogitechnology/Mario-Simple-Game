const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reloadButton = document.getElementById('reloadButton');
reloadButton.style.display = 'none';
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft + '50px'

        const reloadButton = document.getElementById('reloadButton');
        reloadButton.style.display = "block";
    }
},10); 

document.addEventListener('keydown', jump);

reloadButton.addEventListener('click', function() {
  location.reload();
});