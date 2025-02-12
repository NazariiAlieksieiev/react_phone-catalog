import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './modules/HomePage/HomePage';
import { Footer } from './modules/shared/components/Footer/Footer';
import { Header } from './modules/shared/components/Header/Header';
import { Catalog } from './modules/Catalog/Catalog';

export const App = () => (
  <div className="app">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="/catalog/" element={<Catalog />} />
      {/* <Route path="/people">
        <Route index element={<PeoplePage />} />
        <Route path=":slug?" element={<PeoplePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
    <Footer />
  </div>
);
