"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Sparkles, Code, Brain, Zap, Users, TrendingUp, Globe, MessageCircle, Phone, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Blue-White Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-transparent to-blue-600/5"></div>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 60%)`
          }}
        ></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 25}s`
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full mb-8 animate-fade-in border border-blue-200/50 shadow-lg">
              <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-blue-900 font-semibold">Available for exciting opportunities</span>
            </div>
            <h1 className="text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Emre Kaplaner
              </span>
            </h1>
            <p className="text-3xl text-blue-700 mb-4 animate-slide-up-delay-1 font-medium">
              Full-Stack Developer & AI Systems Engineer
            </p>
            <p className="text-lg text-blue-600/80 mb-10 animate-slide-up-delay-1 max-w-2xl mx-auto">
              Co-founder of industry-leading companies revolutionizing AI automation, lead generation, and data scraping technologies
            </p>

            {/* Contact Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up-delay-2">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-white/70 backdrop-blur-md border-blue-300 text-blue-800 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md"
                onClick={() => window.open("mailto:emrekaplaneer@gmail.com", "_blank")}
              >
                <Mail className="h-5 w-5" />
                Email Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-white/70 backdrop-blur-md border-blue-300 text-blue-800 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md"
                onClick={() => window.open("https://www.linkedin.com/in/emre-kaplaner-7b3a3b15b/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-white/70 backdrop-blur-md border-blue-300 text-blue-800 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-md"
                onClick={() => window.open("https://github.com/EmreKaplaner", "_blank")}
              >
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 animate-slide-up-delay-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">25+</div>
                <div className="text-sm text-blue-600">Dental Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">3</div>
                <div className="text-sm text-blue-600">Companies Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">700+</div>
                <div className="text-sm text-blue-600">Chrome Extension Users</div>
              </div>
            </div>
          </div>
        </header>

        {/* ESO Automations - Featured Section */}
        <section className="mb-20 animate-slide-up-delay-4">
          <Card className="border border-blue-200/50 bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white shadow-md">
                    <Image
                      src="/eso.jpg"
                      alt="ESO Automations Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-3 py-1 animate-pulse">
                    <Zap className="h-3 w-3 mr-1" />
                    Current Position
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-blue-600 animate-pulse" />
                  <MessageCircle className="h-6 w-6 text-indigo-600 animate-bounce" />
                  <TrendingUp className="h-6 w-6 text-green-600 animate-pulse" />
                </div>
              </div>
              <CardTitle className="text-4xl text-blue-900 mb-3 font-bold">ESO Automations</CardTitle>
              <CardDescription className="text-xl text-blue-700 font-medium">
                "Your Front Desk Is Losing You $50,000/Month In Missed Implants"
              </CardDescription>
              <p className="text-lg text-blue-600 mt-2">
                Complete Lead Generation + Voice AI System: From Meta Ads to PMS Bookings
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Key Value Proposition */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">What We Do</h3>
                <p className="text-blue-800 text-lg leading-relaxed mb-4">
                  As Co-Founder & Developer, I lead the AI systems development for ESO Automations. We provide
                  complete lead generation with Voice AI systems that automatically generate, qualify, and schedule
                  dental leads with <strong>60% conversion rates</strong> and <strong>17x ROAS</strong>.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-800">340%</div>
                    <div className="text-sm text-blue-600">Higher Lead Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-800">$50K+</div>
                    <div className="text-sm text-blue-600">Monthly Revenue Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-800">24/7</div>
                    <div className="text-sm text-blue-600">AI Receptionist</div>
                  </div>
                </div>
              </div>

              {/* Global Expansion */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/60 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Global Presence
                  </h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      25+ Dental Clinics in Australia
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Dental Chain in UK
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Expanding to USA Market
                    </li>
                  </ul>
                </div>
                <div className="bg-white/60 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Service Impact
                  </h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• 1,247+ Patients Booked Monthly</li>
                    <li>• $8.2M+ in Booked Value</li>
                    <li>• 10-Second Lead Response Time</li>
                    <li>• Direct PMS Integration</li>
                  </ul>
                </div>
              </div>

              {/* Technologies & Contact */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-blue-100 text-blue-800 border border-blue-300 px-3 py-1">Voice AI</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border border-indigo-300 px-3 py-1">Meta Ads</Badge>
                <Badge className="bg-green-100 text-green-800 border border-green-300 px-3 py-1">Lead Generation</Badge>
                <Badge className="bg-purple-100 text-purple-800 border border-purple-300 px-3 py-1">PMS Integration</Badge>
                <Badge className="bg-orange-100 text-orange-800 border border-orange-300 px-3 py-1">Chatbot Development</Badge>
                <Badge className="bg-red-100 text-red-800 border border-red-300 px-3 py-1">24/7 Automation</Badge>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => window.open("mailto:info@esoautomations.com", "_blank")}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact ESO Team
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/60 border-blue-300 text-blue-800 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://www.esoautomations.com", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="animate-slide-up-delay-5">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-blue-600 text-xl mb-16 max-w-3xl mx-auto">
            Innovative platforms revolutionizing lead generation, data scraping, and business automation
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LeadLake */}
            <Card className="group border border-blue-200/50 bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white shadow-md">
                      <Image
                        src="/leadlake.jpg"
                        alt="LeadLake Logo"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-3 py-1">
                      Co-Founded Platform
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardTitle className="text-3xl text-blue-900 mb-2 font-bold">LeadLake</CardTitle>
                <CardDescription className="text-xl text-blue-700 font-medium">
                  "Scrape. Enrich. Personalize. Pay Once. Use Forever."
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-blue-800 text-lg leading-relaxed">
                  As Co-Founder & Full-Stack Developer, I built LeadLake to revolutionize B2B lead generation.
                  Access verified business & employee data and create hyper-personalized outreach campaigns
                  with our <strong>100M+ database</strong> and <strong>AI-powered email generation</strong>.
                </p>

                {/* Key Features */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">Key Capabilities</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      100M+ Database Access
                    </div>
                    <div className="flex items-center gap-2 text-blue-800">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      AI Email Generation
                    </div>
                    <div className="flex items-center gap-2 text-blue-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Google Maps Scraping
                    </div>
                    <div className="flex items-center gap-2 text-blue-800">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      GDPR Compliant
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-800">70%</div>
                    <div className="text-xs text-blue-600">Decreased Bounces</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">17x</div>
                    <div className="text-xs text-blue-600">ROAS Achieved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-800">100+</div>
                    <div className="text-xs text-blue-600">B2B Companies</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-800 border border-blue-300 text-xs">Lead Scraping</Badge>
                  <Badge className="bg-cyan-100 text-cyan-800 border border-cyan-300 text-xs">Data Enrichment</Badge>
                  <Badge className="bg-green-100 text-green-800 border border-green-300 text-xs">AI Personalization</Badge>
                  <Badge className="bg-purple-100 text-purple-800 border border-purple-300 text-xs">Email Verification</Badge>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-none transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                    onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                  >
                    Explore Platform
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/60 border-blue-300 text-blue-800 hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-sm"
                    onClick={() => window.open("mailto:emre@leadlake.co", "_blank")}
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ScrapeHub */}
            <Card className="group border border-blue-200/50 bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 shadow-md flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-3 py-1">
                      Data Platform
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-purple-600 hover:text-purple-800 hover:bg-purple-50"
                    onClick={() => window.open("https://scrapehub.org/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardTitle className="text-3xl text-blue-900 mb-2 font-bold">ScrapeHub</CardTitle>
                <CardDescription className="text-xl text-blue-700 font-medium">
                  "The Ultimate Data Scraping Platform"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-blue-800 text-lg leading-relaxed">
                  Professional data scraping platform with <strong>10,000+ users</strong> and <strong>1M+ leads extracted</strong>.
                  Extract verified emails, phone numbers, and contact data from multiple platforms with one-time purchases.
                </p>

                {/* Platform Stats */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">Platform Impact</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-700">10K+</div>
                      <div className="text-xs text-purple-600">Happy Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-700">1M+</div>
                      <div className="text-xs text-purple-600">Leads Extracted</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-700">99.9%</div>
                      <div className="text-xs text-purple-600">Accuracy</div>
                    </div>
                  </div>
                </div>

                {/* Scraping Tools */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 p-3 rounded-lg border border-purple-200">
                    <h5 className="font-semibold text-blue-900 mb-2 text-sm">Premium Tools</h5>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        Google Maps Scraper
                      </div>
                      <div className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Apollo.io Scraper
                      </div>
                      <div className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Google Search Scraper
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg border border-purple-200">
                    <h5 className="font-semibold text-blue-900 mb-2 text-sm">Specialized Tools</h5>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        Yellow Pages Scraper
                      </div>
                      <div className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        Facebook Pages Scraper
                      </div>
                      <div className="flex items-center gap-2 text-blue-800">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                        Website Scraper
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-100 text-purple-800 border border-purple-300 text-xs">One-Time Payment</Badge>
                  <Badge className="bg-pink-100 text-pink-800 border border-pink-300 text-xs">Lifetime Access</Badge>
                  <Badge className="bg-blue-100 text-blue-800 border border-blue-300 text-xs">50% Off Bundle</Badge>
                  <Badge className="bg-green-100 text-green-800 border border-green-300 text-xs">7-Day Guarantee</Badge>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                    onClick={() => window.open("https://scrapehub.org/", "_blank")}
                  >
                    View All Tools
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/60 border-purple-300 text-purple-800 hover:bg-purple-50 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <Star className="h-3 w-3 mr-1" />
                    4.9/5
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Projects Section */}
          <div className="mt-16 animate-slide-up-delay-6">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Fun Side Projects
              </span>
            </h3>

            <Card className="border border-blue-200/50 bg-white/70 backdrop-blur-md hover:bg-white/80 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-blue-900">WhatsApp Web Scraper</CardTitle>
                      <CardDescription className="text-blue-600">Chrome Extension</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border border-green-300">
                    700+ Monthly Users
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-4">
                  A popular Chrome extension for WhatsApp Web automation with 700+ monthly active users.
                  Features automated messaging, contact management, and data extraction capabilities.
                </p>
                <Button
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-none transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://chromewebstore.google.com/detail/whatsapp-web-scraper-by-e/nnadhjhpoikcfafehhdcejbekbodnjjc", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Chrome Store
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-blue-200/50 text-center animate-slide-up-delay-7">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-blue-900 mb-4">Let's Connect</h4>
            <div className="flex items-center justify-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                onClick={() => window.open("mailto:emrekaplaneer@gmail.com", "_blank")}
              >
                <Mail className="h-4 w-4 mr-2" />
                emrekaplaneer@gmail.com
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                onClick={() => window.open("mailto:emre@leadlake.co", "_blank")}
              >
                <Mail className="h-4 w-4 mr-2" />
                emre@leadlake.co
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                onClick={() => window.open("mailto:info@esoautomations.com", "_blank")}
              >
                <Mail className="h-4 w-4 mr-2" />
                info@esoautomations.com
              </Button>
            </div>
          </div>
          <p className="text-blue-600/70">
            © 2024 Emre Kaplaner. Built with Next.js and deployed on Cloudflare Pages.
          </p>
        </footer>
      </div>
    </div>
  );
}
