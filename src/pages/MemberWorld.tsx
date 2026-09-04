import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Camera,
  ChefHat,
  CircleDot,
  Disc3,
  Gamepad2,
  Headphones,
  Lightbulb,
  Mic2,
  Music2,
  Pause,
  Play,
  Radio,
  RotateCcw,
  Sparkles,
  Timer,
  Volume2,
  WandSparkles,
} from 'lucide-react';
import { members } from '@/data/members';

function BackLink({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/members"
      className={`member-world-back ${light ? 'member-world-back--light' : ''}`}
    >
      <ArrowLeft size={14} strokeWidth={1.5} /> BACK TO MEMBERS
    </Link>
  );
}

function WorldHeader({ number, label, light = false }: { number: string; label: string; light?: boolean }) {
  return (
    <div className={`member-world-header ${light ? 'member-world-header--light' : ''}`}>
      <span>{number}</span>
      <span>{label}</span>
      <span>BTSAU / 26</span>
    </div>
  );
}

function RMWorld() {
  const [destroyed, setDestroyed] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="world world-rm">
      <div className="rm-window-light" />
      <div className="rm-dust rm-dust-one" />
      <div className="rm-dust rm-dust-two" />
      <div className="rm-dust rm-dust-three" />
      <div className="world-inner world-rm-inner">
        <BackLink />
        <WorldHeader number="01 / 07" label="EXHIBITION 01 — A MIND IN MOTION" />
        <header className="rm-title-block">
          <p className="rm-kicker">THE NAMJOONING SPACE</p>
          <h1>Thoughts<br /><em>in residence.</em></h1>
          <p className="rm-caption">Museum + Library + Nature</p>
        </header>

        <div className="rm-gallery-grid">
          <div className="rm-placard rm-placard-main">
            <span className="placard-number">A.01</span>
            <div className="rm-artwork"><span>the shape<br />of a question</span></div>
            <p>Untitled study in green, 2013—∞</p>
          </div>
          <button className={`rm-book ${bookOpen ? 'is-open' : ''}`} onClick={() => setBookOpen(!bookOpen)}>
            <BookOpen size={22} />
            <span>{bookOpen ? 'A page, briefly held.' : 'OPEN A BOOK'}</span>
            <small>{bookOpen ? 'The world is wide enough for all of us.' : 'shelf / 03 / found text'}</small>
          </button>
          <div className="rm-annotation">“The only way to live is to accept the question.”</div>
          <button className={`rm-crab ${destroyed ? 'is-found' : ''}`} onClick={() => setDestroyed(!destroyed)} aria-label="Explore hidden object">
            {destroyed ? 'GOD OF DESTRUCTION' : '·'}
          </button>
          <div className="rm-forest-panel"><span>LISTEN TO THE TREES</span><span className="rm-leaf">⌁</span></div>
        </div>

        <footer className="rm-footer-note">A quiet room for loud thoughts. <span>EXPLORE</span></footer>
      </div>
    </div>
  );
}

function JinWorld() {
  const [mirror, setMirror] = useState(false);
  const [served, setServed] = useState<string | null>(null);
  const foods = ['STRAWBERRY', 'RAMYEON', 'CAKE'];

  return (
    <div className="world world-jin">
      <div className="world-inner world-jin-inner">
        <BackLink light />
        <WorldHeader number="02 / 07" label="KITCHEN HOURS — OPEN ALWAYS" light />
        <div className="jin-sticker jin-sticker-one">EAT WELL</div>
        <div className="jin-sticker jin-sticker-two">CHEF'S KISS</div>
        <header className="jin-title-block">
          <p>WORLDWIDE HANDSOME'S SPACE</p>
          <h1>Come hungry.<br /><span>Leave iconic.</span></h1>
          <div className="jin-sparkle">* * *</div>
        </header>

        <div className="jin-kitchen">
          <div className="jin-mirror-wrap">
            <button className={`jin-mirror ${mirror ? 'is-reflecting' : ''}`} onClick={() => setMirror(!mirror)}>
              <div className="jin-reflection">{mirror ? 'WORLDWIDE\nHANDSOME' : 'TAP TO\nCHECK'}</div>
              <span className="jin-mirror-label">MIRROR / 001</span>
            </button>
          </div>
          <div className="jin-counter">
            <div className="jin-counter-top" />
            <div className="jin-food-row">
              {foods.map((food, index) => (
                <button key={food} className={`jin-food jin-food-${index}`} onClick={() => setServed(food)}>
                  <span>{index === 0 ? '●' : index === 1 ? '∿' : '◆'}</span>
                  <small>{food}</small>
                </button>
              ))}
            </div>
            <div className="jin-drawer-label">KITCHEN / LOVE / LAUGHTER</div>
          </div>
          <div className="jin-recipe-card">
            <ChefHat size={20} />
            <span>TONIGHT'S RECIPE</span>
            <strong>{served ?? 'CONFIDENCE'}</strong>
            <small>{served ? 'served with a wink' : 'add joy to taste'}</small>
          </div>
        </div>
        <div className="jin-footer">INDULGE <span>— NO SHARING REQUIRED —</span></div>
      </div>
    </div>
  );
}

