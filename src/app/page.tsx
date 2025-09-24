'use client'

import { Github, Linkedin, FileText, Sun, Moon, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-7xl justify-center mx-auto py-[100px] px-10 min-h-screen text-black dark:text-[#f5f5f5] transition-colors">
      {/* Header */}
      <header>
        <div className="flex gap-2 items-center">
          <h1 className="text-[27px] font-bold">John Smith</h1>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative flex items-center justify-center p-0 bg-transparent border-none cursor-pointer text-[#767676] dark:text-[#b0b0b0] hover:text-[#5c98ff] transition-colors w-6 h-6"
            aria-label="Toggle Theme"
          >
            <Sun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
        <p className="text-[19px] mt-2">
          Job Title @ <span className="text-[#5c98ff]"> Nama Company</span>
        </p>
      </header>

      {/* Social Links */}
      <ul className="flex gap-[10px] mt-4" aria-label="Social Links">
        <li>
          <a href="#" aria-label="GitHub" className="text-[#767676] dark:text-[#b0b0b0] hover:text-[#5c98ff] transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="LinkedIn" className="text-[#767676] dark:text-[#b0b0b0] hover:text-[#5c98ff] transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Resume" className="text-[#767676] dark:text-[#b0b0b0] hover:text-[#5c98ff] transition-colors">
            <FileText className="w-6 h-6" />
          </a>
        </li>
      </ul>

      {/* Experience Section */}
      <section className="py-2 mt-6" aria-label="Experience">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-[19px] font-bold mb-[2px]">IT specialist</h2>
            <p className="mt-3">amazon.com 2025 - present</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="mt-6" aria-label="Projects">
        <div className="mb-6">
          <h2 className="text-[19px] font-bold mb-2">Nama website</h2>
          <p className="mt-2 mb-4">
            Organize your daily tasks and boost productivity.
          </p>
          
          {/* Project Skills */}
          <ul className="flex gap-[10px] mb-4">
            {['React.js', 'TailwindCSS', 'Firebase', 'Google Cloud'].map((skill) => (
              <Badge key={skill}>
                {skill}
              </Badge>
            ))}
          </ul>

          {/* Project Links */}
          <ul className="flex gap-[10px]">
            <li>
              <a href="#" className="text-[#767676] dark:text-[#b0b0b0] hover:text-[#5c98ff] transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-[#767676] dark:text-[#b0b0b0] hover:text-[#5c98ff] transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}