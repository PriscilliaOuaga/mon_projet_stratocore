console.log("Script Loaded");

function toggleDarkMode (button) {
    const body = document.body;
    const darkModeIcon = document.querySelector('.darkmode-icon-off');
    const logoutIcon = document.querySelector('.logout-icon'); 


    if  (body.classList.contains('dark-mode')) {
          body.classList.remove('dark-mode');
          darkModeIcon.src = 'icons/darkmode-icon-off.png';
          darkModeIcon.alt = 'Dark mode icon';
          logoutIcon.src = 'icons/logout-icon-light.png';
  } else {
          body.classList.add('dark-mode');
          darkModeIcon.src = 'icons/darkmode-icon-on.png';
          darkModeIcon.alt = 'Light mode icon';
          logoutIcon.src = 'icons/logout-icon-dark.png';
  }
}