function SugaWorld() {
  const [playing, setPlaying] = useState(false);
  const [gain, setGain] = useState(62);
  const [cat, setCat] = useState(false);
  const bars = Array.from({ length: 36 }, (_, index) => 20 + ((index * 17) % 58));

  return (
    <div className="world world-suga">
      <div className="suga-amber-glow" />
      <div className="world-inner world-suga-inner">
        <BackLink light />
        <WorldHeader number="03 / 07" label="NIGHT SESSION — TRACK 03" light />
        <header className="suga-title-block">
          <div className="suga-rec"><CircleDot size={10} /> REC <span>02:47:19</span></div>
          <h1>THE<br /><span>STUDIO</span></h1>
          <p>NO AUDIENCE. JUST THE TRUTH.</p>
        </header>

        <div className="suga-console">
          <div className="suga-console-top"><span>SESSION: AGUST D / 009</span><span>48kHz · 24BIT · STEREO</span></div>
          <div className="suga-track-list">
            {['01 / FIRST THOUGHT', '02 / MIDNIGHT', '03 / UNTITLED', '04 / TOMORROW'].map((track, index) => (
              <button key={track} className={`suga-track ${index === 2 ? 'active' : ''}`} onClick={() => setPlaying(index === 2)}>
                <span>{playing && index === 2 ? 'PLAY' : 'MUTE'}</span><strong>{track}</strong><span>{index === 2 ? '●' : '—'}</span>
              </button>
            ))}
          </div>
          <div className="suga-waveform">
            {bars.map((height, index) => <span key={index} className={playing ? 'is-moving' : ''} style={{ height: `${height}%`, animationDelay: `${index * 0.04}s` }} />)}
          </div>
          <div className="suga-mixer">
            <div className="suga-control"><label>GAIN</label><input type="range" min="0" max="100" value={gain} onChange={(event) => setGain(Number(event.target.value))} /><output>{gain}</output></div>
            <button className="suga-play" onClick={() => setPlaying(!playing)}>{playing ? <Pause size={16} /> : <Play size={16} />} {playing ? 'PAUSE' : 'PLAY'}</button>
            <div className="suga-vu"><span /><span /><span /><span /><span /><span /></div>
          </div>
        </div>
        <button className={`suga-cat ${cat ? 'found' : ''}`} onClick={() => setCat(true)}>{cat ? 'CAT / FOUND' : '???'}</button>
        <div className="suga-footer"><span>HEADPHONES / NOTEBOOK / MIC</span><span>COMPOSE</span></div>
      </div>
    </div>
  );
}

