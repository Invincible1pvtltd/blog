document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const sidePanel = document.getElementById('side-panel');
    const mainContent = document.getElementById('home');
    const photoContent = document.getElementById('photo');
    const bodyContent = document.getElementById('body-content')
    
    // Open/Close Side Panel on Menu Button Click
    menuButton.addEventListener('click', (e) => {
        sidePanel.classList.toggle('-translate-x-full');  // Toggle panel slide-in/out
        // mainContent.classList.toggle('blur-lg');  // Toggle blur effect on main content
        e.stopPropagation();  // Prevent click from propagating to the document
    });

    // Close Side Panel if Clicking on Main Content
    mainContent.addEventListener('click', () => {
        if (!sidePanel.classList.contains('-translate-x-full')) { // Only close if panel is open
            sidePanel.classList.add('-translate-x-full');  // Close panel
            mainContent.classList.remove('blur-lg');  // Remove blur effect from main content
        }
    });

    photoContent.addEventListener('click', () => {
        if (!sidePanel.classList.contains('-translate-x-full')) { // Only close if panel is open
            sidePanel.classList.add('-translate-x-full');  // Close panel
            photoContent.classList.remove('blur-lg');
        }
    });

    bodyContent.addEventListener('click', () => {
        if (!sidePanel.classList.contains('-translate-x-full')) { // Only close if panel is open
            sidePanel.classList.add('-translate-x-full');  // Close panel
            bodyContent.classList.remove('blur-lg');  // Remove blur effect from main content
        }
    });
});

if (window.innerWidth < 768) { // Example for mobile screen sizes
    window.location.href = "https://invincible1pvtltd.github.io/blog/";
  }
  
