import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './modules/HomePage/HomePage';
import { Footer } from './modules/shared/components/Footer/Footer';
import { Header } from './modules/shared/components/Header/Header';
import { Catalog } from './modules/Catalog/Catalog';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { loadProducts } from './features/productSlice';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/catalog/:category" element={<Catalog />} />
        {/* <Route path="/people">
        <Route index element={<PeoplePage />} />
        <Route path=":slug?" element={<PeoplePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};
