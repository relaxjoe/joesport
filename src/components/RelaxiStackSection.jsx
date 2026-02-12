import { motion } from 'framer-motion';
import { useState } from 'react';

const stackItems = [
  {
    name: 'MongoDB',
    category: 'Database',
    icon: '🗄️',
    color: 'sage',
    description: 'Scalable NoSQL database for flexible data management',
    useCases: ['Customer data', 'Lead tracking', 'Service records']
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: '⚡',
    color: 'ocean',
    description: 'Fast, minimalist web framework for Node.js',
    useCases: ['API development', 'Business logic', 'Authentication']
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: '⚛️',
    color: 'sage',
    description: 'Modern UI library for building responsive interfaces',
    useCases: ['Client dashboards', 'Booking systems', 'Admin panels']
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    icon: '🟢',
    color: 'ocean',
    description: 'JavaScript runtime for server-side applications',
    useCases: ['Real-time processing', 'API services', 'Automation']
  },
  {
    name: 'Google Ads',
    category: 'Marketing',
    icon: '🎯',
    color: 'muted',
    description: 'Targeted advertising for local service businesses',
    useCases: ['Lead generation', 'Local targeting', 'ROI tracking']
  },
  {
    name: 'Meta Ads',
    category: 'Marketing',
    icon: '📱',
    color: 'muted',
    description: 'Social media advertising on Facebook & Instagram',
    useCases: ['Brand awareness', 'Retargeting', 'Social proof']
  },
  {
    name: 'Apollo.io',
    category: 'Sales',
    icon: '🚀',
    color: 'sage',
    description: 'Sales intelligence and prospecting platform',
    useCases: ['B2B outreach', 'Lead enrichment', 'Pipeline automation']
  },
  {
    name: 'Notion',
    category: 'Automation',
    icon: '📊',
    color: 'ocean',
    description: 'All-in-one workspace for project management',
    useCases: ['Client management', 'Workflow automation', 'Documentation']
  }
];

// Color mapping for complete Tailwind class names
const colorClasses = {
  sage: {
    bg: 'bg-gradient-to-br from-white to-sage-50',
    ring: 'ring-sage-500',
    text: 'text-sage-800',
    textLight: 'text-sage-600',
    textIcon: 'text-sage-400 group-hover:text-sage-600',
    border: 'border-sage-200',
    bullet: 'text-sage-500'
  },
  ocean: {
    bg: 'bg-gradient-to-br from-white to-ocean-50',
    ring: 'ring-ocean-500',
    text: 'text-ocean-800',
    textLight: 'text-ocean-600',
    textIcon: 'text-ocean-400 group-hover:text-ocean-600',
    border: 'border-ocean-200',
    bullet: 'text-ocean-500'
  },
  muted: {
    bg: 'bg-gradient-to-br from-white to-muted-50',
    ring: 'ring-muted-500',
    text: 'text-muted-800',
    textLight: 'text-muted-600',
    textIcon: 'text-muted-400 group-hover:text-muted-600',
    border: 'border-muted-200',
    bullet: 'text-muted-500'
  }
};

function RelaxiStackSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-sage-50">
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
            The Relaxi-Stack
          </h2>
          <p className="text-xl text-muted-600 max-w-3xl mx-auto">
            A powerful combination of MERN development and marketing automation 
            to build real business tools that generate leads and drive growth
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stackItems.map((tech, index) => {
            const colors = colorClasses[tech.color];
            return (
            <motion.div
              key={tech.name}
              variants={item}
              className={`bento-card cursor-pointer relative overflow-hidden group ${colors.bg}
                ${index === 0 || index === 7 ? 'md:col-span-2' : ''}
                ${selectedItem?.name === tech.name ? `ring-2 ${colors.ring}` : ''}
              `}
              onClick={() => setSelectedItem(tech)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon and name */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{tech.icon}</span>
                  <div>
                    <h3 className={`text-xl font-bold ${colors.text}`}>
                      {tech.name}
                    </h3>
                    <span className={`text-sm font-medium ${colors.textLight}`}>
                      {tech.category}
                    </span>
                  </div>
                </div>
                <motion.svg
                  className={`w-5 h-5 ${colors.textIcon} transition-colors`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: selectedItem?.name === tech.name ? 90 : 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </div>

              {/* Description */}
              <p className="text-muted-700 text-sm mb-4">
                {tech.description}
              </p>

              {/* Use cases - expandable */}
              <motion.div
                initial={false}
                animate={{
                  height: selectedItem?.name === tech.name ? 'auto' : '0',
                  opacity: selectedItem?.name === tech.name ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <div className={`pt-4 border-t ${colors.border}`}>
                  <p className="text-xs font-semibold text-muted-600 mb-2">Use Cases:</p>
                  <ul className="space-y-1">
                    {tech.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-muted-700">
                        <span className={`${colors.bullet} mt-0.5`}>•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* Integration visual */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-bento p-6 shadow-bento">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💻</span>
              <span className="font-semibold text-sage-700">Code</span>
            </div>
            <svg className="w-6 h-6 text-muted-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📊</span>
              <span className="font-semibold text-ocean-700">Marketing</span>
            </div>
            <svg className="w-6 h-6 text-muted-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📈</span>
              <span className="font-semibold text-muted-700">Results</span>
            </div>
          </div>
          <p className="mt-6 text-muted-600 max-w-2xl mx-auto">
            By combining full-stack development with marketing automation, 
            I build systems that don&apos;t just work—they drive measurable business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default RelaxiStackSection;
