// Lightbox Functionality for Gallery
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${item.src}" alt="${item.alt}">
        <span class="close">&times;</span>
      </div>
    `;
    document.body.appendChild(lightbox);

    // Close lightbox when clicking outside the image or on the close button
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('close')) {
        lightbox.remove();
      }
    });
  });
});

// Handle Contact Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbzc93d3HEuvU12M4e7uDYyGzALjPWhPH4q8pJ6v8MEe8KFgTM4BLjy4__Xq6xsbF4za/exec'; // Replace with your Google Sheets script URL
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!'); // Debugging

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        console.log('Success!', response); // Debugging
        msg.innerHTML = 'Message sent successfully!';
        setTimeout(() => {
          msg.innerHTML = '';
        }, 5000); // Clear the message after 5 seconds
        form.reset(); // Reset the form
      })
      .catch((error) => {
        console.error('Error!', error); // Debugging
        msg.innerHTML = 'Error sending message. Please try again.';
      });
  });
}


// Hamburger Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close Menu When Clicking Outside
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});






// Additional JavaScript for other functionalities can be added here
// For example, smooth scrolling, animations, etc.