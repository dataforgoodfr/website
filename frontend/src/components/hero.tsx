import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 px-4 lg:px-12">
            <div className="flex flex-col gap-4">
              <h1 className="max-w-lg text-left text-4xl font-bold uppercase tracking-tighter md:text-6xl">
                Rediriger la technologie au service de l'intérêt général
              </h1>
            </div>
            <div className="flex flex-row gap-4">
              {/* <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button> */}
              <Button size="lg" className="gap-4">
                Nous rejoindre
              </Button>
            </div>
          </div>
          <div className="aspect-square rounded-md bg-muted"></div>
        </div>
      </div>
    </div>
  );
}
