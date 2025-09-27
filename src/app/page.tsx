"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-black to-gray-900/50"></div>
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 50%)`
          }}
        ></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg mb-8 animate-fade-in">
              <span className="text-gray-300 text-sm font-medium">Available for opportunities</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-slide-up tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Emre Kaplaner
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6 animate-slide-up-delay-1 font-light">
              Full-Stack Developer & AI Systems Engineer
            </p>
            <p className="text-lg text-gray-400 mb-12 animate-slide-up-delay-1 max-w-3xl mx-auto leading-relaxed">
              Co-founder of industry-leading companies revolutionizing AI automation, lead generation, and data scraping technologies
            </p>

            {/* Contact Buttons */}
            <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up-delay-2">
              <Button
                variant="outline"
                size="lg"
                className="gap-3 bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                onClick={() => window.open("mailto:emrekaplaneer@gmail.com", "_blank")}
              >
                <Mail className="h-4 w-4" />
                Contact
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                onClick={() => window.open("https://www.linkedin.com/in/emre-kaplaner-7b3a3b15b/", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                onClick={() => window.open("https://github.com/EmreKaplaner", "_blank")}
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up-delay-3">
              <div className="text-center border-r border-gray-700 last:border-r-0">
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-400 font-medium">Dental Clinics</div>
              </div>
              <div className="text-center border-r border-gray-700 last:border-r-0">
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <div className="text-sm text-gray-400 font-medium">Companies Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-gray-400 font-medium">Platform Users</div>
              </div>
            </div>
          </div>
        </header>

        {/* ESO Automations - Featured Section */}
        <section className="mb-24 animate-slide-up-delay-4">
          <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 overflow-hidden">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                    <Image
                      src="/eso.jpg"
                      alt="ESO Automations Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1 font-medium">
                    Current Position
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-4xl text-white mb-3 font-bold tracking-tight">ESO Automations</CardTitle>
              <CardDescription className="text-xl text-gray-300 font-medium">
                Voice AI & Lead Generation Platform for Dental Practices
              </CardDescription>
              <p className="text-gray-400 mt-3 text-lg">
                Complete lead generation with Voice AI systems: From Meta Ads to PMS bookings
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Key Value Proposition */}
              <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Platform Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  As Co-Founder & Developer, I lead AI systems development for ESO Automations. Our platform provides
                  automated lead generation with Voice AI that delivers 60% conversion rates and 17x ROAS for dental practices.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">340%</div>
                    <div className="text-sm text-gray-400 font-medium">Higher Lead Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">$50K+</div>
                    <div className="text-sm text-gray-400 font-medium">Monthly Revenue Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-sm text-gray-400 font-medium">AI Receptionist</div>
                  </div>
                </div>
              </div>

              {/* Global Expansion */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Global Presence</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      25+ Dental Clinics in Australia
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Dental Chain in UK
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Expanding to USA Market
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Service Impact</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>1,247+ Patients Booked Monthly</li>
                    <li>$8.2M+ in Booked Value</li>
                    <li>10-Second Lead Response Time</li>
                    <li>Direct PMS Integration</li>
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1">Voice AI</Badge>
                <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1">Meta Ads</Badge>
                <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1">Lead Generation</Badge>
                <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1">PMS Integration</Badge>
                <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1">24/7 Automation</Badge>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                  onClick={() => window.open("mailto:info@esoautomations.com", "_blank")}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Team
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                  onClick={() => window.open("https://www.esoautomations.com", "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Platform
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="animate-slide-up-delay-5">
          <h2 className="text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent tracking-tight">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 text-xl mb-20 max-w-3xl mx-auto leading-relaxed">
            Innovative platforms revolutionizing lead generation, data scraping, and business automation
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LeadLake */}
            <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                      <Image
                        src="/leadlake.jpg"
                        alt="LeadLake Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1 font-medium">
                      Co-Founded Platform
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-gray-400 hover:text-white hover:bg-gray-800"
                    onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardTitle className="text-3xl text-white mb-3 font-bold tracking-tight">LeadLake</CardTitle>
                <CardDescription className="text-xl text-gray-300 font-medium">
                  B2B Lead Generation & Data Enrichment Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  As Co-Founder & Full-Stack Developer, I built LeadLake to revolutionize B2B lead generation.
                  Access verified business & employee data and create hyper-personalized outreach campaigns
                  with our 100M+ database and AI-powered email generation.
                </p>

                {/* Key Features */}
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-4">Key Capabilities</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      100M+ Database Access
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      AI Email Generation
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Google Maps Scraping
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      GDPR Compliant
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">70%</div>
                    <div className="text-xs text-gray-400 font-medium">Decreased Bounces</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">17x</div>
                    <div className="text-xs text-gray-400 font-medium">ROAS Achieved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-xs text-gray-400 font-medium">B2B Companies</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">Lead Scraping</Badge>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">Data Enrichment</Badge>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">AI Personalization</Badge>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">Email Verification</Badge>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                    onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                  >
                    Explore Platform
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                    onClick={() => window.open("mailto:emre@leadlake.co", "_blank")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ScrapeHub */}
            <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-lg">S</span>
                      </div>
                    </div>
                    <Badge className="bg-gray-800 text-gray-200 border border-gray-600 px-3 py-1 font-medium">
                      Data Platform
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-gray-400 hover:text-white hover:bg-gray-800"
                    onClick={() => window.open("https://scrapehub.org/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardTitle className="text-3xl text-white mb-3 font-bold tracking-tight">ScrapeHub</CardTitle>
                <CardDescription className="text-xl text-gray-300 font-medium">
                  Professional Data Scraping Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Professional data scraping platform with 10,000+ users and 1M+ leads extracted.
                  Extract verified emails, phone numbers, and contact data from multiple platforms with one-time purchases.
                </p>

                {/* Platform Stats */}
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-4">Platform Impact</h4>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">10K+</div>
                      <div className="text-xs text-gray-400 font-medium">Happy Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">1M+</div>
                      <div className="text-xs text-gray-400 font-medium">Leads Extracted</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-xs text-gray-400 font-medium">Accuracy</div>
                    </div>
                  </div>
                </div>

                {/* Scraping Tools */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 border border-gray-700 p-4 rounded-xl">
                    <h5 className="font-semibold text-white mb-3 text-sm">Premium Tools</h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        Google Maps Scraper
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Apollo.io Scraper
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Google Search Scraper
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 p-4 rounded-xl">
                    <h5 className="font-semibold text-white mb-3 text-sm">Specialized Tools</h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        Yellow Pages Scraper
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        Facebook Pages Scraper
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                        Website Scraper
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">One-Time Payment</Badge>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">Lifetime Access</Badge>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">50% Off Bundle</Badge>
                  <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">7-Day Guarantee</Badge>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                    onClick={() => window.open("https://scrapehub.org/", "_blank")}
                  >
                    View All Tools
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                  >
                    4.9/5 Rating
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Projects Section */}
          <div className="mt-24 animate-slide-up-delay-6">
            <h3 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent tracking-tight">
                Side Projects
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* WhatsApp Web Scraper */}
              <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded-lg"></div>
                    </div>
                    <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">
                      700+ Users
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white">WhatsApp Web Scraper</CardTitle>
                  <CardDescription className="text-gray-400">Chrome Extension</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    Chrome extension for WhatsApp Web automation with 700+ monthly active users.
                    Features automated messaging and contact management.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                    onClick={() => window.open("https://chromewebstore.google.com/detail/whatsapp-web-scraper-by-e/nnadhjhpoikcfafehhdcejbekbodnjjc", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Chrome Store
                  </Button>
                </CardContent>
              </Card>

              {/* Cursor for N8N: Flowzen */}
              <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
                    </div>
                    <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">
                      MCP Experiment
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white">Cursor for N8N: Flowzen</CardTitle>
                  <CardDescription className="text-gray-400">AI Workflow Builder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    A hobby project exploring MCP (Model Context Protocol) integration with N8N workflows.
                    Built to experiment with AI-powered automation design.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                    onClick={() => window.open("https://n8n-automations-ai.lovable.app/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Try Demo
                  </Button>
                </CardContent>
              </Card>

              {/* Wander with Zeynep */}
              <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-purple-500 rounded-lg"></div>
                    </div>
                    <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">
                      Personal Gift
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white">Wander with Zeynep</CardTitle>
                  <CardDescription className="text-gray-400">AI Travel Planner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    AI-powered itinerary generator for personalized trips. A birthday gift project
                    for my girlfriend featuring intelligent travel planning and recommendations.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                    onClick={() => window.open("https://www.wanderwithzeynep.com/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Plan Trip
                  </Button>
                </CardContent>
              </Card>

              {/* extractorGPT */}
              <Card className="border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-lg"></div>
                    </div>
                    <Badge className="bg-gray-800 text-gray-200 border border-gray-600 text-xs">
                      Open Source
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white">extractorGPT</CardTitle>
                  <CardDescription className="text-gray-400">Intelligent Web Scraper</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    Intelligence scraper with smart selection engine that rotates through different selectors.
                    Adapts automatically to all websites for reliable data extraction.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-200 font-medium"
                    onClick={() => window.open("https://github.com/EmreKaplaner/extractorGPT", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-700 text-center animate-slide-up-delay-7">
          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-white mb-6">Contact Information</h4>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                onClick={() => window.open("mailto:emrekaplaneer@gmail.com", "_blank")}
              >
                <Mail className="h-4 w-4 mr-3" />
                emrekaplaneer@gmail.com
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                onClick={() => window.open("mailto:emre@leadlake.co", "_blank")}
              >
                <Mail className="h-4 w-4 mr-3" />
                emre@leadlake.co
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                onClick={() => window.open("mailto:info@esoautomations.com", "_blank")}
              >
                <Mail className="h-4 w-4 mr-3" />
                info@esoautomations.com
              </Button>
            </div>
          </div>
          <p className="text-gray-500 text-lg">
            © 2024 Emre Kaplaner. Built with Next.js and deployed on Cloudflare Pages.
          </p>
        </footer>
      </div>

      {/* Load Vapi Widget */}
      <Script src="/widget.js" strategy="afterInteractive" />
    </div>
  );
}
