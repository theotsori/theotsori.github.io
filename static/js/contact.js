window.addEventListener('DOMContentLoaded', () => {
    const scrollingTextInner = document.querySelector('.scrolling-text-inner');
    const textContent = scrollingTextInner.innerHTML;
    
    // Set the duplicated content to the `data-duplicate` attribute
    scrollingTextInner.setAttribute('data-duplicate', textContent);
});
