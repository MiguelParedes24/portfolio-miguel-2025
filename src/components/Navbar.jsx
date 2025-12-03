import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Trayectoria", href: "#experience" },
    { name: "Curriculum Vitae", href: "#cv" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-slate-900/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl text-slate-800 dark:text-white">MiguelDev</span>
          </div>
          
          {/* Menú Escritorio */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón Móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 dark:text-slate-300">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;