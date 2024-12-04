
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/about" element={<AboutPage/>} />
        <Route exact path="/service" element={<ServicePage/>} />
        <Route exact path="/menu" element={<MenuPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
