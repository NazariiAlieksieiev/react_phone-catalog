import './App.scss';
import { HomePage } from './modules/HomePage/HomePage';
import { Footer } from './modules/shared/components/Footer/Footer';
import { Header } from './modules/shared/components/Header/Header';

export const App = () => (
  <div className="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
);
