import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./homepage.css";
import Page from "./pages";

const Homepage = () => {
  // Load split state from localStorage, default to false
  const [split, setSplit] = useState(() => {
    return localStorage.getItem("split") === "true";
  });

  // Track if we've already animated the split
  const hasAnimated = useRef(false);

  // Save split state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("split", split);
    // Mark animation as done after first split
    if (split) hasAnimated.current = true;
  }, [split]);

  // If split is already true (dashboard mode), skip animation and just render Page
  if (split && hasAnimated.current) {
    return (
      <div className="homepage__container">
        <div
          className="homepage__half homepage__half--left"
          style={{ width: "100vw" }}
        />
        <div
          className="homepage__half homepage__half--right"
          style={{ width: "50vw" }}
        >
          <Page />
        </div>
      </div>
    );
  }

  return (
    <div className="homepage__container">
      <AnimatePresence>
        {!split && (
          <motion.div
            className="homepage__center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSplit(true)}
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
              animate={{ width: "100vw" }}
              exit={{ width: "100vw" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <motion.div
              className="homepage__half homepage__half--right"
              initial={{ width: "0vw" }}
              animate={{ width: "99vw" }}
              exit={{ width: "0vw" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
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
