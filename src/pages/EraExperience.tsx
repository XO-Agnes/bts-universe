import { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react';
import { eras } from '@/data/eras';
import type { Era } from '@/data/eras';

/* ── Era visual config ── */
const eraThemes: Record<string, { feel: string; bgClass: string; accent: string; label: string }> = {
  'school-trilogy': { feel: 'REBELLION', bgClass: 'era-bg-school', accent: '#e84030', label: 'SCHOOL' },
  'youth-trilogy': { feel: 'REMEMBER', bgClass: 'era-bg-youth', accent: '#7a9ab8', label: 'YOUTH' },
  'wings': { feel: 'TEMPTATION', bgClass: 'era-bg-wings', accent: '#c8a030', label: 'WINGS' },
  'love-yourself': { feel: 'LOVE', bgClass: 'era-bg-love', accent: '#e878a8', label: 'LOVE YOURSELF' },
  'map-of-the-soul': { feel: 'REFLECT', bgClass: 'era-bg-mots', accent: '#6080d0', label: 'MAP OF THE SOUL' },
  'be': { feel: 'CONNECT', bgClass: 'era-bg-be', accent: '#8ab8a0', label: 'BE' },
  'proof': { feel: 'ARCHIVE', bgClass: 'era-bg-proof', accent: '#a0a0b0', label: 'PROOF' },
  'arirang': { feel: 'RETURN', bgClass: 'era-bg-arirang', accent: '#d4a838', label: 'ARIRANG' },
};

/* ── Timeline ── */
function Timeline({ activeIndex, onSelect }: { activeIndex: number; onSelect: (i: number) => void }) {
  const points = [...eras.map((e) => eraThemes[e.id]), { feel: '∞', bgClass: '', accent: '#A77BFF', label: '∞' }];
  return (
    <div className="era-timeline">
      <div className="era-timeline-track">
        {points.map((point, i) => (
          <button
            key={i}
            className={`era-timeline-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => onSelect(i)}
            style={i === activeIndex ? { borderColor: point.accent } : {}}
            aria-label={`Jump to ${point.label}`}
          >
            <span style={i === activeIndex ? { background: point.accent } : {}} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Now Playing ── */
function NowPlaying({ era, accent }: { era: Era; accent: string }) {
  const [selected, setSelected] = useState(0);
  useEffect(() => { setSelected(0); }, [era.id]);
  return (
    <div className="era-now-playing">
      <p className="era-np-label" style={{ color: accent }}>NOW PLAYING / ERA TRACKS</p>
      <div className="era-np-tracks">
        {era.tracks.map((track, i) => (
          <button
            key={track}
            className={`era-np-track ${i === selected ? 'active' : ''}`}
            onClick={() => setSelected(i)}
            style={i === selected ? { borderColor: accent, color: accent } : {}}
          >
            <span className="era-np-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="era-np-name">{track}</span>
            <span className="era-np-bars">
              <span /><span /><span />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Individual era worlds ── */

function SchoolEra({ era }: { era: Era }) {
  const [locker, setLocker] = useState(false);
  return (
    <div className="era-world era-school">
      <div className="school-graffiti-wall">
        <span className="graffiti g1">NO MORE</span>
        <span className="graffiti g2">DREAM</span>
        <span className="graffiti g3">2 COOL 4 SKOOL</span>
        <span className="graffiti g4">REBEL</span>
      </div>
      <div className="school-notebook">
        <div className="notebook-lines" />
        <div className="notebook-content">
          <h2 className="era-title-school">{era.title}</h2>
          <p className="era-year-school">{era.year}</p>
          <p className="era-desc-school">{era.description}</p>
          <p className="era-theme-school">THEME: {era.theme}</p>
          <p className="era-sub-school">{era.subtitle}</p>
        </div>
      </div>
      <button className={`school-locker ${locker ? 'open' : ''}`} onClick={() => setLocker(!locker)}>
        <div className="locker-door">
          <div className="locker-vent" /><div className="locker-vent" /><div className="locker-vent" />
          <div className="locker-handle" />
        </div>
        <div className="locker-reveal">{locker ? 'JUNE 13, 2013 — DEBUT DAY' : 'OPEN LOCKER'}</div>
      </button>
      <NowPlaying era={era} accent="#e84030" />
    </div>
  );
}

function YouthEra({ era }: { era: Era }) {
  const [polaroid, setPolaroid] = useState(false);
  return (
    <div className="era-world era-youth">
      <div className="youth-film-grain" />
      <div className="youth-light-leak" />
      <div className="youth-polaroids">
        <div className="polaroid p1"><div className="polaroid-img"><span>I NEED U</span></div><p>the most beautiful<br />moment in life</p></div>
        <div className="polaroid p2"><div className="polaroid-img"><span>RUN</span></div><p>running toward<br />something unknown</p></div>
        <button className={`polaroid p3 ${polaroid ? 'flipped' : ''}`} onClick={() => setPolaroid(!polaroid)}>
          <div className="polaroid-img"><span>{polaroid ? 'YOUTH IS NEVER\nCOMING BACK' : 'FIRE'}</span></div>
          <p>{polaroid ? '— a hidden memory —' : 'burning up\nbrightly'}</p>
        </button>
      </div>
      <div className="youth-info">
        <h2 className="era-title-youth">{era.title}</h2>
        <p className="era-year-youth">{era.year}</p>
        <p className="era-desc-youth">{era.description}</p>
        <p className="era-theme-youth">{era.theme}</p>
        <p className="era-sub-youth">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#7a9ab8" />
    </div>
  );
}

function WingsEra({ era }: { era: Era }) {
  const [apple, setApple] = useState(false);
  return (
    <div className="era-world era-wings">
      <div className="wings-corridor" />
      <div className="wings-gallery">
        <div className="wings-frame frame-main">
          <div className="wings-painting"><span>BLOOD<br />SWEAT<br />&amp; TEARS</span></div>
          <p className="wings-placard">EXHIBIT A — TEMPTATION, 2016</p>
        </div>
        <div className="wings-frame frame-secondary">
          <div className="wings-painting wings-painting-dark"><span>SPRING<br />DAY</span></div>
          <p className="wings-placard">EXHIBIT B — LONGING, 2017</p>
        </div>
        <button className={`wings-apple ${apple ? 'found' : ''}`} onClick={() => setApple(!apple)}>
          {apple ? 'THE APPLE OF KNOWLEDGE' : '·'}
        </button>
      </div>
      <div className="wings-info">
        <h2 className="era-title-wings">{era.title}</h2>
        <p className="era-year-wings">{era.year}</p>
        <p className="era-desc-wings">{era.description}</p>
        <p className="era-theme-wings">{era.theme}</p>
        <p className="era-sub-wings">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#c8a030" />
    </div>
  );
}

function LoveYourselfEra({ era }: { era: Era }) {
  const [mirror, setMirror] = useState(false);
  return (
    <div className="era-world era-love">
      <div className="love-petals">
        {[...Array(6)].map((_, i) => <span key={i} className="petal" style={{ animationDelay: `${i * 0.8}s`, left: `${10 + i * 15}%` }} />)}
      </div>
      <div className="love-mirror-wrap">
        <button className={`love-mirror ${mirror ? 'revealed' : ''}`} onClick={() => setMirror(!mirror)}>
          <div className="mirror-surface">
            <span className="mirror-text">{mirror ? 'LOVE YOURSELF' : 'TAP THE MIRROR'}</span>
          </div>
        </button>
      </div>
      <div className="love-info">
        <h2 className="era-title-love">{era.title}</h2>
        <p className="era-year-love">{era.year}</p>
        <p className="era-desc-love">{era.description}</p>
        <p className="era-theme-love">{era.theme}</p>
        <p className="era-sub-love">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#e878a8" />
    </div>
  );
}

function MapOfTheSoulEra({ era }: { era: Era }) {
  const [shadow, setShadow] = useState(false);
  return (
    <div className="era-world era-mots">
      <div className="mots-grid-bg" />
      <div className="mots-masks">
        <div className="mots-mask mots-mask-persona"><span>PERSONA</span></div>
        <div className="mots-mask mots-mask-shadow"><span>SHADOW</span></div>
        <button className={`mots-mask mots-mask-hidden ${shadow ? 'revealed' : ''}`} onClick={() => setShadow(!shadow)}>
          <span>{shadow ? 'THE SHADOW\nKNOWS' : '?'}</span>
        </button>
      </div>
      <div className="mots-info">
        <h2 className="era-title-mots">{era.title}</h2>
        <p className="era-year-mots">{era.year}</p>
        <p className="era-desc-mots">{era.description}</p>
        <p className="era-theme-mots">{era.theme}</p>
        <p className="era-sub-mots">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#6080d0" />
    </div>
  );
}

function BeEra({ era }: { era: Era }) {
  const [window, setWindow] = useState(false);
  const [warmth, setWarmth] = useState(0);
  return (
    <div className={`era-world era-be warmth-${warmth}`}>
      <div className="be-room">
        <div className="be-desk">
          <div className="be-monitor"><div className="be-screen">{warmth > 0 ? 'LIFE GOES ON' : '...'}</div></div>
          <div className="be-keyboard" />
        </div>
        <button className="be-window" onClick={() => { setWindow(!window); setWarmth(Math.min(warmth + 1, 3)); }}>
          <div className="be-window-view">
            {window ? <span className="be-window-msg">CONNECTION FOUND</span> : <span className="be-window-closed">OPEN WINDOW</span>}
          </div>
        </button>
        <div className="be-bed" />
        <div className="be-photos">
          <div className="be-photo" /><div className="be-photo" /><div className="be-photo" />
        </div>
      </div>
      <div className="be-info">
        <h2 className="era-title-be">{era.title}</h2>
        <p className="era-year-be">{era.year}</p>
        <p className="era-desc-be">{era.description}</p>
        <p className="era-theme-be">{era.theme}</p>
        <p className="era-sub-be">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#8ab8a0" />
    </div>
  );
}

function ProofEra({ era }: { era: Era }) {
  const [openedBox, setOpenedBox] = useState<number | null>(null);
  const boxes = ['PHOTOS', 'DOCUMENTS', 'TIMELINE', '7'];
  return (
    <div className="era-world era-proof">
      <div className="proof-archive">
        {boxes.map((label, i) => (
          <button
            key={i}
            className={`proof-box ${openedBox === i ? 'opened' : ''}`}
            onClick={() => setOpenedBox(openedBox === i ? null : i)}
          >
            <div className="proof-box-lid" />
            <div className="proof-box-body">
              <span>{openedBox === i ? (label === '7' ? '7' : label) : label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="proof-info">
        <h2 className="era-title-proof">{era.title}</h2>
        <p className="era-year-proof">{era.year}</p>
        <p className="era-desc-proof">{era.description}</p>
        <p className="era-theme-proof">{era.theme}</p>
        <p className="era-sub-proof">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#a0a0b0" />
    </div>
  );
}

function ArirangEra({ era }: { era: Era }) {
  const [motif, setMotif] = useState(false);
  return (
    <div className="era-world era-arirang">
      <div className="arirang-geometry" />
      <div className="arirang-pattern" />
      <button className={`arirang-motif ${motif ? 'transformed' : ''}`} onClick={() => setMotif(!motif)}>
        <div className="motif-traditional">
          <span className="motif-line" /><span className="motif-line" /><span className="motif-line" />
          <span className="motif-circle" />
        </div>
        <div className="motif-modern">
          <span>{motif ? 'NEW CHAPTER\nBEGINS' : 'RETURN'}</span>
        </div>
      </button>
      <div className="arirang-info">
        <h2 className="era-title-arirang">{era.title}</h2>
        <p className="era-year-arirang">{era.year}</p>
        <p className="era-desc-arirang">{era.description}</p>
        <p className="era-theme-arirang">{era.theme}</p>
        <p className="era-sub-arirang">{era.subtitle}</p>
      </div>
      <NowPlaying era={era} accent="#d4a838" />
    </div>
  );
}

function InfinityEnding() {
  return (
    <div className="era-world era-infinity">
      <div className="infinity-glow" />
      <div className="infinity-content">
        <p className="infinity-symbol">∞</p>
        <h2 className="infinity-title">THE STORY CONTINUES.</h2>
        <p className="infinity-text">BTS's story is still being written. Every listener, every ARMY, every voice that carries their music forward is part of the next chapter.</p>
        <p className="infinity-2013">2013 → ∞</p>
      </div>
    </div>
  );
}

/* ── Era renderer ── */
function EraContent({ era }: { era: Era }) {
  switch (era.id) {
    case 'school-trilogy': return <SchoolEra era={era} />;
    case 'youth-trilogy': return <YouthEra era={era} />;
    case 'wings': return <WingsEra era={era} />;
    case 'love-yourself': return <LoveYourselfEra era={era} />;
    case 'map-of-the-soul': return <MapOfTheSoulEra era={era} />;
    case 'be': return <BeEra era={era} />;
    case 'proof': return <ProofEra era={era} />;
    case 'arirang': return <ArirangEra era={era} />;
    default: return null;
  }
}

/* ── Main component ── */
export default function EraExperience() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const eraIndex = eras.findIndex((e) => e.id === id);
  const [viewIndex, setViewIndex] = useState(eraIndex >= 0 ? eraIndex : 0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (eraIndex >= 0) setViewIndex(eraIndex);
  }, [eraIndex]);

  const isInfinity = viewIndex >= eras.length;
  const currentEra = !isInfinity ? eras[viewIndex] : null;
  const theme = !isInfinity
    ? eraThemes[eras[viewIndex].id]
    : { feel: '∞', bgClass: 'era-bg-infinity', accent: '#A77BFF', label: '∞' };

  const goTo = useCallback((index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setViewIndex(index);
      setTransitioning(false);
      if (index < eras.length) {
        navigate(`/eras/${eras[index].id}`, { replace: true });
      } else {
        navigate('/eras/infinity', { replace: true });
      }
    }, 400);
  }, [navigate]);

  const prev = () => goTo(Math.max(0, viewIndex - 1));
  const next = () => goTo(Math.min(eras.length, viewIndex + 1));

  return (
    <div className={`era-experience ${transitioning ? 'era-transitioning' : ''} ${currentEra ? theme.bgClass : 'era-bg-infinity'}`}>
      {/* Era feel banner */}
      <div className="era-feel-banner" style={{ color: theme.accent }}>
        <span className="era-feel-text">{theme.feel}</span>
      </div>

      {/* Back to eras list */}
      <Link to="/eras" className="era-back-link">
        <ArrowLeft size={14} strokeWidth={1.5} /> BACK TO ERAS
      </Link>

      {/* Timeline */}
      <Timeline activeIndex={viewIndex} onSelect={goTo} />

      {/* Main content */}
      <div className="era-content-wrap">
        {currentEra ? <EraContent era={currentEra} /> : <InfinityEnding />}
      </div>

      {/* Nav arrows */}
      <div className="era-nav-arrows">
        <button className="era-nav-arrow era-nav-prev" onClick={prev} disabled={viewIndex === 0} style={{ opacity: viewIndex === 0 ? 0.3 : 1 }}>
          <ChevronUp size={20} /> <span>PREVIOUS ERA</span>
        </button>
        <button className="era-nav-arrow era-nav-next" onClick={next} disabled={viewIndex === eras.length} style={{ opacity: viewIndex === eras.length ? 0.3 : 1 }}>
          <span>{viewIndex === eras.length - 1 ? 'INFINITY' : 'NEXT ERA'}</span> <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}
