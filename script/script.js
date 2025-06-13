// Initialize WOW.js for reveal animations
new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       100,        // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
}).init();


// Dynamically update the copyright year
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

/* ========================================= */
/* ===      FAQ ACCORDION SCRIPT         === */
/* ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Optional: Close all other open FAQs for a traditional accordion feel
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked question
            if (isActive) {
                question.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                question.classList.add('active');
                // Set max-height to the scroll height to make it fit content perfectly
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});