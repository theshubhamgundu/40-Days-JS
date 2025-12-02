// Main JavaScript file for Day 31 - Advanced DOM

// Element dimensions and positioning
function logElementInfo() {
    const elements = document.querySelectorAll('.element');
    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        console.log(`Element ${index + 1}:`, rect);
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.getElementById('progressFill');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Custom events
function initCustomEvents() {
    const button = document.getElementById('customEventBtn');
    const output = document.getElementById('customEventOutput');
    
    // Create custom event
    const myCustomEvent = new CustomEvent('myCustomEvent', {
        detail: { message: 'Hello from custom event!', timestamp: new Date() }
    });
    
    // Listen for custom event
    document.addEventListener('myCustomEvent', (event) => {
        output.innerHTML = `
            <p><strong>Custom Event Received:</strong></p>
            <p>Message: ${event.detail.message}</p>
            <p>Timestamp: ${event.detail.timestamp}</p>
        `;
    });
    
    // Button click triggers custom event
    button.addEventListener('click', () => {
        document.dispatchEvent(myCustomEvent);
    });
}

// Drag and drop
function initDragAndDrop() {
    const draggable = document.querySelector('.draggable');
    const dropZone = document.getElementById('dropZone');
    
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'dragged');
    });
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('active');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('active');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('active');
        dropZone.innerHTML = 'Item dropped!';
        dropZone.style.background = '#c8e6c9';
    });
}

// Intersection Observer
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });
    
    const target = document.getElementById('observerTarget');
    if (target) {
        observer.observe(target);
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    logElementInfo();
    initScrollProgress();
    initCustomEvents();
    initDragAndDrop();
    initIntersectionObserver();
});

// Export functions for potential reuse
export { 
    logElementInfo, 
    initScrollProgress, 
    initCustomEvents, 
    initDragAndDrop, 
    initIntersectionObserver 
};