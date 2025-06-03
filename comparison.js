const collegeData = [
        {
            id: 1,
            name: 'UPES Dehradun',
            logo: '🏛️',
            tuitionFee: 200000,
            hostelFee: 120000,
            examFee: 5000,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 335000,
            courses: ['B.Tech', 'BBA', 'LLB', 'MBA']
        },
        {
            id: 2,
            name: 'Jigyasa University, Dehradun',
            logo: '🎓',
            tuitionFee: 150000,
            hostelFee: 90000,
            examFee: 4000,
            libraryFee: 8000,
            scholarshipAvailable: true,
            totalFee: 252000,
            courses: ['B.Tech', 'BCA', 'B.Sc', 'M.Tech']
        },
        {
            id: 3,
            name: 'Dev Bhoomi University, Dehradun',
            logo: '🏫',
            tuitionFee: 180000,
            hostelFee: 100000,
            examFee: 4500,
            libraryFee: 9000,
            scholarshipAvailable: true,
            totalFee: 293500,
            courses: ['B.Tech', 'BBA', 'B.Pharm', 'MBA']
        },
        {
            id: 4,
            name: 'GRD Institute, Dehradun',
            logo: '🏢',
            tuitionFee: 140000,
            hostelFee: 85000,
            examFee: 3500,
            libraryFee: 7000,
            scholarshipAvailable: true,
            totalFee: 235500,
            courses: ['B.Tech', 'MCA', 'BCA', 'B.Sc IT']
        },
        {
            id: 5,
            name: 'PCSTI University, Dehradun',
            logo: '🏛️',
            tuitionFee: 190000,
            hostelFee: 110000,
            examFee: 5000,
            libraryFee: 9500,
            scholarshipAvailable: true,
            totalFee: 314500,
            courses: ['B.Tech', 'BBA', 'B.Arch', 'M.Tech']
        },
        {
            id: 6,
            name: 'Graphic Era University, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 7,
            name: 'COER University, Roorkee',
            logo: '⛪️',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 8,
            name: 'Sai Group of Institutions, Dehradun',
            logo: '',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 9,
            name: 'Uttaranchal University, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 10,
            name: 'Maya Devi Institute of Technology, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 11,
            name: 'BFIITM, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 12,
            name: 'JBIT, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        },
        {
            id: 13,
            name: 'Ras Bihari Bose Subharti University, Dehradun',
            logo: '🎓',
            tuitionFee: 195000,
            hostelFee: 115000,
            examFee: 5500,
            libraryFee: 10000,
            scholarshipAvailable: true,
            totalFee: 325500,
            courses: ['B.Tech', 'MBA', 'BCA', 'MCA']
        }
    ];

    // Format currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    }

    // Get fee class based on amount
    function getFeeClass(fee, colleges) {
        const maxFee = Math.max(...colleges.map(c => c.totalFee));
        const minFee = Math.min(...colleges.map(c => c.totalFee));
        
        if (fee === minFee) return 'fees-low';
        if (fee === maxFee) return 'fees-high';
        
        const range = maxFee - minFee;
        const position = (fee - minFee) / range;
        
        if (position < 0.33) return 'fees-low';
        if (position < 0.66) return 'fees-medium';
        return 'fees-high';
    }

    // Variables to track state
    let sortConfig = {
        key: 'totalFee',
        direction: 'ascending'
    };
    let searchTerm = '';
    let selectedCourseFilter = '';
    let compareColleges = {};

    // DOM elements
    const collegeTableBody = document.getElementById('collegeTableBody');
    const noResultsElement = document.getElementById('noResults');
    const collegeSearchInput = document.getElementById('collegeSearch');
    const courseFilterSelect = document.getElementById('courseFilter');
    const compareBtn = document.getElementById('compareBtn');
    const selectedCountBadge = document.getElementById('selectedCount');
    const comparisonModal = document.getElementById('comparisonModal');
    const closeModalBtn = document.getElementById('closeModal');
    const collegeHeaderCompare = document.getElementById('collegeHeaderCompare');
    const feeComparisonTableBody = document.getElementById('feeComparisonTableBody');
    const coursesGrid = document.getElementById('coursesGrid');
    const college1NameHeader = document.getElementById('college1NameHeader');
    const college2NameHeader = document.getElementById('college2NameHeader');

    // Sort headers
    const sortableHeaders = document.querySelectorAll('th.sortable');

    // Function to render college table
    function renderCollegeTable() {
        // Filter colleges
        let filteredColleges = [...collegeData];
        
        if (searchTerm) {
            filteredColleges = filteredColleges.filter(college => 
                college.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (selectedCourseFilter) {
            filteredColleges = filteredColleges.filter(college => 
                college.courses.includes(selectedCourseFilter)
            );
        }
        
        // Sort colleges
        filteredColleges.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        
        // Clear table body
        collegeTableBody.innerHTML = '';
        
        // Show/hide no results message
        if (filteredColleges.length === 0) {
            noResultsElement.style.display = 'block';
        } else {
            noResultsElement.style.display = 'none';
        }
        
        // Create table rows
        filteredColleges.forEach(college => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>
                    <div class="college-info">
                        <input 
                            type="checkbox" 
                            id="compare-${college.id}" 
                            ${compareColleges[college.id] ? 'checked' : ''} 
                            ${!compareColleges[college.id] && Object.values(compareColleges).filter(Boolean).length >= 2 ? 'disabled' : ''}
                            style="margin-right: 0.75rem;"
                        >
                        <div class="college-logo">${college.logo}</div>
                        <div>
                            <div class="college-name">${college.name}</div>
                            ${college.scholarshipAvailable ? 
                                `<div class="badge-green">Scholarships Available</div>` : ''}
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(college.tuitionFee)}<span style="color: var(--text-muted);">/year</span></td>
                <td>${formatCurrency(college.hostelFee)}<span style="color: var(--text-muted);">/year</span></td>
                <td>
                    <div class="fees-info" style="position: relative;">
                        View Details ℹ️
                        <div class="fees-tooltip">
                            <div class="tooltip-item">
                                <span>Exam Fee:</span>
                                <span>${formatCurrency(college.examFee)}</span>
                            </div>
                            <div class="tooltip-item">
                                <span>Library Fee:</span>
                                <span>${formatCurrency(college.libraryFee)}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="${getFeeClass(college.totalFee, filteredColleges)}">
                        ${formatCurrency(college.totalFee)}<span style="color: var(--text-muted); font-weight: normal;">/year</span>
                    </div>
                </td>
            `;
            
            collegeTableBody.appendChild(row);
            
            // Add checkbox event listener
            const checkbox = row.querySelector(`#compare-${college.id}`);
            checkbox.addEventListener('change', () => {
                compareColleges[college.id] = checkbox.checked;
                updateCompareButton();
                renderCollegeTable(); // Re-render to update disabled states
            });
        });
    }

    // Update compare button state
    function updateCompareButton() {
        const selectedCount = Object.values(compareColleges).filter(Boolean).length;
        selectedCountBadge.textContent = `${selectedCount}/2`;
        
        if (selectedCount === 2) {
            compareBtn.disabled = false;
        } else {
            compareBtn.disabled = true;
        }
    }

    // Render comparison modal
    function renderComparisonModal() {
        // Get selected colleges
        const selectedCollegeIds = Object.entries(compareColleges)
            .filter(([_, selected]) => selected)
            .map(([id]) => parseInt(id));
        
        if (selectedCollegeIds.length !== 2) return;
        
        const college1 = collegeData.find(c => c.id === selectedCollegeIds[0]);
        const college2 = collegeData.find(c => c.id === selectedCollegeIds[1]);
        
        // Render college headers
        collegeHeaderCompare.innerHTML = `
            <div class="college-header-item">
                <div class="college-header-logo">${college1.logo}</div>
                <div>
                    <div class="college-header-name">${college1.name}</div>
                    ${college1.scholarshipAvailable ? 
                        `<div class="badge-green">Scholarships Available</div>` : ''}
                </div>
            </div>
            <div class="college-header-item">
                <div class="college-header-logo">${college2.logo}</div>
                <div>
                    <div class="college-header-name">${college2.name}</div>
                    ${college2.scholarshipAvailable ? 
                        `<div class="badge-green">Scholarships Available</div>` : ''}
                </div>
            </div>
        `;
        
        // Update table headers
        college1NameHeader.textContent = college1.name;
        college2NameHeader.textContent = college2.name;
        
        // Render fee comparison table
        feeComparisonTableBody.innerHTML = `
            <tr>
                <td>Tuition Fee</td>
                <td>${formatCurrency(college1.tuitionFee)}</td>
                <td>${formatCurrency(college2.tuitionFee)}</td>
                <td class="${college1.tuitionFee < college2.tuitionFee ? 'fees-low' : 'fees-high'}">
                    ${formatCurrency(Math.abs(college1.tuitionFee - college2.tuitionFee))}
                    ${college1.tuitionFee < college2.tuitionFee ? ' less' : ' more'}
                </td>
            </tr>
            <tr>
                <td>Hostel Fee</td>
                <td>${formatCurrency(college1.hostelFee)}</td>
                <td>${formatCurrency(college2.hostelFee)}</td>
                <td class="${college1.hostelFee < college2.hostelFee ? 'fees-low' : 'fees-high'}">
                    ${formatCurrency(Math.abs(college1.hostelFee - college2.hostelFee))}
                    ${college1.hostelFee < college2.hostelFee ? ' less' : ' more'}
                </td>
            </tr>
            <tr>
                <td>Exam Fee</td>
                <td>${formatCurrency(college1.examFee)}</td>
                <td>${formatCurrency(college2.examFee)}</td>
                <td class="${college1.examFee < college2.examFee ? 'fees-low' : 'fees-high'}">
                    ${formatCurrency(Math.abs(college1.examFee - college2.examFee))}
                    ${college1.examFee < college2.examFee ? ' less' : ' more'}
                </td>
            </tr>
            <tr>
                <td>Library Fee</td>
                <td>${formatCurrency(college1.libraryFee)}</td>
                <td>${formatCurrency(college2.libraryFee)}</td>
                <td class="${college1.libraryFee < college2.libraryFee ? 'fees-low' : 'fees-high'}">
                    ${formatCurrency(Math.abs(college1.libraryFee - college2.libraryFee))}
                    ${college1.libraryFee < college2.libraryFee ? ' less' : ' more'}
                </td>
            </tr>
            <tr style="background-color: #f9fafb; font-weight: 600;">
                <td>Total Fee</td>
                <td>${formatCurrency(college1.totalFee)}</td>
                <td>${formatCurrency(college2.totalFee)}</td>
                <td class="${college1.totalFee < college2.totalFee ? 'fees-low' : 'fees-high'}">
                    ${formatCurrency(Math.abs(college1.totalFee - college2.totalFee))}
                    ${college1.totalFee < college2.totalFee ? ' less' : ' more'}
                </td>
            </tr>
        `;
        
        // Render courses grid
        const allCourses = [...new Set([...college1.courses, ...college2.courses])].sort();
        
        coursesGrid.innerHTML = '';
        allCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            
            courseItem.innerHTML = `
                <span class="course-name">${course}</span>
                <div class="course-availability">
                    <span class="${college1.courses.includes(course) ? 'available' : 'not-available'}">
                        ${college1.courses.includes(course) ? '✓' : '✗'}
                    </span>
                    <span class="${college2.courses.includes(course) ? 'available' : 'not-available'}">
                        ${college2.courses.includes(course) ? '✓' : '✗'}
                    </span>
                </div>
            `;
            
            coursesGrid.appendChild(courseItem);
        });
        
        // Render chart
        renderComparisonChart(college1, college2);
        
        // Show modal
        comparisonModal.classList.add('active');
    }

    // Render comparison chart
    function renderComparisonChart(college1, college2) {
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        
        // Destroy previous chart if exists
        if (window.comparisonChartInstance) {
            window.comparisonChartInstance.destroy();
        }
        
        // Prepare data
        const labels = ['Tuition Fee', 'Hostel Fee', 'Exam Fee', 'Library Fee', 'Total Fee'];
        const data1 = [
            college1.tuitionFee, 
            college1.hostelFee, 
            college1.examFee, 
            college1.libraryFee, 
            college1.totalFee
        ];
        const data2 = [
            college2.tuitionFee, 
            college2.hostelFee, 
            college2.examFee, 
            college2.libraryFee, 
            college2.totalFee
        ];
        
        // Create chart
        window.comparisonChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: college1.name,
                        data: data1,
                        backgroundColor: '#4f46e5',
                        borderColor: '#4338ca',
                        borderWidth: 1
                    },
                    {
                        label: college2.name,
                        data: data2,
                        backgroundColor: '#10b981',
                        borderColor: '#059669',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + formatCurrency(context.raw);
                            }
                        }
                    }
                }
            }
        });
    }

    // Event listeners
    sortableHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const key = header.getAttribute('data-sort');
            if (sortConfig.key === key) {
                sortConfig.direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
            } else {
                sortConfig.key = key;
                sortConfig.direction = 'ascending';
            }
            renderCollegeTable();
        });
    });

    collegeSearchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderCollegeTable();
    });

    courseFilterSelect.addEventListener('change', (e) => {
        selectedCourseFilter = e.target.value;
        renderCollegeTable();
    });

    compareBtn.addEventListener('click', () => {
        renderComparisonModal();
    });

    closeModalBtn.addEventListener('click', () => {
        comparisonModal.classList.remove('active');
    });

    // Initial render
    renderCollegeTable();