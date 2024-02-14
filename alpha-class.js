// function play(){
// // step-1 hide the home screen. to hide the screen add class hidden to the home section
// const homeSection =  document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection)

// // Show the playground
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection)
// }
function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);
    console.log(alphabet);

// set random alphabet
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

// set background color
setBackgroundColorById(alphabet)

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();


}