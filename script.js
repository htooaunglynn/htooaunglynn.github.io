const skillGroups = [
    {
        title: "Programming Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "PHP", "C# (basics)", "Python (basics)", "C++ (basics)"],
    },
    {
        title: "Backend Development",
        items: [
            "Node.js",
            "NestJS",
            "Express",
            "Laravel",
            "REST API Development",
            "API Design",
            "MVC",
            "JWT & Refresh Tokens",
            "Role-Based Access Control (RBAC)",
            "Clean Architecture",
            "Dependency Injection",
            "Service Layer",
            "Repository Pattern",
        ],
    },
    {
        title: "Frontend Development",
        items: [
            "React",
            "Next.js (SSR, CSR, SEO)",
            "Vue.js",
            "Angular",
            "HTML5",
            "CSS3",
        ],
    },
    {
        title: "Databases & Data Management",
        items: [
            "PostgreSQL",
            "MySQL",
            "MSSQL",
            "Prisma",
            "TypeORM",
            "Eloquent ORM",
            "Database Design",
            "Indexing",
            "Query Optimization",
            "Transactions",
        ],
    },
    {
        title: "DevOps & Cloud",
        items: [
            // "Docker",
            // "Docker Compose",
            "CI/CD (GitHub Actions, GitLab CI)",
            "Linux",
            // "AWS",
            "DigitalOcean",
            "Environment Configuration",
            // "Secrets Management",
        ],
    },
    {
        title: "Performance & Scalability",
        items: [
            // "Redis Caching",
            "Background Jobs",
            "Queues",
            "API Performance Optimization",
            // "Monitoring and Logging",
        ],
    },
];

const projectData = [
    {
        title: "Full-Stack SaaS Platform (Capstone Project)",
        stack: "NestJS, Next.js, TypeScript, PostgreSQL, Redis, Docker, CI/CD, Cloud",
        highlights: [
            "Designed clean architecture with modular backend boundaries.",
            "Built JWT auth, refresh token flows, and role-based authorization.",
            "Shipped SSR public pages and secure client dashboards.",
            "Added Redis caching and async jobs for better runtime performance.",
        ],
    },
    {
        title: "Gym Management System",
        stack: "NestJS, Prisma, Next.js, Docker",
        highlights: [
            "Implemented role-specific flows for admin, trainer, and member.",
            "Designed permission-based access control and auth middleware.",
            "Separated domain logic from infrastructure for maintainability.",
            "Containerized environments for consistent local and production behavior.",
        ],
    },
    {
        title: "User Management API",
        stack: "Node.js, Express/Fastify, TypeScript",
        highlights: [
            "Built REST APIs from scratch to understand Node.js internals deeply.",
            "Implemented CRUD, validation, auth, and centralized error handling.",
            "Applied controller-service-repository architecture for testability.",
        ],
    },
    {
        title: "Admin Dashboard",
        stack: "Vanilla JavaScript, Vite",
        highlights: [
            "Created a lightweight dashboard optimized for browser rendering performance.",
            "Integrated REST APIs and implemented robust authentication flows.",
            "Improved client-side performance and state management patterns.",
        ],
    },
    {
        title: "CLI Tool & API",
        stack: "Node.js, TypeScript",
        highlights: [
            "Built CLI workflows that communicate with backend APIs.",
            "Implemented async flows with Promises and async/await.",
            "Shared TypeScript types between CLI and API for stronger consistency.",
        ],
    },
];

const smileFallbacks = [
    "Nice hover. You just unlocked bonus joy.",
    "You hover like an engineer with taste.",
    "That card felt appreciated.",
    "Micro-interaction approved.",
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

let smileCount = 0;
let smileResetTimer = null;
let lastSparkleAt = 0;
let lastSmileAt = 0;

const refs = {
    face: null,
    smileText: null,
    smileCount: null,
    mobileMenu: null,
    mobileButton: null,
    copyFeedback: null,
};

document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();

    refs.face = document.getElementById("smileFace");
    refs.smileText = document.getElementById("smileText");
    refs.smileCount = document.getElementById("smileCount");
    refs.mobileMenu = document.getElementById("mobileMenu");
    refs.mobileButton = document.getElementById("mobileMenuButton");
    refs.copyFeedback = document.getElementById("copyFeedback");

    setupMobileMenu();
    setupSmoothScroll();
    setupRevealAnimations();
    setupTiltCards();
    setupCheerSystem();
    setupMagneticButtons();
    setupCopyEmail();
    setupScrollProgress();
    setupBackgroundParallax();
    updateCurrentYear();
});

