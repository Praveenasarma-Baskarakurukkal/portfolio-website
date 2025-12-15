import Container from "@/components/Container";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Github, Linkedin, Phone, MapPin, Award, Star, BookOpen, Database, Trophy, Users } from "lucide-react";
import styles from "@/styles/Home.module.css";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import img1 from "@/images/1.jpg";
import img2 from "@/images/2.jpg";
import img3 from "@/images/3.jpg";
import img4 from "@/images/4.jpeg";
import Autoplay from 'embla-carousel-autoplay';

const heroImages = [img1, img2, img3, img4];

const skillBadges = {
  languages: [
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "Java" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "Python" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "C++" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "JavaScript" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "TypeScript" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "SQL" },
  ],
  frameworks: [
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Spring Boot" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "React" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Flutter" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "HTML" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "CSS" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Bootstrap" },
  ],
  databases: [
    { icon: <Database className="w-4 h-4 mr-1" />, label: "MySQL" },
    { icon: <Database className="w-4 h-4 mr-1" />, label: "PostgreSQL" },
  ],
  concepts: [
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "OOP" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "DSA" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "Digital Design" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "Image Processing" },
    { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "NLP" },
  ],
  devops: [
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Git" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Docker" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "JIRA" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Maven" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Postman" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Swagger" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Linux" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "IntelliJ IDEA" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "VS Code" },
  ],
  testing: [
    { icon: <Users className="w-4 h-4 mr-1" />, label: "Playwright" },
    { icon: <Users className="w-4 h-4 mr-1" />, label: "JUnit" },
  ],
  ai: [
    { icon: <Star className="w-4 h-4 mr-1" />, label: "Gemini" },
    { icon: <Star className="w-4 h-4 mr-1" />, label: "ChatGPT" },
    { icon: <Star className="w-4 h-4 mr-1" />, label: "Cursor" },
  ],
};

const certBadges = [
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Fundamentals of Deep Learning (NVIDIA)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Software Architecture Foundations (LinkedIn)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Programming for Beginners (American Corner)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Makerspace (American Corner)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Python for Beginners (UoM)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Business English (American Corner)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Basic 3D Design and Animation (Distinction)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "CyberZee'23 quiz competition (UoK)" },
];

