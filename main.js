// Load Google Fonts dynamically
document.addEventListener('DOMContentLoaded', function() {
  // Add Google Fonts
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  
  // Add utility script
  const utilsScript = document.createElement('script');
  utilsScript.src = './js/utils.js';
  document.body.appendChild(utilsScript);
  
  // Initialize the application
  initApp();
  
  // Scroll reveal animation
  window.addEventListener('scroll', revealOnScroll);
  
  // Add initial class on page load
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    element.classList.add('not-visible');
  });
  // Trigger initial check
  revealOnScroll();

  // Reviews Section Animations
  // Animate stats numbers
  const stats = document.querySelectorAll('.stat-number');
  const options = {
    threshold: 0.5
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const value = target.textContent;
        if (value.includes('+')) {
          animateNumber(target, parseInt(value), true);
        } else {
          animateNumber(target, parseFloat(value), false);
        }
        observer.unobserve(target);
      }
    });
  }, options);

  stats.forEach(stat => statsObserver.observe(stat));

  // Animate review cards on scroll
  const reviewCards = document.querySelectorAll('.review-card');
  const reviewObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  reviewCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    reviewObserver.observe(card);
  });
});

function initApp() {
  // Handle header scroll effect
  initHeaderScroll();
  
  // Init mobile menu toggle
  initMobileMenu();
  
  // Load featured colleges on homepage
  if (document.getElementById('featured-colleges')) {
    loadFeaturedColleges();
  }
  
  // Load FAQ items on homepage
  if (document.getElementById('faq-container')) {
    loadFAQs();
  }
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Add active class to current navigation link
  setActiveNavLink();
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Trigger scroll event on page load
  window.dispatchEvent(new Event('scroll'));
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
}

function setActiveNavLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPath = link.getAttribute('href');
    
    if (currentPage.endsWith(linkPath) || 
        (currentPage === '/' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function loadFeaturedColleges() {
  const featuredCollegesContainer = document.getElementById('featured-colleges');
  const featuredColleges = colleges.filter(college => college.featured);
  
  featuredColleges.forEach(college => {
    featuredCollegesContainer.appendChild(createCollegeCard(college));
  });
}

function createCollegeCard(college) {
  const minFee = Math.min(...college.courses.map(c => c.fees));
  
  const cardHTML = `
    <div class="college-card" data-college-id="${college.id}">
      <div class="college-image">
        <img src="${college.images[0]}" alt="${college.name}">
        <div class="college-bookmark">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div class="college-rating">
          <span class="rating-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${college.rating}
          </span>
          <span class="college-established">• ${college.established} Est.</span>
          <span class="college-type">${college.type}</span>
        </div>
      </div>
      
      <div class="college-content">
        <h3 class="college-name">${college.name}</h3>
        <div class="college-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${college.location}</span>
        </div>
        
        <div class="college-stats">
          <div class="stat-box">
            <p class="stat-label">Courses</p>
            <p class="stat-value">${college.courses.length}</p>
          </div>
          <div class="stat-box">
            <p class="stat-label">Affiliation</p>
            <p class="stat-value">${college.affiliation}</p>
          </div>
        </div>
        
        <div class="college-fees">
          <span class="fee-label">Fees starting from: </span>
          <span class="fee-value">₹${minFee.toLocaleString()}</span>
        </div>
        
        <div class="college-actions">
          <a href="college-detail.html?id=${college.id}" class="btn-primary btn-view-details">
            View Details
          </a>
        </div>
      </div>
    </div>
  `;
  
  const wrapper = document.createElement('div');
  wrapper.innerHTML = cardHTML.trim();
  
  // Add hover animation
  const card = wrapper.firstChild;
  card.style.cursor = 'pointer'; // Add pointer cursor to indicate clickable
  
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
  
  // Add click handler for phone call
  card.addEventListener('click', function(e) {
    // Don't trigger if clicking on the View Details button
    if (!e.target.closest('.btn-view-details')) {
      window.location.href = 'tel:+919193993693';
    }
  });
  
  return wrapper.firstChild;
}

function loadFAQs() {
  const faqContainer = document.getElementById('faq-container');
  
  faqData.forEach((faq, index) => {
    const faqItemHTML = `
      <div class="faq-item" data-faq-id="${index}">
        <div class="faq-question">
          <h3>${faq.question}</h3>
          <span class="faq-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </span>
        </div>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = faqItemHTML.trim();
    faqContainer.appendChild(wrapper.firstChild);
  });
  
  // Add toggle functionality to FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
  
  // Open first FAQ by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
  }
}

// Search form handling
const searchForm = document.getElementById('college-search-form');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // In real application, this would redirect to colleges.html with search parameters
    window.location.href = 'colleges.html';
  });
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.remove('not-visible');
      element.classList.add('active');
    } else {
      element.classList.add('not-visible');
      element.classList.remove('active');
    }
  });
}

function animateNumber(element, target, hasPlus) {
  let current = 0;
  const duration = 2000; // 2 seconds
  const step = target / (duration / 16); // 60fps
  const isDecimal = !Number.isInteger(target);

  function update() {
    current += step;
    if (current >= target) {
      element.textContent = hasPlus ? Math.floor(target) + '+' : 
                           (isDecimal ? target.toFixed(1) : Math.floor(target));
      return;
    }
    element.textContent = hasPlus ? Math.floor(current) + '+' : 
                         (isDecimal ? current.toFixed(1) : Math.floor(current));
    requestAnimationFrame(update);
  }

  update();
}

// Add hover effect for review cards
const reviewCards = document.querySelectorAll('.review-card');
reviewCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
    this.style.boxShadow = '0 20px 40px rgba(var(--primary-color-rgb), 0.15)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 20px rgba(var(--primary-color-rgb), 0.1)';
  });
});

// Add shimmer effect on review cards
function addShimmerEffect() {
  const cards = document.querySelectorAll('.review-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('shimmer');
      setTimeout(() => {
        card.classList.remove('shimmer');
      }, 1000);
    }, index * 200);
  });
}

// Trigger shimmer effect periodically
setInterval(addShimmerEffect, 5000);
