import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const openMenu = () => {
    setMenuActive(!menuActive);
    setActivePage(0);
  };

  const setPage = (num) => {
    setMenuActive(!menuActive);
    setActivePage(num);
  };
  return (
    <main>
      <nav>
        <div className="logo">
          <h1>Menu-Freestyle</h1>
        </div>
        <div className="menu" onClick={openMenu}>
          <motion.div
            animate={{
              position: menuActive ? "fixed" : "relative",
              rotate: menuActive ? "45deg" : "0",
            }}
          ></motion.div>
          <motion.div
            animate={{
              display: menuActive ? "none" : "block",
            }}
          ></motion.div>
          <motion.div
            animate={{
              position: menuActive ? "fixed" : "relative",
              rotate: menuActive ? "-45deg" : "0",
            }}
          ></motion.div>
        </div>
      </nav>
      <motion.section
        className="first-section"
        animate={{
          rotate: menuActive ? "-10deg" : "0",
          top: menuActive ? "10%" : "0",
          left: menuActive ? "20%" : "0",
          zIndex: activePage === 0 ? 50 : 30,
          justifyContent: menuActive ? "start" : "center",
        }}
        onClick={menuActive ? () => setPage(0) : () => {}}
      >
        <h2>
          <i style={{ cursor: "pointer" }}>Home</i>
        </h2>
      </motion.section>
      <motion.section
        className="second-section"
        animate={{
          rotate: menuActive ? "-5deg" : "0",
          top: menuActive ? "5%" : "0",
          left: menuActive ? "10%" : "0",
          zIndex: activePage === 1 ? 50 : 20,
          justifyContent: menuActive ? "start" : "center",
        }}
        onClick={menuActive ? () => setPage(1) : () => {}}
      >
        <h2>
          <i style={{ cursor: "pointer" }}>About</i>
        </h2>
      </motion.section>
      <motion.section
        className="third-section"
        animate={{
          rotate: menuActive ? "-1deg" : "0",
          top: menuActive ? "1%" : "0",
          left: menuActive ? "1%" : "0",
          zIndex: activePage === 2 ? 50 : 10,
          justifyContent: menuActive ? "start" : "center",
        }}
        onClick={menuActive ? () => setPage(2) : () => {}}
      >
        <h2>
          <i style={{ cursor: "pointer" }}>Contact</i>
        </h2>
      </motion.section>
    </main>
  );
}

export default App;
