import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

// 1. IMPORTANTE: Importamos la foto aquí
import profilePic from '../assets/foto-perfil.jpeg';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* 2. NUEVO: Contenedor de la foto */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src={profilePic} 
              alt={personalData.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            {/* Opcional: Un pequeño punto de estado "Online" */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-slate-800"></div>
          </div>
        </div>

        <div className="inline-block p-2 px-4 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 mb-6 font-semibold text-sm tracking-wide">
          Disponible para trabajar
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Hola, soy <span className="text-indigo-600 dark:text-indigo-400">{personalData.name.split(' ')[0]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light">
          {personalData.title} | {personalData.subtitle}
        </p>
        
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
          {personalData.summary}
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <SocialBtn href={personalData.github} icon={<Github size={20} />} label="GitHub" />
          <SocialBtn href={personalData.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialBtn href={`mailto:${personalData.email}`} icon={<Mail size={20} />} label="Email" />
        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 font-medium"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Hero;