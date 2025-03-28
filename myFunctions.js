// myFunctions.js
import { Button } from './myButton.js';

// Generates an array of Button instances using two arrays
export function generateButtons(arrTexts, arrColors) {
    const arrButtons = [];
    arrTexts.forEach((text, index) => {
        const color = arrColors[index];
        const btn = new Button(text, color);
        arrButtons.push(btn);
    });
    return arrButtons;
}

// Displays the buttons sequentially, one every 30 seconds.
export function displayButtonsSequentially(arrButtons) {
    arrButtons.forEach((button, index) => {
        setTimeout(() => {
            button.show();
        }, index * 30000); // delay increases by 30 seconds for each button
    });
}
