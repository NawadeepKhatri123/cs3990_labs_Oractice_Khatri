
export class News {
    constructor(title, imgSrc, content) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.content = content;
        this.likes = 0;
    }

    incLikes() {
        this.likes++;
        document.getElementById(this.title).innerHTML = "★".repeat(this.likes);
    }

    hide() {
        const newsBlock = document.getElementById(`news-${this.title}`);
        newsBlock.style.opacity = "0.5";
        newsBlock.style.color = "darkgray";
        newsBlock.style.backgroundColor = "lightgray";
        newsBlock.querySelector(".like-btn").disabled = true;
    }

    render() {
        return `
            <div id="news-${this.title}" style="border: 1px solid black; padding: 10px; margin: 10px;">
                <h2>${this.title}</h2>
                <img src="${this.imgSrc}" style="width: 100px;">
                <p>${this.content}</p>
                <p>Likes: <span id="${this.title}">0</span></p>
                <button class="like-btn" onclick="document.newsInstances['${this.title}'].incLikes()">LIKE</button>
                <button onclick="document.newsInstances['${this.title}'].hide()">HIDE</button>
            </div>
        `;
    }
}
