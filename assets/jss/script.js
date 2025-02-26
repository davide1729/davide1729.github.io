document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const langToggle = document.getElementById("lang-toggle");
    const header = document.querySelector("header");
    
    // Language state
    let currentLang = localStorage.getItem("preferredLanguage") || "en";
    
    // Translations dictionary
    const translations = {
      en: {
        // Navigation
        "about-link": "About",
        "education-link": "Education",
        "experience-link": "Experience",
        "skills-link": "Skills",
        "contact-link": "Contact",
        
        // Headers
        "about-header": "About",
        "education-header": "Education",
        "experience-header": "Experience",
        "skills-header": "Skills",
        "contact-header": "Contact",
        
        // Content
        "website-message": "Website currently in development!",
        "role-description": "AI Student, Author & Developer",
        "full-experience-link": "View full experience details",
        
        // Skills
        "languages-label": "Languages:",
        "coding-label": "Coding:",
        "tools-label": "Tools:"
      },
      it: {
        // Navigation
        "about-link": "Chi Sono",
        "education-link": "Istruzione",
        "experience-link": "Esperienza",
        "skills-link": "Competenze",
        "contact-link": "Contatti",
        
        // Headers
        "about-header": "Chi Sono",
        "education-header": "Istruzione",
        "experience-header": "Esperienza",
        "skills-header": "Competenze",
        "contact-header": "Contatti",
        
        // Content
        "website-message": "Sito attualmente in sviluppo!",
        "role-description": "Studente di AI, Autore & Sviluppatore",
        "full-experience-link": "Vedi dettagli completi sull'esperienza",
        
        // Skills
        "languages-label": "Lingue:",
        "coding-label": "Programmazione:",
        "tools-label": "Strumenti:"
      }
    };
    
    // Add data-lang-key attributes to all translatable elements for easier targeting
    function addLanguageKeys() {
      // Navigation
      document.querySelector('nav a[href="#about"]').setAttribute('data-lang-key', 'about-link');
      document.querySelector('nav a[href="#education"]').setAttribute('data-lang-key', 'education-link');
      document.querySelector('nav a[href="experience/experience.html"]').setAttribute('data-lang-key', 'experience-link');
      document.querySelector('nav a[href="#skills"]').setAttribute('data-lang-key', 'skills-link');
      document.querySelector('nav a[href="#contact"]').setAttribute('data-lang-key', 'contact-link');
      
      // Headers
      document.querySelector('#about h2').setAttribute('data-lang-key', 'about-header');
      document.querySelector('#education h2').setAttribute('data-lang-key', 'education-header');
      document.querySelector('#experience-summary h2').setAttribute('data-lang-key', 'experience-header');
      document.querySelector('#skills h2').setAttribute('data-lang-key', 'skills-header');
      document.querySelector('#contact h2').setAttribute('data-lang-key', 'contact-header');
      
      // Content
      document.querySelector('.header-content p:nth-of-type(1)').setAttribute('data-lang-key', 'website-message');
      document.querySelector('.header-content p:nth-of-type(2)').setAttribute('data-lang-key', 'role-description');
      document.querySelector('#experience-summary p a').setAttribute('data-lang-key', 'full-experience-link');
      
      // Skills
      document.querySelector('#skills ul li:nth-of-type(1) strong').setAttribute('data-lang-key', 'languages-label');
      document.querySelector('#skills ul li:nth-of-type(2) strong').setAttribute('data-lang-key', 'coding-label');
      document.querySelector('#skills ul li:nth-of-type(3) strong').setAttribute('data-lang-key', 'tools-label');
    }
    
    // Apply the translations based on data-lang-key attributes
    function applyTranslations(lang) {
      const elements = document.querySelectorAll('[data-lang-key]');
      elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
    }
    
    // Update language button appearance
    function updateLanguageButton() {
      const inactive = currentLang === "en" ? "IT" : "EN";
      const active = currentLang === "en" ? "EN" : "IT";
      langToggle.innerHTML = `<span class="active-lang">${active}</span> / <span class="inactive-lang">${inactive}</span>`;
    }
    
    // Switch language function
    function switchLanguage() {
      currentLang = currentLang === "en" ? "it" : "en";
      localStorage.setItem("preferredLanguage", currentLang);
      
      applyTranslations(currentLang);
      updateLanguageButton();
    }
    
    // Sticky header functionality
    function setupStickyHeader() {
      const headerHeight = header.offsetHeight;
      let isSticky = false;
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 150 && !isSticky) {
          header.classList.add('sticky');
          document.body.style.paddingTop = headerHeight + 'px';
          isSticky = true;
        } else if (window.scrollY <= 150 && isSticky) {
          header.classList.remove('sticky');
          document.body.style.paddingTop = '0';
          isSticky = false;
        }
      });
    }
    
    // Initialize
    function init() {
      addLanguageKeys();
      applyTranslations(currentLang);
      updateLanguageButton();
      setupStickyHeader();
      
      // Event listener for language toggle
      langToggle.addEventListener('click', switchLanguage);
    }
    
    // Start the app
    init();
  });