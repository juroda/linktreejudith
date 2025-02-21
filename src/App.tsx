import React, { useState } from 'react';
import { Briefcase, Linkedin, MessageCircle, MapPin } from 'lucide-react';

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const links = [
    {
      title: 'Portfolio',
      url: '#',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Explora mi trabajo en IT y arte',
      gradient: 'from-pink-400/40 to-pink-600/40'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/judithdavalos/',
      icon: <Linkedin className="w-6 h-6" />,
      description: 'Conectemos profesionalmente',
      gradient: 'from-pink-500/40 to-pink-700/40'
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/5491124048592?text=%C2%A1Buenas!%20Estoy%20interesado%20en%20una%20pagina%20web',
      icon: <MessageCircle className="w-6 h-6" />,
      description: 'Hablemos sobre tu proyecto',
      gradient: 'from-pink-300/40 to-pink-500/40'
    },
    {
      title: 'Ubicación',
      url: 'https://maps.google.com/?q=Viamonte+867,+C1053ABQ+Ciudad+Autónoma+de+Buenos+Aires',
      icon: <MapPin className="w-6 h-6" />,
      description: 'Viamonte 867, CABA',
      gradient: 'from-pink-600/40 to-pink-800/40'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-pink-500/30 rounded-full blur-md opacity-60 animate-pulse"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFYPO2OA5ASrQ/profile-displayphoto-shrink_200_200/B4DZRnJImHHYAY-/0/1736897235899?e=1745452800&v=beta&t=RtxdwgtupC0yQdfI986YJr0OCG0VDl_kUE4ZS-R_rmI"
              alt="Profile"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-2 border-white shadow-lg object-cover"
            />
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
            Judith Rocio Davalos Gonzalez
          </h1>
          <p className="mt-2 text-lg text-gray-600">Programadora • Profesora IT • Tester Manual</p>
          <div className="mt-4 max-w-xl mx-auto">
            <p className="text-gray-500 text-sm sm:text-base">
              Actriz y Modelo • Creando experiencias digitales con pasión
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 max-w-lg mx-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group block relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`
                absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 
                group-hover:opacity-100 rounded-lg blur-[2px] transition-all duration-500 ease-in-out
                ${activeIndex === index ? 'opacity-100' : ''}
              `}></div>
              <div className={`
                relative bg-white/80 rounded-lg p-4 sm:p-6 shadow-sm backdrop-blur-sm
                border border-pink-100/20 transition-all duration-500 ease-in-out
                group-hover:translate-y-[-1px] group-hover:shadow-md
                ${activeIndex === index ? 'translate-y-[-1px] shadow-md' : ''}
              `}>
                <div className="flex items-center">
                  <div className={`
                    p-3 rounded-lg bg-gradient-to-r ${link.gradient}
                    text-white transform transition-transform duration-500 ease-in-out
                    group-hover:scale-105
                  `}>
                    {link.icon}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-500">
                      {link.title}
                    </h2>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="text-pink-500/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Judith Rocio Davalos Gonzalez • Made with ♥
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;