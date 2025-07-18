import client from '@/lib/strapi-client';

export default async function Homepage() {
  const { data, error } = await client.GET('/home-page');
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      Title:
      {data.data?.title}
    </div>
  );
}
