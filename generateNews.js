
import { News } from './News.js';

const arrResources = [
    { srcImg: 'Images/1.jpg', newsTitle: 'News 1', newsContent: 'Lorem ipsum text here.' },
    { srcImg: 'Images/2.jpg', newsTitle: 'News 2', newsContent: 'Another piece of news here.' }
];

export function generateNews() {
    document.newsInstances = {};

    const contentBlock = document.getElementById("content");
    arrResources.forEach(newsData => {
        const newsItem = new News(newsData.newsTitle, newsData.srcImg, newsData.newsContent);
        document.newsInstances[newsData.newsTitle] = newsItem;
        contentBlock.innerHTML += newsItem.render();
    });
}
