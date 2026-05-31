// ===== Melek Mental - JavaScript =====

// --- Guest Journal ---
function submitGuestJournal() {
  const input = document.getElementById('guest-journal-input');
  if (input && input.value.trim() !== '') {
    const response = document.getElementById('journal-response');
    const inputArea = document.getElementById('input-area');
    if (response && inputArea) {
      inputArea.classList.add('hidden');
      response.classList.remove('hidden');
    }
  }
}

// --- Chatbot Toggle ---
function toggleChatbot() {
  const chatbot = document.getElementById('chatbot-window');
  if (chatbot) {
    chatbot.classList.toggle('hidden');
  }
}

// --- Auth Mode Toggle (Login/Register) ---
function switchAuthMode(mode) {
  const btnMasuk = document.getElementById('btn-masuk');
  const btnDaftar = document.getElementById('btn-daftar');
  const fieldName = document.getElementById('field-name');
  const fieldTerms = document.getElementById('field-terms');
  const btnSubmit = document.getElementById('btn-submit');
  const linkLupa = document.getElementById('link-lupa');

  if (mode === 'masuk') {
    btnMasuk.className = 'flex-1 py-sm rounded-full font-label-md text-label-md bg-primary-container text-on-primary-container shadow-sm transition-all';
    btnDaftar.className = 'flex-1 py-sm rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all';
    if (fieldName) fieldName.classList.add('hidden');
    if (fieldTerms) fieldTerms.classList.add('hidden');
    if (btnSubmit) btnSubmit.textContent = 'Masuk';
    if (linkLupa) linkLupa.style.display = 'inline';
  } else {
    btnDaftar.className = 'flex-1 py-sm rounded-full font-label-md text-label-md bg-primary-container text-on-primary-container shadow-sm transition-all';
    btnMasuk.className = 'flex-1 py-sm rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all';
    if (fieldName) fieldName.classList.remove('hidden');
    if (fieldTerms) fieldTerms.classList.remove('hidden');
    if (btnSubmit) btnSubmit.textContent = 'Daftar';
    if (linkLupa) linkLupa.style.display = 'none';
  }
}

// --- ScrollSpy for Navigation ---
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 150)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active', 'text-primary', 'font-bold');
        link.classList.add('text-on-surface-variant');
        if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
          link.classList.add('active', 'text-primary', 'font-bold');
          link.classList.remove('text-on-surface-variant');
        }
      });
    });

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('shadow-md');
          navbar.classList.replace('bg-background/80', 'bg-surface/95');
        } else {
          navbar.classList.remove('shadow-md');
          navbar.classList.replace('bg-surface/95', 'bg-background/80');
        }
      });
    }
  }
});

// --- Password Visibility Toggle (if needed later) ---
// (Placeholder for future enhancement)
