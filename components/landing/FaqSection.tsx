'use client';

import { useState } from 'react';
import { MessageCircle, Users, GraduationCap, Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ProgramSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  duration: string;
  target: string;
  faqs: FaqItem[];
}

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeProgram, setActiveProgram] = useState<string>('jabin-web');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const programs: ProgramSection[] = [
    {
      id: 'jabin-web',
      title: 'Jabin Web Solutions',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      duration: '2-6 weeks',
      target: 'All Businesses',
      faqs: [
        {
          id: 'jw-1',
          question: 'What makes Jabin Web Solutions different from other web development agencies?',
          answer: 'We provide completely custom solutions tailored to your business needs, brand identity, and target audience. Unlike template-based solutions, we build from scratch to ensure your website truly represents your brand and business goals.'
        },
        {
          id: 'jw-2',
          question: 'Do you provide ongoing maintenance and support after website launch?',
          answer: 'Yes! We provide comprehensive ongoing maintenance, technical support, and updates to keep your website running smoothly and securely.'
        },
        {
          id: 'jw-3',
          question: 'How long does it take to complete a website project?',
          answer: 'Project timelines vary from 2-6 weeks depending on the complexity and requirements. We work closely with you to meet your deadlines and keep you updated throughout the process.'
        },
        {
          id: 'jw-4',
          question: 'Do you provide SEO optimization with the website?',
          answer: 'Absolutely! All our websites come with basic SEO optimization, and we can provide advanced SEO services and digital marketing integration as needed.'
        },
        {
          id: 'jw-5',
          question: 'Can you redesign an existing website?',
          answer: 'Yes! We can completely redesign your existing website to improve its look, functionality, and performance while maintaining your existing content and SEO rankings.'
        },
        {
          id: 'jw-6',
          question: 'Do you develop e-commerce websites?',
          answer: 'Yes, we specialize in e-commerce solutions including online stores, payment gateway integration, inventory management, and shopping cart functionality.'
        }
      ]
    },
    {
      id: 'jabin-store',
      title: 'Jabin Store Products',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-r from-orange-500 to-red-500',
      duration: 'Ready Stock',
      target: 'Everyone',
      faqs: [
        {
          id: 'js-1',
          question: 'What types of products are available at Jabin Store?',
          answer: 'We offer handcrafted jewelry, home décor items, personalized gifts, and custom corporate gifts. All products are made with quality materials and unique designs.'
        },
        {
          id: 'js-2',
          question: 'Can I request custom or personalized products?',
          answer: 'Yes! We specialize in custom and personalized products. Contact us with your requirements, and we\'ll create something unique just for you.'
        },
        {
          id: 'js-3',
          question: 'How long does shipping take?',
          answer: 'Most items are ready to ship within 2-3 business days. Custom orders may take 1-2 weeks depending on the complexity of the design.'
        },
        {
          id: 'js-4',
          question: 'Do you offer bulk orders for corporate gifts?',
          answer: 'Absolutely! We provide special pricing for bulk orders and corporate gifts. Contact us to discuss your requirements and get a custom quote.'
        }
      ]
    },
    {
      id: 'consultancy-training',
      title: 'Consultancy & Training',
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
      duration: 'Flexible',
      target: 'Businesses',
      faqs: [
        {
          id: 'ct-1',
          question: 'What business setup services do you provide?',
          answer: 'We help with business registration, legal compliance, accounting setup, tax planning, and strategic business planning to get your business started on the right track.'
        },
        {
          id: 'ct-2',
          question: 'Do you offer training programs for individuals?',
          answer: 'Yes! We provide comprehensive training in web technologies, AI tools, digital marketing, and various software applications for both individuals and corporate teams.'
        },
        {
          id: 'ct-3',
          question: 'Can you help with ongoing business strategy and growth planning?',
          answer: 'Absolutely! We provide ongoing consultancy for strategic planning, growth optimization, market analysis, and business development strategies.'
        },
        {
          id: 'ct-4',
          question: 'Are your training programs available online?',
          answer: 'We offer both online and in-person training options, depending on your preferences and requirements. All programs are designed to be practical and hands-on.'
        },
        {
          id: 'ct-5',
          question: 'Do you provide ongoing support after training completion?',
          answer: 'Yes! We provide ongoing mentorship and support to help you implement what you\'ve learned and continue growing your skills.'
        }
      ]
    }
  ];

  const activeSection = programs.find(p => p.id === activeProgram);

  const FaqItem = ({ faq }: { faq: FaqItem; isLast: boolean }) => {
    const isOpen = openItems.includes(faq.id);
    
    return (
      <div className="group rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden">
        <button
          onClick={() => toggleItem(faq.id)}
          className="w-full p-4 md:p-6 flex items-start justify-between text-left group-hover:bg-blue-50/30 transition-all duration-200"
        >
          <div className="flex-1 pr-4 md:pr-6">
            <h3 className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg leading-relaxed mb-1 md:mb-2 group-hover:text-blue-900 transition-colors duration-200">
              {faq.question}
            </h3>
          </div>
          
          <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
          }`}>
            {isOpen ? (
              <Minus className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </div>
        </button>
        
        <div className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 md:px-6 pb-4 md:pb-6">
            <div className="pt-3 md:pt-4 border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed text-xs md:text-sm lg:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
        
        {/* Active indicator */}
        {isOpen && (
          <div className="h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        )}
      </div>
    );
  };

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Got Questions?
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Find answers to everything you need to know about our services
          </p>
        </div>

        {/* Program Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
          {programs.map((program) => {
            const IconComponent = program.icon;
            const isActive = activeProgram === program.id;
            
            return (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`group relative overflow-hidden px-3 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? `${program.bgColor} text-white shadow-lg shadow-blue-500/25` 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-100'
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3 relative z-10">
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">{program.title}</span>
                  <span className="sm:hidden text-xs">{program.title.split(' ')[0]}</span>
                  <div className={`text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {program.duration}
                  </div>
                </div>
                
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                       style={{ background: `linear-gradient(135deg, ${program.color.split(' ')[1]}, ${program.color.split(' ')[3]})` }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-8">
          
          {/* FAQ List */}
          <div className="lg:col-span-12">
            {activeSection && (
              <div className="border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden">
                <div className="p-4 md:p-8">                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {activeSection.faqs.map((faq, index) => (
                      <div key={faq.id} className={`${index < activeSection.faqs.length - 1 && activeSection.faqs.length % 2 !== 0 && index === activeSection.faqs.length - 1 ? 'lg:col-span-2' : ''}`}>
                        <FaqItem 
                          faq={faq} 
                          isLast={index === activeSection.faqs.length - 1}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

