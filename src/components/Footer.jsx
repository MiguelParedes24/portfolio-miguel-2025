import React from 'react';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} {personalData.name}.</p>
        <p className="mt-2">Desarrollado con React, Vite & TailwindCSS.</p>
      </div>
    </footer>
  );
};

export default Footer;