// myButton.js
export class Button {
    constructor(btnText, btnBgColor) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        // Compose btnTitle from btnText and btnBgColor.
        this.btnTitle = `${btnText} is shown on the ${btnBgColor} background`;
    }

    // Displays the button using document.write()
    show() {
        document.write(
            `<button title="${this.btnTitle}" style="background-color: ${this.btnBgColor};">
        ${this.btnText}
      </button>`
        );
    }
}
