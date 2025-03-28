
import { Button } from './myButton.js';
import { arrTexts, arrColors, arrButtons } from './myArrays.js';

export function generateButtons() {
    arrTexts.forEach((text, index) => {
        const btn = new Button(text, arrColors[index], `${text} is shown on the ${arrColors[index]} background`);
        arrButtons.push(btn);
    });
}

export function displayButtonsSequentially() {
    arrButtons.forEach((btn, index) => {
        setTimeout(() => btn.show(), index * 30000); // 30-second delay between each button
    });
}
