// mobile-menu.js - Mobile menu state management

/**
 * Initialize mobile menu functionality
 * Handles opening, closing, and interactions with the mobile menu
 */
export function initMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const mobileLangButtons = document.querySelectorAll('.mobile-menu-lang-button');

  if (!mobileMenu || !mobileMenuToggle) {
    return; // Exit if elements don't exist
  }

  /**
   * Open the mobile menu
   */
  function openMenu() {
    mobileMenu.classList.add('mobile-menu-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
    
    // Focus the close button for accessibility
    setTimeout(() => {
      mobileMenuClose?.focus();
    }, 300);
  }

  /**
   * Close the mobile menu
   */
  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore body scroll
    
    // Return focus to toggle button
    mobileMenuToggle?.focus();
  }

  /**
   * Toggle the mobile menu
   */
  function toggleMenu() {
    if (mobileMenu.classList.contains('mobile-menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Event: Toggle button click
  mobileMenuToggle.addEventListener('click', toggleMenu);

  // Event: Close button click
  mobileMenuClose?.addEventListener('click', closeMenu);

  // Event: Overlay click (close menu when clicking outside)
  mobileMenuOverlay?.addEventListener('click', closeMenu);

  // Event: Navigation link clicks (close menu after navigation)
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Event: Escape key press (close menu)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu-open')) {
      closeMenu();
    }
  });

  // Event: Mobile theme toggle
  mobileThemeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  // Event: Mobile language buttons
  mobileLangButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        // Trigger language change (will be handled by ui.js)
        const event = new CustomEvent('languageChange', { detail: { lang } });
        document.dispatchEvent(event);
        
        // Update active state
        mobileLangButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}
