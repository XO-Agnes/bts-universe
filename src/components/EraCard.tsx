import { Link } from 'react-router-dom';
import type { Era } from '@/data/eras';

export default function EraCard({ era, index }: { era: Era; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? '' : 'lg:[direction:rtl]'}`}>
      {/* Year / index column */}
      <div className="lg:col-span-3 lg:[direction:ltr]">
        <p className="display text-7xl md:text-8xl text-accent leading-none">{era.year}</p>
        <p className="text-xs tracking-ultra text-muted mt-4">ERA {String(index + 1).padStart(2, '0')}</p>
      </div>

     {/* Era artwork */}
      <div className="lg:col-span-4 lg:[direction:ltr]">
        <div className="relative aspect-[4/3] border border-rule overflow-hidden group">
          <img
            src={era.artwork}
            alt={`${era.title} artwork`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
      
          <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
      
          {/* Timeline dot */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-accent animate-glowPulse" />
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-5 lg:[direction:ltr]">
        <h3 className="display text-3xl md:text-4xl text-paper mb-2">{era.title}</h3>
        <p className="text-xs tracking-wide2 text-accent uppercase mb-4">{era.theme}</p>
        <p className="text-sm text-muted leading-relaxed mb-6">{era.description}</p>

        <div className="h-px w-full bg-rule mb-6" />

        <p className="text-[10px] tracking-ultra text-muted uppercase mb-3">Key Tracks</p>
        <div className="flex flex-wrap gap-2">
          {era.tracks.map((track) => (
            <span key={track} className="text-xs border border-rule px-3 py-1.5 text-paper hover:border-accent hover:text-accent transition-colors cursor-default">
              {track}
            </span>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted/60 italic">{era.subtitle}</p>

        <Link
          to={`/eras/${era.id}`}
          className="group inline-flex items-center gap-3 border border-rule px-5 py-3 hover:border-accent transition-all duration-300 mt-8"
        >
          <span className="text-xs tracking-wide2 font-semibold text-paper group-hover:text-accent transition-colors">
            EXPLORE ERA
          </span>
          <span className="w-6 h-px bg-paper group-hover:bg-accent group-hover:w-10 transition-all duration-300" />
        </Link>
      </div>
    </article>
  );
}
