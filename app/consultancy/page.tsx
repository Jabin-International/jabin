'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BookDemo from '@/components/BookDemo';
import { useEffect } from 'react';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Lightbulb, 
  BarChart3, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Zap
} from 'lucide-react';

export default function ConsultancyPage() {
  // Set document title and meta tags for SEO
  useEffect(() => {
    document.title = 'Business Consultancy Services | Jabin International';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with expert consultancy services from Jabin International. Strategic planning, growth optimization, and digital transformation solutions.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Transform your business with expert consultancy services from Jabin International. Strategic planning, growth optimization, and digital transformation solutions.';
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'business consultancy, strategic planning, business growth, digital transformation, management consulting, business optimization');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'business consultancy, strategic planning, business growth, digital transformation, management consulting, business optimization';
      document.head.appendChild(newMetaKeywords);
    }
  }, []);

  const consultancyServices = [
    {
      icon: TrendingUp,
      title: 'Strategic Business Planning',
      description: 'Comprehensive business strategy development, market analysis, and growth roadmap creation.',
      features: ['Market Research & Analysis', 'Competitive Intelligence', 'Growth Strategy Development', 'Business Model Optimization'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions to modernize your business operations.',
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Automation', 'Change Management'],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Data-driven insights and solutions to optimize business performance and efficiency.',
      features: ['Performance Analytics', 'Process Improvement', 'Cost Optimization', 'KPI Development'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Organizational Development',
      description: 'Build strong teams and organizational structures for sustainable growth.',
      features: ['Team Building Strategies', 'Leadership Development', 'Organizational Design', 'Culture Transformation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster innovation culture and develop new products, services, and business models.',
      features: ['Innovation Strategy', 'Product Development', 'Market Entry Planning', 'Startup Incubation'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Business Launch Support',
      description: 'Complete support for new business ventures and market expansion initiatives.',
      features: ['Business Plan Development', 'Funding Strategy', 'Market Launch Planning', 'Risk Assessment'],
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const consultingProcess = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current business situation, challenges, and opportunities.'
    },
    {
      step: '02', 
      title: 'Strategy Development',
      description: 'Create customized strategies and solutions tailored to your specific business needs.'
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'Detailed roadmap with timelines, milestones, and resource requirements for execution.'
    },
    {
      step: '04',
      title: 'Execution Support',
      description: 'Hands-on support during implementation with regular monitoring and adjustments.'
    },
    {
      step: '05',
      title: 'Performance Monitoring',
      description: 'Continuous tracking of results and optimization for sustained business growth.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '5+ years of experience helping businesses achieve breakthrough results.'
    },
    {
      icon: Shield,
      title: 'Guaranteed Results',
      description: 'We stand behind our recommendations with measurable outcome guarantees.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Fast-track your business transformation with our agile consulting approach.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Ongoing support and guidance throughout your business transformation journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-blue-100/20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Business Consultancy Services
            </div>
            <h1 className="text-2xl md:text-5xl font-black text-white mb-8 md:leading-tight leading-[1.5] drop-shadow-lg">
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Business </span>
              Today
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Expert business consultancy services to accelerate growth, optimize operations, and drive digital transformation for sustainable success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookDemo>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </BookDemo>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                onClick={() => {
                  const processSection = document.getElementById('consulting-process');
                  processSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consultancy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions designed to address every aspect of your organization&apos;s growth and transformation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="consulting-process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every consultancy engagement.
            </p>
          </div>

          <div className="space-y-8">
            {consultingProcess.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {index < consultingProcess.length - 1 && (
                  <div className="hidden md:block w-12 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Jabin International?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative approaches to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              
              return (
                <Card key={index} className="border-0 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get started with a free consultation and discover how our expert team can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookDemo>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </BookDemo>
            <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
