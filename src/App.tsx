import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { AppShell } from '@mantine/core';
import Header from './components/header';
import Footer from './components/footer';
import Project from './pages/project';
import Bio from './pages/bio';

const App = () => {

  return (
    <BrowserRouter>
      <AppShell
        header={{ height: { base: 48, sm: 60, lg: 76 } }}
        padding="md"
        transitionDuration={500}
        transitionTimingFunction="ease"
      >
        <AppShell.Header style={{ position: 'relative' }}>
          <Header />
        </AppShell.Header>

        <AppShell.Main px='md' py='md'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectName" Component={Project} />
            <Route path="/bio" Component={Bio} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </AppShell.Main>

        <AppShell.Footer style={{ position: 'relative' }}>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
