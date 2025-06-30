import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Code,
  Smartphone,
  Globe,
  Download,
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      "React.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    mobile: ["React Native", "Flutter", "Dart", "Android Studio", "Xcode"],
    backend: ["REST APIs", "Firebase", "GraphQL", "Node.js"],
    tools: ["Git", "Figma", "Webpack", "Vite", "Jira", "Redux"],
  };

  const experiences = [
    {
      company: "CODERKUBE TECHNOLOGIES",
      period: "JUN 2023 - NOW",
      duration: "2 years",
      role: "React Native & React.js Developer",
      description:
        "Developed and maintained scalable, high-performance applications using React Native for mobile and React.js for web platforms.",
      tech: [
        "React Native",
        "React.js",
        "Redux",
        "JavaScript",
        "TypeScript",
        "Firebase",
      ],
    },
    {
      company: "RENOTECHNO",
      period: "JUN 2022 - NOV 2022",
      duration: "5 months",
      role: "React Native Developer",
      description:
        "Developed cross-platform mobile applications with Redux state management and API integrations.",
      tech: ["React Native", "Redux", "Context API", "Firebase", "REST APIs"],
    },
    {
      company: "QUAD SOFTECH",
      period: "JAN 2022 - JUN 2022",
      duration: "6 months",
      role: "Flutter Developer",
      description:
        "Built cross-platform mobile applications using Flutter and Dart with consistent UI/UX.",
      tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    },
    {
      company: "BEBRANDD IT SOLUTION PVT LTD",
      period: "DEC 2020 - JAN 2022",
      duration: "1 year",
      role: "React Native Developer",
      description:
        "Developed responsive mobile applications and collaborated with cross-functional teams.",
      tech: ["React Native", "Redux", "JavaScript", "TypeScript", "GraphQL"],
    },
  ];

  const projects = [
    {
      name: "Simply CRM",
      type: "React Native",
      description:
        "Customer relationship management app for mobile access and field sales teams.",
    },
    {
      name: "Spartan CRM",
      type: "React Native",
      description:
        "Advanced CRM solution with real-time notifications and lead tracking.",
    },
    {
      name: "BBrand Post Maker",
      type: "React Native",
      description:
        "Creative branding tool for designing custom promotional posts.",
    },
    {
      name: "ZerolyBudget",
      type: "React Native",
      description:
        "Personal finance app combining step tracking with budgeting rewards.",
    },
    {
      name: "Court Club",
      type: "React Native",
      description:
        "Ultimate app for streetball communities to connect players.",
    },
    {
      name: "Auto Help",
      type: "React.js",
      description:
        "Car assistance service platform with real-time location support.",
    },
    {
      name: "REG247 Admin",
      type: "React.js",
      description:
        "Business solutions platform for accounting, tax and compliance.",
    },
    {
      name: "Education App Admin",
      type: "React.js",
      description:
        "Learning management system with course tracking and content sharing.",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Femil_Sabhaya_Resume.pdf";
    link.download = "Femil_Sabhaya_Resume.pdf"; // Optional: specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Femil Sabhaya
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="text-center px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Code size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Femil Sabhaya
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-2">
              React Native & React.js Developer
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Dynamic and detail-oriented developer with 3+ years of experience
              in building robust mobile and web applications
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={18} />
                <span>Surat, Gujarat</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} />
                <span>+91-9726009509</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-200"
              >
                Get In Touch
              </button>
              <button
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center space-x-2"
                onClick={handleDownload}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
          <ChevronDown
            className="mx-auto text-white animate-bounce cursor-pointer"
            size={32}
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Professional Profile
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate React Native and ReactJS Developer with 3 years
                of extensive experience in building robust mobile and web
                applications. I have a proven ability to deliver high-quality
                software solutions and enhance user experience through efficient
                coding practices.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I excel at collaborating with cross-functional teams to drive
                project success while maintaining a keen focus on client
                requirements and technical specifications. My expertise spans
                across mobile app development, web applications, and API
                integrations.
              </p>

              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "JavaScript",
                  "ReactJS",
                  "React Native",
                  "Frontend Development",
                  "API Integration",
                  "Mobile App Development",
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">
                    Bachelor of Computer Applications
                  </h4>
                  <p className="text-blue-400">S.V. Patel College</p>
                  <p className="text-gray-400">2017 - 2020</p>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">
                    Higher Secondary Certificate
                  </h4>
                  <p className="text-purple-400">Tapovan Vidhyalay</p>
                  <p className="text-gray-400">2014</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">
                  Languages
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">English</span>
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Hindi</span>
                    <span className="text-green-400">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Gujarati</span>
                    <span className="text-green-400">Fluent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-blue-400 text-lg">{exp.role}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-300">{exp.period}</p>
                    <p className="text-purple-400 font-medium">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="space-y-2">
                {skills.frontend.map((skill) => (
                  <div key={skill} className="text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Smartphone className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Mobile</h3>
              </div>
              <div className="space-y-2">
                {skills.mobile.map((skill) => (
                  <div key={skill} className="text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="space-y-2">
                {skills.backend.map((skill) => (
                  <div key={skill} className="text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <ExternalLink className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill) => (
                  <div key={skill} className="text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.type === "React Native"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-green-500/20 text-green-300 border border-green-500/30"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {project.type === "React Native" ? (
                      <Smartphone size={16} className="text-blue-400" />
                    ) : (
                      <Globe size={16} className="text-green-400" />
                    )}
                    <span className="text-gray-400 text-sm">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on your next project? Let's build something
            amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:femilsabhaya166@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                femilsabhaya166@gmail.com
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Phone className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a
                href="tel:+919726009509"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                +91-9726009509
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-gray-300">Surat, Gujarat, India</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, need consultation, or just
              want to say hello, I'd love to hear from you.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:femilsabhaya166@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              <a
                href="tel:+919726009509"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Femil Sabhaya. Built with React.js and passion for great user
            experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
