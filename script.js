// Typewriter effect
const phrases = [
    "Full-stack разработчик",
    "Web & Python Developer",
    "Создаю цифровые продукты"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');
const cursor = document.createElement('span');
cursor.className = 'cursor';

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    typewriterElement.textContent = currentPhrase.substring(0, charIndex);
    typewriterElement.appendChild(cursor);

    if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(typeEffect, 1500);
    }
}

typeEffect();

// Copy to clipboard
function copyContact(element, text) {
    navigator.clipboard.writeText(text).then(() => {
        const hint = element.querySelector('.copy-hint');
        const originalText = hint.textContent;
        hint.textContent = 'Скопировано!';
        hint.classList.add('copied');
        setTimeout(() => {
            hint.textContent = originalText;
            hint.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// Intersection observer for entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(15px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});