const achievementBadges = [
  { icon: <Trophy className="w-4 h-4 mr-1 text-yellow-400" />, label: "Dean's List - Semester 1 (SGPA 3.85/4.0)" },
  { icon: <Trophy className="w-4 h-4 mr-1 text-yellow-400" />, label: "Dean's List - Semester 6 (SGPA 4.00/4.0)" },
  { icon: <Trophy className="w-4 h-4 mr-1 text-yellow-400" />, label: "First Place - Open Category Mobile Photography (Paws Click 2024)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Certificate of Excellence - 2nd Place (MIND Mentoring Program)" },
  { icon: <Star className="w-4 h-4 mr-1 text-yellow-400" />, label: "MAHAPOLA Scholarship Recipient" },
  { icon: <Star className="w-4 h-4 mr-1 text-yellow-400" />, label: "BOC NANAJAYA Scholarship (Best Performance in A/L)" },
  { icon: <Star className="w-4 h-4 mr-1 text-yellow-400" />, label: "Jinnah Scholarship (Best Performance in A/L)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Communication & Presentation Skills (SLASSCOM)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Amplifier21 Leadership Program (AIESEC)" },
];

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-8">
        <motion.div
          className={styles.intro + " flex-1"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient clash-grotesk">
            Praveenasarma Baskarakurukkal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Impact-Driven Final Year Undergraduate specializing in Backend Systems and Applied AI Research. 
            I deliver innovative solutions driven by a passion for continuous learning. 
            Known for proactive leadership and a powerful "figure-it-out" mindset.
            <br /><br />
            Actively seeking a software engineering role to accelerate growth within a dynamic team.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://github.com/Praveenasarma-Baskarakurukkal" target="_blank" rel="noopener noreferrer" className={styles.pill}>
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/praveenasarma/" target="_blank" rel="noopener noreferrer" className={styles.pill}>
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
            <a href="mailto:baskarakurukkal.21@cse.mrt.ac.lk" className={styles.pill}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
            <span className={styles.pill}>
              <Phone className="h-4 w-4 mr-2" />
              +94760595738
            </span>
            <span className={styles.pill}>
              <MapPin className="h-4 w-4 mr-2" />
              Jaffna, Sri Lanka
            </span>
          </div>
        </motion.div>
        <div className="flex-1 w-full max-w-md">
          <Carousel className="w-full" plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent>
              {heroImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`Hero image ${idx + 1}`}
                    className="rounded-2xl object-cover"
                    width={400}
                    height={400}
                    priority={idx === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
        <motion.div
          className={styles.scroll + " md:hidden"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ChevronDown className="h-4 w-4 animate-bounce" />
          <span>Scroll down</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Impact-Driven Final Year Undergraduate specializing in Backend Systems and Applied AI Research. 
            I deliver innovative solutions driven by a passion for continuous learning. Known for proactive 
            leadership and a powerful "figure-it-out" mindset. Actively seeking a software engineering role 
            to accelerate growth within a dynamic team.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-white/5 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-xl text-primary mb-2">BSc (Hons) in Computer Science and Engineering</h4>
                <p className="text-muted-foreground mb-1">University of Moratuwa, Sri Lanka</p>
                <p className="text-sm text-muted-foreground mb-2">2022 – Present</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">CGPA: 3.5358/4.0</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold">Dean's List (Sem 1 & 6)</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <span className="font-semibold">Relevant Coursework:</span> Database Systems, Data Structures and Algorithms, 
                  Professional Portfolio, Data Communication and Networking, Program Construction
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-lg">J/ Jaffna Hindu College</h4>
                <p className="text-muted-foreground mb-2">2012 – 2020</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-semibold">G.C.E. Advanced Level:</span> Z-Score: 2.4175 | District Rank: 12 | Island Rank: 240</p>
                  <p><span className="font-semibold">G.C.E. Ordinary Level:</span> 9A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Experience</h2>
        <div className="space-y-8">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Software Engineering Intern</h3>
            <p className="text-muted-foreground mb-1">GTN Technologies (Pvt) Ltd, Colombo, Sri Lanka</p>
            <p className="text-sm text-muted-foreground mb-4">Dec 2024 – Jun 2025</p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Developed an Event Planning System using Java; later migrated it to Spring Boot with PostgreSQL</li>
              <li>Automated API testing with Playwright for validation, pagination, permissions, and error handling</li>
              <li>Created Mermaid.js diagrams to visualize architecture and improve system understanding</li>
              <li>Implemented validations for a monitoring application and analyzed execution time</li>
              <li>Performed peer testing and verifying expected outputs of system components</li>
            </ul>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Mentee – MIND Mentoring Program</h3>
            <p className="text-muted-foreground mb-1">The Corridors Academy</p>
            <p className="text-sm text-muted-foreground mb-4">Jan 2025 – Jun 2025</p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Completed a 6-month mentoring program focused on personal branding, communication, and leadership</li>
              <li>Awarded Certificate of Excellence and secured 2nd Place in the final cohort evaluation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="my-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Projects</h2>
        
        {/* Academic Research */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Academic Research Collaboration
          </h3>
        </div>
        <div className="mb-12">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-primary/30`}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Semantic Similarity & Uncertainty Quantification</h3>
            </div>
            <p className="text-sm text-yellow-400 font-semibold mb-2">Collaboration with University of Miami</p>
            <p className="text-xs text-muted-foreground mb-3">May 2025 - Ongoing</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><BookOpen className="w-4 h-4 mr-1" />Python</span>
            </div>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground text-sm">
              <li>Refined the semantic entropy pipeline for confabulation detection by integrating a finetuned embedding-based similarity technique to enhance accuracy</li>
              <li>Applied noise perturbation for system stability assessment and implemented Silhouette Score for clustering accuracy</li>
            </ul>
          </div>
        </div>

        {/* Independent Projects */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Independent Projects
          </h3>
        </div>
        <div className="mb-12">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-primary/20`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />UniBridge LK - Mobile Application</h3>
            <p className="text-sm text-yellow-400 font-semibold mb-3">Ongoing | Nov 2025 - Present</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />Flutter</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />Firebase</span>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Developing a mobile app to connect Sri Lankan students with the university community (Self-initiated with a peer).
            </p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground text-sm">
              <li>Implementing User Profile, Courses directory, Forum threads, and Events list</li>
              <li>Using serverless backend architecture with Firebase</li>
            </ul>
          </div>
        </div>

        {/* Other Academic Projects */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Other Academic Projects
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Smart Parking System – ParkEase</h3>
            <p className="text-xs text-muted-foreground mb-3">May 2025 - Jun 2025</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />React</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MySQL</span>
            </div>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground text-sm">
              <li>Developed key modules including admin/security dashboards, booking history, and report generation</li>
              <li>Implemented validations, real-time report logic, and database design</li>
            </ul>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Research Data Collection Platform</h3>
            <p className="text-sm text-muted-foreground mb-3">React, Tailwind CSS, NestJS, MongoDB</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />React</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />Tailwind</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />NestJS</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MongoDB</span>
            </div>
            <p className="text-muted-foreground">
              Developed customizable research data collection, supporting various data types (text, images, audio, video) 
              with offline functionality. Implemented frontend for password recovery, form responses, and data visualization 
              dashboards. Integrated NestJS with MongoDB to improve frontend performance.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Airline Reservation System</h3>
            <p className="text-xs text-muted-foreground mb-3">Sep 2023 - Nov 2023</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />React</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MySQL</span>
            </div>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground text-sm">
              <li>Developed a MySQL-based database for Airline System, handling flight scheduling, bookings, and passenger management</li>
              <li>Implemented dynamic seat selection, passenger categorization, and ensured data integrity by adhering to ACID properties</li>
            </ul>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />RPal interpreter</h3>
            <p className="text-sm text-muted-foreground mb-3">Java</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><BookOpen className="w-4 h-4 mr-1" />Java</span>
            </div>
            <p className="text-muted-foreground">
              Developed an interpreter for the functional programming language RPAL, incorporating a lexical analyzer, parser, 
              and CSE machine. The interpreter was designed to execute RPAL programs by constructing an abstract syntax tree (AST), 
              standardizing the AST, and evaluating it to produce the correct output.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Nano-processor design</h3>
            <p className="text-sm text-muted-foreground mb-3">VHDL, Xilinx Vivado</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />VHDL</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />Xilinx Vivado</span>
            </div>
            <p className="text-muted-foreground">
              Designed a 4-bit Nano-processor in Vivado software with components such as 4-bit Add/Subtract unit, a 3-bit adder, 
              a 3-bit Program Counter (PC), k-way b-bit multiplexers, a Register Bank, a Program ROM, an Instruction Decoder, 
              a 7-Segment Display, and a slow clock. Then implemented the design on a BASYS3 board.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="my-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Skills & Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-lg font-bold mb-3 flex items-center"><BookOpen className="w-5 h-5 mr-2 text-primary" />Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skillBadges.languages.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-lg font-bold mb-3 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Frameworks & Web</h3>
            <div className="flex flex-wrap gap-2">
              {skillBadges.frameworks.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-lg font-bold mb-3 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skillBadges.databases.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-lg font-bold mb-3 flex items-center"><BookOpen className="w-5 h-5 mr-2 text-primary" />Core Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {skillBadges.concepts.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-lg font-bold mb-3 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skillBadges.devops.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-lg font-bold mb-3 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Testing & AI</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {skillBadges.testing.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {skillBadges.ai.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Achievements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {achievementBadges.map((badge, idx) => (
            <div key={idx} className={`${styles["project-card"]} !p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-start gap-3`}>
              <div className="text-primary flex-shrink-0">{badge.icon}</div>
              <div className="text-sm">{badge.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Professional Certificates</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {certBadges.map((badge, idx) => (
            <div key={idx} className={`${styles["project-card"]} !p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-start gap-3`}>
              <div className="text-primary flex-shrink-0">{badge.icon}</div>
              <div className="text-sm">{badge.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-20 max-w-4xl mx-auto">
        <div className="rounded-lg bg-gradient-to-br from-primary/10 to-white/5 px-8 py-16 text-center shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-bold mb-4 text-gradient clash-grotesk">Let's Connect!</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Interested in collaborating, hiring, or just want to say hi? Fill out the form below or reach out via email or LinkedIn.
          </p>
          <form
            className="mx-auto max-w-xl flex flex-col gap-4"
            action="https://formsubmit.co/baskarakurukkal.21@cse.mrt.ac.lk"
            method="POST"
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-md border border-primary bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-md border border-primary bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="rounded-md border border-primary bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="mt-2 rounded-md bg-primary px-6 py-2 font-semibold text-white transition hover:bg-primary/80"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex flex-row justify-center gap-6">
            <a href="mailto:baskarakurukkal.21@cse.mrt.ac.lk" className="hover:text-primary transition">
              <Mail className="inline h-6 w-6" />
            </a>
            <a href="https://github.com/Praveenasarma-Baskarakurukkal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Github className="inline h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/praveenasarma/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Linkedin className="inline h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
