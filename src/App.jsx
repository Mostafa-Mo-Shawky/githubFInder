import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import User from './pages/User';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/ALertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between min-h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="/nofound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;