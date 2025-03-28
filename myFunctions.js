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

export function displayButtonsSequentially(arrButtons, targetElement) {
    arrButtons.forEach((button, index) => {
        setTimeout(() => {
            button.show(targetElement);
        }, index * 3000);
    });
}