// Declare global variables.

const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio');

// Declare global functions.

function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop function from running if key struck is not listed on letter block. 
        audio.currentTime = 0; // rewind to Christmas sound effect to start whenever key is struck. 
        audio.play();
        key.classList.add('playing');
}

function clickLetterBlock () { 
    alert('Press the key listed in the pink bar to hear a WPRBXmas sound!');
}

function removeTransition(e) {
    const activeKey = document.querySelector(`.key[data-key="${e.srcElement.attributes[0].nodeValue}"]`); // Use data within the audio element's event object data to select the appropriate div.
    activeKey.classList.remove('playing'); 
}

// Add event listeners


sounds.forEach(sound => sound.addEventListener('ended', removeTransition)); // Restyle letter block when Christmas sound effect finishes playing. 
window.addEventListener('keydown', playSound); // Play Christmas sound effect when appropriate key is struck. 
keys.forEach(key => key.addEventListener('click', clickLetterBlock)); // Direct users to use keyboard instead of mouse to play samples.

