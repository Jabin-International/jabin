'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Globe, Palette, Users } from 'lucide-react';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      id: 'jabin-web',
      title: 'Jabin Web Solutions',
      subtitle: 'Custom website design, development, and branding services to help businesses establish a strong online presence and reach their target audience effectively.',
      target: 'All businesses',
      duration: '2-6 weeks',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      color: 'bg-blue-700',
      link: 'https://web.jabin.org',
      features: [
        'Custom responsive website design and development',
        'Professional branding and visual identity design',
        'E-commerce solutions and online store setup',
        'SEO optimization and digital marketing integration',
        'Ongoing maintenance and technical support'
      ]
    },
    {
      id: 'jabin-store',
      title: 'Jabin Store Products',
      subtitle: 'Handcrafted creative products including jewelry, home décor, and personalized gifts designed to add value and beauty to your life.',
      target: 'Individual customers & businesses',
      duration: 'Ready to ship',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
      color: 'bg-orange-500',
      link: 'https://store.jabin.org',
      features: [
        'Handcrafted jewelry and accessories',
        'Custom home décor and interior design items',
        'Personalized gifts for special occasions',
        'Corporate gifts and promotional items',
        'Quality materials and unique designs'
      ]
    },
    {
      id: 'consultancy-training',
      title: 'Consultancy & Training',
      subtitle: 'Expert consultancy services for business setup, accounting, strategic planning, and comprehensive training services in web technologies and digital tools.',
      target: 'Businesses & professionals',
      duration: 'Flexible',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
      color: 'bg-blue-600',
      link: '/consultancy',
      features: [
        'Business setup and registration guidance',
        'Accounting and financial planning services',
        'Strategic business planning and growth consulting',
        'Web technologies and AI training services',
        'Digital tools and software training sessions',
        'Ongoing business mentorship and support'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive solutions designed to empower your business at every stage of growth.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.id} className="space-y-8 lg:space-y-0">
                {/* Mobile: Image first, then content */}
                <div className="lg:hidden">
                  {/* Mobile Image */}
                  <div className="relative mb-8">
                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Floating badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{service.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-2`}>
                        <service.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          For: {service.target}
                        </Badge>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.subtitle}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        <Button className={`${service.color} hover:opacity-90 text-white`}>
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Desktop: Two column layout with alternating sides */}
                <div className={`hidden lg:grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-white shadow-md border border-gray-200 rounded-2xl flex items-center justify-center p-2`}>
                        <service.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          For: {service.target}
                        </Badge>
                        <h3 className="font-heading text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.subtitle}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-start">
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        <Button className={`${service.color} hover:opacity-90 text-white`}>
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Floating badge */}
                    {/* <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{service.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
