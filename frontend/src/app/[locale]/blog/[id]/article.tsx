
'use client';

import { ArticleHeroBlock, EditoCard, Kpis, Title } from '@/components';

export default function ArticlePage() {
  const heroBlock = {
    image: '/images/events/event-1.jpg',
    title: 'Article 1',
    introduction: 'Introduction de l\'article 1',
    date: '2024-01-01',
    readTime: '10 min',
    author: {
      name: 'John Doe',
      link: '/blog/author/john-doe',
    },
  };

  return (
      <div className="mb-lg">
        <ArticleHeroBlock {...heroBlock} className="mb-lg" />

        <div className="container-md">

          {/* If title */}
          <Title level={2} variant="medium" className="mb-sm">Il est temps d'accélérer</Title>

          {/* If lead */}
          <EditoCard className="lead" contentClassName="container-sm my-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </EditoCard>

          {/* If keys */}
          <Kpis kpis={[
            {
              id: '1',
              title: '100',
              description: 'Lorem ipsum dolor sit amet',
            },
            {
              id: '2',
              title: '200',
              description: 'Lorem ipsum dolor sit amet',
            },
            {
              id: '3',
              title: '300',
              description: 'Lorem ipsum dolor sit amet',
            },
          ]} className="my-sm" />

          {/* Main content */}
          <EditoCard className="my-sm">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>Lorem ipsum dolor sit amet</h3>
            <h4>Lorem ipsum dolor sit amet</h4>
            <h5>Lorem ipsum dolor sit amet</h5>
            <h6>Lorem ipsum dolor sit amet</h6>
            <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <strong>laboris</strong> nisi ut aliquip ex ea commodo consequat.</p>
            <img src="https://picsum.photos/1000/400?random=1" alt="Lorem ipsum dolor sit amet" />
            <p>Lorem ipsum dolor sit amet, <em>consectetur</em> adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ol>
          </EditoCard>
        </div>
      </div>
  );
}
