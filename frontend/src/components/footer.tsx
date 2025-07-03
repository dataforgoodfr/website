import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Footer() {
  const about = {
    title: 'à propos',
    links: [
      { title: 'Le fonctionnement', href: '#' },
      { title: 'Nos axes d\'action', href: '#' },
      { title: 'Nos antennes', href: '#' },
      { title: 'Nos rapports d\'activité', href: '#' },
      { title: 'Nous contacter', href: '#' },
      { title: 'On recrute', href: '#' },
      { title: 'FAQ', href: '#' },
      { title: 'CGU', href: '#' },
    ],
  };

  const projects = {
    title: 'nos projets',
    links: [
      { title: 'À venir', href: '#' },
      { title: 'En cours', href: '#' },
      { title: 'Passés', href: '#' },
      { title: 'Hors saison', href: '#' },
    ],
  };

  const events = {
    title: 'nos événements',
    links: [
      { title: 'Webinaires', href: '#' },
      { title: 'Meetings', href: '#' },
      { title: 'Conférnces', href: '#' },
      { title: '????', href: '#' },
      { title: '????', href: '#' },
    ],
  };

  const resources = {
    title: 'Nos ressources',
    links: [
      { title: 'Conférences', href: '#' },
      { title: 'Formations', href: '#' },
      { title: 'Articles de presse', href: '#' },
      { title: 'Serment d\'Hippocrate', href: '#' },
      { title: 'IA Générative', href: '#' },
      { title: 'Charte diversité', href: '#' },
    ],
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="relative px-4">
            <div className="mb-2 flex items-center gap-2">
              <Image
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fs3.fr-par.scw.cloud%2Fstrapi-uploads%2Flogo_dfg_new2_78089b7aec.png&w=384&q=75"
                height={36}
                width={48}
                alt="logo"
              />
              <h2 className="text-xl font-bold tracking-tight">
                Data For Good
              </h2>
            </div>
            <p className="mb-4 text-sm text-black">
              La technologie au service de l'intérêt général.
            </p>
            <div className="mb-4 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="size-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="size-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="size-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="size-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <form className="relative">
              <Label htmlFor="email">S'inscrire à la newsletter</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 size-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="size-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              {`Data For Good © 2014-${new Date().getFullYear()}`}
            </p>
            <div className="absolute -right-4 top-0 size-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">
              {about.title}
            </h3>
            <nav className="space-y-2 text-sm">
              {about.links.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">
              {projects.title}
            </h3>
            <nav className="space-y-2 text-sm">
              {projects.links.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">
              {events.title}
            </h3>
            <nav className="space-y-2 text-sm">
              {events.links.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">
              {resources.title}
            </h3>
            <nav className="space-y-2 text-sm">
              {resources.links.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
