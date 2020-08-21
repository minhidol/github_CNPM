const newsButton = document.querySelector('aside #news-button'); 
const newsList = document.querySelector('.news-list'); 
newsButton.addEventListener('click', function() {
    newsList.style.display = 'block'; 
}); 