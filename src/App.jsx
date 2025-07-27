import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/NavBar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import CreatePage from './pages/CreatePage';
import ReferenciasPage from "./pages/ReferenciasPage";


function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/referencias/:id" element={<ReferenciasPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
