const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const animationContainer = document.getElementById('animation-container');
const mainContent = document.getElementById('main-content');
const emojiContainer = document.getElementById('emoji-container');

const emojis = ['❤️', '💕', '💖'];

let noScale = 1;
let yesScale = 1;

yesBtn.addEventListener('click', () => {
    mainContent.classList.add('hidden');
    animationContainer.classList.remove('hidden');
    const hugImg = animationContainer.querySelector('img');
    hugImg.style.animation = 'none';
    hugImg.offsetHeight; /* trigger reflow */
    hugImg.style.animation = null; 

    setTimeout(() => {
        mainContent.classList.remove('hidden');
        animationContainer.classList.add('hidden');
    }, 4000); // Show animation for 4 seconds
});

noBtn.addEventListener('click', () => {
    noScale -= 0.1;
    yesScale += 0.1;

    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;
});

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    const xStart = Math.random() * 100 + 'vw';
    const xEnd = Math.random() * 100 + 'vw';

    emoji.style.setProperty('--x-start', xStart);
    emoji.style.setProperty('--x-end', xEnd);
    emoji.style.left = Math.random() * 100 + 'vw';
    
    emojiContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 10000);
}

setInterval(createEmoji, 300);
