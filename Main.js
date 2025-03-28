import { arrTexts, arrColors } from './myArrays.js';
import { generateButtons, displayButtonsSequentially } from './myFunctions.js';
import { ColorButton } from './myColorButton.js';
import { generateNews } from './News.js';

// ----- TASK 1: BUTTONS -----

// Create a container for buttons
const buttonContainer = document.createElement('div');
document.body.insertBefore(buttonContainer, document.getElementById('content'));

// Generate an array of Button instances.
const arrButtons = generateButtons(arrTexts, arrColors);
// Display each button sequentially (one every 30 seconds).
displayButtonsSequentially(arrButtons, buttonContainer);

// Create and display an instance of ColorButton.
const myColorBtn = new ColorButton('Special', 'purple', 'yellow');
myColorBtn.show(buttonContainer);

// ----- TASK 2: NEWS -----

// Define an array of news resource objects.
const arrRecourses = [
    {
        srcImg: 'images/BC.png', //
        newsTitle: 'Breaking News',
        newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.'
    },
    {
        srcImg: 'images/alberta.png', //
        newsTitle: 'Daily Update',
        newsContent: 'The purpose of lorem ipsum is to create a natural looking block of text that does not distract from the layout. This technique is often used in page layouts.'
    }
    // Add more news objects if needed...
];

// Generate news items inside the paragraphs of the content block.
// This will be executed after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    generateNews(arrRecourses);
});