import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Date Night Planning System',
    originalProject: 'Date Night Planner',
    image: '/images/datenight.png',
    category: 'Full-Stack Development',
    tags: ['React', 'API Integration', 'User Experience'],
    description: 'Developed a comprehensive event planning application demonstrating advanced API integration and state management.',
    businessValue: 'Built complex UI workflows and third-party API integration—skills directly applicable to customer booking systems.',
    techHighlight: 'React hooks, RESTful APIs, responsive design',
    github: 'https://github.com/Tabi-Led/DateNightPlanner',
    deployed: 'https://tabi-led.github.io/DateNightPlanner/',
    metrics: {
      label: 'User Flow Complexity',
      value: 'High'
    }
  },
  {
    title: 'Custom Business Logic & Security',
    originalProject: 'Password Generator',
    image: '/images/pwgen.png',
    category: 'Security Engineering',
    tags: ['JavaScript', 'Security', 'Algorithm Design'],
    description: 'Created a secure credential generation tool showcasing cryptographic best practices and business logic.',
    businessValue: 'Demonstrates ability to build secure authentication systems critical for client data protection.',
    techHighlight: 'Cryptographic algorithms, validation logic, security patterns',
    github: 'https://github.com/relaxjoe/PWGEN24',
    deployed: 'https://relaxjoe.github.io/PWGEN24/',
    metrics: {
      label: 'Security Level',
      value: 'Enterprise'
    }
  },
  {
    title: 'Interactive Assessment Platform',
    originalProject: 'Quiz Time',
    image: '/images/quiz.png',
    category: 'Application Development',
    tags: ['JavaScript', 'DOM Manipulation', 'Data Tracking'],
    description: 'Built an interactive quiz platform with score tracking and state management for educational purposes.',
    businessValue: 'Skills applicable to building customer onboarding flows and data collection systems.',
    techHighlight: 'Event handling, local storage, performance optimization',
    github: 'https://github.com/relaxjoe/SillyQuiz',
    deployed: 'https://relaxjoe.github.io/SillyQuiz/',
    metrics: {
      label: 'Interactivity',
      value: 'Dynamic'
    }
  },
  {
    title: 'Code Modernization & Accessibility',
    originalProject: 'First Project',
    image: '/images/refactor.png',
    category: 'Code Quality & Standards',
    tags: ['HTML5', 'Accessibility', 'Refactoring'],
    description: 'Refactored legacy codebase to modern standards with enhanced accessibility compliance.',
    businessValue: 'Experience in improving existing systems—crucial for maintaining and upgrading business applications.',
    techHighlight: 'WCAG compliance, semantic HTML, code optimization',
    github: 'https://github.com/relaxjoe/urban-octo-telegram',
    deployed: 'https://relaxjoe.github.io/urban-octo-telegram/',
    metrics: {
      label: 'Accessibility Score',
      value: 'A+'
    }
  },
  {
    title: 'Professional Scheduling System',
    originalProject: 'Organized Day',
    image: '/images/organized.png',
    category: 'Business Applications',
    tags: ['Time Management', 'Local Storage', 'UX Design'],
    description: 'Developed a professional scheduling application for time-based task management.',
    businessValue: 'Foundation for building appointment booking systems for service businesses.',
    techHighlight: 'Calendar integration, persistence, notification logic',
    github: 'https://github.com/relaxjoe/OrganizedDay',
    deployed: 'https://relaxjoe.github.io/OrganizedDay/',
    metrics: {
      label: 'Usability',
      value: 'Professional'
    }
  },
  {
    title: 'Full-Stack Game Platform',
    originalProject: 'Nerdle',
    image: '/images/nerdle.png',
    category: 'Full-Stack + Authentication',
    tags: ['Node.js', 'Express', 'MongoDB', 'User Auth'],
    description: 'Built a complete game platform with user authentication, database integration, and session management.',
    businessValue: 'Demonstrates end-to-end full-stack capability essential for custom business applications.',
    techHighlight: 'JWT authentication, MongoDB CRUD, Heroku deployment',
    github: 'https://github.com/relaxjoe/wordgame',
    deployed: 'https://dnerdlegame-1754decb700a.herokuapp.com/',
    metrics: {
      label: 'Stack Complexity',
      value: 'Full MERN'
    }
  }
];

function PortfolioSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-800 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-muted-600 max-w-3xl mx-auto">
            Real projects demonstrating technical skills and business value. 
            Each project showcases capabilities essential for building custom business solutions.
          </p>
        </motion.div>

        {/* Bento-style portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={item}
              className={`bento-card group relative overflow-hidden
                ${index === 0 || index === 5 ? 'lg:col-span-2' : ''}
              `}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-sage-100 to-ocean-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center text-6xl">
                        ${study.category.includes('Security') ? '🔒' : 
                          study.category.includes('Full-Stack') ? '🚀' : 
                          study.category.includes('Business') ? '📊' : '💻'}
                      </div>
                    `;
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-sage-700">{study.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-sage-800 group-hover:text-sage-600 transition-colors">
                  {study.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-ocean-100 text-ocean-700 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-700 leading-relaxed">
                  {study.description}
                </p>

                {/* Business value highlight */}
                <div className="bg-sage-50 border-l-4 border-sage-400 p-3 rounded">
                  <p className="text-xs font-semibold text-sage-700 mb-1">Business Value:</p>
                  <p className="text-xs text-sage-600">{study.businessValue}</p>
                </div>

                {/* Tech highlight */}
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-ocean-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <p className="text-xs text-muted-600">{study.techHighlight}</p>
                </div>

                {/* Metric */}
                <div className="flex items-center justify-between pt-2 border-t border-muted-100">
                  <span className="text-xs text-muted-500">{study.metrics.label}</span>
                  <span className="text-xs font-bold text-sage-600">{study.metrics.value}</span>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={study.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-sage-600 text-white text-sm font-medium rounded-lg hover:bg-sage-700 transition-colors"
                  >
                    View Live
                  </a>
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-sage-600 text-sage-600 text-sm font-medium rounded-lg hover:bg-sage-50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-sage-50 to-ocean-50 rounded-bento p-8">
            <p className="text-lg text-muted-700 mb-4 max-w-2xl">
              These projects showcase the foundation. Ready to build something custom for your business?
            </p>
            <a href="#contact" className="btn-primary">
              Let's Build Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection;
