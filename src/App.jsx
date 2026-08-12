import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PresentationHub from './pages/PresentationHub';
import ThemeOne from './themes/ThemeOne';
import ThemeTwo from './themes/ThemeTwo';
import ThemeThree from './themes/ThemeThree';
import ThemeFour from './themes/ThemeFour';
import ThemeFive from './themes/ThemeFive';
import ThemeSix from './themes/ThemeSix';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThemeSix />} />
        <Route path="/hub" element={<PresentationHub />} />
        <Route path="/theme-1" element={<ThemeOne />} />
        <Route path="/theme-2" element={<ThemeTwo />} />
        <Route path="/theme-3" element={<ThemeThree />} />
        <Route path="/theme-4" element={<ThemeFour />} />
        <Route path="/theme-5" element={<ThemeFive />} />
        <Route path="/theme-6" element={<ThemeSix />} />
      </Routes>
    </BrowserRouter>
  );
}