function JHopeWorld() {
  const [flooded, setFlooded] = useState(false);
  const [time, setTime] = useState<'AM' | 'PM' | 'GOLDEN'>('AM');

  return (
    <div className={`world world-jhope world-jhope-${time.toLowerCase()} ${flooded ? 'is-flooded' : ''}`}>
      <div className="jhope-window" />
      <div className="jhope-shadow-hope">HOPE</div>
      <div className="world-inner world-jhope-inner">
        <BackLink />
        <WorldHeader number="04 / 07" label="MOVEMENT STUDY — TAKE 04" />
        <header className="jhope-title-block">
          <span className="jhope-kicker">SUNSHINE DANCE STUDIO</span>
          <h1>MOVE<br /><i>LIKE LIGHT.</i></h1>
          <p>EVERY STEP LEAVES A LITTLE MORE HOPE BEHIND.</p>
        </header>
        <div className="jhope-floor">
          <div className="jhope-mirror"><span>REFLECTION / 01</span></div>
          <div className="jhope-center-mark">JH</div>
          <div className="jhope-cue cue-one">5—6—7—8</div>
          <div className="jhope-cue cue-two">KEEP GOING</div>
          <button className="jhope-trigger" onClick={() => setFlooded(!flooded)}>
            <Lightbulb size={18} /> I’M YOUR HOPE, YOU’RE MY HOPE
          </button>
        </div>
        <div className="jhope-controls">
          <span>LIGHT PROGRESSION</span>
          {(['AM', 'PM', 'GOLDEN'] as const).map((option) => <button key={option} className={time === option ? 'active' : ''} onClick={() => setTime(option)}>{option}</button>)}
        </div>
        <footer className="jhope-footer">SHINE <span>— FIND YOUR CENTER —</span></footer>
      </div>
    </div>
  );
}

function JiminWorld() {
  const [chair, setChair] = useState(false);
  const [spotlight, setSpotlight] = useState(true);

  return (
    <div className={`world world-jimin ${spotlight ? 'spotlight-on' : ''}`}>
      <div className="jimin-beam" />
      <div className="jimin-fabric fabric-one" /><div className="jimin-fabric fabric-two" />
      <div className="world-inner world-jimin-inner">
        <BackLink light />
        <WorldHeader number="05 / 07" label="STAGE 05 — SILENCE BEFORE THE MUSIC" light />
        <header className="jimin-title-block">
          <p>THE PERFORMANCE ROOM</p>
          <h1>When the body<br /><em>remembers.</em></h1>
          <span>PERFORMANCE / LIGHT / BREATH</span>
        </header>
        <div className="jimin-stage">
          <div className="jimin-reflection-line" />
          <button className={`jimin-chair ${chair ? 'detected' : ''}`} onClick={() => setChair(!chair)}>
            <span className="chair-back" /><span className="chair-seat" />
            <small>{chair ? 'CHAIR DETECTED' : 'STAGE OBJECT / 01'}</small>
          </button>
          <div className="jimin-spot-control">
            <button onClick={() => setSpotlight(!spotlight)}>{spotlight ? 'DIM THE ROOM' : 'LIGHT THE ROOM'}</button>
            <span>CLICK THE CHAIR</span>
          </div>
        </div>
        <div className="jimin-caption">A room for the feeling that arrives before language.</div>
        <footer className="jimin-footer">FEEL <span>05 / 07</span></footer>
      </div>
    </div>
  );
}

function VWorld() {
  const [developed, setDeveloped] = useState(false);
  const [purple, setPurple] = useState(false);

  return (
    <div className={`world world-v ${developed ? 'is-developed' : ''} ${purple ? 'is-purple' : ''}`}>
      <div className="v-projector-beam" />
      <div className="world-inner world-v-inner">
        <BackLink light />
        <WorldHeader number="06 / 07" label="ARCHIVE / CONTACT SHEET / 1964—NOW" light />
        <header className="v-title-block">
          <span className="v-date">SEOUL — 13.06.2013 — ROLL 07</span>
          <h1>PURPLE<br /><i>FILM STUDIO</i></h1>
          <p>CAPTURE → DEVELOP → DISCOVER</p>
        </header>
        <div className="v-studio">
          <div className="v-contact-sheet">
            <div className="v-photo v-photo-one"><span>FRAME 01</span></div>
            <div className="v-photo v-photo-two"><span>FRAME 02</span></div>
            <div className="v-photo v-photo-three"><span>{purple ? 'I PURPLE YOU' : 'FRAME 03'}</span></div>
            <div className="v-photo v-photo-four"><span>FRAME 04</span></div>
          </div>
          <div className="v-camera-panel"><Camera size={20} /><span>CAMERA / READY</span><button onClick={() => setDeveloped(!developed)}>{developed ? 'RELOAD ROLL' : 'DEVELOP ROLL'}</button></div>
          <div className="v-tv"><div className="v-tv-screen">{developed ? 'I PURPLE YOU' : 'NO SIGNAL'}</div><span>TELEVISION / 04</span></div>
        </div>
        <div className="v-bottom-bar"><button onClick={() => setPurple(!purple)}><WandSparkles size={14} /> {purple ? 'DISCOVERED' : 'DISCOVER A MEMORY'}</button><span>THE IMAGE IS NEVER ONLY THE IMAGE.</span></div>
      </div>
    </div>
  );
}

