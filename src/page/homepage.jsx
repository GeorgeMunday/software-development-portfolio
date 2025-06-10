import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./homepage.css";
import Page from "./pages";

const Homepage = () => {
  const [split, setSplit] = useState(false);

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
              animate={{ width: "100vw" }}
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
