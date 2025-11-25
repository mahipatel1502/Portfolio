import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Edu-Bridge',
      description: 'A mobile app connecting students with alumni for mentorship, career guidance, and exam preparation. Enhances networking and fosters informed decision-making.',
      technologies: ['React Native', 'Node.js', 'Firebase'],
      github: 'https://github.com/mahipatel1502/Edu-bridge',
      period: 'February 2025 - April 2025',
      highlights: [
        'Real-time messaging between students and alumni',
        'Profile management and matching system',
        'Career guidance and mentorship features',
      ],
    },
    {
      title: 'Tour Guide Website',
      description: 'Interactive website showcasing tourist attractions with multilingual support, integrated maps, and user-generated content.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      github: 'https://github.com/mahipatel1502/Full-stack-Development',
      liveUrl: 'https://travello-go.vercel.app/',
      period: 'August 2024 - November 2024',
      highlights: [
        'Multilingual support for better accessibility',
        'Interactive maps integration',
        'User reviews and ratings system',
      ],
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm p-8 rounded-xl border transition-all hover:shadow-lg flex flex-col ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                  : 'bg-white/50 border-gray-200 hover:border-cyan-400/50 hover:shadow-cyan-400/20'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300 text-slate-900'
                      }`}
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300 text-slate-900'
                      }`}
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-cyan-400 mb-4">{project.period}</p>

              <p className={`mb-4 flex-grow ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{project.description}</p>

              <div className="mb-4">
                <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark ? 'bg-slate-700/50 text-cyan-400' : 'bg-gray-200/50 text-cyan-600'
                    }`}
                  >
                    {tech}
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
