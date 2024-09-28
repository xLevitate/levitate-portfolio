"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ExternalLink, Sun, Moon, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark")
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen font-sans flex flex-col items-center py-16 px-4 transition-colors duration-200 ${isDarkTheme ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl w-full">
        <header className="text-center mb-16 relative">
          <button
            onClick={toggleTheme}
            className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          <h1 className={`text-4xl font-bold tracking-tight ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Levitate</h1>
          <p className={`mt-2 text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Plugin Developer & Configurator</p>
        </header>

        <main className="space-y-16">
          <section>
            <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
            <p className={`text-center max-w-2xl mx-auto ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            I&apos;m a passionate developer that has been working with Minecraft for over eight 
            years, and freelancing in the area for over three years. If you&apos;re looking for 
            someone to make the best possible experience for your players, I can help you! 
            I provide clients with reliable solutions for their Minecraft servers. I develop 
            maintainable and scalable servers that are stable, bug-free and most importantly 
            balanced, providing a fun experience for players, along with that I develop custom 
            plugins that are performant and especially tailored to the client&apos;s needs.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
            <div className="space-y-8">
              {workExperience.map((job) => (
                <div key={job.company} className={`flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>{job.company}</h3>
                    <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>{job.role}</p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>{job.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Past Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className={`border p-4 rounded-lg transition-all duration-300 hover:shadow-lg ${isDarkTheme ? 'border-gray-700 bg-gray-800 hover:bg-gray-750' : 'border-gray-200 bg-gray-50 hover:bg-white'}`}>
                  <h3 className={`font-medium ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`mt-2 text-sm ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <Link
                    href={project.link}
                    className={`mt-2 inline-flex items-center text-sm ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:underline`}
                  >
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className={`border-l-2 pl-4 ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`italic ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer className={`mt-2 text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className={`font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.author}</span> &mdash;{" "}
                    <Link href={testimonial.source} className={`hover:underline ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                      Source
                    </Link>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Contact</h2>
            <p className={`mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>Get in touch with me on Discord:</p>
            <Link
              href="https://discordlookup.com/user/333025982745411595"
              className={`inline-flex items-center ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:underline`}
            >
              <MessageCircle className="mr-2 h-5 w-6" />
              @levitatedev
            </Link>
          </section>
        </main>

        <footer className={`mt-16 text-center text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
          &copy; {new Date().getFullYear()} Levitate. All rights reserved.
        </footer>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-2 rounded-full shadow-lg transition-all duration-300 ${isDarkTheme ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

const workExperience = [
  {
    company: "SinisterSMP",
    role: "Owner, Manager & Developer",
    date: "Sep. 2024 - Present",
    logo: "/sinister.svg",
  },
  {
    company: "TriumphMC",
    role: "Owner & Manager",
    date: "Sep. 2023 - Oct. 2023",
    logo: "/placeholder.svg?height=96&width=96",
  },
  {
    company: "OPRealms",
    role: "Manager & Developer",
    date: "Apr. 2023 - Oct. 2023",
    logo: "/placeholder.svg?height=96&width=96",
  },
  {
    company: "InfuseSMP",
    role: "Developer",
    date: "Mar. 2023 - Jul. 2023",
    logo: "/placeholder.svg?height=96&width=96",
  },
  {
    company: "TavernMC",
    role: "Developer",
    date: "May. 2023 - Jun. 2023",
    logo: "/placeholder.svg?height=96&width=96",
  },
]

const projects = [
  {
    title: "EssentialsX Messages Config",
    description: "A clean messages configuration for EssentialsX.",
    link: "https://builtbybit.com/resources/essentialsx-premium-config.30026/",
  },
  {
    title: "LuckPerms Config",
    description: "A permissions setup with multiple ranks, and prefixes.",
    link: "https://beta-website.com",
  },
  {
    title: "Velocity Proxy Setup",
    description: "A proxy setup with an MOTD, Anti-Bot, etc.",
    link: "https://builtbybit.com/resources/velocity-proxy-premium-setup.37429/",
  },
  {
    title: "TAB Configuration",
    description: "A clean tablist and scoreboard config.",
    link: "https://builtbybit.com/resources/tablist-scoreboard-premium-config.36616/",
  },
  {
    title: "Lobby Setup",
    description: "A simple and reliable lobby setup.",
    link: "https://builtbybit.com/resources/levitates-lobby-hub-premium-setup.39786/",
  },
  {
    title: "PlayerGradients",
    description: "A plugin that allows players to customize their name.",
    link: "https://builtbybit.com/resources/playergradients-premium-plugin.34503/",
  },
  {
    title: "SeedBombs",
    description: "A plugin that allows players to plant custom seeds.",
    link: "https://builtbybit.com/resources/seedbombs-premium-plugin.33416/",
  },
  {
    title: "ShopGUIPlus Config",
    description: "A minimalistic shop configuration for ShopGUIPlus.",
    link: "https://builtbybit.com/resources/shopguiplus-premium-config.37157/",
  },
  {
    title: "Voting Menu",
    description: "A clean voting menu config for DeluxeMenus.",
    link: "https://builtbybit.com/resources/vote-menu-premium-config.31754/",
  },
]

const testimonials = [
  {
    quote: "Levitate was fantastic! He helped optimize my server, and overall it was wonderful. My server runs a lot better now, 10/10 would recommend :)",
    author: "Zekern",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "I’m pleased to work with this man, he did all my request 10/10 he deserved that $10 Tip I left him ❤️❤️",
    author: "orovoyager69",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "great setup dev. worked hard on my server and would do business with again 10/10",
    author: "acehighroller",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "Fixed all my problems, 100% recommended.",
    author: "lenny404",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "Even though I responded late, you still helped me accomplish what I wanted. Highly recommended.",
    author: "galen86",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "Very nice configurator, I would recommand him!",
    author: "foxtray",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "Pleasure to work with, set up my LuckPerms exactly how I wanted it to be, cheap, fast and awesome service! 10/10",
    author: "Lucas",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "Good work and fast. Rlly nice guy, he undestood everything.",
    author: "_raawll_",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "Perfect service, helped me out with incredible response times. He was kind and responded to all of my messages with a good attitude and looked foward to working together!",
    author: "xxmist_",
    source: "https://discord.gg/devroom",
  },
  {
    quote: "pretty good although problem not solved but he help me with other hard to solve problems!! nice tech recommended",
    author: "gsmirror",
    source: "https://discord.gg/devroom",
  },
]
