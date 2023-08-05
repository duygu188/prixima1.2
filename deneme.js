// Sayfa yüklendiğinde ve her kaydırma olayında tetiklenen fonksiyon
function onScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    // Mevcut kaydırma konumu
    const scrollPosition = window.scrollY;
  
    sections.forEach((section, index) => {
      const topOffset = section.offsetTop - 50; // Navbar'ın yüksekliğini düşerek sectionların yukarıdan başlamasını sağlarız
      const bottomOffset = topOffset + section.offsetHeight;
  
      if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
        // Aktif section bulundu
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
        section.classList.add("active"); // Güncellenen kısım: Aktif bölümün rengini değiştir
      } else {
        section.classList.remove("active"); // Güncellenen kısım: Diğer bölümlerin rengini sıfırla
      }
    });
  }
  
  // Sayfa yüklendiğinde ve her kaydırma olayında onScroll fonksiyonunu çağırın
  window.addEventListener("load", onScroll);
  window.addEventListener("scroll", onScroll);
  