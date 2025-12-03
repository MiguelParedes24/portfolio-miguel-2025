import React from 'react';
import { Download, Eye } from 'lucide-react';
// Importamos el archivo PDF como si fuera una imagen
import cvFile from '../assets/CV-ParedesMiguel.pdf';

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
          Curriculum Vitae
        </h2>
        
        {/* Contenedor de Botones */}
        <div className="flex justify-center gap-6 mb-10">
          {/* Botón Descargar */}
          <a 
            href={cvFile} 
            download="CV-ParedesMiguel.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
          >
            <Download size={20} />
            Descargar PDF
          </a>

          {/* Botón Ver en Pantalla Completa (Útil para móviles) */}
          <a 
            href={cvFile} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-full transition-all hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <Eye size={20} />
            Ver Online
          </a>
        </div>

        {/* Visor del PDF (Iframe) */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-800">
          <iframe 
            src={cvFile} 
            className="w-full h-full" 
            title="CV-ParedesMiguel"
          >
            {/* Texto alternativo si el navegador no soporta iframes */}
            <p className="text-white text-center p-10">
              Tu navegador no soporta la visualización de PDFs. 
              <a href={cvFile} className="text-indigo-400 underline ml-1">Descárgalo aquí</a>.
            </p>
          </iframe>
        </div>

      </div>
    </section>
  );
};

export default CV;