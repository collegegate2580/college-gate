// College data
const colleges = [
  // Existing colleges
  {
    id: 1,
    name: "Graphic Era University",
    shortName: "GEU",
    type: "Private",
    rating: 4.6,
    accreditation: "NAAC A+",
    location: "Dehradun, Uttarakhand",
    established: 1993,
    image: "college_images/1576563781phpQj94TQ.jpeg",
    logoImg: "https://www.geu.ac.in/content/dam/geu/geu-logo.svg",
    description: "Graphic Era University, founded by Prof. Kamal Ghanshala, started as a computer center in 1993 and evolved into a prestigious deemed university. Located in Clement Town, Dehradun, the 25-acre campus is bordered by Rajaji National Park and Clement Town Cantonment. The university holds NAAC A+ accreditation and ranks 52nd nationally in engineering (NIRF 2024).",
    facilities: ["Smart Classrooms", "Research Labs", "High-Speed Wi-Fi Campus", "World-Class Hostels", "Sports Complex", "Technology Business Incubator", "Multiple Cafeterias", "Indoor & Outdoor Auditoriums"],
    ranking: "Ranked #52 in University Category by NIRF 2024",
    website: "https://www.geu.ac.in/",
    contact: "+91 7060800800",
    courses: [
      // B.Tech Programs
      { name: "B.Tech in Computer Science and Engineering", duration: "4 Years", fees: 354730, specialization: "Core CSE" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Artificial Intelligence & Machine Learning" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Data Science" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Cloud Computing & Virtualization" },
      { name: "B.Tech in CSE", duration: "4 Years", fees: 354730, specialization: "Cyber Security & Forensics" },
      { name: "B.Tech in Electronics & Communication", duration: "4 Years", fees: 354730 },
      { name: "B.Tech in Mechanical Engineering", duration: "4 Years", fees: 354730 },
      { name: "B.Tech in Civil Engineering", duration: "4 Years", fees: 354730 },
      { name: "B.Tech in Electrical Engineering", duration: "4 Years", fees: 354730 },
      
      // Management Programs
      { name: "BBA", duration: "3 Years", fees: 95000, specialization: "General" },
      { name: "BBA", duration: "3 Years", fees: 95000, specialization: "Digital Marketing" },
      { name: "BBA", duration: "3 Years", fees: 95000, specialization: "Business Analytics" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "Marketing" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "Finance" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "HR" },
      { name: "MBA", duration: "2 Years", fees: 180000, specialization: "Business Analytics" },
      
      // Computer Applications
      { name: "BCA", duration: "3 Years", fees: 85000 },
      { name: "MCA", duration: "2 Years", fees: 120000 },
      
      // Science Programs
      { name: "B.Sc", duration: "3 Years", fees: 75000, specialization: "Physics" },
      { name: "B.Sc", duration: "3 Years", fees: 75000, specialization: "Chemistry" },
      { name: "B.Sc", duration: "3 Years", fees: 75000, specialization: "Mathematics" },
      { name: "B.Sc", duration: "3 Years", fees: 85000, specialization: "Agriculture" },
      { name: "B.Sc", duration: "3 Years", fees: 85000, specialization: "Biotechnology" },
      
      // Commerce & Arts
      { name: "B.Com", duration: "3 Years", fees: 75000, specialization: "Honours" },
      { name: "B.Com", duration: "3 Years", fees: 65000, specialization: "Regular" },
      { name: "BA", duration: "3 Years", fees: 65000, specialization: "Economics" },
      { name: "BA", duration: "3 Years", fees: 65000, specialization: "English" },
      
      // Law Programs
      { name: "BBA-LLB", duration: "5 Years", fees: 125000, specialization: "Integrated" },
      { name: "LLB", duration: "3 Years", fees: 95000 },
      
      // Research Programs
      { name: "Ph.D", duration: "3-5 Years", fees: 150000, specialization: "Various Disciplines" },
      
      // M.Tech Programs
      { name: "M.Tech in CSE", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in Data Science", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in AI & ML", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in ECE", duration: "2 Years", fees: 120000 },
      { name: "M.Tech in Mechanical", duration: "2 Years", fees: 120000 }
    ]
  },
  {
    id: 2,
    name: "COER University",
    shortName: "COER",
    type: "Private",
    rating: 4.5,
    accreditation: "NAAC A+",
    established: 1998,
    location: "Roorkee, Uttarakhand",
    description: "College of Engineering Roorkee (COER) is a premier engineering institution established in 1998. Located in Roorkee, it offers high-quality technical education with state-of-the-art infrastructure and experienced faculty. The university focuses on holistic development through industry collaborations, research opportunities, and practical training.",
    establishment: "1998",
    image: "college_images/coer.webp",
    rating: 4.5,
    reviews: 120,
    fees: "₹2.5L - ₹4L per year",
    courses: ["B.Tech", "M.Tech", "MBA", "BCA", "MCA"],
    facilities: ["Library", "Sports Complex", "Hostel", "Labs", "Cafeteria"]
  },
  {
    id: 3,
    name: "University of Petroleum and Energy Studies",
    shortName: "UPES",
    type: "Private",
    rating: 4.5,
    affiliation: "UGC",
    location: "Prem nagar, Dehradun, Uttarakhand",
    established: "1993",
    image: "college_images/upes.jpg",
    facilities: ["Modern Library", "Sports Complex", "Advanced Labs", "Cafeteria", "Hostels", "Wi-Fi Campus"],
    description: "UPES is a private university located in Dehradun, Uttarakhand, India. Tucked away in the hills of misty Dehradun, the serene, quiet, campuses at Bidholi and Kandoli are ideal places for a truly immersive learning experience. UPES is known for its specialized programs in energy, petroleum, and other sectors.",
    ranking: "Ranked #1 in Petroleum Engineering by NIRF 2023",
    website: "https://www.upes.ac.in/",
    contact: "+91 135 277 6055",
    logoImg: "https://www.upes.ac.in/sites/default/files/2023-01/upes-logo.png",
    admissionProcess: "Admissions to engineering programs are through JEE Mains scores. Management admissions are through CAT/MAT scores. Direct admissions are also available based on merit.",
    courses: [
      { name: "B.Tech(niotech) ", duration: "4 Years", fees: 160000, seats: 180 },
      { name: "B.Tech(petroleum) ", duration: "4 Years", fees: 160000, seats: 180 },
      { name: "B.Tech(chemical) ", duration: "4 Years", fees: 160000, seats: 180 },
      { name: "BBA", duration: "3 Years", fees: 120000, seats: 120 },
      { name: "MBA", duration: "2 Years", fees: 180000, seats: 60 }
    ],
  },
  {
    id: 4,
    name: "Dev Bhoomi Group of Institutions",
    shortName: "DBGI",
    type: "Private",
    rating: 4.2,
    accreditation: "NAAC B++",
    location: "Dehradun, Uttarakhand",
    established: 2005,
    image: "college_images/dev.jpeg",
    logoImg: "https://www.dbgidoon.ac.in/wp-content/uploads/2022/01/dbgi-log.png",
    description: "Dev Bhoomi Group of Institutions (DBGI) was established in 2005 as a leading educational institution in Uttarakhand. The campus features modern infrastructure, advanced laboratories, and experienced faculty members. DBGI is known for its industry-focused curriculum, placement assistance, and emphasis on practical learning.",
    facilities: ["Digital Library", "Indoor Stadium", "Hostels", "Transport", "Medical Facility"],
    ranking: "Ranked among Top 10 Private Colleges in Uttarakhand",
    website: "https://www.dbgidoon.ac.in/",
    contact: "+91 1352 773030",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 89000 },
      { name: "MBA", duration: "2 Years", fees: 95000 },
      { name: "BCA", duration: "3 Years", fees: 65000 },
      { name: "Dimploma", duration: "2 Years", fees: 65000 },
      { name: "B.Pharm", duration: "4 Years", fees: 65000 }
    ]
  },
  {
    id: 5,
    name: "Sai Group of Institutions",
    shortName: "SGI",
    type: "Private",
    rating: 4.1,
    accreditation: "NAAC B+",
    location: "Dehradun, Uttarakhand",
    established: 2003,
    image: "college_images/sai.jpg",
    logoImg: "https://www.saicollege.co.in/images/logo-footer.png",
    description: "Sai Group of Institutions was established in 2003 as Sai Institute of Paramedical and Allied Sciences by Mr. Harish Arora and Mrs. Rani Arora. The institute has grown into a comprehensive educational group offering programs in paramedical sciences, nursing, management, agriculture, and more.",
    facilities: ["Modern Labs", "Hospital Exposure", "Library", "Hostel", "Transport", "Research Center", "Cafeteria"],
    ranking: "Leading Healthcare Education Institute in Uttarakhand",
    website: "https://www.sipasddn.com/",
    contact: "+91 8193936666",
    courses: [
      { name: "Paramedical Courses", duration: "3-4 Years", fees: 80000 },
      { name: "Nursing Programs", duration: "2-4 Years", fees: 90000 },
      { name: "B.Sc Nursing", duration: "4 Years", fees: 160000 },
      { name: "BBA", duration: "3 Years", fees: 49000 },
      { name: "BCA", duration: "3 Years", fees: 49000 },
      { name: "B.Com(simple/hons)", duration: "3 Years", fees: 49000 }
    ]
  },

  // New colleges
  {
    id: 6,
    name: "Jigyasa University",
    shortName: "JU",
    type: "Private",
    rating: 4.3,
    accreditation: "UGC Recognized",
    location: "Dehradun, Uttarakhand",
    established: 2003,
    image: "college_images/jigyasa.jpg",
    logoImg: "https://via.placeholder.com/150",
    description: "Jigyasa University (formerly Himgiri Zee University) was established in 2003 and is recognized by UGC. Located on a 50-acre campus in Dehradun, it offers diverse programs across science, technology, education, journalism, hospitality, legal studies, and more. The university emphasizes practical learning, research opportunities, and holistic development with state-of-the-art facilities.",
    facilities: ["Smart Classrooms", "Research Labs", "Wi-Fi Campus", "Hostels", "Sports Complex", "Library", "Cafeteria"],
    ranking: "Emerging Research University in Uttarakhand",
    website: "https://www.jigyasauniversity.edu.in/",
    contact: "+91 18001804181",
    courses: [
      { name: "BBA in Fintech & Business Analytics", duration: "3 Years", fees: 110000 },
      { name: "MBA in Fintech & Business Analytics", duration: "2 Years", fees: 170000 },
      { name: "BA in Journalism & Mass Communication", duration: "3 Years", fees: 100000 },
      { name: "MA in Journalism & Mass Communication", duration: "2 Years", fees: 80000 },
      { name: "B.Tech with specialization", duration: "4 Years", fees: 150000 },
      { name: "M.Tech with specialization", duration: "2 Years", fees: 100000 },
      { name: "B.Ed", duration: "2 Years", fees: 110000 }
    ]
  },
  {
    id: 7,
    name: "GRD Institute of Technology and Management",
    shortName: "GRDIM",
    type: "Private",
    rating: 3.9,
    accreditation: "NAAC B",
    location: "Dehradun, Uttarakhand",
    established: 2003,
    image: "college_images/grd.jpg",
    logoImg: "https://via.placeholder.com/150",
    description: "GRD Institute of Technology and Management offers industry-oriented courses with a focus on practical skills development.",
    facilities: ["Library", "Labs", "Workshops", "Cafeteria", "Placement Cell"],
    ranking: "Top Technology Institute in Dehradun",
    website: "https://www.grdim.edu.in/",
    contact: "+91 8765432109",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 85000 },
      { name: "Diploma", duration: "3 Years", fees: 45000 },
      { name: "B.Sc in agriculture / Physiotherapy / Medical Laboratory Technolog", duration: "3 Years", fees: 60000 },
      { name: "B.Sc in agriculture", duration: "3 Years", fees: 60000 }
    ]
  },
  {
    id: 8,
    name: "PCSTI – HOTEL & CRUISE MANAGEMENT COURSE",
    shortName: "PCSTI",
    type: "Private",
    rating: 4.0,
    accreditation: "Industry Recognized",
    location: "Dehradun, Uttarakhand",
    established: 2009,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logoImg: "https://via.placeholder.com/150",
    description: "PCSTI specializes in hospitality education with a focus on hotel and cruise management, offering industry internships and placements.",
    facilities: ["Training Kitchen", "Mock Cruise Setup", "Hospitality Lab", "Placement Cell", "Industry Visits"],
    ranking: "Leading Hospitality Training Institute in North India",
    website: "https://www.pcsti.edu.in/",
    contact: "+91 7654321098",
    courses: [
      { name: "Hotel Management", duration: "3 Years", fees: 120000 },
      { name: "Cruise Management", duration: "2 Years", fees: 150000 },
      { name: "Culinary Arts", duration: "1.5 Years", fees: 95000 }
    ]
  },
  {
    id: 9,
    name: "Uttaranchal University",
    shortName: "UU",
    type: "Private",
    rating: 4.3,
    accreditation: "NAAC A",
    location: "Dehradun, Uttarakhand",
    established: 2013,
    image: "college_images/uttaranchal.jpg",
    logoImg: "https://uttaranchaluniversity.ac.in/wp-content/uploads/2020/02/logo-footer.png",
    description: "Uttaranchal University offers a wide range of courses across various disciplines with state-of-the-art infrastructure.",
    facilities: ["Central Library", "Labs", "Hostels", "Sports Facilities", "Cafeteria"],
    ranking: "Top 5 Universities in Uttarakhand",
    website: "https://uttaranchaluniversity.ac.in/",
    contact: "+91 7088111000",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 110000 },
      { name: "LLB", duration: "3 Years", fees: 85000 },
      { name: "B.Pharm", duration: "4 Years", fees: 95000 }
    ]
  },
  {
    id: 10,
    name: "Maya Devi University",
    shortName: "MDU",
    type: "Private",
    rating: 3.8,
    accreditation: "NAAC B",
    location: "Dehradun, Uttarakhand",
    established: 2019,
    image: "college_images/maya.webp",
    logoImg: "https://via.placeholder.com/150",
    description: "Maya Devi University is an emerging institution focused on providing quality education with an emphasis on holistic development.",
    facilities: ["Digital Library", "Computer Labs", "Hostels", "Auditorium", "Sports Ground"],
    ranking: "Emerging University in Uttarakhand",
    website: "https://www.mayadeviinstitute.edu.in/",
    contact: "+91 6543210987",
    courses: [
      { name: "BBA", duration: "3 Years", fees: 70000 },
      { name: "B.Sc", duration: "3 Years", fees: 55000 },
      { name: "B.Ed", duration: "2 Years", fees: 60000 }
    ]
  },
  {
    id: 11,
    name: "BFIT Group of Institutions",
    shortName: "BFIT",
    type: "Private",
    rating: 4.1,
    accreditation: "NAAC B+",
    location: "Dehradun, Uttarakhand",
    established: 2000,
    image: "college_images/bfit-dehradun.jpg",
    logoImg: "https://www.bfitdoon.com/images/logo-bfit.png",
    description: "BFIT Group of Institutions offers technical and professional courses with a focus on practical training and industry readiness.",
    facilities: ["Labs", "Library", "Workshops", "Hostels", "Placement Cell"],
    ranking: "Top Technical Institute in Dehradun",
    website: "https://www.bfitdoon.com/",
    contact: "+91 9412057134",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 80000 },
      { name: "MCA", duration: "2 Years", fees: 70000 },
      { name: "Polytechnic", duration: "3 Years", fees: 45000 }
    ]
  },
  {
    id: 12,
    name: "JB Institute of Technology",
    shortName: "JBIT",
    type: "Private",
    rating: 3.9,
    accreditation: "NAAC B",
    location: "Dehradun, Uttarakhand",
    established: 2007,
    image: "college_images/jbit.jpg",
    logoImg: "https://via.placeholder.com/150",
    description: "JB Institute of Technology offers technical education with a focus on innovation, entrepreneurship, and industry collaboration.",
    facilities: ["Technical Labs", "Innovation Hub", "Library", "Hostels", "Sports Facilities"],
    ranking: "Recognized Technical Institute in Uttarakhand",
    website: "https://www.jbit.edu.in/",
    contact: "+91 5432109876",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 75000 },
      { name: "Diploma", duration: "3 Years", fees: 40000 },
      { name: "M.Tech", duration: "2 Years", fees: 85000 }
    ]
  },
  {
    id: 13,
    name: "Ras Bihari Bose Subharti University",
    shortName: "RBBSU",
    type: "Private",
    rating: 4.2,
    accreditation: "NAAC B++",
    location: "Dehradun, Uttarakhand",
    established: 2016,
    image: "college_images/subharti.jpg",
    logoImg: "https://rbbsu.edu.in/img/logo.png",
    description: "Ras Bihari Bose Subharti University offers diverse programs across various disciplines with a focus on research and innovation.",
    facilities: ["Research Centers", "Library", "Hostels", "Sports Complex", "Auditorium"],
    ranking: "Emerging Research University in Uttarakhand",
    website: "https://rbbsu.edu.in/",
    contact: "+91 7500012143",
    courses: [
      { name: "B.Tech", duration: "4 Years", fees: 95000 },
      { name: "MBA", duration: "2 Years", fees: 85000 },
      { name: "Medical", duration: "5 Years", fees: 550000 }
    ]
  }
];

