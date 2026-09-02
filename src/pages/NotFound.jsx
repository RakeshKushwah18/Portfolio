import { Link } from 'react-router-dom';
import { TbArrowLeft } from '../utils/iconMap';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-7xl font-bold text-gradient-accent">404</span>
      <h1 className="mt-6 text-2xl font-bold text-cloud">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-cloud-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_-2px_rgba(139,124,255,0.4)] transition-all hover:bg-accent-400 hover:-translate-y-0.5"
      >
        <TbArrowLeft size={16} /> Back home
      </Link>
    </div>
  );
}
