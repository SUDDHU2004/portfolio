import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Play, Pause, ChevronDown, ExternalLink } from 'lucide-react';
import { MatrixRain } from './components/MatrixRain';
import { NinjaCombat } from './components/NinjaCombat';
import { themes } from './themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isThemeChanging, setIsThemeChanging] = useState(true);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isThemeChanging) return;
    
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isThemeChanging]);

  const theme = themes[currentTheme];

  const handleThemeSelect = (index: number) => {
    setCurrentTheme(index);
    setIsThemeDropdownOpen(false);
    setIsThemeChanging(false);
  };

  const projects = [
    {
      name: "Flexfame.in",
      description: "A dynamic e-commerce platform featuring advanced product management, real-time inventory tracking, and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
      link: "https://flexfame.in"
    },
    {
      name: "HassMart",
      description: "An innovative marketplace solution with AI-powered product recommendations and integrated vendor management system.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=500",
      link: "https://hassmart.example.com"
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden text-white"
      style={{
        backgroundColor: theme.background,
        transition: 'all 1s ease-in-out'
      }}
    >
      <MatrixRain />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <img
              src="sudhir.jpg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
              style={{
                boxShadow: `0 0 20px ${theme.primary}`,
                border: `3px solid ${theme.primary}`
              }}
            />
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at 50% 50%, transparent 80%, ${theme.primary} 100%)`
              }}
            />
          </div>
          
          <h1 
            className="text-5xl font-bold mb-4 cyberpunk-text"
            style={{ color: theme.primary }}
          >
            Sudhir Yadav
          </h1>
          <p className="text-xl mb-8" style={{ color: theme.secondary }}>
            Full Stack Web Developer | Cyberpunk Enthusiast
          </p>
        </div>

        {/* About Section */}
        <div 
          className="max-w-3xl mx-auto mb-20 p-8 rounded-lg"
          style={{
            backgroundColor: `${theme.background}dd`,
            boxShadow: `0 0 20px ${theme.primary}`,
            border: `2px solid ${theme.primary}`
          }}
        >
          <h2 
            className="text-3xl font-bold mb-6 cyberpunk-text"
            style={{ color: theme.primary }}
          >
            ABOUT ME
          </h2>
          <p className="text-lg leading-relaxed">
           I am a passionate web developer specializing in modern and responsive websites.  
I have studied at an international college, gaining a global perspective on technology.  
My expertise lies in creating user-friendly and visually appealing web solutions.  
I focus on building innovative digital experiences that meet business needs.  
Let's connect and bring great ideas to life! 🚀
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <h2 
            className="text-3xl font-bold mb-12 text-center cyberpunk-text"
            style={{ color: theme.primary }}
          >
            FEATURED PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: `${theme.background}dd`,
                  boxShadow: `0 0 20px ${theme.primary}`,
                  border: `2px solid ${theme.primary}`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${theme.background})`
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className="text-2xl font-bold cyberpunk-text"
                      style={{ color: theme.secondary }}
                    >
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform hover:scale-110 transition-transform"
                      style={{ color: theme.primary }}
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 20px ${theme.secondary}`,
                    pointerEvents: 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 
            className="text-3xl font-bold mb-8 text-center cyberpunk-text"
            style={{ color: theme.primary }}
          >
            Technical Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'JavaScript', 'TypeScript', 'Python', 'Rust',
              'React', 'Node.js', 'GraphQL', 'Docker'
            ].map((skill) => (
              <div 
                key={skill}
                className="p-4 text-center rounded-lg transform hover:scale-105 transition-transform"
                style={{
                  backgroundColor: `${theme.background}dd`,
                  boxShadow: `0 0 10px ${theme.secondary}`,
                  border: `1px solid ${theme.secondary}`
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-20">
          <h2 
            className="text-3xl font-bold mb-8 cyberpunk-text"
            style={{ color: theme.primary }}
          >
            CONNECT
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Github, link: 'https://github.com' },
              { Icon: Linkedin, link: 'https://linkedin.com' },
              { Icon: Mail, link: 'mailto:contact@example.com' }
            ].map(({ Icon, link }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
                style={{ color: theme.secondary }}
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Theme Controls */}
      <div 
        className="fixed bottom-0 left-0 w-full py-6 px-8 flex justify-end items-center z-20"
        style={{
          background: `linear-gradient(to top, ${theme.background}, transparent)`,
          backdropFilter: 'blur(5px)'
        }}
      >
        <div className="flex items-center space-x-4">
          {/* Theme Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              className="px-6 py-3 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105"
              style={{
                backgroundColor: theme.primary,
                boxShadow: `0 0 20px ${theme.primary}`
              }}
            >
              <span className="font-bold">SELECT THEME</span>
              <ChevronDown size={16} />
            </button>
            
            {isThemeDropdownOpen && (
              <div 
                className="absolute bottom-full right-0 mb-2 w-56 rounded-lg overflow-hidden"
                style={{
                  backgroundColor: `${theme.background}ee`,
                  border: `2px solid ${theme.primary}`,
                  boxShadow: `0 0 20px ${theme.primary}`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {themes.map((t, index) => (
                  <button
                    key={index}
                    onClick={() => handleThemeSelect(index)}
                    className="w-full px-4 py-3 text-left hover:opacity-80 transition-opacity flex items-center space-x-3"
                    style={{
                      backgroundColor: index === currentTheme ? t.primary + '33' : 'transparent',
                      color: t.primary
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: t.primary,
                        boxShadow: `0 0 10px ${t.primary}`
                      }}
                    />
                    <span className="font-bold">THEME {index + 1}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auto Change Toggle */}
          <button
            onClick={() => setIsThemeChanging(!isThemeChanging)}
            className="p-4 rounded-full transition-transform hover:scale-105 flex items-center space-x-2"
            style={{
              backgroundColor: theme.primary,
              boxShadow: `0 0 20px ${theme.primary}`
            }}
          >
            {isThemeChanging ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>

      {/* Ninja Combat Animation */}
      <div className="fixed bottom-0 left-0 w-full">
        <NinjaCombat primaryColor={theme.primary} secondaryColor={theme.secondary} />
      </div>
    </div>
  );
}

export default App;