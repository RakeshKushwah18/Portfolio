import { motion } from 'framer-motion';

// Minimal initial loader — fades out quickly.
export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
      className="pointer-events-none fixed inset-0 z-[10000] flex items-center justify-center bg-ink-950"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <span className="font-mono text-2xl font-bold text-gradient-accent">RK</span>
        <div className="h-0.5 w-16 overflow-hidden rounded-full bg-cloud-200/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="h-full w-full bg-gradient-to-r from-accent-500 to-sky-400"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