// Function to create a college card
function createCollegeCard(college) {
  // Create card element
  const card = document.createElement('div');
  card.className = 'college-card';
  card.style.animationDelay = `${college.id * 0.1}s`;
  card.style.backgroundColor = '#fff';
  card.style.borderRadius = '0.75rem';
  card.style.overflow = 'hidden';
  card.style.boxShadow = 'var(--card-shadow)';
  card.style.transition = 'var(--transition-standard)';
  card.style.cursor = 'pointer';

  // Card HTML structure
  card.innerHTML = `
    <div class="college-image" style="height: 200px; overflow: hidden; position: relative;">
      <img src="${college.image}" alt="${college.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
      <div class="college-tag" style="position: absolute; top: 1rem; right: 1rem; background-color: ${college.type === 'Government' ? '#047857' : '#4338ca'}; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">
        ${college.type}
      </div>
    </div>
    
    <div class="college-details" style="padding: 1.5rem;">
      <div class="college-name-rating" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin: 0; line-height: 1.4;">
          ${college.name}
        </h3>
        <div class="college-rating" style="display: flex; align-items: center; gap: 0.25rem; background-color: #eef2ff; padding: 0.25rem 0.5rem; border-radius: 0.375rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#4f46e5" stroke="#4f46e5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span style="font-weight: 600; color: #4f46e5; font-size: 0.875rem;">${college.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div class="college-info" style="margin-bottom: 1rem;">
        <div class="info-item" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: #4b5563; font-size: 0.875rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${college.location}
        </div>
        <div class="info-item" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: #4b5563; font-size: 0.875rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          Est. ${college.established}
        </div>
      </div>
      
      <div class="college-courses" style="margin-bottom: 1.5rem;">
        <div class="course-title" style="font-weight: 600; font-size: 0.875rem; color: #111827; margin-bottom: 0.5rem;">
          Courses Offered:
        </div>
        <div class="courses-list" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${college.courses.map(course => `
            <span class="course-tag" style="background-color: #f3f4f6; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; color: #374151;">
              ${course.name}
            </span>
          `).join('')}
        </div>
      </div>
      
      <div class="college-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="college-fees" style="display: flex; flex-direction: column;">
          <span style="font-size: 0.75rem; color: #6b7280;">Starting from</span>
          <span style="font-weight: 700; color: #111827; font-size: 1rem;">₹${Math.min(...college.courses.map(c => c.fees)).toLocaleString('en-IN')}/year</span>
        </div>
        <a href="college-details.html?id=${college.id}" class="btn-contact" style="display: inline-flex; align-items: center; gap: 0.25rem; background-color: #4f46e5; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; text-decoration: none; transition: background-color 0.2s ease;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 5v8a2 2 0 0 1-2 2h-8"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Learn More
        </a>
      </div>
    </div>
  `;

  // Add click event to the card
  card.addEventListener('click', function (e) {
    if (!e.target.closest('.btn-contact')) {
      window.location.href = `college-details.html?id=${college.id}`;
    }
  });

  return card;
}
