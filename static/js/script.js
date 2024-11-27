// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animation for Skills Section: Bar chart animation for skills proficiency
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll('.skills-container .skill-bar');
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 2s ease-in-out';
        const icon = bar.querySelector('i');
        icon.style.transition = 'left 2s ease-in-out';
    });
    
    window.addEventListener('scroll', () => {
        skillBars.forEach(bar => {
            if (isElementInViewport(bar)) {
                const skillLevel = bar.getAttribute('data-skill-level');
                bar.style.width = skillLevel;
                
                // Position the icon at the end of the bar
                const icon = bar.querySelector('i');
                const skillPercentage = parseInt(skillLevel);
                icon.style.left = `${skillPercentage - 10}%`;
            }
        });
    });
    
    // Check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
});

