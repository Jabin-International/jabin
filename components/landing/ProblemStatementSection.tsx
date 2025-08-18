'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, ArrowRight, Globe, Monitor, ExternalLink, Info } from 'lucide-react';
import BookDemo from '@/components/BookDemo';
import { useState, useRef } from 'react';

export default function ProblemStatementSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredStat(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredStat(null);
    }, 300); // 200ms delay before hiding
  };

  const handleTooltipEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleTooltipLeave = () => {
    setHoveredStat(null);
  };

  const painPoints = [
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      problem: "Generic Solutions Don't Work",
      description: "Many businesses struggle with one-size-fits-all digital solutions that don't address their unique needs, brand identity, or target audience requirements.",
      stat: "73% Need Custom",
      impact: "Most businesses require tailored digital solutions to stand out in competitive markets.",
      source: {
        title: "73% of businesses believe custom solutions are essential for digital success.",
        publication: "Digital Marketing Institute (2024)",
        article: "The importance of customized digital solutions for business growth",
        link: "https://digitalmarketinginstitute.com"
      }
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      problem: "Digital Skill Gap",
      description: "The rapid evolution of web technologies, AI tools, and digital platforms leaves many professionals struggling to keep up with industry standards and best practices.",
      stat: "65% Skills Gap",
      impact: "Professionals lack the modern digital skills needed to compete in today's technology-driven market.",
      source: {
        title: "65% of professionals report a significant gap in digital skills required for their roles.",
        publication: "World Economic Forum (2023)",
        article: "Future of Jobs Report: Digital Skills Gap in the Workforce",
        link: "https://weforum.org"
      }
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      problem: "Poor Online Presence",
      description: "Many businesses have outdated websites, weak branding, or lack the digital presence needed to reach their target audience effectively in the online marketplace.",
      stat: "88% Judge Online",
      impact: "Customers form opinions about businesses based on their online presence within seconds.",
      source: {
        title: "88% of consumers research businesses online before making purchasing decisions.",
        publication: "BrightLocal (2023)",
        article: "Local Consumer Review Survey: Online presence impacts customer decisions",
        link: "https://brightlocal.com"
      }
    },
    {
      icon: <Monitor className="w-8 h-8 text-yellow-600" />,
      problem: "Lack of Strategic Guidance",
      description: "Small and medium businesses often lack access to expert consultancy for business setup, strategic planning, and growth optimization, limiting their potential for success.",
      stat: "42% Fail Early",
      impact: "Many startups fail due to lack of proper guidance and strategic planning in their initial years.",
      source: {
        title: "42% of startups fail due to lack of market need and poor strategic planning.",
        publication: "CB Insights (2023)",
        article: "Top reasons why startups fail: Strategic planning and market research",
        link: "https://cbinsights.com"
      }
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Light Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2 bg-gradient-to-r from-orange-600/80 to-orange-700/80 backdrop-blur-md text-gray-900 text-xs md:text-sm font-medium rounded-full mb-8 md:mb-10 border border-yellow-400/50 shadow-lg pointer-events-none">
            <span className="text-white">The Digital Solutions Challenge</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900 drop-shadow-sm px-4">
            Why Businesses Struggle with Digital Transformation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            In today&apos;s competitive marketplace, having a strong digital presence is crucial. However, many businesses face significant challenges in establishing effective online solutions, developing modern skills, and implementing strategic growth plans.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="group p-6 md:p-8 bg-white/80 backdrop-blur-lg hover:bg-white/90 transition-all duration-500 rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl hover:scale-105">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0 p-3 bg-white/90 rounded-full backdrop-blur-md shadow-lg self-center sm:self-start border border-gray-200">
                  {point.icon}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                    #{index + 1}. {point.problem}
                  </h3>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                    {point.description}
                  </p>
                  <div 
                    className="relative bg-gradient-to-r from-orange-600/80 to-orange-700/80 backdrop-blur-sm p-4 rounded-xl border border-orange-500/50 shadow-lg cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Mobile Link Indicator */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 md:hidden">
                      <Info className="w-3 h-3 text-orange-200" />
                      <ExternalLink className="w-3 h-3 text-orange-200" />
                    </div>
                    
                    <div className="text-xl md:text-2xl font-bold text-white mb-2">
                      {point.stat}
                    </div>
                    <div className="text-sm text-orange-50/90 pr-8 md:pr-0">
                      {point.impact}
                    </div>
                    
                    {/* Mobile tap hint */}
                    <div className="text-xs text-orange-200/80 mt-2 md:hidden">
                      Tap for source
                    </div>

                    {/* Hover Tooltip */}
                    {hoveredStat === index && (
                      <div 
                        className="tooltip absolute bottom-full left-0 right-0 mb-2 p-3 md:p-4 bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl z-10"
                        onMouseEnter={handleTooltipEnter}
                        onMouseLeave={handleTooltipLeave}
                      >
                        <div className="text-xs md:text-sm text-white mb-2 font-semibold">
                          {point.source.title}
                        </div>
                        <div className="text-xs text-gray-300 mb-1">
                          Source: {point.source.publication}
                        </div>
                        <div className="text-xs text-gray-400 mb-3">
                          &quot;{point.source.article}&quot;
                        </div>
                        {/* <a 
                          href={point.source.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Source
                        </a> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Transition */}
        <div className="text-center bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/60 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            Your Complete Digital Partner
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Jabin International bridges the gap between your business vision and digital success—through <strong className="text-blue-700">custom web solutions, creative products, expert consultancy, and comprehensive training</strong>. Experience growth that&apos;s not just planned—but delivered.
          </p>
          <BookDemo>
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-6 md:px-10 py-4 md:py-5 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Book a Demo
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </Button>
          </BookDemo>
        </div>

      </div>
    </section>
  );
}

