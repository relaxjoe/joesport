import { motion } from 'framer-motion';

const automationWorkflow = [
  {
    step: 1,
    title: 'Lead Discovery',
    tool: 'Apollo.io',
    icon: '🔍',
    description: 'Identify and enrich qualified leads in your target market',
    features: ['Industry filtering', 'Contact enrichment', 'Automated prospecting']
  },
  {
    step: 2,
    title: 'Targeted Outreach',
    tool: 'Google & Meta Ads',
    icon: '🎯',
    description: 'Deploy precision-targeted ad campaigns to reach your ideal customers',
    features: ['Local geo-targeting', 'Service-specific ads', 'Budget optimization']
  },
  {
    step: 3,
    title: 'Lead Capture',
    tool: 'Custom Web Apps',
    icon: '📲',
    description: 'Convert visitors with purpose-built MERN stack applications',
    features: ['Smart forms', 'Instant notifications', 'CRM integration']
  },
  {
    step: 4,
    title: 'Pipeline Management',
    tool: 'Notion Automation',
    icon: '⚙️',
    description: 'Organize and automate your entire sales process',
    features: ['Auto-updating dashboards', 'Task automation', 'Client portals']
  }
];

const results = [
  { metric: '3x', label: 'Lead Generation', icon: '📈' },
  { metric: '60%', label: 'Time Saved', icon: '⏱️' },
  { metric: '24/7', label: 'Automation', icon: '🤖' },
  { metric: '100%', label: 'Custom Built', icon: '🛠️' }
];

function AutomationShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sage-50 to-white">
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
            The Automation Advantage
          </h2>
          <p className="text-xl text-muted-600 max-w-3xl mx-auto">
            A complete marketing and development workflow designed for local service businesses. 
            From lead generation to customer management—all automated.
          </p>
        </motion.div>

        {/* Workflow steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationWorkflow.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connector line (hidden on mobile and last item) */}
                {index < automationWorkflow.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-sage-300 to-ocean-300 z-0">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-3 h-3 text-ocean-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="bento-card h-full bg-gradient-to-br from-white to-sage-50 hover:shadow-bento-hover">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{item.icon}</span>
                    <span className="text-xs font-bold text-ocean-500 bg-ocean-100 px-2 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>

                  {/* Title and tool */}
                  <h3 className="text-xl font-bold text-sage-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-ocean-600 mb-3">
                    {item.tool}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-700 mb-4">
                    {item.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-muted-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results metrics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-center text-sage-800 mb-8">
            Results That Matter
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                className="bento-card text-center bg-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{result.icon}</div>
                <div className="text-3xl font-display font-bold text-sage-700 mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-muted-600">
                  {result.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration diagram */}
        <motion.div
          className="bg-gradient-to-br from-ocean-50 to-sage-50 rounded-bento p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-center text-sage-800 mb-8">
            How It All Works Together
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {/* Marketing Tools */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-ocean-700 mb-4 text-center">Marketing Stack</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">🎯</span>
                    <span className="text-muted-700">Google Ads</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">📱</span>
                    <span className="text-muted-700">Meta Ads</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">🚀</span>
                    <span className="text-muted-700">Apollo.io</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg className="w-12 h-12 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Custom Development */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-lg p-6 shadow-md border-2 border-sage-300">
                <h4 className="font-bold text-sage-700 mb-4 text-center">Custom MERN App</h4>
                <div className="text-center py-4">
                  <div className="text-4xl mb-2">⚛️</div>
                  <p className="text-xs text-muted-600">Your Business Logic</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <svg className="w-12 h-12 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Automation */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-muted-700 mb-4 text-center">Automation Hub</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">📊</span>
                    <span className="text-muted-700">Notion</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">⚙️</span>
                    <span className="text-muted-700">Workflows</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-xl">📈</span>
                    <span className="text-muted-700">Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-600 mt-8 max-w-2xl mx-auto">
            A seamlessly integrated system where marketing generates leads, custom apps capture and process them, 
            and automation keeps everything running smoothly 24/7.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#contact" className="btn-primary inline-block">
            Get Your Custom Automation System
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AutomationShowcase;
