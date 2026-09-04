import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import Waveform from '@/components/Waveform';

export default function About() {
  return (
    <div>
      <PageHeader
        index="THE STORY"
        title="ABOUT"
        subtitle="BTS (방탄소년단) — short for Bangtan Sonyeondan, 'Bulletproof Boy Scouts' — is a South Korean group formed by Big Hit Entertainment in 2013. Seven members. One vision. A decade of redefining what a boy band could be."
      />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="h-16 mb-16">
          <Waveform bars={40} className="h-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-wide2 text-accent uppercase mb-3">Formation & Debut</p>
            <p className="text-sm text-muted leading-relaxed">
              Formed in 2013, BTS debuted on June 13 with the single album
              <span className="text-paper"> "2 COOL 4 SKOOL."</span> They began as a hip-hop
              act speaking to youth pressure, and grew into a global force spanning pop,
              R&amp;B, Latin, and orchestral sounds.
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs tracking-wide2 text-accent uppercase mb-3">The Seven</p>
            <p className="text-sm text-muted leading-relaxed">
              RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook — each a distinct world of voice,
              movement, and perspective. Together, they form one interconnected universe.
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs tracking-wide2 text-accent uppercase mb-3">Themes & Meaning</p>
            <p className="text-sm text-muted leading-relaxed">
              Across their eras, BTS has explored youth and pressure, mental health, self-love,
              the beauty and pain of growing up, and the quiet courage of going on. Their work
              is a running conversation with anyone who has ever felt unseen.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-rule my-16" />

        <div className="max-w-3xl">
          <h2 className="display text-3xl md:text-4xl text-paper mb-6">A FAN-BUILT UNIVERSE</h2>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
            This website is an unofficial, non-commercial fan project created for appreciation
            and archival purposes. It is not affiliated with BTS, BIGHIT MUSIC, or HYBE. All names,
            music, and imagery belong to their respective owners.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/members" className="text-xs tracking-wide2 font-semibold text-paper hover:text-accent transition-colors link-underline">
              MEET THE MEMBERS →
            </Link>
            <Link to="/eras" className="text-xs tracking-wide2 font-semibold text-muted hover:text-accent transition-colors link-underline">
              EXPLORE THE ERAS →
            </Link>
            <Link to="/army" className="text-xs tracking-wide2 font-semibold text-muted hover:text-accent transition-colors link-underline">
              THE ARMY BOND →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
