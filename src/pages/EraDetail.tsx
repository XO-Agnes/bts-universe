import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { eras } from '@/data/eras';

export default function EraDetail() {
  const { id } = useParams<{ id: string }>();
  const era = eras.find((e) => e.id === id);

  if (!era) {
    return (
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 pb-24">
        <p className="display text-4xl text-paper mb-6">ERA NOT FOUND</p>
        <Link to="/eras" className="text-xs tracking-wide2 font-semibold text-accent link-underline">
          ← BACK TO ERAS
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24 relative">
        <div className="absolute top-24 right-6 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <Link to="/eras" className="inline-flex items-center gap-2 text-xs tracking-wide2 text-muted hover:text-accent transition-colors mb-8">
          <ArrowLeft size={14} strokeWidth={1.5} />
          BACK TO ERAS
        </Link>
        <p className="display text-7xl md:text-8xl text-accent leading-none mb-4">{era.year}</p>
        <h1 className="display text-5xl sm:text-7xl md:text-8xl text-paper relative z-10">{era.title}</h1>
        <div className="mt-8 max-w-2xl">
          <div className="h-px w-16 bg-accent mb-6" />
          <p className="text-base md:text-lg text-muted leading-relaxed">{era.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="relative aspect-square border border-rule bg-gradient-to-br from-panel to-ink overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="display text-3xl text-muted/20 group-hover:text-accent/30 transition-colors duration-500 text-center px-4">
                  {era.title}
                </span>
              </div>
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-accent animate-glowPulse" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-wide2 text-accent uppercase mb-3">Theme</p>
              <p className="text-lg text-paper leading-relaxed">{era.theme}</p>
            </div>

            <div className="h-px w-full bg-rule" />

            <div>
              <p className="text-xs tracking-wide2 text-accent uppercase mb-3">Releases</p>
              <p className="text-sm text-muted leading-relaxed">{era.subtitle}</p>
            </div>

            <div className="h-px w-full bg-rule" />

            <div>
              <p className="text-[10px] tracking-ultra text-muted uppercase mb-3">Key Tracks</p>
              <div className="flex flex-wrap gap-2">
                {era.tracks.map((track) => (
                  <span key={track} className="text-xs border border-rule px-3 py-1.5 text-paper hover:border-accent hover:text-accent transition-colors cursor-default">
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
