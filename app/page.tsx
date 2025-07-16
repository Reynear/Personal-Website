"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Code,
  GraduationCap,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react"

function PortfolioContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Academic Management System",
      description:
        "A comprehensive system for managing student records and academic performance built with Java and MySQL.",
      technologies: ["Java", "MySQL", "JavaFX"],
      status: "In Progress",
      repo: "#" // No repo provided
    },
    {
      title: "Circuit Simulator",
      description:
        "Digital circuit simulation tool for educational purposes, featuring logic gates and timing analysis.",
      technologies: ["Python", "Tkinter", "Digital Logic"],
      status: "In Progress",
      repo: "https://github.com/Reynear/Circuit-Simulator"
    },
    {
      title: "Data Structures Visualizer",
      description: "Interactive web application to visualize common data structures and algorithms for learning.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      status: "In Progress",
      repo: "#" // No repo provided
    },
    {
      title: "PyQt Preview",
      description: "Python project using the PyQt framework that provides tools, utilities, or examples for previewing and demonstrating graphical user interface (GUI) components, layouts, and features in PyQt applications.",
      technologies: ["Python","Pyqt"],
      status: "Completed",
      repo: "https://github.com/Reynear/pyqt-preview"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800 dark:text-white">Reynear Douglas</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "about", label: "About", icon: GraduationCap },
                { id: "projects", label: "Projects", icon: Code },
                { id: "skills", label: "Skills", icon: Briefcase },
                { id: "contact", label: "Contact", icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "text-blue-600 bg-blue-50 dark:bg-blue-900/50 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "about", label: "About", icon: GraduationCap },
                { id: "projects", label: "Projects", icon: Code },
                { id: "skills", label: "Skills", icon: Briefcase },
                { id: "contact", label: "Contact", icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "text-blue-600 bg-blue-50 dark:bg-blue-900/50 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                    Reynear Douglas
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                  Computer Science Student at UWI
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                  Passionate about technology, software development, and digital innovation. Currently pursuing my
                  degree while building practical solutions and expanding my technical expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-3 text-lg bg-transparent"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/reynear-douglas-4a29a7248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Reynear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 p-1">
                  <img
                    src="/picture.png"
                    alt="Reynear Douglas"
                    className="w-full h-full rounded-full object-cover bg-white dark:bg-slate-800"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Learn more about my educational journey and aspirations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-slate-800 dark:text-white">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-white">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">University of the West Indies</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Current Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600 dark:border-l-green-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-slate-800 dark:text-white">
                    <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Academic Interests</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Software Engineering & Development</li>
                    <li>• Digital Circuit Design</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• Web & Mobile Development</li>
                    <li>• Database Management Systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  As a dedicated Computer Science student at the University of the West Indies, I am passionate about
                  leveraging technology to solve real-world problems and create innovative solutions.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  My academic journey has provided me with a strong foundation in programming languages, software
                  development methodologies, and computer systems design. I am particularly interested in the
                  intersection of software engineering and digital innovation.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Beyond academics, I am committed to continuous learning and staying current with emerging
                  technologies. I believe in the power of collaboration and am always eager to contribute to meaningful
                  projects that make a positive impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Year of Study</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A showcase of my academic and personal programming projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-600 dark:group-hover:border-blue-400 bg-transparent border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 border rounded-md px-4 py-2 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-slate-300 mb-4">More projects coming soon!</p>
            <Button
              variant="outline"
              className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-600 dark:border-l-blue-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 dark:border-l-green-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "HTMX", "Django"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600 dark:border-l-purple-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Hardware & Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Circuit Design", "Digital Logic", "Embedded Systems"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600 dark:border-l-orange-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["SQLite", "Git/GitHub", "PostgreSQL"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600 dark:border-l-red-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Software Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Software Architecture", "Software Design"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-600 dark:border-l-indigo-400 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 dark:text-white">Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Mobile Development", "Web Development", "Version Control"].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Let's Connect</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  Whether you're interested in collaboration, have questions about my work, or just want to connect, I'd
                  love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">Email</h4>
                    <p className="text-slate-600 dark:text-slate-300">douglasreynear@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/reynear-douglas-4a29a7248/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300">Jamaica</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Let's collaborate!"
                      className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell me about your project or just say hello!"
                      className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Reynear Douglas</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-6">Computer Science Student at UWI</p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/reynear-douglas-4a29a7248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <div className="border-t border-slate-700 dark:border-slate-600 pt-8">
              <p className="text-slate-400 dark:text-slate-500">© 2024 Reynear Douglas. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <PortfolioContent />
    </ThemeProvider>
  )
}
