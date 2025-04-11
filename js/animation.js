
document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-down, .slide-left, .slide-right, .zoom-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0, 0) scale(1)';
            }
        });
    };
    
    
    animateOnScroll();
    
    
    window.addEventListener('scroll', animateOnScroll);
    
    
    const featuredItems = document.querySelectorAll('.featured-item');
    featuredItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    if (aboutImage && aboutContent) {
        aboutImage.classList.add('slide-left');
        aboutContent.classList.add('slide-right');
    }
    
   
    const gearItems = document.querySelectorAll('.gear-item');
    gearItems.forEach((item, index) => {
        item.classList.add('zoom-in');
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.classList.add('slide-up');
        group.style.animationDelay = `${index * 0.1}s`;
    });
});