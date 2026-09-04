import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/members', label: 'MEMBERS' },
  { to: '/eras', label: 'ERAS' },
  { to: '/discography', label: 'DISCOGRAPHY' },
  { to: '/army', label: 'ARMY' },
  { to: '/about', label: 'ABOUT' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md border-b border-rule">
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <NavLink to="/" className="group flex items-baseline gap-1.5 hover:opacity-90 transition-opacity">
          <span className="display text-paper text-lg md:text-xl tracking-wide2">BTS</span>
          <span className="text-muted text-sm md:text-base mx-0.5">×</span>
          <span className="display text-lg md:text-xl tracking-wide2 ghost-text-accent">ARMY</span>
          <span className="text-accent text-[8px] md:text-[9px] mx-1.5">·</span>
          <span className="hidden md:inline text-[9px] tracking-ultra text-muted uppercase">A FAN-BUILT UNIVERSE</span>
        </NavLink>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-xs tracking-wide2 font-semibold transition-colors link-underline ${
                    isActive ? 'text-accent' : 'text-muted hover:text-paper'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile nav */}
        <ul className="flex md:hidden items-center gap-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-[10px] tracking-wide2 font-semibold transition-colors ${
                    isActive ? 'text-accent' : 'text-muted'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
