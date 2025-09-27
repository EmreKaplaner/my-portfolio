"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Emre Kaplaner
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              Full-Stack Developer & AI Systems Engineer
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </header>

        {/* ESO Automations - Featured Section */}
        <section className="mb-16">
          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Current Position
                </Badge>
              </div>
              <CardTitle className="text-2xl">Co-Founder & Developer at ESO Automations</CardTitle>
              <CardDescription className="text-lg">
                Industry leading voice AI & agentic chatbot company in Australia for dental clinics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                As co-founder and developer, I lead the AI systems development for ESO Automations,
                where we serve over 25 dental clinics across Australia. Our platform provides
                cutting-edge voice AI and intelligent chatbot solutions that revolutionize
                patient communication and clinic operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Voice AI</Badge>
                <Badge>Chatbot Development</Badge>
                <Badge>Dental Industry</Badge>
                <Badge>25+ Clients</Badge>
                <Badge>Marketing Solutions</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LeadLake */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">LeadLake</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardDescription>
                  AI powered lead generation and enrichment platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  As full-stack developer and co-founder, I built LeadLake to revolutionize
                  how businesses discover and enrich potential leads using advanced AI algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Lead Generation</Badge>
                  <Badge variant="secondary">Data Enrichment</Badge>
                  <Badge variant="secondary">Full-Stack</Badge>
                </div>
                <Button
                  className="w-full"
                  onClick={() => window.open("https://www.leadlake.co/", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* ScrapeHub */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">ScrapeHub</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Button>
                </div>
                <CardDescription>
                  Comprehensive scraper extensions for 6 business domains
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  A complete suite of web scraping extensions covering Google Search, Google Maps,
                  Apollo.io, YellowPages, Facebook Pages, and general website scraping.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Badge variant="outline">Google Search</Badge>
                  <Badge variant="outline">Google Maps</Badge>
                  <Badge variant="outline">Apollo.io</Badge>
                  <Badge variant="outline">YellowPages</Badge>
                  <Badge variant="outline">Facebook Pages</Badge>
                  <Badge variant="outline">Website Scraper</Badge>
                </div>
                <Button
                  className="w-full"
                  onClick={() => window.open("https://scrapehub.org/", "_blank")}
                >
                  Explore Tools
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © 2024 Emre Kaplaner. Built with Next.js and deployed on Cloudflare Pages.
          </p>
        </footer>
      </div>
    </div>
  );
}
