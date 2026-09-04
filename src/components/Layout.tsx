import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ArmyBombChat from './ArmyBombChat';

export default function Layout() {
  const location = useLocation();

  const isMemberWorld = location.pathname.startsWith('/members/');
  const isEraWorld = location.pathname.startsWith('/eras/');

  const hideFooter = isMemberWorld || isEraWorld;

  return (
    <div className="universe-shell min-h-screen flex flex-col">
      <div className="cosmic-backdrop" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <Nav />

      <main className="relative z-10 flex-1 pt-16">
        <Outlet />
      </main>

      {!hideFooter && (
        <div className="relative z-10">
          <Footer />
        </div>
      )}

      <ArmyBombChat />
    </div>
  );
}