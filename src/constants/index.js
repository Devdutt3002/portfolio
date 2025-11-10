import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate Web Developer and AI/ML enthusiast with a strong foundation in modern front-end technologies like HTML5, CSS3, JavaScript, React.js, and Tailwind CSS, along with hands-on experience in Python, Machine Learning, and data-driven problem solving. I love building clean, responsive, and user-focused web applications while also exploring how artificial intelligence and automation can enhance digital experiences. My goal is to create smart, scalable, and impactful solutions by combining the power of intuitive design with intelligent systems.`;

export const ABOUT_TEXT = `I am a passionate Web Developer and AI/ML enthusiast with a strong foundation in modern front-end technologies such as HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and Material UI, paired with back-end knowledge in Firebase and Python. I focus on building seamless, user-friendly interfaces while also developing intelligent and data-driven solutions using Machine Learning. With a commitment to creating high-quality and impactful digital experiences, I aim to merge intuitive design with smart automation to solve real-world problems. My goal is to leverage both web technologies and AI to build scalable, efficient, and future-ready products that deliver value and leave a lasting impact on users.`;



export const PROJECTS = [
  {
    title: "Car Rental System (CRS)",
    image: project1,
    description:
      "The platform allows users to create accounts, browse available cars, make reservations, and manage their bookings with ease.The admin panel provides comprehensive control over vehicle management, locations, and user interactions.",
    technologies: ["React.js", "Node.js", "Firebase"],
    ViewLink: 'https://rent-car-livid.vercel.app/',
    githubLink: 'https://github.com/Devdutt3002/rent-car',
  },
  {
    title: "Flipkart Reccomendation System",
    image: project2,
    description:
      "Flipkart Reccomendation System is an intelligent AI-powered chatbot using Retrieval-Augmented Generation (RAG) architecture that provides personalized product recommendations and answers customer queries based on Flipkart product reviews and data.",
    technologies: ["Python"," Groq", "Astra DB", "Bootstrap", "jQuery"],
    ViewLink: 'https://flipkart-recommendationsystem-production.up.railway.app/',
    githubLink: 'https://github.com/Devdutt3002/flipkart-recommendation_system',
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    ViewLink: '',
    githubLink: 'https://github.com/Devdutt3002/portfolio',
  },
  
];

export const CONTACT = {
  address: "Dombivli, Thane ",
  phoneNo: "+91 9324616366 ",
  email: "devduttk30@gmail.com",
};
