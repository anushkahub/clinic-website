// Mobile Navigation Toggle  
const hamburger = document.querySelector('.hamburger');  
const navMenu = document.querySelector('.nav-menu');  
  
hamburger.addEventListener('click', () => {  
    hamburger.classList.toggle('active');  
    navMenu.classList.toggle('active');  
});  
  
// Close mobile menu when clicking on a link  
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {  
    hamburger.classList.remove('active');  
    navMenu.classList.remove('active');  
}));  
  
// Smooth scrolling for navigation links  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
    anchor.addEventListener('click', function (e) {  
        e.preventDefault();  
        const target = document.querySelector(this.getAttribute('href'));  
        if (target) {  
            target.scrollIntoView({  
                behavior: 'smooth',  
                block: 'start'  
            });  
        }  
    });  
});  
  
// Form submission  
const appointmentForm = document.querySelector('.appointment-form');  
if (appointmentForm) {  
    appointmentForm.addEventListener('submit', function(e) {  
        e.preventDefault();  
          
        // Get form data  
        const formData = new FormData(this);  
        const data = Object.fromEntries(formData);  
          
        // Simple validation  
        if (!data.name || !data.phone || !data.service || !data.date) {  
            alert('Please fill in all required fields.');  
            return;  
        }  
          
        // Here you would typically send the data to a server  
        // For demo purposes, we'll just show a success message  
        alert('Thank you for booking your appointment! We will contact you soon to confirm.');  
        this.reset();  
    });  
}  
  
// Animate elements on scroll  
const observerOptions = {  
    threshold: 0.1,  
    rootMargin: '0px 0px -50px 0px'  
};  
  
const observer = new IntersectionObserver((entries) => {  
    entries.forEach(entry => {  
        if (entry.isIntersecting) {  
            entry.target.style.opacity = '1';  
            entry.target.style.transform = 'translateY(0)';  
        }  
    });  
}, observerOptions);  
  
// Observe service cards, team members, and resource cards  
document.querySelectorAll('.service-card, .team-member, .resource-card').forEach(el => {  
    el.style.opacity = '0';  
    el.style.transform = 'translateY(20px)';  
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';  
    observer.observe(el);  
});  
  
// Header background on scroll  
window.addEventListener('scroll', () => {  
    const header = document.querySelector('.header');  
    if (window.scrollY > 100) {  
        header.style.background = 'rgba(255, 255, 255, 0.95)';  
        header.style.backdropFilter = 'blur(10px)';  
    } else {  
        header.style.background = '#fff';  
        header.style.backdropFilter = 'none';  
    }  
});  
function toggleChat() {
  const chat = document.getElementById("dentist-chatbot");
  if (chat.style.display === "block") {
    chat.style.display = "none";
  } else {
    chat.style.display = "block";
  }
}

function sendMessage() {
  const input = document.getElementById("userMsg");
  const chatBody = document.getElementById("chat-body");

  if (input.value.trim() === "") return;

  chatBody.innerHTML += `<p class="user">You: ${input.value}</p>`;

  let msg = input.value.toLowerCase();
  let reply = "Please visit the clinic for a proper dental check-up.";

  if (msg.includes("pain"))
    reply = "Tooth pain may be due to cavities or infection. Please book an appointment soon.";

  else if (msg.includes("appointment"))
    reply = "You can call +91 99237 24040 or use the appointment form on the website.";

  else if (msg.includes("timing"))
    reply = "Clinic timing: Mon–Sat (except Tuesday), 4:00 PM – 8:00 PM.";

  else if (msg.includes("cleaning"))
    reply = "Teeth cleaning is recommended every 6 months for healthy gums.";

  else if (msg.includes("braces"))
    reply = "We provide braces and aligners. Orthodontic consultation is advised.";

  else if (msg.includes("hello") || msg.includes("hi"))
    reply = "Hello 😊 How can I help you with your dental concern today?";

  chatBody.innerHTML += `<p class="bot">🦷 Dentist: ${reply}</p>`;
  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}

