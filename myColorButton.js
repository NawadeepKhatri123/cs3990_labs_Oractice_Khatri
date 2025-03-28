
import { Button } from './myButton.js';

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, fColor) {
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }

    show() {
        document.write(`<button style="background-color: ${this.btnBgColor}; color: ${this.fColor};" title="${this.btnTitle}">${this.btnText}</button><br>`);
    }
}
