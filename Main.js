
import { generateButtons, displayButtonsSequentially } from './myFunctions.js';
import { ColorButton } from './myColorButton.js';

generateButtons();
displayButtonsSequentially();

// Create and display a ColorButton instance
const specialButton = new ColorButton("Special", "black", "A special black button", "white");
specialButton.show();
