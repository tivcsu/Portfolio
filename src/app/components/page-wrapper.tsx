"use client";
import { AnimatePresence, Spring, motion } from 'framer-motion';
import './page-wrapper.css';
import { usePathname } from 'next/navigation';

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname()
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "#004a67";
  return (
      <div className={className} >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, paddingTop: 100 }}
            animate={{ opacity: 1, paddingTop: 0  }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
              left: 0
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.3 } }}
          />
        </AnimatePresence>
      </div>
)};
