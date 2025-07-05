// Portfolio Data
const portfolioData = {
    skills: [
        { name: "JavaScript", icon: "fab fa-js-square", color: "cyber-blue" },
        // { name: "React", icon: "fab fa-react", color: "cyber-blue" },
        // { name: "Node.js", icon: "fab fa-node-js", color: "electric-green" },
        // { name: "Python", icon: "fab fa-python", color: "neon-purple" },
        // { name: "TypeScript", icon: "fas fa-code", color: "cyber-blue" },
        // { name: "Vue.js", icon: "fab fa-vuejs", color: "electric-green" },
        { name: "SQL", icon: "fas fa-database", color: "neon-purple" },
        // { name: "AWS", icon: "fab fa-aws", color: "sunset-orange" },
        // { name: "Docker", icon: "fab fa-docker", color: "cyber-blue" },
        { name: "Git", icon: "fab fa-git-alt", color: "sunset-orange" },
        // { name: "GraphQL", icon: "fas fa-project-diagram", color: "neon-purple" },
        { name: "PHP", icon: "fa-brands fa-php", color: "electric-green" },
        { name: "Laravel", icon: "fa-brands fa-laravel", color: "cyber-blue" },
    ],

    projects: [
        {
            title: "CyberCommerce Platform",
            description: "Next-gen e-commerce platform with AI-powered recommendations and real-time analytics dashboard.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            github: "https://github.com",
            demo: "https://demo.com",
            category: "web",
            featured: true,
        },
        {
            title: "Neural Task Manager",
            description: "AI-enhanced task management with smart scheduling and team collaboration features.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
            github: "https://github.com",
            demo: "https://demo.com",
            category: "web",
            featured: true,
        },
        {
            title: "Quantum Weather App",
            description: "Advanced weather forecasting with interactive 3D visualizations and climate predictions.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Vue.js", "Three.js", "OpenWeather API", "Tailwind"],
            github: "https://github.com",
            demo: "https://demo.com",
            category: "web",
            featured: false,
        },
        {
            title: "CryptoTracker Mobile",
            description: "Real-time cryptocurrency tracking with portfolio management and price alerts.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React Native", "Redux", "CoinGecko API", "Firebase"],
            github: "https://github.com",
            demo: "https://demo.com",
            category: "mobile",
            featured: true,
        },
        {
            title: "AR Fitness Coach",
            description: "Augmented reality fitness application with pose detection and workout guidance.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React Native", "TensorFlow", "ARCore", "Firebase"],
            github: "https://github.com",
            demo: "https://demo.com",
            category: "mobile",
            featured: false,
        },
        {
            title: "Blockchain Voting System",
            description: "Secure and transparent voting platform built on blockchain technology.",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
            github: "https://github.com",
            demo: "https://demo.com",
            category: "web",
            featured: true,
        },
    ],
}

// Color mapping for technologies
const techColors = {
    0: "text-cyber-blue border-cyber-blue/50 bg-cyber-blue/10",
    1: "text-neon-purple border-neon-purple/50 bg-neon-purple/10",
    2: "text-electric-green border-electric-green/50 bg-electric-green/10",
    3: "text-sunset-orange border-sunset-orange/50 bg-sunset-orange/10",
}

// Initialize the portfolio
document.addEventListener("DOMContentLoaded", () => {
    initializePortfolio()
    setupEventListeners()
    setupScrollAnimations()
    updateCurrentYear()
    setupMobileMenu()
})

function initializePortfolio() {
    renderSkills()
    renderProjects()
}

function renderSkills() {
    const skillsContainer = document.getElementById("skillsContainer")
    if (!skillsContainer) return

    skillsContainer.innerHTML = portfolioData.skills
        .map(
            (skill) => `
        <div class="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-${skill.color}/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105">
            <div class="flex flex-col items-center text-center space-y-2">
                <i class="${skill.icon} text-2xl text-${skill.color} group-hover:animate-pulse"></i>
                <span class="text-sm font-medium text-gray-300 group-hover:text-white">${skill.name}</span>
            </div>
        </div>
    `,
        )
        .join("")
}

