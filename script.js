// Blood cursor trail
document.addEventListener('mousemove', (e) => {
    const blood = document.createElement('div');
    blood.className = 'blood-cursor';
    blood.style.left = `${e.clientX}px`;
    blood.style.top = `${e.clientY}px`;
    
    // Random blood drip size
    const size = Math.random() * 20 + 10;
    blood.style.width = `${size}px`;
    blood.style.height = `${size}px`;
    
    document.body.appendChild(blood);
    
    // Remove after animation
    setTimeout(() => {
        blood.remove();
    }, 1000);
});

// Add blood splatter on project hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const bloodAmount = parseInt(card.getAttribute('data-blood'));
        
        // Create blood splatters
        for (let i = 0; i < bloodAmount; i++) {
            const blood = document.createElement('div');
            blood.className = 'blood-splatter';
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            blood.style.left = `${x}%`;
            blood.style.top = `${y}%`;
            
            // Random size
            const size = Math.random() * 30 + 10;
            blood.style.width = `${size}px`;
            blood.style.height = `${size}px`;
            
            // Random opacity
            blood.style.opacity = Math.random() * 0.5 + 0.3;
            
            card.querySelector('.project-image').appendChild(blood);
            
            // Remove after animation
            setTimeout(() => {
                blood.remove();
            }, 3000);
        }
    });
});

// Glitch effect randomly
setInterval(() => {
    const glitch = document.querySelector('.glitch');
    glitch.style.animation = 'none';
    void glitch.offsetWidth; // Trigger reflow
    glitch.style.animation = 'glitch-anim 0.5s linear';
}, 5000);