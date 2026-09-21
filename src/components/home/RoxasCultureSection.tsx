import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CompassIcon, FishIcon, WavesIcon, SparklesIcon, ArrowRightIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export const RoxasCultureSection: FC = () => {
  const culturalHighlights = [
    {
      title: 'Seafood Capital of the Philippines',
      badge: 'Culinary Heritage',
      description:
        'Famous across the archipelago for pristine marine bounty: succulent oysters, blue crabs, giant prawns, and the rare angel wings clam (Diwal).',
      icon: <FishIcon className='w-6 h-6 text-sky-600' />,
      accent: 'border-t-4 border-t-sky-500',
    },
    {
      title: 'Baybay Beach & Panay River',
      badge: 'Coastal Ecology',
      description:
        'A scenic 7-kilometer coastline along the Sibuyan Sea with seaside seafood dining, eco-tourism boat cruises along Panay River, and breathtaking sunsets.',
      icon: <WavesIcon className='w-6 h-6 text-cyan-600' />,
      accent: 'border-t-4 border-t-cyan-500',
    },
    {
      title: 'Capiz Shell Artistry',
      badge: 'Living Tradition',
      description:
        'The heart of traditional Philippine windowpane oyster craftsmanship, transforming translucent sea shells into world-class lighting, windows, and decorative arts.',
      icon: <SparklesIcon className='w-6 h-6 text-amber-500' />,
      accent: 'border-t-4 border-t-amber-500',
    },
    {
      title: 'Civic Pride & Historic Legacy',
      badge: 'Historic Heartland',
      description:
        'Named in honor of President Manuel A. Roxas, featuring Spanish-era heritage plazas, historical churches, and vibrant community celebrations.',
      icon: <CompassIcon className='w-6 h-6 text-indigo-600' />,
      accent: 'border-t-4 border-t-indigo-500',
    },
  ];

  return (
    <section className='py-12 bg-linear-to-b from-sky-50/50 via-white to-white'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-10'>
          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-xs font-bold bg-sky-100 text-sky-800 tracking-wide'>
              <span>🏛️</span>
              <span>Identity & Culture</span>
            </div>
            <h2 className='text-2xl md:text-3xl font-black text-slate-900 tracking-tight'>
              Discover the Spirit of Roxas City
            </h2>
            <p className='mt-2 text-slate-600 text-sm md:text-base leading-relaxed'>
              Combining centuries of maritime history with accessible civic technology, 
              BetterRoxas connects every resident and visitor to the heartbeat of Capiz.
            </p>
          </div>
          <div className='mt-4 md:mt-0'>
            <Link
              to='/government'
              className='inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors'
            >
              <span>Explore City Directory</span>
              <ArrowRightIcon className='w-4 h-4' />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {culturalHighlights.map((item, idx) => (
            <Card
              key={idx}
              className={`roxas-hover-card bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all rounded-xl overflow-hidden ${item.accent}`}
            >
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='p-2.5 rounded-lg bg-slate-50 border border-slate-100 shadow-2xs'>
                    {item.icon}
                  </div>
                  <span className='text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded'>
                    {item.badge}
                  </span>
                </div>
                <h3 className='font-bold text-slate-900 text-base mb-2 leading-snug'>
                  {item.title}
                </h3>
                <p className='text-xs leading-relaxed text-slate-600 grow'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoxasCultureSection;
