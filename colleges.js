document.addEventListener('DOMContentLoaded', function() {
  // Initialize colleges page
  initCollegesPage();
});

function initCollegesPage() {
  // Load all colleges
  loadAllColleges();
  
  // Setup event listeners for filters
  setupFilters();
}

function loadAllColleges() {
  const collegesGrid = document.getElementById('colleges-grid');
  collegesGrid.innerHTML = '';
  
  // Get current filters
  const searchTerm = document.getElementById('college-search-input').value.toLowerCase();
  const typeFilter = document.getElementById('type-filter').value;
  const feeFilter = document.getElementById('fee-filter').value;
  const courseFilter = document.getElementById('course-filter').value;
  
  // Sort options
  const sortOption = document.getElementById('sort-select').value;
  
  // Filter colleges
  let filteredColleges = colleges.filter(college => {
    let matchesSearch = true;
    let matchesType = true;
    let matchesFeeRange = true;
    let matchesCourse = true;
    
    // Search term filter
    if (searchTerm) {
      matchesSearch = college.name.toLowerCase().includes(searchTerm) ||
                     college.shortName.toLowerCase().includes(searchTerm);
    }
    
    // Type filter
    if (typeFilter) {
      matchesType = college.type === typeFilter;
    }
    
    // Fee range filter
    if (feeFilter) {
      const [min, max] = feeFilter.split('-').map(Number);
      const minFee = Math.min(...college.courses.map(c => c.fees));
      
      if (max) {
        matchesFeeRange = minFee >= min && minFee <= max;
      } else {
        // For "500000+" range
        matchesFeeRange = minFee >= min;
      }
    }
    
    // Course filter
    if (courseFilter) {
      matchesCourse = college.courses.some(c => 
        c.name.toLowerCase().includes(courseFilter.toLowerCase())
      );
    }
    
    return matchesSearch && matchesType && matchesFeeRange && matchesCourse;
  });
  
  // Sort colleges
  filteredColleges = sortColleges(filteredColleges, sortOption);
  
  // Update results count
  document.getElementById('results-count').textContent = 
    `${filteredColleges.length} ${filteredColleges.length === 1 ? 'College' : 'Colleges'} Found`;
  
  // Show no results message if no colleges found
  if (filteredColleges.length === 0) {
    document.getElementById('no-results').style.display = 'block';
    return;
  } else {
    document.getElementById('no-results').style.display = 'none';
  }
  
  // Create and append college cards with animation
  filteredColleges.forEach((college, index) => {
    const card = createCollegeCard(college);
    
    // Add animation delay based on index
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
    
    collegesGrid.appendChild(card);
  });
  
  // Add call-to-action tooltip for the first card
  if (filteredColleges.length > 0) {
    const firstCard = collegesGrid.querySelector('.college-card');
    const tooltip = document.createElement('div');
    tooltip.className = 'college-tooltip';
    tooltip.innerHTML = 'Click anywhere on card to call us!';
    tooltip.style.position = 'absolute';
    tooltip.style.top = '-40px';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.backgroundColor = '#4a6cf7';
    tooltip.style.color = 'white';
    tooltip.style.padding = '6px 12px';
    tooltip.style.borderRadius = '4px';
    tooltip.style.fontSize = '12px';
    tooltip.style.fontWeight = 'bold';
    tooltip.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    tooltip.style.zIndex = '10';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.3s ease';
    
    firstCard.style.position = 'relative';
    firstCard.appendChild(tooltip);
    
    setTimeout(() => {
      tooltip.style.opacity = '1';
      
      setTimeout(() => {
        tooltip.style.opacity = '0';
        
        setTimeout(() => {
          tooltip.remove();
        }, 300);
      }, 3000);
    }, 1000);
  }
  
  // Update active filters display
  updateActiveFilters();
}

function sortColleges(colleges, sortOption) {
  switch (sortOption) {
    case 'name':
      return colleges.sort((a, b) => a.name.localeCompare(b.name));
    case 'rating':
      return colleges.sort((a, b) => b.rating - a.rating);
    case 'fees':
      return colleges.sort((a, b) => {
        const minFeeA = Math.min(...a.courses.map(c => c.fees));
        const minFeeB = Math.min(...b.courses.map(c => c.fees));
        return minFeeA - minFeeB;
      });
    default:
      return colleges;
  }
}

