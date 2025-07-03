import type { ApiHomePageHomePage } from '@/types/strapi/generated/contentTypes';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import qs from 'qs';

import { Hero } from '@/components/hero';
import { LayoutGrid } from '@/components/layout-grid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { getMarkdownContent } from '@/lib/markdown';
import { getImage, getStrapiData } from '@/lib/utils';

export default async function Homepage() {
  const query = qs.stringify({
    populate: {
      hero: true,
      logo: true,
      projects: {
        populate: {
          logo: true,
        },
      },
      members: {
        populate: {
          picture: true,
        },
      },
      partners: {
        populate: {
          logo: true,
        },
      },
    },
  });

  const apiData = await getStrapiData<ApiHomePageHomePage>(
    `home-page?${query}`,
  );

  const {
    description,
    hero,
    logo,
    cta_join,
    cta_projects,
    cta_donation,
    vision_description,
    mission_description,
    values_description,
    association_description,
    projects,
    members,
    partners,
  } = apiData;

  const logoImage = getImage(logo);
  const heroImage = getImage(hero);

  const formattedVisionDescription
    = await getMarkdownContent(vision_description);
  const formattedMissionDescription
    = await getMarkdownContent(mission_description);
  const formattedValuesDescription
    = await getMarkdownContent(values_description);
  const formattedAssociationDescription = await getMarkdownContent(
    association_description,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <section>
          <Hero />
        </section>

        <StatsSection />

        <ActionSection />

        <ProjectSection />

        <EventSection />

        <section className="bg-white py-12">
          <div className="container mx-auto px-28">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="max-w-sm">
                <h2 className="mb-4 text-center text-2xl font-bold">
                  Notre vision
                </h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedVisionDescription,
                  }}
                />
              </div>
              <div className="max-w-sm">
                <h2 className="mb-4 text-center text-2xl font-bold">
                  Notre mission
                </h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedMissionDescription,
                  }}
                />
              </div>
              <div className="max-w-sm">
                <h2 className="mb-4 text-center text-2xl font-bold">
                  Nos valeurs
                </h2>
                <div
                  className="text-md"
                  dangerouslySetInnerHTML={{
                    __html: formattedValuesDescription,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <p className="mb-2 text-center text-3xl font-bold">Les news</p>
          <p className="mb-2 text-center text-lg font-bold">
            La Saison 12 Data For Good
          </p>
          <p className="text-center">
            La saison 12 de Data For Good a commencé (3 mois entre le 3 février
            2024 et fin avril), retrouvez toutes les informations sur cette page
          </p>
          <img
            src="https://dataforgood.fr/img/saison12.png"
            alt="News"
            className="mt-8 w-full px-12"
          />
        </section>

        <section className="mx-auto bg-gradient-to-b from-white via-[#f5f9d8] to-white py-12 lg:px-64">
          <p className="mb-4 text-center text-3xl font-bold">
            L'association Data For Good
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Image
              src="https://dataforgood.fr/img/events.jpg"
              alt="Events"
              width={500}
              height={300}
            />
            <div
              className="text-md"
              dangerouslySetInnerHTML={{
                __html: formattedAssociationDescription,
              }}
            />
          </div>
        </section>

        <section className="container mx-auto py-12">
          <p className="mb-4 text-center text-3xl font-bold">
            Les projets Data For Good
          </p>
          <p className="text-center">
            Plus d'informations dans la page projets
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 px-32">
            {projects?.map((project: typeof projects) => (
              <img
                key={project.id}
                src={getImage(project.logo)}
                alt={project.title}
                className="max-h-20 max-w-32"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto bg-gradient-to-b from-white via-[#f5f9d8] to-white py-12">
          <p className="mb-4 text-center text-3xl font-bold">
            L'équipe Data For Good
          </p>
          <p className="text-center">
            🖐 Vous pouvez contacter l'équipe à hellodataforgood@gmail.com
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 px-64">
            {members?.map((member: typeof members) => (
              <div key={member.id} className="flex flex-col items-center">
                <Image
                  src={getImage(member.picture)}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mb-2 rounded-full"
                />
                <span className="text-sm font-semibold uppercase text-[#1e9aa0]">
                  {member.name}
                </span>
                <span className="text-sm">{member.position}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto py-12">
          <p className="mb-4 text-center text-3xl font-bold">Nos partenaires</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 px-48">
            {partners?.map((partner: typeof partners) => (
              <img
                key={partner.id}
                src={getImage(partner.logo)}
                alt={partner.name}
                className="max-h-20 max-w-32"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="w-full bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-4xl font-bold lg:text-5xl">+100</p>
            <p className="text-sm lg:text-base">projets réussis</p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold lg:text-5xl">+6000</p>
            <p className="text-sm lg:text-base">bénévoles</p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold lg:text-5xl">11</p>
            <p className="text-sm lg:text-base">ans d&apos;existence</p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl font-bold lg:text-5xl">+000</p>
            <p className="text-sm lg:text-base">partenaires financiers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionSection() {
  const accordionItems = [
    {
      title: 'Climat et biodiversité',
      subtitle: 'rerehzrezhrezrezrezrez',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      title: 'Justice sociale',
      subtitle: 'rerehzrezhrezrezrezrez',
      content:
        'Yes. It comes with default styles that matches the other components\' aesthetic.',
    },
    {
      title: 'Démocratie',
      subtitle: 'rerehzrezhrezrezrezrez',
      content:
        'Yes. It\'s animated by default, but you can disable it if you prefer.',
    },
    {
      title: 'Impact numérique',
      subtitle: 'rerehzrezhrezrezrezrez',
      content:
        'Yes. It\'s animated by default, but you can disable it if you prefer.',
    },
  ];

  return (
    <section className="container mx-auto w-full p-12 lg:px-32 lg:py-36 ">
      <h2 className="mb-12 text-4xl font-bold">Nos actions</h2>
      <div className="grid gap-10 text-xl md:grid-cols-2">
        <div>
          <p className="mb-6">
            Data For Good est une association loi 1901 créée en 2014 qui is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model tex.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Button variant="outline">En savoir plus sur l'association</Button>
      </div>

      <div className="mt-20">
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-6">
                <span className="text-3xl font-bold uppercase">
                  {item.title}
                </span>
                <span>{item.subtitle}</span>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ProjectSection() {
  const projects = [
    {
      name: 'Bloom',
      description:
        'Suivre les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)',
      href: '/',
      thumbnail: 'https://dataforgood.fr/img/projects/bloom.png',
      className: 'col-span-1',
    },
    {
      name: 'Tax Observatory',
      description:
        'Compilation de données sur la localisation des profits de multinationales afin de mieux appréhender l’évasion fiscale et l’optimisation fiscale agressive',
      href: '/',
      thumbnail: 'https://dataforgood.fr/img/projects/eutaxobservatory.png',
      className: 'md:col-span-2',
    },
    {
      name: 'GenAI Impact',
      description:
        'Mettre en lumière l’impacts des technologie de GenAI sur l’environnement, de mieux les comprendre, de les quantifier et de sensibiliser les utilisateurs.',
      href: '/',
      thumbnail: 'https://dataforgood.fr/img/projects/genai-impacts.png',
      className: 'md:col-span-2',
    },
    {
      name: 'Interhop - Linkr',
      description:
        'Développer des plugins qui apporteront de nouvelles fonctionnalités low-code à l’application, aidant ainsi les cliniciens et data scientists à analyser les données de santé',
      href: '/',
      thumbnail: 'https://dataforgood.fr/img/projects/linkr.png',
      className: 'col-span-1',
    },
  ];

  return (
    <section className="mx-auto w-full bg-gray-100 p-12 text-center lg:px-32 lg:py-24">
      <h2 className="mb-12 text-4xl font-bold">Nos projets</h2>
      <LayoutGrid cards={projects} />
      <div className="mt-32 flex">
        <Button variant="outline" className="mx-auto">
          Voir tous les projets
          {' '}
          <ArrowRightIcon className="ml-2" />
        </Button>
      </div>
    </section>
  );
}

function EventSection() {
  const events = [
    {
      datetime: '2024-02-03T00:00:00.000Z',
      title: 'Saison 12 Data For Good',
      description:
        'La saison 12 de Data For Good a commencé (3 mois entre le 3 février 2024 et fin avril), retrouvez toutes les informations sur cette page',
      thumbnail: 'https://dataforgood.fr/img/saison12.png',
    },
    {
      datetime: '2023-02-03T00:00:00.000Z',
      title: 'Saison 11 Data For Good',
      description:
        'La saison 11 de Data For Good a commencé (3 mois entre le 3 février 2024 et fin avril), retrouvez toutes les informations sur cette page',
      thumbnail: 'https://dataforgood.fr/img/saison12.png',
    },
    {
      datetime: '2022-02-03T00:00:00.000Z',
      title: 'Saison 10 Data For Good',
      description:
        'La saison 12 de Data For Good a commencé (3 mois entre le 3 février 2024 et fin avril), retrouvez toutes les informations sur cette page',
      thumbnail: 'https://dataforgood.fr/img/saison12.png',
    },
    {
      datetime: '2021-02-03T00:00:00.000Z',
      title: 'Saison 9 Data For Good',
      description:
        'La saison 12 de Data For Good a commencé (3 mois entre le 3 février 2024 et fin avril), retrouvez toutes les informations sur cette page',
      thumbnail: 'https://dataforgood.fr/img/saison12.png',
    },
  ];

  return (
    <section className="mx-auto w-full p-12 lg:px-32 lg:py-24">
      <div className="text-left">
        <h2 className="mb-4 text-3xl font-bold">Prochains événements</h2>
        <p>
          Chaque mois nous organisons des événements comme des conférences,
          hackathons. En ligne: Paris, Lyon, Bordeaux ...
        </p>
        <Button className="my-4" variant="outline">
          Voir tous les événements
          {' '}
          <ArrowRightIcon className="ml-2" />
        </Button>
      </div>

      <div className="flex gap-4">
        {events.map(event => (
          <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
            <img
              className="h-auto w-full rounded-t-xl"
              src={event.thumbnail}
              alt="Card Image"
            />
            <div className="p-4 text-left md:p-5">
              <span className="text-gray-500 text-muted-foreground dark:text-neutral-400">
                {event.datetime}
              </span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {event.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
                {event.description}
              </p>
              <Button className="mt-4">S'inscrire</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
