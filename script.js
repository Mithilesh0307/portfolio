// Scroll to top function
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆';
scrollToTopButton.className = 'fixed bottom-4 right-4 bg-purple-500 text-white p-2 rounded-full';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide the button when scrolled to the top
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
