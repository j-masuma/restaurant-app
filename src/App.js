
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path="/" element={<HomePage/>} />

      </Route>
    </Routes>
  );
}

export default App;
