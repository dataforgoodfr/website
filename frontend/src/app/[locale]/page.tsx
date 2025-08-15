import { Title } from '@/components/atoms';

export default async function Homepage() {
  /* const { data, error } = await client.GET('/home-page');
  if (error) {
    return <div>Error</div>;
  } */

  return (
    <div className="p-8 space-y-6">
      <Title level={1} variant="big">
        Page d'accueil DataForGood
      </Title>
    </div>
  );
}
