'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BookDemo from '@/components/BookDemo';
import { useEffect } from 'react';
import { 
  Target, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Globe,
  Lightbulb,
  Shield,
  Star,
  Building2,
  Calendar,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  // Set document title and meta tags for SEO
  useEffect(() => {
    document.title = 'About Us | Jabin International Private Limited';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Jabin International Private Limited - Leading provider of business solutions, digital transformation services, and innovative technology solutions for modern enterprises.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Learn about Jabin International Private Limited - Leading provider of business solutions, digital transformation services, and innovative technology solutions for modern enterprises.';
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'about jabin international, business solutions company, digital transformation, web development, consultancy services, technology solutions');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'about jabin international, business solutions company, digital transformation, web development, consultancy services, technology solutions';
      document.head.appendChild(newMetaKeywords);
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real business results.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with our clients to understand and achieve their unique goals.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business relationships.',
      color: 'from-purple-600 to-indigo-600'
    }
  ];

  const achievements = [
    {
      icon: Building2,
      number: '70+',
      label: 'Businesses Served',
      description: 'Successfully delivered solutions to over 70 businesses across various industries'
    },
    {
      icon: Award,
      number: '60+',
      label: 'Projects Completed',
      description: 'Completed diverse projects ranging from web development to business consultancy'
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Industries Served',
      description: 'Expertise across multiple sectors including tech, healthcare, retail, and more'
    },
    {
      icon: Users,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Committed to delivering exceptional results and exceeding client expectations'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'JABIN INTERNATIONAL PRIVATE LIMITED was established on May 2nd, 2024 with CIN U63122UP2024PTC202046, with a vision to transform businesses through technology.'
    },
    {
      year: '2024',
      title: 'Service Launch',
      description: 'Successfully launched comprehensive business solutions including web development, consultancy, and digital transformation services.'
    },
    {
      year: '2024',
      title: 'Client Acquisition',
      description: 'Secured first major clients and established strong foundation in the business services market.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched Jabin Web and Jabin Store as specialized service divisions to better serve diverse client needs.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and lead in business transformation solutions with expanding service portfolio.'
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
              <Building2 className="w-4 h-4" />
              About Jabin International
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Businesses </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
              JABIN INTERNATIONAL PRIVATE LIMITED was established on May 2nd, 2024 (CIN: U63122UP2024PTC202046). We are a leading technology and business solutions company dedicated to helping organizations achieve sustainable growth through innovation, expertise, and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
              <BookDemo>
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </BookDemo>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                onClick={() => {
                  const achievementsSection = document.getElementById('achievements-section');
                  achievementsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Achievements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mission</h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions and strategic guidance that drive sustainable growth, operational excellence, and competitive advantage in the digital age.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Vision</h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    To be the most trusted partner for businesses seeking transformation, recognized globally for our innovation, expertise, and commitment to delivering exceptional value.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">Client-Centric Approach</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">Innovation & Excellence</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">Sustainable Growth Focus</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium">Global Impact Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              The principles that guide our decisions, shape our culture, and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Achievements
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Numbers that reflect our commitment to delivering exceptional results and building lasting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {achievement.number}
                    </div>
                    
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                      {achievement.label}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              A timeline of growth, innovation, and success milestones that define our company&apos;s evolution.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg mt-6 relative z-10"></div>
                  
                  <Card className="flex-1 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Let&apos;s discuss how Jabin International can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <BookDemo>
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                Start Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </BookDemo>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <MapPin className="w-4 h-4" />
              <span>Serving clients globally from India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
