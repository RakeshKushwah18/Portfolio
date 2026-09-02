import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgress from './components/layout/ScrollProgress';
import AnimatedBackground from './components/ui/AnimatedBackground';
import Cursor from './components/ui/Cursor';
import './styles/global.scss'

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-cloud-200/10 border-t-accent-500" />
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <ScrollProgress />
      <Cursor />
      <AnimatedBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
