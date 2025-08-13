"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Moon,
  Sun,
  Mail,
  Code,
  Trophy,
  Target,
  Zap,
  ExternalLink,
  Github,
  Brain,
  Users,
  Scale,
  Calendar,
  Award,
  GraduationCap,
  Star,
  Crown,
  Medal,
  Cloud,
  Linkedin,
  Send,
  MessageSquare,
  User,
  Home,
  Briefcase,
  Phone,
} from "lucide-react"

const skills = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400", level: 95 },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400", level: 90 },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-orange-400", level: 88 },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-500", level: 85 },
  { name: "Next.js", icon: "▲", color: "from-gray-400 to-slate-400", level: 92 },
  { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-400", level: 90 },
  { name: "AWS", icon: "☁️", color: "from-orange-400 to-red-400", level: 80 },
  { name: "Git", icon: "📝", color: "from-red-400 to-pink-400", level: 87 },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-purple-400", level: 82 },
]

const projects = [
  {
    id: 1,
    title: "NeighbourLink",
    subtitle: "Hyperlocal Resource Sharing Platform",
    description:
      "A community-driven platform that connects neighbors to share resources, tools, and services within their local area. Features real-time chat, resource booking, and location-based discovery.",
    icon: Users,
    color: "from-green-400 to-emerald-500",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    status: "Completed",
    year: "2024",
    github: "https://github.com/shramana/neighbourlink",
    demo: "https://neighbourlink-demo.vercel.app",
    features: ["Real-time messaging", "Geolocation services", "Resource booking system", "Community ratings"],
  },
  {
    id: 2,
    title: "BioCraft",
    subtitle: "AI-Powered Bio Generator",
    description:
      "An intelligent bio generator that creates personalized, engaging bios for social media and professional profiles using advanced AI. Supports multiple platforms and tones.",
    icon: Brain,
    color: "from-purple-400 to-pink-500",
    tech: ["Next.js", "Gemini API", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Completed",
    year: "2024",
    github: "https://github.com/shramana/biocraft",
    demo: "https://biocraft.vercel.app",
    features: ["Multi-platform optimization", "Tone customization", "AI-powered suggestions", "Export options"],
  },
  {
    id: 3,
    title: "LegalLink",
    subtitle: "AI Legal Assistant",
    description:
      "An AI-powered legal assistant that helps users understand legal documents, provides basic legal guidance, and connects them with appropriate legal resources and professionals.",
    icon: Scale,
    color: "from-blue-400 to-cyan-500",
    tech: ["Next.js", "LangChain", "OpenAI", "PostgreSQL", "Prisma"],
    status: "In Development",
    year: "2024",
    github: "https://github.com/shramana/legallink",
    demo: "https://legallink-beta.vercel.app",
    features: ["Document analysis", "Legal Q&A", "Lawyer directory", "Case tracking"],
  },
]

const achievements = [
  {
    id: 1,
    title: "NPTEL Programming Champion",
    subtitle: "Top Performer in Programming in Java",
    description:
      "Achieved top rank in NPTEL's Programming in Java course, demonstrating exceptional understanding of object-oriented programming concepts and Java fundamentals.",
    icon: Crown,
    color: "from-yellow-400 to-orange-500",
    category: "Academic Excellence",
    year: "2023",
    rarity: "Legendary",
    points: 1000,
  },
  {
    id: 2,
    title: "Hack4Bengal Winner",
    subtitle: "Champion of Regional Hackathon",
    description:
      "Led a team to victory at Hack4Bengal, one of the largest hackathons in Eastern India, by developing an innovative solution that impressed judges and participants.",
    icon: Trophy,
    color: "from-purple-400 to-pink-500",
    category: "Competition Victory",
    year: "2024",
    rarity: "Epic",
    points: 850,
  },
  {
    id: 3,
    title: "Python Certification Master",
    subtitle: "Advanced Python Programming",
    description:
      "Earned advanced certification in Python programming, showcasing proficiency in data structures, algorithms, and modern Python development practices.",
    icon: Medal,
    color: "from-green-400 to-emerald-500",
    category: "Professional Certification",
    year: "2023",
    rarity: "Rare",
    points: 600,
  },
  {
    id: 4,
    title: "Cloud Computing Expert",
    subtitle: "Cloud Architecture & Services",
    description:
      "Completed comprehensive certification in cloud computing, covering AWS services, cloud architecture patterns, and modern deployment strategies.",
    icon: Cloud,
    color: "from-blue-400 to-cyan-500",
    category: "Professional Certification",
    year: "2024",
    rarity: "Rare",
    points: 650,
  },
  {
    id: 5,
    title: "B.Tech Graduate",
    subtitle: "Electronics & Communication Engineering",
    description:
      "Graduated with Bachelor of Technology degree in Electronics & Communication Engineering from Techno Main Salt Lake, building a strong foundation in engineering principles.",
    icon: GraduationCap,
    color: "from-indigo-400 to-purple-500",
    category: "Education",
    year: "2024",
    rarity: "Milestone",
    points: 1200,
  },
]

export default function ShrammanaPortfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [unlockedSkills, setUnlockedSkills] = useState<Set<number>>(new Set())
  const [unlockedProjects, setUnlockedProjects] = useState<Set<number>>(new Set())
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<number>>(new Set())
  const [contactUnlocked, setContactUnlocked] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [totalXP, setTotalXP] = useState(0)
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const skillsXP = unlockedSkills.size * 100
    const projectsXP = unlockedProjects.size * 200
    const achievementsXP = achievements
      .filter((_, index) => unlockedAchievements.has(index))
      .reduce((sum, achievement) => sum + achievement.points, 0)
    const contactXP = contactUnlocked ? 500 : 0

    const newTotalXP = skillsXP + projectsXP + achievementsXP + contactXP
    const newLevel = Math.floor(newTotalXP / 1000) + 1

    if (newLevel > currentLevel && currentLevel > 1) {
      setShowLevelUp(true)
      setTimeout(() => setShowLevelUp(false), 3000)
      // Create celebration particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: ["#fbbf24", "#f59e0b", "#d97706", "#92400e"][Math.floor(Math.random() * 4)],
      }))
      setParticles(newParticles)
      setTimeout(() => setParticles([]), 2000)
    }

    setCurrentLevel(newLevel)
    setTotalXP(newTotalXP)
  }, [unlockedSkills.size, unlockedProjects.size, unlockedAchievements.size, contactUnlocked, currentLevel])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "skills") {
            // Unlock skills with staggered animation
            skills.forEach((_, index) => {
              setTimeout(() => {
                setUnlockedSkills((prev) => new Set([...prev, index]))
              }, index * 200)
            })
          }
          if (entry.isIntersecting && entry.target.id === "projects") {
            // Unlock projects with staggered animation
            projects.forEach((_, index) => {
              setTimeout(() => {
                setUnlockedProjects((prev) => new Set([...prev, index]))
              }, index * 300)
            })
          }
          if (entry.isIntersecting && entry.target.id === "achievements") {
            // Unlock achievements with staggered animation
            achievements.forEach((_, index) => {
              setTimeout(() => {
                setUnlockedAchievements((prev) => new Set([...prev, index]))
              }, index * 250)
            })
          }
          if (entry.isIntersecting && entry.target.id === "contact") {
            setTimeout(() => {
              setContactUnlocked(true)
            }, 300)
          }
        })
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills")
    const projectsSection = document.getElementById("projects")
    const achievementsSection = document.getElementById("achievements")
    const contactSection = document.getElementById("contact")
    if (skillsSection) observer.observe(skillsSection)
    if (projectsSection) observer.observe(projectsSection)
    if (achievementsSection) observer.observe(achievementsSection)
    if (contactSection) observer.observe(contactSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Check which sections are visible
      const sections = ["hero", "skills", "projects", "achievements", "contact"]
      const newVisibleSections = new Set<string>()

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            newVisibleSections.add(sectionId)
          }
        }
      })

      setVisibleSections(newVisibleSections)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "text-yellow-400 border-yellow-400/50 bg-yellow-400/10"
      case "Epic":
        return "text-purple-400 border-purple-400/50 bg-purple-400/10"
      case "Rare":
        return "text-blue-400 border-blue-400/50 bg-blue-400/10"
      case "Milestone":
        return "text-green-400 border-green-400/50 bg-green-400/10"
      default:
        return "text-slate-400 border-slate-400/50 bg-slate-400/10"
    }
  }

  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0)
  const earnedPoints = achievements
    .filter((_, index) => unlockedAchievements.has(index))
    .reduce((sum, achievement) => sum + achievement.points, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-xl p-3 space-y-2">
          <div className="text-xs text-slate-400 font-semibold mb-2 text-center">NAVIGATION</div>
          {[
            { id: "hero", icon: Home, label: "Start", color: "text-purple-400" },
            { id: "skills", icon: Zap, label: "Skills", color: "text-purple-400" },
            { id: "projects", icon: Briefcase, label: "Projects", color: "text-cyan-400" },
            { id: "achievements", icon: Trophy, label: "Achievements", color: "text-yellow-400" },
            { id: "contact", icon: Phone, label: "Contact", color: "text-red-400" },
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => scrollToSection(nav.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-200 hover:bg-slate-700/50 ${
                visibleSections.has(nav.id)
                  ? `${nav.color} bg-slate-700/30 border-l-2 border-current`
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <nav.icon className="w-3 h-3" />
              <span className="font-medium">{nav.label}</span>
              {visibleSections.has(nav.id) && <div className="w-1 h-1 bg-current rounded-full ml-auto animate-pulse" />}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed right-4 top-20 z-40">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-xl p-4 min-w-[200px]">
          <div className="text-center mb-3">
            <div className="text-2xl font-bold text-yellow-400">Level {currentLevel}</div>
            <div className="text-sm text-slate-400">Portfolio Completion</div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">XP</span>
              <span className="text-yellow-400 font-medium">{totalXP.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1000 ease-out"
                style={{ width: `${((totalXP % 1000) / 1000) * 100}%` }}
              />
            </div>
            <div className="text-xs text-slate-400 text-center">
              {1000 - (totalXP % 1000)} XP to Level {currentLevel + 1}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-600 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Skills</span>
              <span className="text-purple-400">
                {unlockedSkills.size}/{skills.length}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Projects</span>
              <span className="text-cyan-400">
                {unlockedProjects.size}/{projects.length}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Achievements</span>
              <span className="text-yellow-400">
                {unlockedAchievements.size}/{achievements.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showLevelUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl shadow-2xl animate-bounce">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">LEVEL UP!</div>
              <div className="text-lg">You reached Level {currentLevel}</div>
            </div>
          </div>
        </div>
      )}

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-40 animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            animationDuration: "1s",
          }}
        />
      ))}

      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-slate-800/80 border-slate-600 hover:bg-slate-700"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce" />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          {/* Additional floating particles */}
          <div
            className="absolute top-1/3 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-2/3 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Profile Image Placeholder */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-slate-900">
              <span className="text-xs font-bold text-white">{currentLevel}</span>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Shramana Show
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                <Target className="w-3 h-3 mr-1" />
                Full-Stack Software Engineer
              </Badge>
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                <Star className="w-3 h-3 mr-1" />
                {totalXP.toLocaleString()} XP
              </Badge>
            </div>
          </div>

          {/* Bio */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Passionate developer with expertise in <span className="text-purple-400 font-semibold">AI</span>,{" "}
              <span className="text-cyan-400 font-semibold">web apps</span>, and{" "}
              <span className="text-pink-400 font-semibold">hackathons</span>.{" "}
              <span className="text-yellow-400 font-semibold">NPTEL topper</span> and{" "}
              <span className="text-green-400 font-semibold">Hack4Bengal winner</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg font-semibold"
              onClick={() => scrollToSection("projects")}
            >
              <Trophy className="w-5 h-5 mr-2" />
              View Quests
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Mission
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-purple-500 rotate-45" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-500 rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-pink-500 -rotate-12" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">LEVEL UP SYSTEM</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills Unlocked
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Each skill represents countless hours of learning, building, and mastering the craft of software
              development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  unlockedSkills.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: unlockedSkills.has(index) ? "0ms" : `${index * 100}ms`,
                }}
              >
                {/* Unlock Animation Overlay */}
                {unlockedSkills.has(index) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl animate-pulse" />
                )}

                {/* Skill Content */}
                <div className="relative z-10">
                  {/* Skill Icon and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="text-sm text-slate-400">Level {skill.level}</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Mastery</span>
                      <span className="text-purple-300 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: unlockedSkills.has(index) ? `${skill.level}%` : "0%",
                          transitionDelay: unlockedSkills.has(index) ? `${index * 200 + 500}ms` : "0ms",
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover Effect Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />
                </div>

                {/* Lock/Unlock Indicator */}
                <div className="absolute top-4 right-4">
                  {unlockedSkills.has(index) ? (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-slate-400 rounded-sm" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-300">
                <span className="text-purple-400 font-bold">{unlockedSkills.size}</span> / {skills.length} Skills
                Unlocked
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-cyan-500 rotate-45" />
          <div className="absolute bottom-40 right-10 w-32 h-32 border border-purple-500 -rotate-12" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-pink-500 rotate-12" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">QUEST LOG</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects Quest
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Each project represents a unique challenge conquered, problems solved, and technologies mastered in the
              journey of software development.
            </p>
          </div>

          {/* Projects Timeline */}
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative mb-12 transition-all duration-700 ${
                  unlockedProjects.has(index)
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                      ? "opacity-0 -translate-x-8"
                      : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: unlockedProjects.has(index) ? `${index * 200}ms` : "0ms",
                }}
              >
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-600 to-slate-800" />

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 border-4 border-slate-900 z-10" />

                {/* Project Card */}
                <div className={`flex ${index % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"}`}>
                  <Card
                    className={`w-full max-w-md bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    }`}
                  >
                    {/* Unlock Animation Overlay */}
                    {unlockedProjects.has(index) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg animate-pulse" />
                    )}

                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4 mb-2">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${project.color} text-white border-0 text-xs`}
                            >
                              {project.status}
                            </Badge>
                            <div className="flex items-center gap-1 text-slate-400 text-sm">
                              <Calendar className="w-3 h-3" />
                              {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-cyan-400 font-medium">{project.subtitle}</CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-4">
                      <p className="text-slate-300 leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-slate-600 text-slate-300 hover:border-cyan-500/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Key Features</h4>
                        <div className="grid grid-cols-2 gap-1 text-sm">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-300">
                              <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-300 bg-transparent"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>

                    {/* Hover Effect Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Quest Summary */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
              <Target className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-300">
                <span className="text-cyan-400 font-bold">{unlockedProjects.size}</span> / {projects.length} Quests
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-36 h-36 border border-yellow-500 rotate-45" />
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-orange-500 -rotate-12" />
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-pink-500 rotate-12" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">MILESTONE SYSTEM</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Achievements Unlocked
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Major milestones and accomplishments that mark significant progress in the journey of continuous learning
              and professional growth.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{earnedPoints}</div>
                  <div className="text-sm text-slate-400">Points Earned</div>
                </div>
                <div className="w-px h-12 bg-slate-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{unlockedAchievements.size}</div>
                  <div className="text-sm text-slate-400">Achievements</div>
                </div>
                <div className="w-px h-12 bg-slate-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round((earnedPoints / totalPoints) * 100)}%
                  </div>
                  <div className="text-sm text-slate-400">Completion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  unlockedAchievements.has(index)
                    ? "opacity-100 translate-y-0 hover:border-yellow-500/50 hover:shadow-yellow-500/20"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: unlockedAchievements.has(index) ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Unlock Animation Overlay */}
                {unlockedAchievements.has(index) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl animate-pulse" />
                )}

                {/* Achievement Content */}
                <div className="relative z-10">
                  {/* Achievement Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${getRarityColor(achievement.rarity)} border text-xs font-medium`}>
                          {achievement.rarity}
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar className="w-3 h-3" />
                          {achievement.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-yellow-400 font-medium text-sm">{achievement.subtitle}</p>
                    </div>
                  </div>

                  {/* Achievement Description */}
                  <p className="text-slate-300 leading-relaxed mb-4">{achievement.description}</p>

                  {/* Achievement Footer */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {achievement.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-bold">{achievement.points}</span>
                      <span className="text-slate-400 text-sm">pts</span>
                    </div>
                  </div>

                  {/* Hover Effect Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                  />
                </div>

                {/* Achievement Unlock Indicator */}
                <div className="absolute top-4 right-4">
                  {unlockedAchievements.has(index) ? (
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-slate-400 rounded-sm" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-300">
                <span className="text-yellow-400 font-bold">{unlockedAchievements.size}</span> / {achievements.length}{" "}
                Milestones Achieved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder section for remaining task */}
      <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-44 h-44 border border-red-500 rotate-45" />
          <div className="absolute bottom-10 right-10 w-36 h-36 border border-orange-500 -rotate-12" />
          <div className="absolute top-1/3 left-1/3 w-28 h-28 border border-pink-500 rotate-12" />
          <div className="absolute bottom-1/3 left-10 w-20 h-20 border border-cyan-500 -rotate-45" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm font-medium">FINAL BOSS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Contact Endgame
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Ready to embark on the next adventure? Let's connect and build something amazing together. The final quest
              awaits your message.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                className={`transition-all duration-700 ${contactUnlocked ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-red-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-red-500/20">
                  {/* Unlock Animation Overlay */}
                  {contactUnlocked && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg animate-pulse" />
                  )}

                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                          Send Message
                        </CardTitle>
                        <CardDescription className="text-red-400 font-medium">Start the conversation</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          Player Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-red-500/20"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Contact Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-red-500/20"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Quest Details
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, collaboration ideas, or just say hello..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-red-500/20 resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 py-3 text-lg font-semibold group"
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Launch Mission
                      </Button>
                    </form>
                  </CardContent>

                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
                </Card>
              </div>

              {/* Social Links & Info */}
              <div
                className={`space-y-8 transition-all duration-700 ${contactUnlocked ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: "200ms" }}
              >
                {/* Social Links */}
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/20">
                  {/* Unlock Animation Overlay */}
                  {contactUnlocked && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg animate-pulse" />
                  )}

                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                          Connect Online
                        </CardTitle>
                        <CardDescription className="text-orange-400 font-medium">Join the network</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    {/* GitHub */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full justify-start bg-slate-700/50 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300 group"
                      onClick={() => window.open("https://github.com/shramana", "_blank")}
                    >
                      <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="font-semibold">GitHub</div>
                        <div className="text-sm text-slate-400">@shramana</div>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Button>

                    {/* LinkedIn */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full justify-start bg-slate-700/50 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300 group"
                      onClick={() => window.open("https://linkedin.com/in/shramana-show", "_blank")}
                    >
                      <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="font-semibold">LinkedIn</div>
                        <div className="text-sm text-slate-400">Shramana Show</div>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Button>

                    {/* Email */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full justify-start bg-slate-700/50 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300 group"
                      onClick={() => window.open("mailto:shramana.show@example.com", "_blank")}
                    >
                      <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-slate-400">shramana.show@example.com</div>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </CardContent>

                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
                </Card>

                {/* Quick Stats */}
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      Game Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-400">{unlockedSkills.size}</div>
                        <div className="text-sm text-slate-400">Skills Mastered</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">{unlockedProjects.size}</div>
                        <div className="text-sm text-slate-400">Quests Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-400">{unlockedAchievements.size}</div>
                        <div className="text-sm text-slate-400">Achievements</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">100%</div>
                        <div className="text-sm text-slate-400">Ready to Code</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Final Message */}
            <div
              className={`text-center mt-16 transition-all duration-700 ${contactUnlocked ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-8 py-4">
                <Crown className="w-6 h-6 text-red-400" />
                <span className="text-slate-300 text-lg">
                  <span className="text-red-400 font-bold">Final Boss Unlocked</span> - Ready for the ultimate
                  collaboration?
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
