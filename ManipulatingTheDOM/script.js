const header = document.getElementById('header');
const paragraph = document.querySelector('#intro');

header.textContent = 'Welcome to the Updated DOM Lab';
paragraph.textContent = 'This paragraph content has been changed!';
header.style.color = 'blue';

const button =document.getElementById('changeTextButton');
button.addEventListener('click', function() {
    paragraph.textContent = 'You clicked the button!';
});

const input = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    const userInputText = input.value;
    paragraph.textContent = `User entered: ${userInputText}`;

});