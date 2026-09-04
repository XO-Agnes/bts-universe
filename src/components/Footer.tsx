import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="display text-3xl text-paper">
              BTS<span className="text-accent">.</span>UNIVERSE
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              A fan-made archive celebrating the story of BTS and ARMY. Not affiliated with BTS or HYBE.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wide2 text-muted uppercase mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-paper hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/members" className="text-paper hover:text-accent transition-colors">Members</Link></li>
              <li><Link to="/eras" className="text-paper hover:text-accent transition-colors">Eras</Link></li>
              <li><Link to="/discography" className="text-paper hover:text-accent transition-colors">Discography</Link></li>
              <li><Link to="/army" className="text-paper hover:text-accent transition-colors">ARMY</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-wide2 text-muted uppercase mb-4">Disclaimer</p>
            <p className="text-sm text-muted leading-relaxed">
              This is an unofficial, non-commercial fan project created for appreciation and archival purposes.
              All names, music, and imagery belong to their respective owners.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-rule flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-muted tracking-wide2">© {new Date().getFullYear()} BTS UNIVERSE · FAN-MADE</p>
          <p className="text-xs text-muted tracking-wide2">BUILT WITH LOVE BY ARMY</p>
        </div>
      </div>
    </footer>
  );
}
