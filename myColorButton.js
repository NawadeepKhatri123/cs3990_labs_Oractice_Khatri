// myColorButton.js
import { Button } from './myButton.js';

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, fColor) {
        super(btnText, btnBgColor);
        this.fColor = fColor;
    }

    // Displays the button with the extra font color style
    show() {
        document.write(
            `<button title="${this.btnTitle}" style="background-color: ${this.btnBgColor}; color: ${this.fColor};">
        ${this.btnText}
      </button>`
        );
    }
}
