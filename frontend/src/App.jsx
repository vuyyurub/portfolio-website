import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { experiences, projects, skillCategories, sectionClasses } from './portfolioData'
import React, { useState } from 'react'
import { FileText } from 'lucide-react';

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen text-white scroll-smooth snap-y snap-proximity overflow-y-scroll h-screen text-lg">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 p-6 flex items-center justify-between text-xl">
        <h1 className="font-bold">Bhavesh Vuyyuru</h1>
        <nav className="space-x-8">
          <a href="#hero" className="hover:text-teal-300 transition-colors">Home</a>
          <a href="#experience" className="hover:text-teal-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-teal-300 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a>
        </nav>
      </header>


      <section id="hero" className={`snap-start h-screen flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-12 ${sectionClasses[0]}`}>
        <div className="mt-28 md:mt-0">
          <p className="uppercase text-teal-300 font-medium text-xl">Computer Science Student @ University of Michigan</p>
          <h2 className="text-6xl font-extrabold mt-4 leading-tight">Bhavesh Vuyyuru</h2>
          <p className="mt-6 text-gray-200 max-w-2xl">Hi! I’m passionate about software engineering, with a focus on full-stack development, cloud engineering, and DevOps. I love building scalable, efficient solutions that bridge the gap between innovative ideas and real-world impact!</p>
          <div className="mt-8 flex gap-6 text-5xl">
            <a href="https://github.com/vuyyurub" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bhavesh-vuyyuru/" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors"><FaLinkedin /></a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/profile.JPG"
            alt="Bhavesh Vuyyuru"
            className="rounded-full shadow-lg border-4 border-gray-700 object-cover w-80 h-80"
          />
        </div>
      </section>
      <section id="experience" className={`snap-start h-screen flex flex-col justify-center px-12 ${sectionClasses[1]}`}>
        <h3 className="text-4xl font-semibold text-teal-300 mb-8">Experience</h3>
        <div className="space-y-8 overflow-y-auto pr-4">
          {experiences.map((exp, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <article
                key={i}
                onClick={() => toggleExpand(i)}
                className={`bg-black/40 p-8 rounded-lg shadow-md transition-all duration-300 cursor-pointer border 
                  ${isExpanded ? 'border-teal-300' : 'border-transparent'} hover:border-teal-300 hover:scale-[1.01]`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain rounded bg-white p-1"
                      />
                    )}
                    <div>
                      <h4 className="text-2xl font-semibold">{exp.title}</h4>
                      <p className="text-lg text-gray-200">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-lg text-gray-400">{exp.date}</div>
                </div>
                {isExpanded && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <ul className="list-disc pl-6 space-y-2 text-gray-100">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    {exp.pdf && (
                      <div className="mt-2">
                        <a 
                          href={exp.pdf} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg text-white font-medium transition-colors"
                        >
                          <FileText size={18} />
                          View Presentation PDF
                        </a>
                      </div>
                    )}
                    <div>
                      <h5 className="text-xl font-semibold text-teal-300 mt-4">Relevant Skills</h5>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg p-2">
                              <img 
                                src={skill.logo} 
                                alt={skill.name} 
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                              />
                              <div className="w-8 h-8 bg-teal-300 rounded flex items-center justify-center text-black font-bold text-sm hidden">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-sm text-gray-200">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
      <section id="projects" className={`snap-start h-screen flex flex-col justify-center px-12 ${sectionClasses[2]}`}>
        <h3 className="text-4xl font-semibold text-teal-300 mb-8">Projects</h3>
        <div className="space-y-8 overflow-y-auto pr-4">
          {projects.map((p, i) => {
            const isExpanded = expandedIndex === `project-${i}`;
            return (
              <article
                key={i}
                onClick={() => setExpandedIndex(isExpanded ? null : `project-${i}`)}
                className={`bg-black/40 p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer border 
                  ${isExpanded ? 'border-teal-300' : 'border-transparent'} hover:border-teal-300 hover:scale-[1.01]`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-semibold">{p.name}</h4>
                    {!isExpanded && p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white hover:text-teal-300 transition-colors"
                      >
                        <FaGithub size={22} />
                      </a>
                    )}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg text-white font-medium transition-colors"
                  >
                    {i === projects.length - 1 ? 'Go to Github wiki' : 'Go to Website'}
                  </a>
                </div>

                {isExpanded && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <ul className="list-disc pl-6 space-y-2 text-gray-100">
                      {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>

                    {p.githubLink && (
                      <div className="mt-2">
                        <a
                          href={p.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 rounded-lg text-white font-medium transition-colors"
                        >
                          <FaGithub size={20} />
                          View GitHub Repository
                        </a>
                      </div>
                    )}

                    <div>
                      <h5 className="text-xl font-semibold text-teal-300 mt-4">Relevant Skills</h5>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {p.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg p-2">
                              <img 
                                src={skill.logo} 
                                alt={skill.name} 
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                              />
                              <div className="w-8 h-8 bg-teal-300 rounded flex items-center justify-center text-black font-bold text-sm hidden">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-sm text-gray-200">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className={`snap-start h-screen flex flex-col justify-center px-12 ${sectionClasses[3]}`}>
        <h3 className="text-4xl font-semibold text-teal-300 mb-8">Technical Skills</h3>
        <div className="space-y-8 overflow-y-auto pr-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/40 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-teal-300 mb-4">{category.title}</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg p-2">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="w-8 h-8 bg-teal-300 rounded flex items-center justify-center text-black font-bold text-sm hidden">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-sm text-center text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}