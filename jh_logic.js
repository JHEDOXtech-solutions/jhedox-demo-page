// Basic interactivity: menu toggle, reveal on scroll, form submit demo, footer year
document.addEventListener('DOMContentLoaded', function(){
  // Menu toggle for mobile
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle && menuToggle.addEventListener('click', ()=> mainNav.classList.toggle('open'));

  // Smooth reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowH = window.innerHeight;
    reveals.forEach(el=>{
      const top = el.getBoundingClientRect().top;
      if(top < windowH - 80){
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // Simple contact form handler (demo)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // collect form values
      const data = new FormData(form);
      alert('Thanks! Request submitted (demo). We will contact you soon.');
      form.reset();
    });
  }

  // Set footer year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Close mobile nav when a link is clicked
  document.querySelectorAll('#mainNav a').forEach(a=>{
    a.addEventListener('click', ()=> mainNav.classList.remove('open'));
  });
});

// ❤️ OPEN PANEL
function openProductPanel(img, name, price, desc) {
    document.getElementById("ppImg").src = img;
    document.getElementById("ppName").innerText = name;
    document.getElementById("ppPrice").innerText = price;
    document.getElementById("ppDesc").innerText = desc;

    document.getElementById("productPanel").classList.add("open");
}

// ❌ CLOSE PANEL
function closeProductPanel() {
    document.getElementById("productPanel").classList.remove("open");
}
