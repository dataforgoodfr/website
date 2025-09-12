'use client';

import { useTranslations } from 'next-intl';
import { CtaWithImage, EditoCard, LargeTextImage, MembersBlock, NewsletterBlock, PartnersBlock, Title, TestimoniesCarousel } from '@/components';
import { IMembers } from '@/lib/types';
import client from '@/lib/strapi-client';


async function fetchAboutPageData() {
  return await client.GET('/about', {
    params: {
      query: {
        populate: {
          cta_left: {
            populate: "*"
          },
          cta_right: {
            populate: "*"
          },
          testimonials: {
            populate: "*"
          },
          map_cta: {
            populate: "*"
          },
          volunteer_cta: {
            populate: "*"
          },
          funders: {
            populate: "*"
          },
          board_of_directors: {
            populate: "*"
          },
          employees: {
            populate: "*"
          },
          scientific_committee: {
            populate: "*"
          },
          strategic_committee: {
            populate: "*"
          },
          division_managers: {
            populate: "*"
          }
        }
      }
    }
  });
}

type AboutPageData = NonNullable<NonNullable<Awaited<ReturnType<typeof fetchAboutPageData>>["data"]>["data"]>;

function transformTestimonials(testimonials: NonNullable<AboutPageData["testimonials"]>) {
  return testimonials.map((testimonial) => ({
    id: testimonial.id,
    author: testimonial.author,
    content: testimonial.quote,
    image: testimonial.avatar?.url,
  }));
}

function transformFunders(funders: NonNullable<AboutPageData["funders"]>) {
  return funders.map((partner) => ({
    id: partner.id,
    name: partner.name,
    image: partner.logo?.url,
    link: partner.link ?? "",
  }));
}

function transformMember(member: NonNullable<AboutPageData["board_of_directors"]>) {
  return {
    id: member.id,
    name: member.name,
    role: member.role,
    image: member.avatar?.url,
  };
}

function transformMembers({board_of_directors, employees, scientific_committee, strategic_committee, division_managers} : {
  board_of_directors: Array<NonNullable<AboutPageData["board_of_directors"]>>;
  employees: Array<NonNullable<AboutPageData["employees"]>>;
  scientific_committee: Array<NonNullable<AboutPageData["scientific_committee"]>>;
  strategic_committee: Array<NonNullable<AboutPageData["strategic_committee"]>>;
  division_managers: Array<NonNullable<AboutPageData["division_managers"]>>;
}) {
  return [
    {
      title: 'Le conseil d\'administration',
      members: board_of_directors.map(transformMember),
    },
    {
      title: 'Les salariés',
      members: employees.map(transformMember),
    },
    {
      title: 'Le comité scientifique',
      members: scientific_committee.map(transformMember),
    },
    {
      title: 'Le comité stratégique',
      members: strategic_committee.map(transformMember),
    },
    {
      title: 'Les responsables de pôles',
      members: division_managers.map(transformMember),
    },
  ];
}

export default async function AboutPage() {
  const t = useTranslations('about');

  const { data } = await fetchAboutPageData();

  const aboutPageData = data!.data!

  const testimonies = transformTestimonials(aboutPageData.testimonials);
  const funders = transformFunders(aboutPageData.funders);
  const members: IMembers[] = transformMembers({
    board_of_directors: aboutPageData.board_of_directors,
    employees: aboutPageData.employees,
    scientific_committee: aboutPageData.scientific_committee,
    strategic_committee: aboutPageData.strategic_committee,
    division_managers: aboutPageData.division_managers,
  });


  return (
    <>
      <div className="container my-lg">
        <Title className="mb-md max-w-5xl" variant="medium">
          {aboutPageData.introduction}
        </Title>
      </div>

      <div className="my-lg container flex flex-col md:flex-row gap-8">
        <div className="md:flex-1 flex justify-end">
          <CtaWithImage
              title={{
              children: aboutPageData.cta_left?.title,
              rotation: -18,
              className: "relative top-8",
            }}
            content={{
              text: aboutPageData.cta_left?.content,
              rotation: -7,
              className: "sm:left-8",
            }}
            image={aboutPageData.cta_left?.image.url}
            imagePosition="left"
            contentClassName="relative md:-top-24 md:-left-12"
            cta={
              { text: aboutPageData.cta_left?.cta.text, link: aboutPageData.cta_left?.cta.link, rotation: -3.7, className: "relative sm:left-[182px] -top-4" }
            }
          />
        </div>

        <CtaWithImage
            title={{
            children: aboutPageData.cta_right?.title,
            rotation: -4,
          }}
          content={{
            text: aboutPageData.cta_right?.content,
            rotation: 1.5,
            className: "sm:left-6",
          }}
          image={aboutPageData.cta_right?.image.url}
          className="md:flex-1"
          contentClassName="relative md:top-24"
          cta={
            { text: aboutPageData.cta_right?.cta.text, link: aboutPageData.cta_right?.cta.link, rotation: 0.5, className: "relative sm:left-48 -top-2" }
          }
        />
      </div>

      <div className="my-lg container">
        <Title className="mb-md" level={2} hasSeparator variant="medium">
          {t('testimonies.title')}
        </Title>
        <TestimoniesCarousel
          testimonies={testimonies}
        />
      </div>

      <EditoCard
        title={aboutPageData.map_cta?.title}
        image={aboutPageData.map_cta?.image.url}
        ctaText={aboutPageData.map_cta?.cta.text}
        ctaLink={aboutPageData.map_cta?.cta.link}
        className="my-lg"
      >
        <>
          {aboutPageData.map_cta?.content?.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </>
      </EditoCard>

      <LargeTextImage
        title={aboutPageData.volunteer_cta?.title}
        content={aboutPageData.volunteer_cta?.content}
        image={aboutPageData.volunteer_cta?.image.url}
        ctaText={aboutPageData.volunteer_cta.cta.text}
        ctaLink={aboutPageData.volunteer_cta.cta.link}
        className="my-lg"
      />

      <PartnersBlock
        title={t('partners.title')}
        partners={funders}
        className="my-lg"
      />

      <MembersBlock
        title={t('members.title')}
        categories={members}
        className="my-lg"
      />

      <NewsletterBlock />
    </>
  );
}
