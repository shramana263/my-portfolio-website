"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function GameResume() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const levels = [
    {
      id: "intro",
      title: "START",
      background: "bg-gradient-to-b from-cyan-400 to-blue-500",
      content: (
        <div className="text-center text-white">
          <div className="mb-8">
            <div className="w-16 h-16 bg-red-500 rounded mx-auto mb-4 relative">
              <div className="absolute inset-2 bg-red-600 rounded"></div>
            </div>
            <h1 className="text-4xl font-bold mb-2 font-mono">ROBBY LEONARDI</h1>
            <p className="text-xl font-mono">Interactive Designer</p>
          </div>
          <Button
            onClick={() => setIsPlaying(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-mono text-lg px-8 py-4"
          >
            START GAME
          </Button>
        </div>
      ),
    },
    {
      id: "about",
      title: "ABOUT",
      background: "bg-gradient-to-b from-orange-400 to-red-500",
      content: (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6 font-mono">ABOUT ME</h2>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg font-mono">
            <p className="mb-4">
              I'm a designer who codes and a coder who designs. I love creating interactive experiences that blend
              creativity with functionality.
            </p>
            <p>
              When I'm not crafting digital experiences, you can find me playing retro games or exploring new
              technologies.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      title: "SKILLS",
      background: "bg-gradient-to-b from-green-400 to-teal-500",
      content: (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6 font-mono">POWER-UPS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "HTML/CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "Design", level: 95 },
              { name: "Animation", level: 80 },
              { name: "UX/UI", level: 90 },
              { name: "Node.js", level: 75 },
              { name: "Creative", level: 100 },
            ].map((skill, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-400 rounded mx-auto mb-2 flex items-center justify-center">
                  <span className="text-black font-bold text-xs">{skill.level}</span>
                </div>
                <p className="font-mono text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "experience",
      title: "EXPERIENCE",
      background: "bg-gradient-to-b from-purple-400 to-pink-500",
      content: (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6 font-mono">QUEST LOG</h2>
          <div className="space-y-6">
            {[
              {
                title: "Senior Interactive Designer",
                company: "Creative Agency",
                period: "2020 - Present",
                description: "Leading interactive projects and mentoring junior designers",
              },
              {
                title: "Frontend Developer",
                company: "Tech Startup",
                period: "2018 - 2020",
                description: "Built responsive web applications using React and modern tools",
              },
              {
                title: "UI/UX Designer",
                company: "Design Studio",
                period: "2016 - 2018",
                description: "Designed user interfaces and experiences for mobile and web",
              },
            ].map((job, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono text-lg">{job.title}</h3>
                    <p className="text-yellow-300 font-mono">
                      {job.company} • {job.period}
                    </p>
                    <p className="mt-2 text-sm">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "portfolio",
      title: "PORTFOLIO",
      background: "bg-gradient-to-b from-indigo-400 to-purple-500",
      content: (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6 font-mono">ACHIEVEMENTS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Interactive Website",
                description: "Award-winning interactive experience",
                tech: "React, Three.js, GSAP",
              },
              {
                title: "Mobile App Design",
                description: "User-centered design for iOS/Android",
                tech: "Figma, Principle, After Effects",
              },
              {
                title: "Brand Identity",
                description: "Complete brand system and guidelines",
                tech: "Illustrator, Photoshop",
              },
              {
                title: "Game UI Design",
                description: "Interface design for indie game",
                tech: "Unity, C#, Photoshop",
              },
            ].map((project, index) => (
              <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg">
                <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold font-mono text-lg mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <p className="text-xs text-yellow-300 font-mono">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "CONTACT",
      background: "bg-gradient-to-b from-pink-400 to-red-500",
      content: (
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-6 font-mono">FINAL BOSS</h2>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-md mx-auto">
            <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">📧</span>
            </div>
            <p className="font-mono mb-6">Ready to start your next project?</p>
            <div className="space-y-4">
              <Button className="w-full bg-green-500 hover:bg-green-600 font-mono">hey@rleonardi.com</Button>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 font-mono">www.rleonardi.com</Button>
            </div>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const newLevel = Math.floor(scrollPosition / windowHeight)
      setCurrentLevel(Math.min(newLevel, levels.length - 1))
    }

    if (isPlaying) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isPlaying, levels.length])

  if (!isPlaying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-400 to-blue-500">
        {levels[0].content}
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Game HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 text-white p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="font-mono">
            <span className="text-yellow-400">LEVEL:</span> {currentLevel + 1}/{levels.length}
          </div>
          <div className="font-mono text-xl font-bold">{levels[currentLevel]?.title}</div>
          <div className="font-mono">
            <span className="text-green-400">SCORE:</span> {(currentLevel + 1) * 1000}
          </div>
        </div>
      </div>

      {/* Game Levels */}
      {levels.map((level, index) => (
        <section
          key={level.id}
          className={`min-h-screen flex items-center justify-center p-8 ${level.background} relative overflow-hidden`}
        >
          {/* Decorative clouds */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-8 bg-white bg-opacity-30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 3) * 20}%`,
                  animation: `float ${3 + i}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto relative z-10">{level.content}</div>

          {/* Level indicator */}
          <div className="absolute bottom-8 right-8 bg-black bg-opacity-50 text-white p-2 rounded font-mono text-sm">
            {index + 1}/{levels.length}
          </div>
        </section>
      ))}

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-40">
        <div className="text-center font-mono text-sm">
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mb-2 relative">
            <div className="w-1 h-3 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
          SCROLL
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
