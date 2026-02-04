import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppTheme } from './theme/AppTheme';
import AppLayout from './layouts/AppLayout';
import StyleGuide from './pages/StyleGuide';
import Home from './pages/Home';

// Placeholders for other pages
const Placeholder = ({ title }) => <h2 style={{ padding: 20 }}>{title} (開發中)</h2>;

function App() {
  return (
    <AppTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="discovery" element={<Placeholder title="發現頁" />} />
            <Route path="live" element={<Placeholder title="直播頁" />} />
            <Route path="profile" element={<Placeholder title="個人中心" />} />
            <Route path="style-guide" element={<StyleGuide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
