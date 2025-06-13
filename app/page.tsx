"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Facebook, MessageCircle,ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [selectedCompany, setSelectedCompany] = useState("current")
  const [isLoading, setIsLoading] = useState(true)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading animation

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isLoading])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-[#1a2332] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse">
              <Image src="/1.png" alt="Logo" width={200} height={200} className="mx-auto animate-bounce" />
            </div>
            <div className="mt-8">
              <div className="w-32 h-1 bg-red-500 mx-auto rounded-full overflow-hidden">
                <div className="w-full h-full bg-red-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a2332]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image src="/1.png" alt="Logo" width={48} height={48} className="object-contain" />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-red-500 hover:text-red-400 px-3 py-2 text-sm font-medium"
                >
                  <span className="text-red-500">01.</span> About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium"
                >
                  <span className="text-red-500">02.</span> Experience
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium"
                >
                  <span className="text-red-500">03.</span> Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium"
                >
                  <span className="text-red-500">04.</span> Contact
                </button>
                <button
                  type="button"
                  onClick={() => window.open("https://drive.google.com/file/d/1Tv1JJ56YYDoUaYNKP8rJWgi8oVFvJl4W/view?usp=drive_link", "_blank")}
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg rounded"
                >
                  Resume
                </button>

              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Social Links Sidebar */}
      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-6">
        <a href="https://github.com/Hussien-Aboelhagag" className="text-gray-400 hover:text-red-500 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/hussien-el-ziat/" className="text-gray-400 hover:text-red-500 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://www.facebook.com/mohamad.krrish.9/" className="text-gray-400 hover:text-red-500 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=201129888329&text&type=phone_number&app_absent=0" className="text-gray-400 hover:text-red-500 transition-colors">
          <MessageCircle size={20} />
        </a>
        <div className="w-px h-24 bg-gray-600"></div>
      </div>

      {/* Email Sidebar */}
      <div className="fixed right-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
        <a
          href="mailto:hussienaboelhagag49@gmail.com"
          className="text-gray-400 hover:text-red-500 transition-colors writing-mode-vertical text-sm tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          hussienaboelhagag49@gmail.com
        </a>
        <div className="w-px h-24 bg-gray-600 mt-6"></div>
      </div>

      {/* Hero Section */}
      <section
        className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${!isLoading ? "animate-fadeInUp" : ""}`}
      >
        <div className="max-w-4xl w-full">
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-300 ${!isLoading ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi<span className="text-red-500">,</span> I'm
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hussien Aboelhagag<span className="text-red-500">.</span>
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 mt-4">
                I ensure things don't break<span className="text-red-500">.</span>
              </h3>
            </div>
            <p
              className={`text-gray-400 text-lg max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ${!isLoading ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
            >
              I'm a results-driven <span className="text-white font-semibold">Software Developer in Test</span> and{" "}
              <span className="text-white font-semibold">Automation Engineer</span> based in Cairo, with 2+ years
              of experience building scalable applications, defining development strategies, and integrating modern
              technologies to drive innovation.
            </p>
            <div
              className={`transition-all duration-1000 delay-700 ${!isLoading ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.has("about") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 transition-all duration-1000 delay-200 ${visibleSections.has("about") ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
          >
            <span className="text-red-500 font-mono text-xl mr-4">01.</span>
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-gray-700 ml-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div
              className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-400 ${visibleSections.has("about") ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
            >
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Hussien, a results-driven{" "}
                <span className="text-white font-semibold">Software Developer in Test</span> and{" "}
                <span className="text-white font-semibold">Automation Engineer</span> based in Cairo, with over 2
                years of experience in software testing, automation, and AI validation.
              </p>

              <p className="text-gray-300 leading-relaxed">
                With hands-on experience in both manual and automated testing,
                I have worked across diverse domains including AI-based systems, performance testing, and web/mobile applications.
                I`ve contributed to projects involving Selenium, Java, Cucumber (BDD), as well as AI testing using Docker and Kubernetes, and performance testing tools like JMeter and k6.
                I`m also certified in ISTQB CTFL v4 and Mobile App Testing (CT-MAT).
              </p>

              <p className="text-gray-300 leading-relaxed">
                In Agile teams, I`ve taken ownership of writing and executing detailed test cases,
                designing automation frameworks from scratch, validating APIs using Postman and Rest Assured,
                and monitoring AI detection models through log analysis and scripted validations.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I'm passionate about leveraging data and metrics to continuously improve quality and enjoy tackling
                complex challenges in areas like Web Development, Mobile Applications, AI Models, and DevOps.
                I hold a Bachelor's in Mechatronics from <span className="text-red-500">Egyptian Chinese College</span> and
                am currently pursuing advanced certifications.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My interests span a broad range of topics like Software Development, Web Technologies, Mobile
                Development, DevOps, and Artificial Intelligence. I'm willing to learn
                new technologies, languages and skills, and looking forward to have new challenges.
              </p>

              <div className="mt-8">
                <p className="text-gray-300 mb-4">Here are a few tools/technologies I've been working with recently:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">JavaScript</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">TypeScript</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Java</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Selenium</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Playwright</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Python</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Cucumber</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">AI Agent</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">LLM-Evaluation Ragas</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Pytest</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Appium</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Rest Assured</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Docker</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Kubernetes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Git</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">JMeter</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">K6</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">▸</span>
                      <span className="text-gray-300">Postman</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-1 transition-all duration-1000 delay-600 ${visibleSections.has("about") ? "animate-slideInRight" : "opacity-0 translate-x-[50px]"}`}
            >
              <div className="relative">
                <div className="border-2 border-red-500 rounded-lg p-4">
                  <Image
                    src="/1749320904020.png"
                    alt="Profile"
                    width={250}
                    height={300}
                    className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.has("experience") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 transition-all duration-1000 delay-200 ${visibleSections.has("experience") ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
          >
            <span className="text-red-500 font-mono text-xl mr-4">02.</span>
            <h2 className="text-3xl font-bold">Where I've Worked</h2>
            <div className="flex-1 h-px bg-gray-700 ml-8"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div
              className={`lg:w-1/4 transition-all duration-1000 delay-400 ${visibleSections.has("experience") ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
            >
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCompany("current")}
                  className={`w-full text-left px-4 py-3 ${selectedCompany === "current"
                    ? "text-red-500 border-l-2 border-red-500 bg-red-500/10"
                    : "text-gray-400 hover:text-red-500 hover:bg-red-500/5"
                    }`}
                >
                  Edrak Software
                </button>
                <button
                  onClick={() => setSelectedCompany("previous")}
                  className={`w-full text-left px-4 py-3 ${selectedCompany === "previous"
                    ? "text-red-500 border-l-2 border-red-500 bg-red-500/10"
                    : "text-gray-400 hover:text-red-500 hover:bg-red-500/5"
                    }`}
                >
                  3i-vision
                </button>
                <button
                  onClick={() => setSelectedCompany("another")}
                  className={`w-full text-left px-4 py-3 ${selectedCompany === "another"
                    ? "text-red-500 border-l-2 border-red-500 bg-red-500/10"
                    : "text-gray-400 hover:text-red-500 hover:bg-red-500/5"
                    }`}
                >
                  Tatware
                </button>
              </div>
            </div>

            <div
              className={`lg:w-3/4 transition-all duration-1000 delay-600 ${visibleSections.has("experience") ? "animate-slideInRight" : "opacity-0 translate-x-[50px]"}`}
            >
              {selectedCompany === "current" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Automation Test Engineer <span className="text-red-500">@ Edrak software</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Jul 2025 - Present</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      As an Automation Tester, I was responsible for designing, developing, and executing automated test scripts
                      using Selenium WebDriver with Java and Cucumber (BDD framework).
                      Working within a cross-functional Agile team,
                      I collaborated closely with developers, and product owners, to ensure high-quality deliverables in every sprint.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Responsibilities/Achievements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Developed and maintained robust automation scripts for regression, smoke, and functional testing.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Implemented Cucumber with Gherkin syntax to support Behavior-Driven Development (BDD)
                            and enhance collaboration with non-technical stakeholders
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Maintained reusable test components to support scalable and maintainable automation.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedCompany === "previous" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">
                      AI Test Engineer <span className="text-red-500">@ 3i-vision</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Feb 2025 - Jul 2025</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      As an AI Test Engineer, I was involved in validating and verifying computer vision
                      and object detection systems in an Agile development environment. My role focused on ensuring the accuracy,
                      stability, and performance of AI models deployed in containerized environments using Docker and Kubernetes.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Responsibilities/Achievements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Tested AI-based computer vision models for object detection and recognition,
                            validating outputs against ground truth data.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Deployed and managed test environments using
                            Docker containers orchestrated with Kubernetes for scalable and consistent testing
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Verified model outputs across various scenarios and edge cases to ensure robust performance in real-world conditions.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedCompany === "another" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Junior Software Tester <span className="text-red-500">@ Tatware</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Jan 2024 - Jun 2024</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      As a Junior Manual Tester, I was responsible for executing test cases to ensure software quality and functionality.
                      I worked closely with QA team members, developers, and product owners to
                      understand requirements and identify defects early in the development cycle
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Responsibilities/Achievements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Test Planning & Execution: Designed and executed comprehensive test scenarios and detailed test cases within Azure DevOps,
                            ensuring complete coverage of functional and non-functional requirements.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Defect Management: Authored detailed, well-documented reports and effectively managed the bug lifecycle using Azure DevOps,
                            facilitating efficient resolution and continuous improvement.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-2">▸</span>
                          <span className="text-gray-300">
                            Project Involvement: Played a key role in testing the LPG Vending Machine project, ensuring software reliability and delivering a seamless user experience.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.has("work") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex items-center mb-12 transition-all duration-1000 delay-200 ${visibleSections.has("work") ? "animate-slideInLeft" : "opacity-0 translate-x-[-50px]"}`}
          >
            <span className="text-red-500 font-mono text-xl mr-4">03.</span>
            <h2 className="text-3xl font-bold">Some Things I've Built</h2>
            <div className="flex-1 h-px bg-gray-700 ml-8"></div>
          </div>

          <div className="space-y-32">
            {/* Project 1 - Automation Pipeline (Image Left, Text Right) */}
            <div
              className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-400 ${visibleSections.has("work") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/K6_CLOUD_stat.png?height=400&width=600"
                  alt="Automation Pipeline Diagram"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-red-500 font-mono text-sm text-right">Featured Project</p>
                <h3 className="text-2xl font-bold text-right">Performance Automation</h3>
                <div className="bg-[#2a3441] p-6 rounded-lg relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                     Evaluating the scalability, reliability, and speed of applications under varying workloads. 
                     I developed and executed performance test scripts using tools like JMeter and k6, 
                     integrating them into automated pipelines to ensure continuous performance validation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-300 justify-end">
                  <span>Jenkins</span>
                  <span>JMeter</span>
                  <span>K6</span>
                  <span>JavaScript</span>
                  <span>Spike</span>
                </div>
                <div className="flex gap-4 justify-end">
                  <a href="https://github.com/Hussien-Aboelhagag/DemoBlaze_K6.git" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.demoblaze.com/" className="text-gray-400 hover:text-red-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - E-Commerce Platform (Text Left, Image Right) */}
            <div
              className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-600 ${visibleSections.has("work") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
            >
              
              <div className="space-y-6">
                <p className="text-red-500 font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl font-bold">Automation Framework</h3>
                <div className="bg-[#2a3441] p-6 rounded-lg relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    A scalable Page Object Model Automation Framework with
                    features like HTML Report Generation with every Build, Tests
                    Parallel Run and Test Data Management more.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span>Java</span>
                  <span>JavaScript</span>
                  <span>Selenium</span>
                  <span>TestNG</span>
                  <span>Playwright</span>
                  <span>Allure</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/Hussien-Aboelhagag/Playwright_Project" className="text-gray-400 hover:text-red-500 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/Screenshot (19).png?height=400&width=600"
                  alt="Automation Framework"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Project 3 - Mobile App (Image Left, Text Right) */}
            <div
              className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-800 ${visibleSections.has("work") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/image.png?height=400&width=600"
                  alt="Mobile Application"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-red-500 font-mono text-sm text-right">Featured Project</p>
                <h3 className="text-2xl font-bold text-right">AI Evaluation</h3>
                <div className="bg-[#2a3441] p-6 rounded-lg relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                     I specialize in validating AI systems powered by Large Language Models (LLMs), 
                     including RAG-based architectures and conversational chatbots. My focus is on ensuring the reliability, 
                     accuracy, and ethical behavior of these intelligent systems under real-world usage scenarios.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-300 justify-end">
                  <span>AI Agent</span>
                  <span>Python</span>
                  <span>Pytest</span>
                  <span>RAG</span>
                  <span>AI Evaluation</span>
                </div>
                <div className="flex gap-4 justify-end">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.has("contact") ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${visibleSections.has("contact") ? "animate-slideInUp" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <span className="text-red-500 font-mono text-lg">04. What's Next?</span>
              <h2 className="text-4xl font-bold mt-4">Get In Touch</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <button
              type="button"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'mailto:hussienaboelhagag49@gmail.com'}
            >
              Say Hello
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Hussien Aboelhagag. All rights reserved.</p>
      </footer>
    </div>
  )
}
