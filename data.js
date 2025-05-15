// College Data
const colleges = [
    {
      id: 1,
      name: "COER University, ROORKEE",
      shortName: "Coer",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
      established: "1847",
      type: "Government",
      affiliation: "Autonomous",
      rating: 4.8,
      location: "Roorkee,",
      courses: [
        { name: "B.Tech Computer Science", duration: "4 Years", fees: 220000, seats: 120 },
        { name: "B.Tech Mechanical Engineering", duration: "4 Years", fees: 220000, seats: 100 },
        { name: "M.Tech Computer Science", duration: "2 Years", fees: 180000, seats: 60 }
      ],
      facilities: ["Library", "Sports Complex", "Laboratories", "Cafeteria", "Hostels", "Wi-Fi Campus"],
      description: "IIT Roorkee is among the foremost institutes of national importance in higher technological education and research. The institute offers Bachelor's Degree courses in 10 disciplines of Engineering and Architecture and Postgraduate's Degree in 55 disciplines.",
      admissionProcess: "Admissions to B.Tech programs are through JEE Advanced. M.Tech admissions are through GATE scores.",
      images: [
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
      ],
      featured: true
    },
    {
      id: 2,
      name: "University of Petroleum and Energy Studies",
      shortName: "UPES",
      logo: "https://images.unsplash.com/photo-1581362072978-14998d01fdce?q=80&w=1000&auto=format&fit=crop",
      established: "1993",
      type: "Private",
      affiliation: "UGC",
      rating: 4.5,
      location: "Prem nagar, Dehradun",
      courses: [
        { name: "B.Tech Computer Science", duration: "4 Years", fees: 160000, seats: 180 },
        { name: "BBA", duration: "3 Years", fees: 120000, seats: 120 },
        { name: "MBA", duration: "2 Years", fees: 180000, seats: 60 }
      ],
      facilities: ["Modern Library", "Sports Complex", "Advanced Labs", "Cafeteria", "Hostels", "Wi-Fi Campus"],
      description: "Graphic Era University is a private university located in Dehradun, Uttarakhand, India. It was founded in 1993 and offers various undergraduate and postgraduate courses in engineering, management, computer applications, and humanities.",
      admissionProcess: "Admissions to engineering programs are through JEE Mains scores. Management admissions are through CAT/MAT scores. Direct admissions are also available based on merit.",
      images: [
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1000&auto=format&fit=crop"
      ],
      featured: true
    },
    {
      id: 3,
      name: "Dev Bhoomi Institute of Technology",
      shortName: "DBIT",
      logo: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1000&auto=format&fit=crop",
      established: "1998",
      type: "Private",
      affiliation: "UGC",
      rating: 4.3,
      location: "Mussoorie Diversion Road, Dehradun",
      courses: [
        { name: "B.Tech Electronics", duration: "4 Years", fees: 140000, seats: 120 },
        { name: "B.Tech Civil Engineering", duration: "4 Years", fees: 130000, seats: 90 },
        { name: "MBA", duration: "2 Years", fees: 150000, seats: 60 }
      ],
      facilities: ["Library", "Sports Facilities", "Labs", "Cafeteria", "Hostels", "Wi-Fi Campus"],
      description: "Dehradun Institute of Technology (DIT) is an engineering institute located in Dehradun, Uttarakhand. It offers undergraduate, postgraduate, and doctoral programs in various disciplines of engineering and management.",
      admissionProcess: "Admissions to B.Tech programs are through JEE Mains scores. MBA admissions are through CAT/MAT scores or the institute's own entrance test.",
      images: [
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Sai Group of Institutions",
      shortName: "SGI",
      logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d977758?q=80&w=1000&auto=format&fit=crop",
      established: "2005",
      type: "State Government",
      affiliation: "UGC",
      rating: 4.0,
      location: "Kedarpur, Dehradun",
      courses: [
        { name: "MA Economics", duration: "2 Years", fees: 80000, seats: 40 },
        { name: "MSc Environmental Science", duration: "2 Years", fees: 90000, seats: 30 },
        { name: "MBA", duration: "2 Years", fees: 120000, seats: 60 }
      ],
      facilities: ["Central Library", "Sports Facilities", "Labs", "Canteen", "Hostels", "Wi-Fi Campus"],
      description: "Doon University is a state university established by the Government of Uttarakhand. It offers various undergraduate and postgraduate programs in humanities, social sciences, science, and management.",
      admissionProcess: "Admissions are based on entrance tests conducted by the university followed by counseling.",
      images: [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
      ],
      featured: true
    }
  ];
  
  // Counselling Dates
  const counsellingDates = [
    {
      id: 1,
      college: "COER Roorkee",
      date: "July 15, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "Main Campus, Roorkee",
      eligibility: "JEE Advanced Qualified Candidates",
      contactPerson: "Dr. Amit Sharma",
      contactEmail: "admissions@iitr.ac.in"
    },
    {
      id: 2,
      college: "UPES",
      date: "June 25, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "UPES Campus, Bell Road",
      eligibility: "10+2 with 60% marks in PCM",
      contactPerson: "Dr. Rajesh Kumar",
      contactEmail: "admissions@geu.ac.in"
    },
    {
      id: 3,
      college: "DEv bhoomi Institute of Technology",
      date: "July 5, 2024",
      time: "10:00 AM - 3:00 PM",
      venue: "DIT Auditorium",
      eligibility: "10+2 with 55% marks in PCM",
      contactPerson: "Dr. Sanjay Gupta",
      contactEmail: "admissions@dit.edu.in"
    },
    {
      id: 4,
      college: "Sai Group of Institutions",
      date: "July 20, 2024",
      time: "11:00 AM - 4:00 PM",
      venue: "Main Campus, Kedarpur",
      eligibility: "Varies by program",
      contactPerson: "Dr. Neeta Singh",
      contactEmail: "admissions@doonuniversity.ac.in"
    }
  ];
  
  // FAQ Data
  const faqData = [
    {
      question: "What are the top engineering colleges in Dehradun?",
      answer: "The top engineering colleges in Dehradun include IIT Roorkee, Graphic Era University, DIT University, and UPES. These institutions are known for their quality education, infrastructure, and placement records."
    },
    {
      question: "How can I apply for admission to colleges in Dehradun?",
      answer: "Most colleges in Dehradun accept applications online through their official websites. Engineering colleges typically accept JEE Main/Advanced scores, while management programs might require CAT/MAT scores. Some colleges also conduct their own entrance exams."
    },
    {
      question: "What is the average fee structure for engineering courses in Dehradun?",
      answer: "The fee structure varies depending on the institution and course. Government colleges like IIT Roorkee charge around ₹2-2.5 lakhs per year, while private universities like Graphic Era or DIT may charge between ₹1.2-1.8 lakhs per year."
    },
    {
      question: "What documents are required for college admission in Dehradun?",
      answer: "Typically required documents include: 10th and 12th mark sheets, transfer certificate, character certificate, domicile certificate (if applicable), entrance exam score card, ID proof, passport-sized photographs, and category certificate (if applicable)."
    },
    {
      question: "When do most colleges in Dehradun start their admission process?",
      answer: "Most colleges start their admission process between February and April, with counseling sessions held in June-July. Engineering admissions generally follow the JEE counseling schedule, while other courses might have different timelines."
    }
  ];
  
