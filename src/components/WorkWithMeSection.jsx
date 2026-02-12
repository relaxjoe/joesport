import { motion } from 'framer-motion';
import { useState } from 'react';

const serviceOptions = [
  { value: 'custom-app', label: 'Custom MERN Application', icon: '💻' },
  { value: 'marketing-automation', label: 'Marketing Automation', icon: '📊' },
  { value: 'full-package', label: 'Complete Package (Dev + Marketing)', icon: '🚀' },
  { value: 'consultation', label: 'Strategy Consultation', icon: '💡' }
];

const budgetRanges = [
  { value: '5k-10k', label: '$5k - $10k' },
  { value: '10k-25k', label: '$10k - $25k' },
  { value: '25k-50k', label: '$25k - $50k' },
  { value: '50k+', label: '$50k+' }
];

function WorkWithMeSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    businessName: '',
    phone: '',
    serviceType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formState.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formState.message.trim()) newErrors.message = 'Please describe your project';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;

    // Construct email body with all information
    const emailBody = `
New Lead from RelaxJoe.com
========================

Contact Information:
- Name: ${formState.fullName}
- Business: ${formState.businessName}
- Email: ${formState.email}
- Phone: ${formState.phone || 'Not provided'}

Project Details:
- Service Type: ${serviceOptions.find(s => s.value === formState.serviceType)?.label || formState.serviceType}
- Budget: ${formState.budget || 'Not specified'}
- Timeline: ${formState.timeline || 'Not specified'}

Message:
${formState.message}
    `;

    window.location.href = `mailto:joeyndiebel@gmail.com?subject=New Project Inquiry - ${formState.businessName}&body=${encodeURIComponent(emailBody)}&cc=${formState.email}`;
    
    setSubmitted(true);
    setFormState({
      fullName: '',
      email: '',
      businessName: '',
      phone: '',
      serviceType: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  const handleChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-sage-50">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            className="bento-card text-center bg-gradient-to-br from-sage-50 to-ocean-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-6">✅</div>
            <h3 className="text-3xl font-display font-bold text-sage-800 mb-4">
              Thank You!
            </h3>
            <p className="text-lg text-muted-700 mb-6">
              Your inquiry has been sent. I&apos;ll get back to you within 24 hours to discuss your project.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-800 mb-4">
            Work With Me
          </h2>
          <p className="text-xl text-muted-600 max-w-2xl mx-auto">
            Ready to transform your business with custom development and marketing automation? 
            Let&apos;s discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form - takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-card bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-sage-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formState.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.fullName ? 'border-red-500' : 'border-muted-300'
                      } focus:outline-none focus:ring-2 focus:ring-sage-500`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-sage-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-muted-300'
                      } focus:outline-none focus:ring-2 focus:ring-sage-500`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Business name and Phone row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-semibold text-sage-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formState.businessName}
                      onChange={(e) => handleChange('businessName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.businessName ? 'border-red-500' : 'border-muted-300'
                      } focus:outline-none focus:ring-2 focus:ring-sage-500`}
                      placeholder="Your Business LLC"
                    />
                    {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-sage-700 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:outline-none focus:ring-2 focus:ring-sage-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service type selection */}
                <div>
                  <label className="block text-sm font-semibold text-sage-700 mb-3">
                    Service Needed *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label
                        key={service.value}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formState.serviceType === service.value
                            ? 'border-sage-500 bg-sage-50'
                            : 'border-muted-200 hover:border-sage-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={service.value}
                          checked={formState.serviceType === service.value}
                          onChange={(e) => handleChange('serviceType', e.target.value)}
                          className="text-sage-600 focus:ring-sage-500"
                        />
                        <span className="text-2xl">{service.icon}</span>
                        <span className="text-sm font-medium text-muted-700">{service.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
                </div>

                {/* Budget and Timeline row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-sage-700 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-white"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-sage-700 mb-2">
                      Timeline (Optional)
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      value={formState.timeline}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-muted-300 focus:outline-none focus:ring-2 focus:ring-sage-500"
                      placeholder="e.g., 3 months, ASAP"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-sage-700 mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-muted-300'
                    } focus:outline-none focus:ring-2 focus:ring-sage-500 resize-none`}
                    placeholder="Describe your business needs, goals, and what you're looking to achieve..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Send Project Inquiry
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="bento-card bg-gradient-to-br from-sage-50 to-ocean-50">
                <h3 className="font-display font-bold text-sage-800 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-ocean-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-muted-600 mb-1">Email</p>
                      <a href="mailto:joeyndiebel@gmail.com" className="text-sage-700 hover:text-sage-600 font-medium">
                        joeyndiebel@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-ocean-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-muted-600 mb-1">Phone</p>
                      <a href="tel:+15107032226" className="text-sage-700 hover:text-sage-600 font-medium">
                        510.703.2226
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-ocean-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-muted-600 mb-1">Location</p>
                      <p className="text-sage-700 font-medium">Minneapolis, MN</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="bento-card bg-white">
                <h3 className="font-display font-bold text-sage-800 mb-4">
                  Availability
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-muted-700">Mon-Fri: 4AM - 12PM CST</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="text-sm text-muted-700">24hr response time</p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bento-card bg-gradient-to-br from-ocean-50 to-sage-50">
                <h3 className="font-display font-bold text-sage-800 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-sage-600 mt-0.5">✓</span>
                    <span className="text-sm text-muted-700">Free initial consultation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sage-600 mt-0.5">✓</span>
                    <span className="text-sm text-muted-700">Custom proposal within 48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sage-600 mt-0.5">✓</span>
                    <span className="text-sm text-muted-700">Transparent pricing & timeline</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sage-600 mt-0.5">✓</span>
                    <span className="text-sm text-muted-700">No obligation to proceed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorkWithMeSection;
