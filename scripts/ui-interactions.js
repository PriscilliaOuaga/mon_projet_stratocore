'console.log'("Script Loaded");

function toggleDarkMode (button) {
    const body = document.body;
    const darkModeIcon = document.querySelector('darkmode-icon');
    const logoutIcon = document.querySelector('.logout-icon'); //Référence à l'icône logout//


    if  (body.classList.contains('dark-mode')) {
          body.classList.remove('darkmode');
          darkModeIcon.src = 'icons/darkmode-icon-off.png'; //Chemin vers l'icône pour le Dark Mode désactivé
          darkModeIcon.alt = 'Dark mode icon';
          logoutIcon.src = 'icons/logout-icon-light.png'; //Chemin vers le l'icône logout normal//
  } else {
          body.classList.add('dark-mode');
          darkModeIcon.src = 'icons/darkmode-icon-on.png'; //Chemin vers l'icône darkmode activé//
          darkModeIcon.alt = 'Light mode icon';
          logoutIcon.src = 'icons/logout-icon-dark.png'; //Chemin vers l'icône de logout en mode sombre//
  }
}