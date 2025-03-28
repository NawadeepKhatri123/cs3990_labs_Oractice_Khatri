import { Button } from './myButton.js';

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, fColor) {
        super(btnText, btnBgColor);
        this.fColor = fColor;
    }

    show(targetElement) {
        const button = document.createElement('button');
        button.title = this.btnTitle;
        button.style.backgroundColor = this.btnBgColor;
        button.style.color = this.fColor;
        button.textContent = this.btnText;
        targetElement.appendChild(button);
    }
}