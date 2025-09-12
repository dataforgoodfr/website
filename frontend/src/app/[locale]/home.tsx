'use client';

import { useTranslations } from 'next-intl';
import { ThematicsBlock, ImagesCarousel, ResultsCard, NewsletterBlock, NewsSmallBlock, TalksBlock, Title, TitleProps, HeroBlock } from '@/components';
import client from '@/lib/strapi-client';

async function fetchHomepageData() {
  return await client.GET('/home-page', {
    params: {
      query: {
        populate: {
          hero: {
            populate: "*"
          },
          results: {
            populate: "*"
          },
          featured_projects: {
            fields: ["title", "short_description"],
            populate: "thumbnail"
          },
          thematics: {
            populate: "*"
          },
          events: {
            populate: "*"
          },
          resources: {
            populate: {
              blog: {
                populate: {
                  author: {
                    fields: ["name"]
                  },
                  thumbnail: {
                    fields: ["url"]
                  }
                }
              },
              press_release: {
                populate: "*"
              }
            }
          }
        }
      }
    }
  });
}

type HomepageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchHomepageData>>["data"]>["data"]>;

// Data transformation functions
function transformHeroData(heroData: NonNullable<HomepageData["hero"]>) {
  return {
    image: heroData.image.url,
    title: {
      level: 1 as TitleProps['level'],
      variant: "big" as TitleProps['variant'],
      children: heroData.title,
      colors: 'text-white bg-building',
      className: "drop-shadow-3 drop-shadow-black before:-z-1",
      rotation: -3.47,
    },
    subtitle: {
      level: 2 as TitleProps['level'],
      variant: "medium" as TitleProps['variant'],
      children: heroData.subtitle || '',
      colors: 'text-black bg-white',
      className: "drop-shadow-1 drop-shadow-black before:-z-1",
      rotation: -3.47,
    },
    talk: heroData.talk,
  };
}

function transformProjectsData(projects: NonNullable<HomepageData["featured_projects"]>) {
  return projects.map(project => ({
    id: project.id,
    src: project.thumbnail?.url || '',
    title: project.title || '',
    alt: project.title || '',
    description: project.short_description || '',
    ctaText: 'Voir le projet',
  }))
}

function transformResultsData(results: NonNullable<HomepageData["results"]>) {
  return results.map((result) => ({
    id: result.id.toString(),
    number: parseInt(result.stat),
    text: result.description,
    linkTarget: `/projects/${result.id}`,
    linkLabel: 'Voir le projet',
  }));
}

function transformEventsData(events: NonNullable<HomepageData["events"]>) {
  return events.map((event) => ({
    id: event.id,
    title: event.name,
    date: new Date(event.date).toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric' }),
    image: event.image.url,
    tag: "Evenement",
    link: event.link,
  }));
}


function transformResourcesData(resources: NonNullable<HomepageData["resources"]>) {
  return resources.map((resource) => {
    const isBlog = !!resource.blog;

    return {
      id: resource.id,
      type: isBlog ? 'article' : 'press_release',
      author: isBlog ? ( resource.blog?.author?.name || 'Data For Good') : resource.press_release.media_name,
      talk: isBlog ? resource.blog.title : resource.press_release.title,
      image: isBlog ? resource.blog.thumbnail.url : "/images/dataforgood.svg",
      ctaText: isBlog ? 'Lire l\'article' : 'Lire la presse',
      ctaLink: isBlog ? `/articles/${resource.blog.slug}` : resource.press_release.article_link,
    }
  });
}

function transformThematicsData(thematics: NonNullable<HomepageData['thematics']>) {
  return thematics.map(thematic => ({
    title: {
      children: thematic.name,
      props: {
        colors: 'text-black bg-alive',
        className: "drop-shadow-3 drop-shadow-black before:-z-1",
        rotation: -2.58,
      }
    },
    id: thematic.id.toString(),
    talk: thematic.description,
    talkOffset: 10,
    image: thematic.thumbnail.url,
    imageWidth: 251,
    imageHeight: 318,
    ctaText: "Voir les projets",
    ctaLink: "/projets",
  }));
}

export default async function Homepage() {
  const t = useTranslations('home');

  const { data } = await fetchHomepageData()

  const homePageData = data!.data!;
  const hero = transformHeroData(homePageData.hero);
  const projects = transformProjectsData(homePageData.featured_projects || []);
  const results = transformResultsData(homePageData.results || []);
  const events = transformEventsData(homePageData.events || []);
  const resources = transformResourcesData(homePageData.resources || []);
  const thematics = transformThematicsData(homePageData.thematics || []);

  return (
    <>
      <HeroBlock className='mt-lg'
        {...hero}
        title={{ ...hero.title, children: t('hero.title') }}
        subtitle={{ ...hero.subtitle, children: t('hero.subtitle') }}
      />
      <div className="container mt-lg mb-sm">
        <Title level={2} variant="medium">
          {homePageData.project_carousel_title!}
        </Title>
      </div>
      <ImagesCarousel className="mb-lg" images={projects} />

      <TalksBlock
        title={homePageData.resources_section_title!}
        talks={resources}
      />
      <ThematicsBlock
        title={homePageData.thematics_section_title!}
        thematics={thematics.map(t => ({ ...t, id: t.id.toString() }))}
        className="my-lg"
      />
      <ResultsCard
        title={homePageData.results_section_title!}
        className="my-lg"
        results={results.map(r => ({ ...r, linkLabel: 'Voir le projet' }))}
      />

      <NewsSmallBlock
        title={t('news.title')}
        blocks={events}
        className='my-lg'
      />

      <NewsletterBlock />
    </>
  );
}
