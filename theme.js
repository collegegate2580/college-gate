// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Theme toggle in header
  setupThemeToggle();
});

function initTheme() {
  // Add theme CSS link
  const themeLink = document.createElement('link');
  themeLink.rel = 'stylesheet';
  themeLink.href = './css/theme.css';
  document.head.appendChild(themeLink);
  
  // Get saved theme or use system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Add transition class after initial load to prevent flash
  setTimeout(() => {
    document.body.classList.add('theme-transition');
  }, 300);
}

function setupThemeToggle() {
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Toggle dark mode');
  themeToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  `;
  
  // Add to nav-actions
  const navActions = document.querySelector('.nav-actions');
  navActions.prepend(themeToggle);
  
  // Add styles for the toggle button
  const style = document.createElement('style');
  style.textContent = `
    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-primary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      margin-right: 0.5rem;
      border-radius: 50%;
      transition: background-color 0.3s ease;
    }
    
    .theme-toggle:hover {
      background-color: rgba(128, 128, 128, 0.1);
    }
    
    .theme-toggle .sun-icon,
    .theme-toggle .moon-icon {
      transition: transform 0.5s ease, opacity 0.3s ease;
    }
    
    .theme-toggle .sun-icon {
      display: none;
    }
    
    [data-theme="dark"] .theme-toggle .sun-icon {
      display: block;
    }
    
    [data-theme="dark"] .theme-toggle .moon-icon {
      display: none;
    }
  `;
  document.head.appendChild(style);
  
  // Add event listener to toggle theme
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
