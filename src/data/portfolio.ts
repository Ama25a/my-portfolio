export const hero = {
  name: "Aman Kumar Prasad",
  role: "Python Developer | AI Enthusiast",
  tagline: "Crafting smart solutions with Python, AI, and Full-Stack development",
  location: "Bhubaneswar, India",
  availability: "Open to Internships & Full-Time Opportunities",
  ctas: [
    { text: "View Projects", href: "#projects", variant: "primary" },
    { text: "Download CV", href: "/Aman_Kumar_Prasad_CSE(AI).pdf", variant: "secondary" },
    { text: "Contact Me", href: "#contact", variant: "outline" }
  ]
}


export const contact = {
  email: "amankumar999306@gmail.com",
  phone: "+91 9508246915",
  socials: {
    github: "https://github.com/Ama25a", // (you can give me your GitHub username, I'll update)
    linkedin: "https://linkedin.com/in/amn25a",
    twitter: "", // (leave empty if not available)
    leetcode: "", // (leave empty if not available)
    codechef: "" // (leave empty if not available)
  }
}


export const skills = [
  {
    group: "Programming",
    items: [
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 75 }
    ]
  },
  {
    group: "Frontend",
    items: [
      { name: "React.js", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "Java Swing", level: 65 }
    ]
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Django", level: 65 },
      { name: "REST APIs", level: 75 }
    ]
  },
  {
    group: "Database",
    items: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 }
    ]
  },
  {
    group: "AI / ML",
    items: [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "OpenCV", level: 65 }
    ]
  },
  {
    group: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ IDEA", level: 75 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Arduino", level: 70 }
    ]
  }
]


export const experience = [
    {
    company: "MoovOn Services & Solutions Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    type: "Internship",
    location: "Remote",
    start: "October 2025",
    end: "March 2026",
    points: [
      "Developed a fully functional Taskji using the MERN stack",
      "Worked with backend design logic",
      "Integrated MongoDB for secure data storage and optimized database queries",
      "Collaborated with team members to build scalable and responsive applications"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    certificate: null
  },
  {
    company: "Techoboot",
    role: "Full Stack Developer Intern",
    type: "Internship",
    location: "Remote",
    start: "Jul 2024",
    end: "Aug 2025",
    points: [
      "Developed a fully functional E-Commerce website using the MERN stack",
      "Worked with React.js for frontend design and Node.js/Express.js for backend logic",
      "Integrated MongoDB for secure data storage and optimized database queries",
      "Collaborated with team members to build scalable and responsive applications"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    certificate: null
  },
  {
    company: "Workshops & Certifications",
    role: "Trainee",
    type: "Training",
    location: "Bhubaneswar, India",
    start: "2022",
    end: "2024",
    points: [
      "Completed Cyber Security workshop (40 Hours) from Cisco Academy",
      "Attended Cloud Computing workshop at IIG Varsity, BBSR",
      "Participated in IoT Camera Installation workshop at GIFT Autonomous",
      "Earned NPTEL Certificate in Industry 4.0 and Industrial Internet of Things"
    ],
    skills: ["Cyber Security", "Cloud Computing", "IoT", "Industry 4.0"],
    certificate: "/certificates/nptel-industry4.0.pdf"
  }
]


export const education = [
  {
    school: "Gandhi Institute For Technology (Autonomous), Bhubaneswar",
    degree: "Bachelor of Technology in Computer Science & Engineering (Specialisation in Artificial Intelligence)",
    start: "2021",
    end: "2025",
    cgpa: "7.03",
    location: "Bhubaneswar, India",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ],
    achievements: [
      "Completed NPTEL Certification in Industry 4.0 & Industrial IoT",
      "Attended Cyber Security Workshop (Cisco Academy, 40 Hours)",
      "Participated in Cloud Computing Workshop (IIG Varsity, BBSR)"
    ]
  },
  {
    school: "Kendriya Vidyalaya No.2, IOC Barauni",
    degree: "Intermediate (Class 12, Science Stream)",
    start: "2018",
    end: "2020",
    cgpa: "72.33%",
    location: "Barauni, Bihar",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science"
    ],
    achievements: []
  },
  {
    school: "Kendriya Vidyalaya No.2, IOC Barauni",
    degree: "Matriculation (Class 10)",
    start: "2016",
    end: "2018",
    cgpa: "64.4%",
    location: "Barauni, Bihar",
    coursework: [
      "Science",
      "Mathematics",
      "English",
      "Hindi"
    ],
    achievements: []
  }
]


