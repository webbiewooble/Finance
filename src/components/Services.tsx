import { motion } from 'motion/react';
import { Car, Home, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Personal Loan',
    description: 'Quick funds for medical emergencies, weddings, or vacations with minimal documentation.',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Home Loan',
    description: 'Turn your dream home into reality with our flexible repayment home loan options.',
    icon: Home,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    title: 'Vehicle Loan',
    description: 'Drive home your dream car or bike with fast processing and up to 100% funding.',
    icon: Car,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Education Loan',
    description: 'Invest in your future with our education loans covering tuition and living expenses.',
    icon: GraduationCap,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Loan Services
          </h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of financial solutions to meet your unique needs. 
            Choose the right loan and achieve your goals today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded bg-white border border-slate-200 hover:border-blue-700 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
