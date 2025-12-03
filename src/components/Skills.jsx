import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Habilidades Técnicas
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-6 text-indigo-600 dark:text-indigo-400">
                <skill.icon size={28} />
                <h3 className="font-bold text-xl">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-transparent hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors"
                  >
                    {item}
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

export default Skills;