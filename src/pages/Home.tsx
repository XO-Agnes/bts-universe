import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const timelineYears = ['2013', '2015', '2016', '2017', '2019', '2020', '2022', '2026'];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Atmospheric glows */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[180px] pointer-events-none animate-glowPulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[#43216F]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-10 w-full relative z-10">
          {/* Headlines */}
          <div className="space-y-1 md:space-y-2">
            <h1 className="display text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] text-paper leading-[0.82] animate-fadeUp" style={{ animationDelay: '0.15s' }}>
              7 VOICES.
            </h1>
            <h1 className="display text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] ghost-text leading-[0.82] animate-fadeUp" style={{ animationDelay: '0.3s' }}>
              ONE STORY
            </h1>
            <h1 className="display text-[2.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] text-accent leading-[0.82] animate-fadeUp" style={{ animationDelay: '0.45s' }}>
              AN EVER-GROWING UNIVERSE.
            </h1>
          </div>

          {/* Supporting text */}
          <div className="mt-10 md:mt-14 max-w-xl animate-fadeUp" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Seven artists. Seven different worlds. One story that keeps unfolding.
              Explore the music, eras, memories, and moments that made BTS more than a group —
              and ARMY more than an audience.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 animate-fadeUp" style={{ animationDelay: '0.75s' }}>
            <Link
              to="/members"
              className="group inline-flex items-center gap-4 border border-rule px-8 py-4 hover:border-accent transition-all duration-300"
            >
              <span className="text-xs tracking-wide2 font-semibold text-paper group-hover:text-accent transition-colors">
                ENTER THE UNIVERSE
              </span>
              <ArrowDown size={14} className="text-paper group-hover:text-accent transition-colors" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Timeline indicator */}
          <div className="absolute bottom-10 left-6 md:left-10 animate-fadeUp" style={{ animationDelay: '0.9s' }}>
            <p className="display text-2xl md:text-3xl text-paper">
              2013 <span className="text-accent">→</span> <span className="ghost-text-accent">∞</span>
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE TRANSITION */}
      <section className="relative border-y border-rule overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-16">
          <p className="text-[10px] tracking-ultra text-accent mb-8 text-center">THE TIMELINE</p>
          <div className="flex items-center justify-between gap-1 md:gap-2 overflow-x-auto pb-2">
            {timelineYears.map((year, i) => (
              <div key={year} className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                <span className={`display text-lg md:text-3xl transition-colors ${i === 0 ? 'text-paper' : i === timelineYears.length - 1 ? 'text-accent' : 'text-muted'}`}>
                  {year}
                </span>
                {i < timelineYears.length - 1 && (
                  <span className="text-accent text-xs md:text-sm">—</span>
                )}
              </div>
            ))}
            <span className="text-accent text-lg md:text-2xl ml-1">→ ∞</span>
          </div>
        </div>
      </section>

      {/* ABOUT BTS */}
      <section className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-ultra text-accent mb-6">INTRODUCTION</p>
            <h2 className="display text-4xl md:text-5xl text-paper">
              WHO IS<br />BTS?
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg md:text-xl text-paper leading-relaxed">
              <span className="text-accent">BTS</span> (방탄소년단) — short for Bangtan Sonyeondan,
              "Bulletproof Boy Scouts" — is a South Korean group formed by Big Hit Entertainment
              in 2013. Seven members. One vision. A decade of redefining what a boy band could be.
            </p>

            <div className="h-px w-full bg-rule" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs tracking-wide2 text-accent uppercase mb-3">Formation & Debut</p>
                <p className="text-sm text-muted leading-relaxed">
                  Formed in 2013, BTS debuted on June 13 with the single album
                  <span className="text-paper"> "2 COOL 4 SKOOL."</span> They began as a hip-hop
                  act speaking to youth pressure, and grew into a global force spanning pop,
                  R&amp;B, Latin, and orchestral sounds.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-wide2 text-accent uppercase mb-3">The Seven</p>
                <p className="text-sm text-muted leading-relaxed">
                  RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook — each a distinct world of voice,
                  movement, and perspective. Together, they form one interconnected universe.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-rule" />

            <div>
              <p className="text-xs tracking-wide2 text-accent uppercase mb-3">Themes & Meaning</p>
              <p className="text-sm text-muted leading-relaxed max-w-2xl">
                Across their eras, BTS has explored youth and pressure, mental health, self-love,
                the beauty and pain of growing up, and the quiet courage of going on. Their work
                is a running conversation with anyone who has ever felt unseen — a reminder that
                speaking your truth is its own kind of armor.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/members" className="text-xs tracking-wide2 font-semibold text-paper hover:text-accent transition-colors link-underline">
                MEET THE MEMBERS →
              </Link>
              <Link to="/eras" className="text-xs tracking-wide2 font-semibold text-muted hover:text-accent transition-colors link-underline">
                EXPLORE THE ERAS →
              </Link>
              <Link to="/about" className="text-xs tracking-wide2 font-semibold text-muted hover:text-accent transition-colors link-underline">
                FULL STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-y border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { stat: '2013', label: 'Year of Debut' },
              { stat: '7', label: 'Members' },
              { stat: '10+', label: 'Eras' },
              { stat: '∞', label: 'ARMY Worldwide' },
            ].map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <p className="display text-4xl md:text-6xl text-paper">{item.stat}</p>
                <p className="mt-2 text-xs tracking-wide2 text-muted uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
