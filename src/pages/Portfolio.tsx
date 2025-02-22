import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Instagram, Linkedin, MessageCircle, Home, User, Briefcase, Code2, Mail, Youtube, Heart, GraduationCap, PenTool as Tool, Star } from 'lucide-react';

function SectionTitle({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-center text-gray-800 mb-12"
    >
      {children}
    </motion.h2>
  );
}

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: User },
    { id: 'habilidades', label: 'Habilidades', icon: GraduationCap },
    { id: 'proyectos', label: 'Proyectos', icon: Briefcase },
    { id: 'contacto', label: 'Contacto', icon: Mail }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Side Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-20 bg-white shadow-lg flex flex-col items-center py-8 z-40">
        {sections.map(({ id, label, icon: Icon }) => (
          <Link
            key={id}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className={`w-12 h-12 mb-6 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 group ${
              activeSection === id ? 'bg-pink-600 text-white' : 'text-gray-600 hover:bg-pink-100'
            }`}
            onSetActive={() => setActiveSection(id)}
          >
            <Icon size={24} />
            <span className="fixed left-20 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="flex-1 ml-20">
        {/* Header/Hero Section */}
        <header id="inicio" className="container mx-auto px-4 py-16 flex flex-col items-center text-center min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
              ¡Hola! Bienvenidos a mi portfolio
            </h1> */}
            <motion.img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFYPO2OA5ASrQ/profile-displayphoto-shrink_200_200/B4DZRnJImHHYAY-/0/1736897235899?e=1745452800&v=beta&t=RtxdwgtupC0yQdfI986YJr0OCG0VDl_kUE4ZS-R_rmI"
              alt="Judith Dávalos"
              className="w-40 h-40 rounded-full object-cover border-4 border-pink-200 shadow-lg m-auto mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Judith Dávalos</h2>
            <p className="text-xl text-pink-700 mb-8">Docente de Tecnología y Testing de Software</p>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-6 mb-12 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {[
                { href: "https://www.linkedin.com/in/judithdavalos/", icon: Linkedin },
                { href: "https://www.instagram.com/judithdev_/", icon: Instagram },
                { href: "https://github.com/juroda", icon: Github },
                { href: "https://www.youtube.com/@juroda7170", icon: Youtube },
                { href: "https://wa.me/5491124048592", icon: MessageCircle }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-md hover:shadow-lg hover:text-pink-800 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </header>

        {/* About Section */}
        <section id="sobre-mi" className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm">
          <SectionTitle>Sobre Mí</SectionTitle>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-pink mx-auto text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Soy Judith, docente de tecnología y testing de software con experiencia en la enseñanza de pruebas manuales, metodologías ágiles y disciplinas tecnológicas. Además, tengo formación en desarrollo web y experiencia en programación.
              </p>
              <p className="leading-relaxed">
                Mi enfoque educativo se basa en hacer que el aprendizaje sea dinámico y accesible, combinando teoría con actividades prácticas que fomentan la comprensión y aplicación real de los conceptos. He impartido cursos presenciales y virtuales, adaptándome a distintos niveles de conocimiento y necesidades de los estudiantes.
              </p>
              <p className="leading-relaxed">
                También soy actriz, lo que me ha permitido desarrollar habilidades de comunicación, expresión y trabajo en equipo, cualidades que aplico en mi labor docente.
              </p>
              <p className="leading-relaxed">
                Me apasiona la tecnología, el aprendizaje continuo y ayudar a otros a desarrollar su potencial en el ámbito digital.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="container mx-auto px-4 py-16">
          <SectionTitle>Habilidades</SectionTitle>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              {
                title: "Tecnología y Testing",
                icon: Code2,
                skills: [
                  "Pruebas de software manuales",
                  "Metodologías ágiles (SCRUM)",
                  "Análisis de requerimientos",
                  "Gestión de ambientes de testing",
                  "Creación de test cases"
                ]
              },
              {
                title: "Programación y Desarrollo",
                icon: Tool,
                skills: [
                  "HTML, CSS, JavaScript",
                  "React, Tailwind CSS, Bootstrap",
                  "MySQL, Firebase",
                  "Git, GitHub"
                ]
              },
              {
                title: "Docencia y Comunicación",
                icon: GraduationCap,
                skills: [
                  "Diseño de clases dinámicas",
                  "Explicaciones adaptadas",
                  "Creación de materiales educativos",
                  "Gestión del aula"
                ]
              },
              {
                title: "Habilidades Blandas",
                icon: Star,
                skills: [
                  "Comunicación efectiva",
                  "Trabajo en equipo",
                  "Creatividad artística",
                  "Adaptabilidad"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <category.icon className="text-pink-600 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-pink-600">{category.title}</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="text-pink-400 mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Herramientas */}
          <motion.div
            className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-pink-600 mb-4 text-center flex items-center justify-center">
              <Tool className="mr-2" size={24} />
              Herramientas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
              {[
                "Jira",
                "Trello",
                "Miro",
                "MURAL",
                "Microsoft Office",
                "Google Workspace"
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-pink-400 mr-2">•</span>
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="container mx-auto px-4 py-16">
          <SectionTitle>Proyectos</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "DevHouse",
                description: "Plataforma para que desarrolladores se conecten y colaboren.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
                url: "https://dev-house-ar.vercel.app/"
              },
              {
                title: "Fomentar Empleo",
                description: "Portal de empleo para conectar talento con oportunidades.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
                url: "https://portalempleo.gob.ar/"
              },
              {
                title: "Canal de YouTube",
                description: "Contenido educativo sobre tecnología y desarrollo.",
                image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800",
                url: "https://www.youtube.com/@juroda7170"
              },
              {
                title: "Amigo secreto",
                description: "Agregar los nombres de tus amigos y realizar un sorteo aleatorio.",
                image: "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                url: "https://challenge-amigo-secreto-seven-flax.vercel.app/"
              },
              {
                title: "¡Siempre va a haber más!",
                description: "Paso a paso genero más y más proyectos ¡Gracias por apoyarme!",
                image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                url: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Proyecto
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="container mx-auto px-4 py-16">
          <SectionTitle>Contacto</SectionTitle>
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-8">
              Siempre estoy abierta a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.
            </p>
            <motion.a
              href="https://wa.me/5491124048592"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Contactame
            </motion.a>
          </motion.div>
        </section>

        {/* Thank You Section */}
        <section className="container mx-auto px-4 py-16 mb-12">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <motion.div
                className="text-pink-600 mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart size={40} className="mx-auto" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Gracias por visitar mi portfolio!</h2>
              <p className="text-gray-600">
                Aprecio mucho tu interés en conocer más sobre mi trabajo y experiencia. Si te gustaría colaborar o tienes alguna pregunta, no dudes en contactarme.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}