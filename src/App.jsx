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
  Sparkles,
  Star,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-8 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl z-50 border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              <Sparkles className="inline-block w-6 h-6 mr-2 text-cyan-400" />
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
                  className={`relative text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400 shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/20">
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
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 w-full text-left rounded-lg transition-all duration-300"
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
        className="min-h-screen flex items-center justify-center pt-16 relative"
      >
        <div className="text-center px-4 relative z-10">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl animate-float relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-spin-slow opacity-75 blur-sm"></div>
              <Code size={80} className="text-white relative z-10" />
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 animate-fade-in">
              Femil Sabhaya
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 mb-4 font-semibold">
              React Native & React.js Developer
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dynamic and detail-oriented developer with 3+ years of experience
              in building robust mobile and web applications
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-cyan-400" />
                <span>Surat, Gujarat</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Phone size={18} className="text-green-400" />
                <span>+91-9726009509</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
              >
                Get In Touch
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center space-x-2"
                onClick={handleDownload}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
          <ChevronDown
            className="mx-auto text-white animate-bounce cursor-pointer hover:text-cyan-400 transition-colors duration-300"
            size={40}
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
                <Star className="mr-3" size={28} />
                Professional Profile
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I'm a passionate React Native and ReactJS Developer with 3 years
                of extensive experience in building robust mobile and web
                applications. I have a proven ability to deliver high-quality
                software solutions and enhance user experience through efficient
                coding practices.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I excel at collaborating with cross-functional teams to drive
                project success while maintaining a keen focus on client
                requirements and technical specifications. My expertise spans
                across mobile app development, web applications, and API
                integrations.
              </p>

              <h4 className="text-2xl font-bold text-purple-400 mb-6">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "JavaScript",
                  "ReactJS",
                  "React Native",
                  "Frontend Development",
                  "API Integration",
                  "Mobile App Development",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl border border-cyan-400/30"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-purple-400 mb-8 flex items-center">
                <Sparkles className="mr-3" size={28} />
                Education
              </h3>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                  <div className="pl-8">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Bachelor of Computer Applications
                    </h4>
                    <p className="text-cyan-400 font-semibold">
                      S.V. Patel College
                    </p>
                    <p className="text-gray-400">2017 - 2020</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                  <div className="pl-8">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Higher Secondary Certificate
                    </h4>
                    <p className="text-purple-400 font-semibold">
                      Tapovan Vidhyalay
                    </p>
                    <p className="text-gray-400">2014</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-2xl font-bold text-cyan-400 mb-6">
                  Languages
                </h4>
                <div className="space-y-4">
                  {[
                    { lang: "English", level: "Intermediate", color: "cyan" },
                    { lang: "Hindi", level: "Fluent", color: "green" },
                    { lang: "Gujarati", level: "Fluent", color: "green" },
                  ].map(({ lang, level, color }) => (
                    <div
                      key={lang}
                      className="flex justify-between items-center bg-white/10 p-3 rounded-xl"
                    >
                      <span className="text-gray-200 font-medium">{lang}</span>
                      <span
                        className={`text-${color}-400 font-semibold px-3 py-1 bg-${color}-400/20 rounded-full`}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/30 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center mb-16">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 text-xl font-semibold">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-gray-300 text-lg">{exp.period}</p>
                    <p className="text-purple-400 font-bold text-lg">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-200 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/50 hover:scale-110 transition-transform duration-300"
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
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-center mb-16">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frontend",
                icon: Globe,
                color: "cyan",
                skills: skills.frontend,
              },
              {
                title: "Mobile",
                icon: Smartphone,
                color: "purple",
                skills: skills.mobile,
              },
              {
                title: "Backend",
                icon: Code,
                color: "green",
                skills: skills.backend,
              },
              {
                title: "Tools",
                icon: ExternalLink,
                color: "yellow",
                skills: skills.tools,
              },
            ].map(({ title, icon: Icon, color, skills: skillList }) => (
              <div
                key={title}
                className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:border-${color}-400/50 hover:shadow-${color}-500/20 transition-all duration-500 transform hover:scale-105`}
              >
                <div className="flex items-center mb-6">
                  <Icon className={`text-${color}-400 mr-3`} size={32} />
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className={`text-gray-200 bg-${color}-400/20 p-3 rounded-xl border border-${color}-400/30 font-medium hover:bg-${color}-400/30 transition-all duration-300`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/30 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-110"
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.type === "React Native"
                          ? "bg-cyan-500/30 text-cyan-200 border border-cyan-400/50"
                          : "bg-purple-500/30 text-purple-200 border border-purple-400/50"
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
                      <Smartphone size={18} className="text-cyan-400" />
                    ) : (
                      <Globe size={18} className="text-purple-400" />
                    )}
                    <span className="text-gray-400 text-sm font-medium">
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
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on your next project? Let's build something
            amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "femilsabhaya166@gmail.com",
                href: "mailto:femilsabhaya166@gmail.com",
                color: "cyan",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91-9726009509",
                href: "tel:+919726009509",
                color: "green",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Surat, Gujarat, India",
                href: null,
                color: "purple",
              },
            ].map(({ icon: Icon, title, value, href, color }) => (
              <div
                key={title}
                className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:border-${color}-400/50 hover:shadow-${color}-500/20 transition-all duration-500 transform hover:scale-105`}
              >
                <Icon className={`text-${color}-400 mx-auto mb-4`} size={40} />
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                {href ? (
                  <a
                    href={href}
                    className={`text-gray-300 hover:text-${color}-400 transition-colors duration-300 font-medium`}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-300 font-medium">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Whether you have a project in mind, need consultation, or just
              want to say hello, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:femilsabhaya166@gmail.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              <a
                href="tel:+919726009509"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/50 border-t border-white/20 backdrop-blur-xl relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-gray-400 text-lg">
            © 2025 Femil Sabhaya. Built with React.js and passion for great user
            experiences.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
