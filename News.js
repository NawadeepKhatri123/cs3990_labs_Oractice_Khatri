// Global registry to store News instances by their unique ID.
// This is used by the inline event handlers to locate the correct instance.
window.newsInstances = window.newsInstances || {};

/**
 * News class:
 * - Creates a news block (article) that contains:
 *   • a title,
 *   • an image,
 *   • a paragraph with the news text,
 *   • a like counter (displayed as star symbols),
 *   • a button "LIKE" (clicking increases the like counter),
 *   • a button "HIDE" (clicking applies a "hidden" style: makes the element more transparent,
 *     changes the title and paragraph colors, and disables the LIKE button).
 */
export class News {
    /**
     * @param {string} srcImg - The image source path.
     * @param {string} newsTitle - The title of the news.
     * @param {string} newsContent - The main content/text of the news.
     */
    constructor(srcImg, newsTitle, newsContent) {
        this.srcImg = srcImg;
        this.newsTitle = newsTitle;
        this.newsContent = newsContent;
        this.likeCounter = 0;
        // Create a unique ID from the title by replacing spaces with hyphens.
        this.newsId = this.newsTitle.replace(/\s+/g, '-');
    }

    /**
     * Increases the like counter and updates the display.
     */
    incLikes() {
        this.likeCounter++;
        // Update the like counter display (stars) in the DOM.
        const counterEl = document.getElementById(`like-counter-${this.newsId}`);
        if (counterEl) {
            counterEl.innerHTML = '&#9824;'.repeat(this.likeCounter);
        }
    }

    /**
     * Hides the news block by changing its style:
     * - Makes the entire block more transparent.
     * - Changes the title and paragraph colors (dark gray text on a light gray background).
     * - Disables the LIKE button.
     */
    hide() {
        const articleEl = document.getElementById(this.newsId);
        if (articleEl) {
            articleEl.style.opacity = '0.5';
            // Change title and paragraph styles.
            const titleEl = articleEl.querySelector('h2');
            const paraEl = articleEl.querySelector('p');
            if (titleEl && paraEl) {
                titleEl.style.color = 'darkgray';
                titleEl.style.backgroundColor = 'lightgray';
                paraEl.style.color = 'darkgray';
                paraEl.style.backgroundColor = 'lightgray';
            }
            // Disable the LIKE button (assume it's the first button in the article).
            const likeButton = articleEl.querySelector('button.like-btn');
            if (likeButton) {
                likeButton.disabled = true;
            }
        }
    }

    /**
     * Creates the HTML content for the news block.
     * The like counter is shown as a number of star symbols (♠, using the HTML entity &#9824;).
     * The inline onclick handlers call global functions that will use the global registry to
     * call the instance methods.
     *
     * @returns {string} - The HTML string for the news block.
     */
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

    /**
     * Inserts the rendered news block into the given target element.
     * Also stores the instance in the global registry.
     *
     * @param {HTMLElement} targetElement - The DOM element where the news block will be inserted.
     */
    show(targetElement) {
        targetElement.innerHTML += this.render();
        // Store the instance globally so the inline handlers can reference it.
        window.newsInstances[this.newsId] = this;
    }
}

/**
 * Global event handler for the LIKE button.
 * Looks up the News instance by its ID and calls its incLikes() method.
 *
 * @param {string} newsId - The unique ID of the news item.
 */
window.incLikesHandler = function (newsId) {
    if (window.newsInstances[newsId]) {
        window.newsInstances[newsId].incLikes();
    }
};

/**
 * Global event handler for the HIDE button.
 * Looks up the News instance by its ID and calls its hide() method.
 *
 * @param {string} newsId - The unique ID of the news item.
 */
window.hideNewsHandler = function (newsId) {
    if (window.newsInstances[newsId]) {
        window.newsInstances[newsId].hide();
    }
};

/**
 * generateNews() function:
 * - Selects all paragraph elements inside a content block (assumed to have id "content").
 * - For each paragraph, if there is a corresponding news resource in arrRecourses,
 *   it creates a News instance and uses its show() method to display the news inside that paragraph.
 *
 * @param {Array} arrRecourses - An array of objects with properties: srcImg, newsTitle, newsContent.
 */
export function generateNews(arrRecourses) {
    const contentBlock = document.getElementById('content');
    if (!contentBlock) {
        console.error("Content block with id 'content' not found");
        return;
    }

    // Select paragraphs inside the content block.
    const paragraphs = contentBlock.querySelectorAll('p');
    if (paragraphs.length === 0) {
        console.error("No paragraphs found inside content block");
        return;
    }

    paragraphs.forEach((p, index) => {
        if (arrRecourses[index]) {
            const { srcImg, newsTitle, newsContent } = arrRecourses[index];
            const newsItem = new News(srcImg, newsTitle, newsContent);
            // Clear the paragraph content and use it as the container
            p.innerHTML = '';
            newsItem.show(p);
        }
    });
}