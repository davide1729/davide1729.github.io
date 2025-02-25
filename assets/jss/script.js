document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");

  // Dictionary for translations
  const translations = {
      en: {
          about: "About",
          education: "Education",
          experience: "Experience",
          skills: "Skills",
          contact: "Contact",
          website_message: "Website currently in development!",
          student_role: "AI Student, Author & Developer",
          about_text: "I'm a student in the MSc in Artificial Intelligence at Bocconi University.",
          education_text: "Education",
          experience_text: "Experience",
          skills_text: "Skills",
          contact_text: "Contact",
          full_experience: "View full experience details",
      },
      it: {
          about: "Chi Sono",
          education: "Istruzione",
          experience: "Esperienza",
          skills: "Competenze",
          contact: "Contatti",
          website_message: "Sito attualmente in sviluppo!",
          student_role: "Studente di AI, Autore & Sviluppatore",
          about_text: "Sono uno studente del MSc in Intelligenza Artificiale alla Bocconi University.",
          education_text: "Istruzione",
          experience_text: "Esperienza",
          skills_text: "Competenze",
          contact_text: "Contatti",
          full_experience: "Vedi dettagli completi sull'esperienza",
      }
  };

  let currentLang = "it"; // Default language

  function switchLanguage() {
      currentLang = currentLang === "en" ? "it" : "en";

      // Update all relevant elements
      document.querySelector("#about h2").textContent = translations[currentLang].about;
      document.querySelector("#education h2").textContent = translations[currentLang].education;
      document.querySelector("#experience-summary h2").textContent = translations[currentLang].experience;
      document.querySelector("#skills h2").textContent = translations[currentLang].skills;
      document.querySelector("#contact h2").textContent = translations[currentLang].contact;

      document.querySelector(".header-content p:nth-child(2)").textContent = translations[currentLang].website_message;
      document.querySelector(".header-content p:nth-child(3)").textContent = translations[currentLang].student_role;

      document.querySelector("#experience-summary p a").textContent = translations[currentLang].full_experience;

      // Update navigation links
      document.querySelectorAll("nav a").forEach((link) => {
          const href = link.getAttribute("href");
          if (translations[currentLang][href.replace("#", "")]) {
              link.textContent = translations[currentLang][href.replace("#", "")];
          }
      });
  }

  langToggle.addEventListener("click", switchLanguage);
});
