import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./homepage.css";
import Page from "./pages";

const Homepage = () => {
  // Set initial state based on URL hash
  const [split, setSplit] = useState(() => window.location.hash === "#dashboard");
  const [hasAnimated, setHasAnimated] = useState(false);

  // When entering dashboard, update the hash
  const handleEnterDashboard = () => {
    setSplit(true);
    window.location.hash = "#dashboard";
  };

  // Optional: Listen for hash changes (e.g., user manually changes hash)
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === "#dashboard") setSplit(true);
      else setSplit(false);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Use a different class when on the dashboard
  const containerClass =
    split && hasAnimated
      ? "homepage__container dashboard-bg"
      : "homepage__container";

  // After animation, show only the dashboard filling the screen
  if (split && hasAnimated) {
    return (
      <div className={containerClass}>
        <Page />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <AnimatePresence>
        {!split && (
          <motion.div
            className="homepage__center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onClick={handleEnterDashboard}
          >
            <h1 className="homepage__title">Welcome to My Portfolio</h1>
            <p className="homepage__subtitle">
              Click anywhere to enter the dashboard
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {split && (
          <>
            <motion.div
              className="homepage__half homepage__half--left"
              initial={{ width: "100vw" }}
              animate={{ width: "0vw" }}
              exit={{ width: "0vw" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <motion.div
              className="homepage__half homepage__half--right"
              initial={{ width: "0vw" }}
              animate={{ width: "100vw" }}
              exit={{ width: "100vw" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              onAnimationComplete={() => setHasAnimated(true)}
            >
              <Page />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;
