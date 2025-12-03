import React from 'react';
import { projects } from '../data/portfolioData';
import { Github, Globe, KeyRound } from 'lucide-react'; // Agregamos icono de llave

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 dark:text-white">
          Proyectos Destacados
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 flex flex-col hover:border-indigo-500 transition-colors shadow-sm hover:shadow-lg">
              
              {/* Header: Icono y Links */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <project.icon size={32} />
                </div>
                <div className="flex gap-3">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" title="Ver Código">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors" title="Ver Demo">
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                {project.desc}
              </p>

              {/* NUEVO: Bloque de Credenciales Dinámico */}
              {project.credentials && (
                <div className="mb-6 bg-slate-100 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-sm">
                  <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <KeyRound size={16} />
                    <span>Acceso Demo:</span>
                  </div>
                  <div className="space-y-2">
                    {project.credentials.map((cred, i) => (
                      <div key={i} className="flex flex-wrap justify-between items-center text-slate-600 dark:text-slate-400 font-mono text-xs sm:text-sm bg-white dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{cred.label}:</span>
                        <span className="select-all">User: {cred.user}</span>
                        <span className="select-all border-l border-slate-300 dark:border-slate-600 pl-2">Pass: {cred.pass}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Footer: Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;