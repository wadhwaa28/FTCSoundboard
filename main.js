// Sound file paths (now using .wav format)
const sounds = {
    sound1: new Audio('match_start.wav'),
    sound2: new Audio('ENDMATCH.mp3'),
    sound3: new Audio('sounds/sound3.wav'),
    sound4: new Audio('sounds/sound4.wav'),
    sound5: new Audio('sounds/sound5.wav'),
};

// Function to play an individual sound
function playSound(soundId) {
    sounds[soundId].play();
}

// Function to play all sounds in sequence
function playAllSounds() {
    const soundIds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5'];
    let index = 0;

    function playNextSound() {
        if (index < soundIds.length) {
            sounds[soundIds[index]].play();
            sounds[soundIds[index]].onended = () => {
                index++;
                playNextSound();
            };
        }
    }

    playNextSound();
}

// Attach event listeners to buttons
document.getElementById('sound1').addEventListener('click', () => playSound('sound1'));
document.getElementById('sound2').addEventListener('click', () => playSound('sound2'));
document.getElementById('sound3').addEventListener('click', () => playSound('sound3'));
document.getElementById('sound4').addEventListener('click', () => playSound('sound4'));
document.getElementById('sound5').addEventListener('click', () => playSound('sound5'));
document.getElementById('sequence').addEventListener('click', playAllSounds);