function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;

    grid.innerHTML = skillGroups
        .map(
            (group) => `
        <article class="glass-card story-card tilt-card p-6 reveal" data-reveal data-tilt data-cheer="${group.title} loaded.">
            <p class="text-xs font-semibold uppercase tracking-wider text-teal">${group.title}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
                ${group.items
                    .map(
                        (item) => `<li>
                        <span class="pill inline-flex rounded-full px-3 py-1.5 text-xs font-medium text-ink/80" data-cheer="${item} is part of the stack.">${item}</span>
                    </li>`,
                    )
                    .join("")}
            </ul>
        </article>
    `,
        )
        .join("");
}

function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = projectData
        .map(
            (project, index) => `
        <article class="glass-card story-card tilt-card reveal rounded-3xl p-6" data-reveal data-tilt data-cheer="${project.title} highlighted.">
            <p class="text-xs font-semibold uppercase tracking-wider text-coral">Project ${String(index + 1).padStart(2, "0")}</p>
            <h3 class="mt-2 font-display text-2xl font-bold text-ink">${project.title}</h3>
            <p class="mt-2 text-sm font-medium text-teal">Tech: ${project.stack}</p>
            <ul class="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
                ${project.highlights.map((item) => `<li class="rounded-lg bg-white/60 px-3 py-2">${item}</li>`).join("")}
            </ul>
        </article>
    `,
        )
        .join("");
}

function setupMobileMenu() {
    const { mobileButton, mobileMenu } = refs;
    if (!mobileButton || !mobileMenu) return;

    mobileButton.addEventListener("click", () => {
        const expanded = mobileButton.getAttribute("aria-expanded") === "true";
        mobileButton.setAttribute("aria-expanded", String(!expanded));
        mobileMenu.classList.toggle("hidden");
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href.length <= 1) return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            const headerOffset = document.querySelector("header")?.offsetHeight || 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 8;

            window.scrollTo({
                top,
                behavior: prefersReducedMotion ? "auto" : "smooth",
            });

            if (refs.mobileMenu && refs.mobileButton && !refs.mobileMenu.classList.contains("hidden")) {
                refs.mobileMenu.classList.add("hidden");
                refs.mobileButton.setAttribute("aria-expanded", "false");
            }
        });
    });
}

function setupRevealAnimations() {
    const revealItems = document.querySelectorAll("[data-reveal]");
    if (!revealItems.length) return;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
        },
    );

    revealItems.forEach((item) => observer.observe(item));
}

function setupTiltCards() {
    const cards = document.querySelectorAll("[data-tilt]");
    if (!cards.length) return;

    if (prefersReducedMotion || !hasFinePointer) {
        cards.forEach((card) => {
            card.style.transform = "";
        });
        return;
    }

    cards.forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            const rotateY = (px - 0.5) * 8;
            const rotateX = (0.5 - py) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
            card.style.setProperty("--shine-x", `${(px * 100).toFixed(2)}%`);
            card.style.setProperty("--shine-y", `${(py * 100).toFixed(2)}%`);
            card.style.boxShadow = "0 24px 42px rgba(31, 41, 55, 0.18)";
        });

        card.addEventListener("pointerleave", () => resetCardTilt(card));
        card.addEventListener("pointercancel", () => resetCardTilt(card));
    });
}

function resetCardTilt(card) {
    card.style.transform = "";
    card.style.boxShadow = "";
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "50%");
}

