import React, { useEffect, useState } from 'react';
import MouseParticles from './components/MouseParticles';
import SpotlightCard from './components/SpotlightCard';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, ServerIcon, DatabaseIcon, TerminalIcon, ChevronDownIcon, ExternalLinkIcon } from './components/Icons';
import { EXPERIENCE, PROJECTS, SKILLS } from './data';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if top of section is above 1/3 of viewport height
          // This ensures the section we are "looking at" or just scrolled to is active
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }

      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative overflow-x-hidden">
      <MouseParticles />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg shadow-cyan-900/10' : 'py-6 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-mono text-xl font-bold tracking-tighter text-cyan-400">
            &lt;HTOO /&gt;
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <button 
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`relative px-2 py-1 transition-colors duration-300 hover:text-cyan-400 ${activeSection === id ? 'text-cyan-400' : 'text-slate-400'}`}
                >
                  {item}
                  {activeSection === id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
             {/* Mobile menu placeholder */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-4xl mx-auto px-6 z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-xs font-mono mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Htoo Aung <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Lynn</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-400 mb-8 font-light flex flex-col md:flex-row gap-2 md:gap-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <span className="font-medium text-slate-200">Software Engineer</span>
            <span className="hidden md:inline mx-2 text-slate-600">|</span>
            <span>Backend-Focused Full-Stack Developer</span>
          </h2>

          <p className="text-slate-400 max-w-xl text-lg leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Designing scalable systems and robust APIs. Based in Canada.
            Specialized in building high-performance applications with 
            <span className="text-slate-200 font-medium"> Laravel</span>, 
            <span className="text-slate-200 font-medium"> Node.js</span>, and 
            <span className="text-slate-200 font-medium"> TypeScript</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              View My Work
            </button>
            <a 
              href="mailto:your@email.com"
              className="px-8 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 font-medium transition-colors hover:bg-slate-800"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-12 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <a href="http://github.com/yourname" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><GithubIcon /></a>
            <a href="http://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><LinkedinIcon /></a>
            <a href="mailto:your@email.com" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><MailIcon /></a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 cursor-pointer" onClick={() => scrollTo('about')}>
          <ChevronDownIcon />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
             <span className="h-px w-8 bg-cyan-500" />
             <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                      Hello! I'm Htoo Aung Lynn, a <span className="text-slate-200 font-medium">Software Engineer</span> with over 2 years of experience specializing in backend-centric web applications. My passion lies in designing, developing, and deploying robust systems using <span className="text-cyan-400">Laravel</span> and the <span className="text-cyan-400">JavaScript/TypeScript</span> ecosystem, including Node.js, NestJS, and Next.js.
                  </p>
                  <p>
                      I deeply value <span className="text-slate-200 font-medium">clean architecture</span> and performance optimization. Whether it's designing RESTful APIs, implementing secure authentication strategies like JWT & RBAC, or containerizing applications with Docker for scalable cloud deployments, I enjoy the challenge of building production-ready software.
                  </p>
                  <p>
                      Beyond the code, I focus on the full software development lifecycle (SDLC) and am a continuous learner, constantly exploring new technologies to improve system design and maintainability.
                  </p>
              </div>

              {/* Visual / Image Placeholder */}
              <div className="flex justify-center md:justify-end">
                <SpotlightCard className="p-8 w-full max-w-md aspect-square flex items-center justify-center relative bg-slate-900/50 backdrop-blur-sm">
                    {/* Abstract representation of code/backend */}
                    <div className="font-mono text-sm text-slate-500 space-y-2 w-full z-10">
                        <div className="flex gap-2">
                          <span className="text-purple-400">const</span>
                          <span className="text-blue-400">engineer</span>
                          <span className="text-slate-200">=</span>
                          <span className="text-slate-200">{`{`}</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">name:</span> <span className="text-green-400">'Htoo Aung Lynn'</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">type:</span> <span className="text-green-400">'Full Stack Developer'</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">focus:</span> <span className="text-green-400">'Backend & Scalability'</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">location:</span> <span className="text-green-400">'Canada'</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-400">passion:</span> <span className="text-slate-200">[</span>
                        </div>
                        <div className="pl-8">
                            <span className="text-green-400">'System Design'</span>,
                        </div>
                        <div className="pl-8">
                            <span className="text-green-400">'Clean Code'</span>,
                        </div>
                        <div className="pl-8">
                            <span className="text-green-400">'Performance'</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-slate-200">]</span>
                        </div>
                        <div><span className="text-slate-200">{`}`}</span>;</div>
                    </div>
                    {/* Decorative glows */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </SpotlightCard>
              </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-8 bg-cyan-500" />
            <h2 className="text-3xl font-bold text-slate-100">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((category, idx) => (
              <SpotlightCard key={idx} className="h-full bg-slate-900/40 p-6 flex flex-col gap-4 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-slate-700 transition-colors">
                    {category.category === 'Languages' && <CodeIcon />}
                    {category.category === 'Backend' && <ServerIcon />}
                    {category.category === 'Database' && <DatabaseIcon />}
                    {category.category.includes('DevOps') && <TerminalIcon />}
                    {category.category === 'Frontend' && <div className="font-bold text-lg px-1">&lt;/&gt;</div>}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16 justify-end">
            <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
            <span className="h-px w-8 bg-violet-500" />
          </div>

          <div className="grid grid-cols-1 gap-12">
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Visual Representation (Abstract) */}
                <div className={`md:col-span-7 relative h-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 transition-transform duration-500 group-hover:-translate-y-2 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
                  {/* Decorative elements to simulate UI without screenshots */}
                  <div className="absolute top-4 left-4 right-4 h-6 bg-slate-800 rounded-md flex items-center px-2 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="absolute top-14 left-4 right-4 bottom-4 grid grid-cols-4 gap-4">
                    <div className="col-span-1 bg-slate-800/50 rounded-md animate-pulse" />
                    <div className="col-span-3 grid grid-rows-3 gap-4">
                        <div className="bg-slate-800/30 rounded-md row-span-2" />
                        <div className="bg-slate-800/30 rounded-md" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className={`md:col-span-5 flex flex-col ${idx % 2 === 1 ? 'md:order-1 md:text-right items-end' : 'md:text-left items-start'}`}>
                  <h3 className="text-cyan-400 font-mono text-sm mb-2">Featured Project</h3>
                  <h4 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h4>
                  
                  <SpotlightCard className="p-6 text-slate-400 text-sm leading-relaxed mb-6 bg-slate-900 z-10 w-full" spotlightColor="rgba(139, 92, 246, 0.15)">
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </SpotlightCard>

                  <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-6 font-mono text-xs text-slate-300 ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">
                    View Code <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
           <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-8 bg-cyan-500" />
            <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
          </div>

          <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-950 group-hover:ring-cyan-500/20 transition-all duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                  <span className="text-sm font-mono text-cyan-400 mt-1 sm:mt-0">{exp.period}</span>
                </div>
                
                <div className="text-lg text-slate-400 mb-4">{exp.company}</div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 min-w-[6px] rounded-full bg-slate-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Let's Build Something Scalable</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <a 
            href="mailto:your@email.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
          >
            <MailIcon className="w-5 h-5" />
            Say Hello
          </a>

          <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Htoo Aung Lynn. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;