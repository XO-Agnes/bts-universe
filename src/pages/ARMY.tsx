import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Waveform from '@/components/Waveform';

const milestones = [
  { year: '2013', title: 'The Beginning', text: 'ARMY is born alongside BTS — a fandom named to mean "Adorable Representative M.C. for Youth."' },
  { year: '2015', title: 'I NEED U', text: 'The first music show win. A moment that proved the bond was real and growing.' },
  { year: '2017', title: 'BBMAs', text: 'ARMY votes BTS onto the world stage — Top Social Artist at the Billboard Music Awards.' },
  { year: '2018', title: 'Citi Field', text: 'The first Korean act to headline a US stadium. ARMY filled every seat.' },
  { year: '2020', title: 'Dynamite', text: 'A global #1. ARMY carried BTS to the top of the Billboard Hot 100.' },
  { year: '2022', title: 'Yet To Come', text: 'A decade celebrated together. PROOF honored the road walked — and the road ahead.' },
];

const memories = [
  { title: 'Purple Ocean', text: 'Every concert, a sea of purple lights — ARMY Bombs raised high, turning stadiums into galaxies.' },
  { title: 'Borahae', text: '"I purple you" — a color, a phrase, a promise. V gave ARMY purple, and it became a language of love.' },
  { title: 'Festa', text: 'Each June, BTS and ARMY celebrate their anniversary together — new music, new memories, new milestones.' },
  { title: 'The Pause', text: 'Through enlistment and distance, ARMY holds the line — waiting, streaming, believing. Together apart.' },
];

export default function ARMY() {
  return (
    <div>
      <PageHeader
        index="THE BOND"
        title="ARMY"
        subtitle="More than a fandom — ARMY is the other half of the universe. A bond built on honesty, devotion, and the quiet understanding that no one walks alone."
      />

      {/* Intro statement */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="h-16 mb-12">
            <Waveform bars={40} className="h-full" />
          </div>
          <p className="text-2xl md:text-3xl text-paper leading-relaxed font-light">
            <span className="text-accent">ARMY</span> is not an audience.
            It is a mirror, a shelter, and a force. Where BTS speaks their truth,
            ARMY answers back — with purple oceans, streaming records, and a decade
            of unwavering devotion. This is not a fan club. It is a <span className="ghost-text-accent">universe within a universe.</span>
          </p>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24 border-t border-rule">
        <p className="text-xs tracking-ultra text-accent mb-12">MILESTONES — TOGETHER</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
          {milestones.map((m) => (
            <div key={m.year} className="bg-ink p-8 md:p-10 group hover:bg-panel transition-colors duration-500">
              <p className="display text-5xl text-accent mb-4">{m.year}</p>
              <h3 className="display text-xl text-paper mb-3">{m.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Memories / connection */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24 border-t border-rule">
        <p className="text-xs tracking-ultra text-accent mb-12">MEMORIES &amp; CONNECTION</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {memories.map((mem, i) => (
            <div key={mem.title} className="border-l border-accent/40 pl-8 py-4 group hover:border-accent transition-colors">
              <p className="text-[10px] tracking-ultra text-muted mb-2">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="display text-2xl md:text-3xl text-paper mb-4">{mem.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{mem.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 border-t border-rule overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="display text-4xl md:text-6xl text-paper mb-6">
            BORAHAE.
          </p>
          <p className="text-lg text-muted leading-relaxed mb-12">
            "I purple you." A color between blue and red — the last color of the rainbow,
            meaning trust and love. That is the bond. That is the universe.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-4 border border-rule px-8 py-4 hover:border-accent transition-all duration-300 group"
          >
            <span className="text-xs tracking-wide2 font-semibold text-paper group-hover:text-accent transition-colors">
              RETURN TO THE BEGINNING
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
