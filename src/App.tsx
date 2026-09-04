import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Members from '@/pages/Members';
import Eras from '@/pages/Eras';
import EraExperience from '@/pages/EraExperience';
import Discography from '@/pages/Discography';
import ARMY from '@/pages/ARMY';
import About from '@/pages/About';
import MemberWorld from '@/pages/MemberWorld';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberWorld />} />
          <Route path="/eras" element={<Eras />} />
          <Route path="/eras/:id" element={<EraExperience />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/army" element={<ARMY />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}