document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fade In Animation on Scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));


    // 2. UNIVERSAL MODAL LOGIC (Handles both Videos & Images)
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-video-container'); 

    // Handle Video Clicks
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video-src');
            
            // Inject Video Player
            modalContent.innerHTML = `
                <video controls autoplay class="modal-media-item">
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            modal.style.display = "block";
        });
    });

    // Handle Image Clicks
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-image-src');
            
            // Inject Full Screen Image
            modalContent.innerHTML = `
                <img src="${imgSrc}" class="modal-media-item" alt="Full Screen Preview">
            `;
            modal.style.display = "block";
        });
    });

    // Close Modal Logic
    const closeModal = () => {
        modal.style.display = "none";
        modalContent.innerHTML = ''; // Clear content to stop video playing
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    console.log("Portfolio Script Loaded Successfully");
});