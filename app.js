import articles from './data.js';

const btn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
});

const articlesData = articles
  .map(({ title, date, length, snippet }) => {
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${date}</span>
            <span>${length}</span>
          </div>
          <p>
           ${snippet}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;