function renderProjects(filter = "all") {
    const projectsGrid = document.getElementById("projectsGrid")
    if (!projectsGrid) return

    const filteredProjects = portfolioData.projects.filter((project) => filter === "all" || project.category === filter)

    projectsGrid.innerHTML = filteredProjects
        .map(
            (project) => `
        <div class="project-card group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${project.featured ? "ring-2 ring-cyber-blue/30" : ""
                }">
            ${project.featured
                    ? '<div class="bg-gradient-to-r from-cyber-blue to-neon-purple text-white text-center py-2 text-sm font-bold">⚡ FEATURED PROJECT</div>'
                    : ""
                }

            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="${project.github}" class="w-8 h-8 bg-cyber-blue/80 rounded-full flex items-center justify-center hover:bg-cyber-blue transition-colors">
                        <i class="fab fa-github text-white text-sm"></i>
                    </a>
                    <a href="${project.demo}" class="w-8 h-8 bg-neon-purple/80 rounded-full flex items-center justify-center hover:bg-neon-purple transition-colors">
                        <i class="fas fa-external-link-alt text-white text-sm"></i>
                    </a>
                </div>
            </div>

            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 cyber-font">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 leading-relaxed">${project.description}</p>

                <div class="flex flex-wrap gap-2">
                    ${project.technologies
                    .map((tech, index) => {
                        const colorClass = techColors[index % 4]
                        return `<span class="px-3 py-1 text-xs font-medium rounded-full border ${colorClass}">${tech}</span>`
                    })
                    .join("")}
                </div>
            </div>
        </div>
    `,
        )
        .join("")
}

function setupEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                const offsetTop = target.offsetTop - 80
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }
        })
    })

    // Project filtering
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            // Remove active class from all buttons
            document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
            // Add active class to clicked button
            this.classList.add("active")

            // Filter projects
            const filter = this.getAttribute("data-filter")
            renderProjects(filter)
        })
    })

    // Navbar scroll effect
    window.addEventListener("scroll", handleNavbarScroll)

    // Active navigation highlighting
    window.addEventListener("scroll", updateActiveNavigation)
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const mobileMenu = document.getElementById("mobileMenu")

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden")
            const icon = mobileMenuBtn.querySelector("i")
            icon.classList.toggle("fa-bars")
            icon.classList.toggle("fa-times")
        })

        // Close mobile menu when clicking on links
        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden")
                const icon = mobileMenuBtn.querySelector("i")
                icon.classList.add("fa-bars")
                icon.classList.remove("fa-times")
            })
        })
    }
}

function handleNavbarScroll() {
    const navbar = document.querySelector("nav")
    if (window.scrollY > 50) {
        navbar.classList.add("bg-midnight/95")
        navbar.classList.remove("bg-midnight/80")
    } else {
        navbar.classList.add("bg-midnight/80")
        navbar.classList.remove("bg-midnight/95")
    }
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = ""
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach((link) => {
        link.classList.remove("text-cyber-blue")
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-cyber-blue")
        }
    })
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-up")
            }
        })
    }, observerOptions)

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(".project-card, .group")
    animatedElements.forEach((el) => {
        observer.observe(el)
    })
}

function updateCurrentYear() {
    const yearElement = document.getElementById("currentYear")
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear()
    }
}

// Add some interactive particle effects (optional enhancement)
function createParticleEffect() {
    const canvas = document.createElement("canvas")
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "1"
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
        })
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle) => {
            particle.x += particle.vx
            particle.y += particle.vy

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`
            ctx.fill()
        })

        requestAnimationFrame(animateParticles)
    }

    animateParticles()

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    })
}

// Initialize particle effect
// createParticleEffect();

// Console message for developers
console.log(`
🚀 Welcome to John Doe's Cyber Portfolio!
💻 Built with Tailwind CSS & Vanilla JavaScript
🎨 Cyberpunk theme with neon aesthetics
⚡ Optimized for performance and accessibility
`)
