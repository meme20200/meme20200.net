document.addEventListener('DOMContentLoaded', function () {
    const scrollText = document.getElementById('scrollText');
    const text = scrollText.textContent;
    scrollText.innerHTML = '';
    for (let i = 0; i < 110; i++) {
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.setProperty('--i', i);
            scrollText.appendChild(span);
        }
    }
});
