"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Sparkles, Code, Brain, Zap } from "lucide-react";
import { useEffect, useState } from "react";

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Available for exciting opportunities</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Emre Kaplaner
              </span>
            </h1>
            <p className="text-2xl text-white/80 mb-8 animate-slide-up-delay-1">
              Full-Stack Developer & AI Systems Engineer
            </p>
            <div className="flex items-center justify-center gap-4 animate-slide-up-delay-2">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Contact
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </div>
          </div>
        </header>

        {/* ESO Automations - Featured Section */}
        <section className="mb-16 animate-slide-up-delay-3">
          <Card className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold animate-pulse">
                  <Zap className="h-3 w-3 mr-1" />
                  Current Position
                </Badge>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-blue-300 animate-pulse" />
                  <Code className="h-5 w-5 text-purple-300 animate-bounce" />
                </div>
              </div>
              <CardTitle className="text-3xl text-white mb-2">Co-Founder & Developer at ESO Automations</CardTitle>
              <CardDescription className="text-xl text-white/80">
                Industry leading voice AI & agentic chatbot company in Australia for dental clinics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed">
                As co-founder and developer, I lead the AI systems development for ESO Automations,
                where we serve over 25 dental clinics across Australia. Our platform provides
                cutting-edge voice AI and intelligent chatbot solutions that revolutionize
                patient communication and clinic operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30 transition-colors">Voice AI</Badge>
                <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30 hover:bg-purple-500/30 transition-colors">Chatbot Development</Badge>
                <Badge className="bg-green-500/20 text-green-200 border border-green-400/30 hover:bg-green-500/30 transition-colors">Dental Industry</Badge>
                <Badge className="bg-orange-500/20 text-orange-200 border border-orange-400/30 hover:bg-orange-500/30 transition-colors">25+ Clients</Badge>
                <Badge className="bg-pink-500/20 text-pink-200 border border-pink-400/30 hover:bg-pink-500/30 transition-colors">Marketing Solutions</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="animate-slide-up-delay-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LeadLake */}
            <Card className="group border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/25">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors">LeadLake</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-white/70 hover:text-white hover:bg-white/10"
                    onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardDescription className="text-white/80 text-lg">
                  AI powered lead generation and enrichment platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  As full-stack developer and co-founder, I built LeadLake to revolutionize
                  how businesses discover and enrich potential leads using advanced AI algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-200 border border-blue-400/30">AI/ML</Badge>
                  <Badge className="bg-green-500/20 text-green-200 border border-green-400/30">Lead Generation</Badge>
                  <Badge className="bg-purple-500/20 text-purple-200 border border-purple-400/30">Data Enrichment</Badge>
                  <Badge className="bg-orange-500/20 text-orange-200 border border-orange-400/30">Full-Stack</Badge>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* ScrapeHub */}
            <Card className="group border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-500/25">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">ScrapeHub</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-white/70 hover:text-white hover:bg-white/10"
                    onClick={() => window.open("https://scrapehub.org/", "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardDescription className="text-white/80 text-lg">
                  Comprehensive scraper extensions for 6 business domains
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/90 leading-relaxed">
                  A complete suite of web scraping extensions covering Google Search, Google Maps,
                  Apollo.io, YellowPages, Facebook Pages, and general website scraping.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Badge className="bg-red-500/20 text-red-200 border border-red-400/30 text-xs">Google Search</Badge>
                  <Badge className="bg-green-500/20 text-green-200 border border-green-400/30 text-xs">Google Maps</Badge>
                  <Badge className="bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs">Apollo.io</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-200 border border-yellow-400/30 text-xs">YellowPages</Badge>
                  <Badge className="bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs">Facebook Pages</Badge>
                  <Badge className="bg-pink-500/20 text-pink-200 border border-pink-400/30 text-xs">Website Scraper</Badge>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-none transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://scrapehub.org/", "_blank")}
                >
                  Explore Tools
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/20 text-center animate-slide-up-delay-5">
          <p className="text-white/60">
            © 2024 Emre Kaplaner. Built with Next.js and deployed on Cloudflare Pages.
          </p>
        </footer>
      </div>
    </div>
  );
}