function setupCheerSystem() {
    const defaultMessage = "Hover a card and I smile wider.";

    document.addEventListener("pointerover", (event) => {
        const target = closestCheerTarget(event.target);
        if (!target) return;
        if (event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) return;

        const message = target.getAttribute("data-cheer") || randomSmileLine();
        boostSmile(message);

        if (event.pointerType === "mouse") {
            spawnSparkles(event.clientX, event.clientY);
        }
    });

    document.addEventListener("pointerout", (event) => {
        const target = closestCheerTarget(event.target);
        if (!target) return;
        if (event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) return;
        scheduleSmileReset(defaultMessage);
    });

    document.addEventListener("focusin", (event) => {
        const target = closestCheerTarget(event.target);
        if (!target) return;
        const message = target.getAttribute("data-cheer") || randomSmileLine();
        boostSmile(message);
    });

    document.addEventListener("focusout", (event) => {
        const target = closestCheerTarget(event.target);
        if (!target) return;
        scheduleSmileReset(defaultMessage);
    });
}

function closestCheerTarget(node) {
    if (!(node instanceof Element)) return null;
    return node.closest("[data-cheer]");
}

function boostSmile(message) {
    if (!refs.face || !refs.smileText || !refs.smileCount) return;

    clearTimeout(smileResetTimer);
    refs.face.classList.add("is-smiling");
    refs.smileText.textContent = message;

    const now = Date.now();
    if (now - lastSmileAt > 220) {
        smileCount += 1;
        refs.smileCount.textContent = String(smileCount);
        lastSmileAt = now;
    }
}

function scheduleSmileReset(message) {
    if (!refs.face || !refs.smileText) return;

    clearTimeout(smileResetTimer);
    smileResetTimer = setTimeout(() => {
        refs.face.classList.remove("is-smiling");
        refs.smileText.textContent = message;
    }, 700);
}

function spawnSparkles(x, y) {
    if (prefersReducedMotion || !hasFinePointer) return;

    const now = performance.now();
    if (now - lastSparkleAt < 110) return;
    lastSparkleAt = now;

    const amount = 5;

    for (let i = 0; i < amount; i += 1) {
        const dot = document.createElement("span");
        dot.className = "sparkle-dot";

        const size = 5 + Math.random() * 6;
        const offsetX = (Math.random() - 0.5) * 26;
        const offsetY = (Math.random() - 0.5) * 18;

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${x + offsetX}px`;
        dot.style.top = `${y + offsetY}px`;
        dot.style.setProperty("--dx", `${(Math.random() - 0.5) * 60}px`);
        dot.style.setProperty("--dy", `${-20 - Math.random() * 36}px`);

        document.body.appendChild(dot);
        dot.addEventListener(
            "animationend",
            () => {
                dot.remove();
            },
            { once: true },
        );
    }
}

function setupMagneticButtons() {
    const buttons = document.querySelectorAll(".magnetic");
    if (!buttons.length || prefersReducedMotion || !hasFinePointer) return;

    buttons.forEach((button) => {
        button.addEventListener("pointermove", (event) => {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            const tx = x * 0.12;
            const ty = y * 0.14;
            button.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
        });

        button.addEventListener("pointerleave", () => {
            button.style.transform = "";
        });
    });
}

function setupCopyEmail() {
    const button = document.getElementById("copyEmail");
    if (!button || !refs.copyFeedback) return;

    const email = "htooaunglynn5@email.com";

    button.addEventListener("click", async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(email);
            } else {
                fallbackCopyText(email);
            }
            refs.copyFeedback.textContent = "Copied to clipboard.";
            boostSmile("Copied. Now go make something awesome.");
        } catch (error) {
            refs.copyFeedback.textContent = "Copy failed. Please copy manually.";
            console.error(error);
        }
    });
}

function fallbackCopyText(text) {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "readonly");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}

function setupScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;

    const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        bar.style.width = `${Math.min(100, Math.max(0, progress)).toFixed(2)}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
}

function setupBackgroundParallax() {
    if (prefersReducedMotion || !hasFinePointer) return;

    window.addEventListener("pointermove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;
        document.documentElement.style.setProperty("--bg-shift-x", `${x.toFixed(2)}px`);
        document.documentElement.style.setProperty("--bg-shift-y", `${y.toFixed(2)}px`);
    });
}

function updateCurrentYear() {
    const year = document.getElementById("currentYear");
    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
}

function randomSmileLine() {
    const index = Math.floor(Math.random() * smileFallbacks.length);
    return smileFallbacks[index];
}