function JungkookWorld() {
  const [zone, setZone] = useState<'GAME' | 'EAT' | 'TRAIN' | 'SING'>('GAME');
  const [bam, setBam] = useState(false);
  const zoneData = {
    GAME: { color: 'blue', title: 'PLAYER ONE READY', icon: <Gamepad2 size={30} />, detail: 'RANK / GOLDEN 07', action: 'START MATCH' },
    EAT: { color: 'orange', title: 'REFUEL STATION', icon: <ChefHat size={30} />, detail: 'MENU / LATE NIGHT', action: 'ORDER SOMETHING' },
    TRAIN: { color: 'red', title: 'NO DAYS OFF', icon: <Timer size={30} />, detail: 'ROUND / 07 OF 07', action: 'START TIMER' },
    SING: { color: 'purple', title: 'MIC CHECK', icon: <Mic2 size={30} />, detail: 'QUEUE / NEXT SONG', action: 'CHOOSE SONG' },
  };
  const active = zoneData[zone];

  return (
    <div className={`world world-jungkook world-zone-${active.color} ${bam ? 'bam-running' : ''}`}>
      <div className="world-inner world-jungkook-inner">
        <BackLink light />
        <WorldHeader number="07 / 07" label="KOOKIE'S HANGOUT — ONLINE" light />
        <header className="jk-title-block"><span>KOOKIE'S HANGOUT</span><h1>PLAY<br /><i>ALL DAY.</i></h1><div className="jk-status"><Radio size={12} /> LIVE / 100%</div></header>
        <nav className="jk-zone-nav" aria-label="Hangout zones">
          {(['GAME', 'EAT', 'TRAIN', 'SING'] as const).map((item, index) => <button key={item} className={zone === item ? 'active' : ''} onClick={() => setZone(item)}><span>0{index + 1}</span>{item}<ArrowRight size={14} /></button>)}
        </nav>
        <main className="jk-zone-panel">
          <div className="jk-zone-icon">{active.icon}</div>
          <p>ZONE / {zone}</p><h2>{active.title}</h2><span>{active.detail}</span>
          <button className="jk-action" onClick={() => setBam(!bam)}>{active.action} <ArrowRight size={16} /></button>
          <div className="jk-meter"><span /><span /><span /><span /><span /><span /><span /></div>
        </main>
        <div className="jk-side-stats"><span>COMBO <strong>07</strong></span><span>STREAK <strong>∞</strong></span><span>MOOD <strong>GOLDEN</strong></span></div>
        <button className="jk-bam" onClick={() => setBam(true)}>{bam ? 'BAM!' : 'BAM?'}</button>
        <footer className="jk-footer">PLAY <span>— KEEP MOVING —</span><Gamepad2 size={16} /></footer>
      </div>
    </div>
  );
}

function UnknownWorld() {
  return <div className="world world-unknown"><BackLink /><p>WORLD NOT FOUND</p></div>;
}

export default function MemberWorld() {
  const { id } = useParams<{ id: string }>();
  if (id === 'rm') return <RMWorld />;
  if (id === 'jin') return <JinWorld />;
  if (id === 'suga') return <SugaWorld />;
  if (id === 'j-hope') return <JHopeWorld />;
  if (id === 'jimin') return <JiminWorld />;
  if (id === 'v') return <VWorld />;
  if (id === 'jungkook') return <JungkookWorld />;
  return <UnknownWorld />;
}
