export class Button {
    constructor(btnText, btnBgColor) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        // Compose btnTitle from btnText and btnBgColor.
        this.btnTitle = `${btnText} is shown on the ${btnBgColor} background`;
    }

    // Updated to use DOM manipulation instead of document.write()
    show(targetElement) {
        const button = document.createElement('button');
        button.title = this.btnTitle;
        button.style.backgroundColor = this.btnBgColor;
        button.textContent = this.btnText;
        targetElement.appendChild(button);
    }
}