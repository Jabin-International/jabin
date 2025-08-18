import { Card, CardContent } from '@/components/ui/card';
import { Users, CheckCircle, Star, Shield, Globe, Palette, Code, Headphones } from 'lucide-react';

export default function WhyChooseSection() {
  const whyChooseFeatures = [
    {
      icon: Globe,
      title: 'Complete Web Solutions',
      description: 'From custom design to e-commerce, we handle every aspect of your online presence with responsive designs and SEO optimization.',
      stat: 'Full-Stack',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Palette,
      title: 'Handcrafted Products',
      description: 'Unique jewelry, home décor, and personalized gifts made with quality materials and creative designs.',
      stat: 'Handmade',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Expert Consultancy',
      description: 'Business setup, accounting, strategic planning, and comprehensive training in web technologies and digital tools.',
      stat: 'Professional',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Shield,
      emoji: '�️',
      title: 'Guaranteed Excellence',
      description: '24/7 support, comprehensive warranties, and ironclad satisfaction guarantees backed by our proven track record.',
      stat: '100% Satisfaction',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Technology Training',
      description: 'Hands-on training in web development, AI tools, and digital technologies to upskill your team.',
      stat: 'Certified',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and dedicated support to ensure your success long-term.',
      stat: '24/7 Support',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Why Industry Leaders Choose Us
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience the Jabin Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&apos;t just deliver solutions—we create business transformations that drive measurable growth and lasting success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card 
                key={index} 
                className="group relative border-0 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center">
                  {/* Icon with animated background */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Stat Badge */}
                  <div className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {feature.stat}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover effect accent line */}
                  <div className={`absolute self-end bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