function setupFilters() {
  // Search input
  const searchInput = document.getElementById('college-search-input');
  searchInput.addEventListener('input', debounce(loadAllColleges, 300));
  
  // Select filters
  const typeFilter = document.getElementById('type-filter');
  const feeFilter = document.getElementById('fee-filter');
  const courseFilter = document.getElementById('course-filter');
  const sortSelect = document.getElementById('sort-select');
  
  typeFilter.addEventListener('change', loadAllColleges);
  feeFilter.addEventListener('change', loadAllColleges);
  courseFilter.addEventListener('change', loadAllColleges);
  sortSelect.addEventListener('change', loadAllColleges);
  
  // Reset filters button
  const resetButton = document.getElementById('reset-filters');
  resetButton.addEventListener('click', resetFilters);
}

function resetFilters() {
  document.getElementById('college-search-input').value = '';
  document.getElementById('type-filter').value = '';
  document.getElementById('fee-filter').value = '';
  document.getElementById('course-filter').value = '';
  document.getElementById('sort-select').value = 'name';
  
  loadAllColleges();
}

function updateActiveFilters() {
  const activeFiltersContainer = document.getElementById('active-filters');
  activeFiltersContainer.innerHTML = '';
  
  const typeFilter = document.getElementById('type-filter').value;
  const feeFilter = document.getElementById('fee-filter').value;
  const courseFilter = document.getElementById('course-filter').value;
  
  // If no active filters, hide the container
  if (!typeFilter && !feeFilter && !courseFilter) {
    activeFiltersContainer.style.display = 'none';
    return;
  }
  
  // Show the container if there are active filters
  activeFiltersContainer.style.display = 'flex';
  
  // Add filter icon and label
  const filterLabel = document.createElement('div');
  filterLabel.className = 'filter-label';
  filterLabel.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
    Active Filters:
  `;
  activeFiltersContainer.appendChild(filterLabel);
  
  // Type filter tag
  if (typeFilter) {
    const typeTag = createFilterTag('Type', typeFilter, 'type-filter');
    activeFiltersContainer.appendChild(typeTag);
  }
  
  // Fee range filter tag
  if (feeFilter) {
    let feeLabel;
    switch (feeFilter) {
      case '0-100000':
        feeLabel = 'Below ₹1 Lakh';
        break;
      case '100000-200000':
        feeLabel = '₹1 Lakh - ₹2 Lakh';
        break;
      case '200000-500000':
        feeLabel = '₹2 Lakh - ₹5 Lakh';
        break;
      case '500000+':
        feeLabel = 'Above ₹5 Lakh';
        break;
      default:
        feeLabel = feeFilter;
    }
    const feeTag = createFilterTag('Fee Range', feeLabel, 'fee-filter');
    activeFiltersContainer.appendChild(feeTag);
  }
  
  // Course filter tag
  if (courseFilter) {
    const courseTag = createFilterTag('Course', courseFilter, 'course-filter');
    activeFiltersContainer.appendChild(courseTag);
  }
  
  // Add "Clear All" button
  const clearAllButton = document.createElement('button');
  clearAllButton.className = 'clear-all-filters';
  clearAllButton.textContent = 'Clear All';
  clearAllButton.addEventListener('click', resetFilters);
  activeFiltersContainer.appendChild(clearAllButton);
}

function createFilterTag(type, value, filterId) {
  const tag = document.createElement('div');
  tag.className = 'filter-tag';
  tag.innerHTML = `
    <span>${type}: ${value}</span>
    <button class="remove-filter" data-filter="${filterId}">
      &times;
    </button>
  `;
  
  // Add event listener to remove button
  tag.querySelector('.remove-filter').addEventListener('click', function() {
    document.getElementById(this.dataset.filter).value = '';
    loadAllColleges();
  });
  
  return tag;
}

// Helper function for debouncing
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}