export const projects = [
  {
    title: "E-Commerce Website",
    slug: "ecommerce-website",
    summary: "A fully functional online shopping platform built using the MERN stack with product catalog, cart, and checkout features.",
    featured: true,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    links: {
      demo: "", // Add live demo link if hosted
      github: "" // Add GitHub repo if available
    },
    images: "/projects/ecommerce.png",
    details: {
      problem: "Small businesses needed a digital platform to sell their products online.",
      solution: "Developed a responsive e-commerce site with secure authentication, product management, and order tracking.",
      features: [
        "Product browsing and search",
        "Add to cart & checkout system",
        "User authentication & profile",
        "Admin dashboard for inventory"
      ],
      challenges: [
        "Integrating frontend and backend seamlessly",
        "Ensuring secure user authentication"
      ],
      learnings: [
        "Hands-on MERN stack development",
        "State management in React"
      ]
    }
  },
  {
    title: "Book Management System",
    slug: "book-Management",
    summary: "An AI-powered system that suggests books based on user preferences using collaborative filtering.",
    featured: true,
    tech: ["Python", "React.js", "Node.js", "MongoDB"],
    links: {
      demo: "",
      github: ""
    },
    images: "/projects/book.png",
    details: {
      problem: "Readers struggle to find new books matching their interests.",
      solution: "Built a recommendation engine with machine learning and integrated it into a MERN-based library system.",
      features: [
        "Personalized book suggestions",
        "User preference tracking",
        "Library catalog integration"
      ],
      challenges: ["Implementing collaborative filtering"],
      learnings: ["Combining ML with web applications"]
    }
  },
  {
    title: "Smart Inventory Management System",
    slug: "inventory-management",
    summary: "Warehouse management system with stock tracking, supplier orders, and low-inventory alerts.",
    featured: false,
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    links: {
      demo: "",
      github: ""
    },
    images: ["/projects/event.png"],
    details: {
      problem: "Businesses faced issues with stock mismanagement.",
      solution: "Created an automated system with role-based access and stock alerts.",
      features: [
        "Real-time inventory tracking",
        "Supplier management",
        "Auto-alerts for low stock"
      ],
      challenges: ["Managing relational data efficiently"],
      learnings: ["MySQL integration with Node.js"]
    }
  },
  {
    title: "Blinkit Web App",
    slug: "E-commerce",
    summary: "An online grocery e-commerce platform inspired by Blinkit, offering smooth product browsing and order management.",
    featured: false,
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      demo: "",
      github: ""
    },
    images: ["/projects/blinkit.png"],
    details: {
      problem: "Need for a fast and convenient online grocery shopping experience.",
      solution: "Developed a Blinkit-like web app with product catalog, cart, and order tracking.",
      features: ["User-friendly UI", "Cart & checkout system", "Order tracking"],
      learnings: ["Full-stack development with MERN"]
    }
  },
  {
    title: "Funding Web App",
    slug: "smart-dustbin",
    summary: "A crowdfunding web app enabling users to raise and support projects through secure transactions.",
    featured: false,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      demo: "",
      github: ""
    },
    images: ["/projects/funding.png"],
    details: {
      problem: "Lack of accessible platforms for individuals to raise funds for causes.",
      solution: "Built a web app for transparent project funding and donor engagement.",
      features: ["User project creation", "Secure payment integration", "Donor tracking"],
      learnings: ["Payment gateway integration", "Database handling in MERN stack"]
    }
  },
  {
    title: "Weather App",
    slug: "bank-management",
    summary: "A weather forecasting web app that provides real-time weather details using API integration.",
    featured: false,
    tech: ["React", "OpenWeather API"],
    links: {
      demo: "",
      github: ""
    },
    images: ["/projects/weather.png"],
    details: {
      problem: "People need accurate and quick access to local weather updates.",
      solution: "Developed a web app to fetch and display real-time weather data.",
      features: ["Live weather updates", "Search by city", "Clean UI"],
      learnings: ["API integration", "React hooks and state management"]
    }
  }
]

export const certificates = [
  {
    name: "Introduction to Industry 4.0 and Industrial Internet of Things",
    organization: "NPTEL",
    year: "2023",
    link: "/certificates/nptel-industry4.0.pdf",
    badge: "/badges/nptel.png"
  },
  {
    name: "Cyber Security (40 Hours)",
    organization: "Cisco Networking Academy",
    year: "2023",
    link: "/certificates/cisco-cybersecurity.pdf",
    badge: "/badges/cisco.png"
  },
  {
    name: "Cloud Computing Workshop",
    organization: "IIG Varsity, Bhubaneswar",
    year: "2022",
    link: "/certificates/cloud-computing.pdf",
    badge: "/badges/cloud.png"
  },
  {
    name: "IoT Camera Installation Workshop",
    organization: "GIFT Autonomous, Bhubaneswar",
    year: "2022",
    link: "/certificates/iot-camera.pdf",
    badge: "/badges/iot.png"
  }
]



export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Startup Inc.",
    quote: "Ankit consistently delivered high-quality code and showed great problem-solving skills during his internship. His attention to detail and collaborative spirit made him a valuable team member.",
    avatar: "/testimonials/sarah.jpg",
    rating: 5
  },
  {
    name: "Raj Patel",
    role: "Senior Developer",
    company: "Freelance Client",
    quote: "Working with Ankit was a fantastic experience. He understood our requirements perfectly and delivered a solution that exceeded our expectations. Highly recommend!",
    avatar: "/testimonials/raj.jpg",
    rating: 5
  }
]

export const about = {
  story: "I am a dedicated and enthusiastic software developer with a strong foundation in web technologies and problem-solving. My journey started in college, where I discovered my passion for coding and building digital solutions that create real-world impact. I enjoy learning new tools, exploring modern frameworks, and working on projects that challenge me to grow as a full-stack developer.",

  strengths: [
    "Strong problem-solving mindset",
    "Quick and adaptive learner",
    "Effective team collaboration",
    "Attention to detail",
    "User-focused development approach"
  ],

  interests: [
    "Exploring open-source contributions",
    "Attending tech workshops & meetups",
    "Playing chess",
    "Traveling and photography",
    "Learning about new technologies"
  ],

  currentlyLearning: ["GraphQL", "Docker", "System Design", "Cloud Architecture"]
}


export const stats = {
  github: {
    repos: 25,
    stars: 150,
    contributions: 500
  },
  leetcode: {
    solved: 200,
    ranking: "Top 15%"
  },
  experience: {
    projects: 8,
    clients: 5,
    experience: "1+ years"
  }
}