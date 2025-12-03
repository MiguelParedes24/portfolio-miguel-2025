import React from 'react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Formación y Trayectoria
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icono Central */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-3 h-3 bg-slate-600 dark:bg-slate-300 rounded-full group-hover:bg-white"></div>
              </div>
              
              {/* Tarjeta de Contenido */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">{exp.role}</span>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                    {exp.type}
                  </span>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-mono">{exp.period}</div>
                <div className="text-slate-700 dark:text-slate-300 font-medium mb-2">{exp.place}</div>
                {exp.desc && (
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-2 mt-2">
                    {exp.desc}
                  </p>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;