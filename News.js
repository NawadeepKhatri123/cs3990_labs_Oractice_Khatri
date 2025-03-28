// news.js

// Create a global registry to store News instances
window.newsInstances = window.newsInstances || {};

/**
 * News class creates a news block (article) with:
 * - a title,
 * - an image,
 * - a paragraph (news text),
 * - a like counter (displayed as star symbols),
 * - a LIKE button (increases counter),
 * - a HIDE button (changes styles and disables the LIKE button).
 */
export class News {
    constructor(srcImg, newsTitle, newsContent) {
        this.srcImg = srcImg;
        this.newsTitle = newsTitle;
        this.newsContent = newsContent;
        this.likeCounter = 0;
        // Generate a unique ID from the title by replacing spaces with hyphens.
        this.newsId = this.newsTitle.replace(/\s+/g, '-');
    }

    // Increase the like counter and update the display.
    incLikes() {
        this.likeCounter++;
        const counterEl = document.getElementById(`like-counter-${this.newsId}`);
        if (counterEl) {
            counterEl.innerHTML = '&#9824;'.repeat(this.likeCounter);
        }
    }

    // Hide the news item by modifying styles and disabling the LIKE button.
    hide() {
        const articleEl = document.getElementById(this.newsId);
        if (articleEl) {
            articleEl.style.opacity = '0.5';
            const titleEl = articleEl.querySelector('h2');
            const paraEl = articleEl.querySelector('p');
            if (titleEl && paraEl) {
                titleEl.style.color = 'darkgray';
                titleEl.style.backgroundColor = 'lightgray';
                paraEl.style.color = 'darkgray';
                paraEl.style.backgroundColor = 'lightgray';
            }
            // Disable the LIKE button (assumed to have the class "like-btn")
            const likeBtn = articleEl.querySelector('button.like-btn');
            if (likeBtn) {
                likeBtn.disabled = true;
            }
        }
    }

    // Returns the HTML string for the news block.
    render() {
        const likesDisplay = '&#9824;'.repeat(this.likeCounter);
        return `
      <article id="${this.newsId}" style="border:1px solid #ccc; padding:10px; margin:10px 0;">
        <h2>${this.newsTitle}</h2>
        <img src="${this.srcImg}" alt="${this.newsTitle}" style="max-width:100%;">
        <p>${this.newsContent}</p>
        <div>Likes: <span id="like-counter-${this.newsId}">${likesDisplay}</span></div>
        <button class="like-btn" onclick="incLikesHandler('${this.newsId}')">LIKE</button>
        <button onclick="hideNewsHandler('${this.newsId}')">HIDE</button>
      </article>
    `;
    }

    // Inserts the rendered news block into the specified target element.
    show(targetElement) {
        targetElement.innerHTML += this.render();
        // Store this instance in the global registry.
        window.newsInstances[this.newsId] = this;
    }
}

// Global event handler for the LIKE button.
window.incLikesHandler = function (newsId) {
    if (window.newsInstances[newsId]) {
        window.newsInstances[newsId].incLikes();
    }
};

// Global event handler for the HIDE button.
window.hideNewsHandler = function (newsId) {
    if (window.newsInstances[newsId]) {
        window.newsInstances[newsId].hide();
    }
};

/**
 * generateNews() selects paragraph elements inside the content block (id="content")
 * and, for each paragraph, creates a News instance from the provided resources.
 *
 * @param {Array} arrRecourses - An array of objects with properties: srcImg, newsTitle, newsContent.
 */
export function generateNews(arrRecourses) {
    const contentBlock = document.getElementById('content');
    if (!contentBlock) return;

    const paragraphs = contentBlock.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        if (arrRecourses[index]) {
            const { srcImg, newsTitle, newsContent } = arrRecourses[index];
            const newsItem = new News(srcImg, newsTitle, newsContent);
            newsItem.show(p);
        }
    });
}
