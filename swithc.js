document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.getElementById("theme-link");
    const logoImage = document.getElementById("logo-image");
    const headerImage = document.getElementById("header-image");
  
    function setTheme(theme) {
      switch (theme) {
        case "dark":
          themeLink.setAttribute("href", "schedule_black_newYear.css");
          logoImage.setAttribute('src', 'logo.svg');
          headerImage.setAttribute('src', 'vector.svg');
          break;
        case "light":
          themeLink.setAttribute("href", "schedule_light_newYear.css");
          logoImage.setAttribute('src', 'logo_light.svg');
          headerImage.setAttribute('src', 'vector.svg');
          break;
        case "auto":
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeLink.setAttribute("href", "schedule_black_newYear.css");
            logoImage.setAttribute('src', 'logo.svg');
            headerImage.setAttribute('src', 'vector.svg');
          } else {
            themeLink.setAttribute("href", "schedule_light_newYear.css");
            logoImage.setAttribute('src', 'logo_light.svg');
            headerImage.setAttribute('src', 'vector.svg');
          }
          break;
      }
      localStorage.setItem('theme', theme);
    }
  
    document.querySelectorAll('input[name="value-radio"]').forEach(radio => {
      radio.addEventListener('change', function() {
        if(this.checked) {
          const theme = this.id === "value-1" ? "light" :
                        this.id === "value-2" ? "dark" : "auto";
          setTheme(theme);
        }
      });
    });
  
    // Инициализация темы при загрузке страницы
    const savedTheme = localStorage.getItem('theme') || 'auto';
    const correspondingRadio = savedTheme === "dark" ? "value-2" :
                               savedTheme === "light" ? "value-1" : "value-3";
    document.getElementById(correspondingRadio).checked = true;
    setTheme(savedTheme);
    
    // Отслеживание изменения предпочтений системы
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      if(savedTheme === 'auto') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  });
  