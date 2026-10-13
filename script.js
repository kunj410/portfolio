// Step 3: Toggle Mobile Navigation Menu
function toggleMenu() {
    const navMenu = document.querySelector('header nav ul');
    navMenu.classList.toggle('active');
}

// Step 3: Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Step 4: Filter Projects Functionality
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Step 4: Lightbox Effect for Project Images
const modal = document.createElement('div');
modal.id = 'lightbox-modal';
modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center; z-index:1000;';
const modalImg = document.createElement('img');
modalImg.style.cssText = 'max-width:80%; max-height:80%; border-radius:8px;';
modal.appendChild(modalImg);
document.body.appendChild(modal);

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.querySelectorAll('#projects img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// Step 5: Contact Form Validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields before submitting.');
            return;
        }

        // Simple email validation format check
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message! Form submitted successfully.');
        contactForm.reset();
    });
}