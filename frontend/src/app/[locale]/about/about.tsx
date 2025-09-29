'use client';

import { useTranslations } from 'next-intl';
import {
  CtaWithImage,
  EditoCard,
  LargeTextImage,
  MembersBlock,
  PartnersBlock,
  Title,
  TestimoniesCarousel,
} from '@/components';
import { IMembers } from '@/lib/types';
import { AboutPageData } from './page';

function transformTestimonials(
  testimonials: NonNullable<AboutPageData['testimonials']>
) {
  return testimonials.map(testimonial => ({
    id: testimonial.id,
    author: testimonial.author,
    content: testimonial.quote,
    image: testimonial.avatar?.url,
  }));
}

function transformFunders(funders: NonNullable<AboutPageData['funders']>) {
  return funders.map(partner => ({
    id: partner.id,
    name: partner.name,
    image: partner.logo?.url,
    link: partner.website_link ?? 'https://www.dataforgood.fr',
  }));
}

function transformMember(
  member: NonNullable<AboutPageData['board_of_directors']>
) {
  return {
    id: member.id,
    name: member.name,
    role: member.role,
    image: member.avatar?.url,
    linkedin: member.linkedin,
  };
}

function transformMembers({
  board_of_directors,
  employees,
  scientific_committee,
  strategic_committee,
  division_managers,
}: {
  board_of_directors: Array<NonNullable<AboutPageData['board_of_directors']>>;
  employees: Array<NonNullable<AboutPageData['employees']>>;
  scientific_committee: Array<
    NonNullable<AboutPageData['scientific_committee']>
  >;
  strategic_committee: Array<NonNullable<AboutPageData['strategic_committee']>>;
  division_managers: Array<NonNullable<AboutPageData['division_managers']>>;
}) {
  return [
    {
      title: "Le conseil d'administration",
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

type AboutProps = {
  data: AboutPageData;
};

export default function AboutPage({ data }: AboutProps) {
  const t = useTranslations('about');

  const testimonies = transformTestimonials(data.testimonials!);
  const funders = transformFunders(data.funders!);
  const members: IMembers[] = transformMembers({
    board_of_directors: data.board_of_directors,
    employees: data.employees,
    scientific_committee: data.scientific_committee,
    strategic_committee: data.strategic_committee,
    division_managers: data.division_managers,
  });

  return (
    <>
      <div className="container mt-lg pt-md">
        <div className="max-w-5xl mx-auto text-center">
          <p className="h2-like">{data.introduction}</p>
        </div>
      </div>

      <div className="mb-lg flex flex-col lg:flex-row lg:justify-between gap-8">
        <div className="flex justify-end w-full sm:my-[200px] md:my-0 lg:w-[770px]">
          <CtaWithImage
            title={{
              children: data.cta_left?.title,
              rotation: -18,
              className: 'relative top-8',
            }}
            content={{
              text: data.cta_left?.content,
              rotation: -7,
              className: 'sm:left-8',
            }}
            image={data.cta_left?.image.url}
            imagePosition="left"
            contentClassName="relative lg:-top-24 lg:-left-12"
            cta={{
              text: data.cta_left?.cta.text,
              link: data.cta_left?.cta.link,
              rotation: -3.7,
              className: 'relative sm:left-[182px] md:-top-4',
            }}
          />
        </div>

        <CtaWithImage
          title={{
            children: data.cta_right?.title,
            rotation: -4,
          }}
          content={{
            text: data.cta_right?.content ?? '',
            rotation: 1.5,
            className: 'sm:left-6',
          }}
          image={data.cta_right?.image.url ?? ''}
          className="w-full lg:w-[770px] overflow-hidden md:overflow-visible"
          contentClassName="relative lg:top-24"
          cta={{
            text: data.cta_right?.cta.text,
            link: data.cta_right?.cta.link,
            rotation: 0.5,
            className: 'relative sm:left-48 -top-2',
          }}
        />
      </div>

      <div className="my-lg container">
        <Title className="mb-md" level={2} hasSeparator variant="medium">
          {t('testimonies.title')}
        </Title>
        <TestimoniesCarousel testimonies={testimonies} />
      </div>

      <EditoCard
        title={data.map_cta?.title}
        image={data.map_cta?.image.url}
        ctaText={data.map_cta?.cta.text}
        ctaLink={data.map_cta?.cta.link}
        className="my-lg"
      >
        <>
          {data.map_cta?.content?.split('\n').map((paragraph, index) => (
            <p className='!ml-0' key={index}>{paragraph}</p>
          ))}
        </>
      </EditoCard>

      <LargeTextImage
        title={data.volunteer_cta?.title}
        content={data.volunteer_cta?.content}
        image={data.volunteer_cta?.image.url}
        ctaText={data.volunteer_cta.cta.text}
        ctaLink={data.volunteer_cta.cta.link}
        className="my-lg"
        internalClassName='max-h-[650px]'
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
    </>
  );
}
