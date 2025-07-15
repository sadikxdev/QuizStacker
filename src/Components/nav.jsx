import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../Style/nav.css';

function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        const handleAnchorClick = function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false); 
            }
        };
        anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));
        return () => {
            anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
        };
    }, []);

    return (
        <div className="nav-container">
             
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
                <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>

            
            <div className={`navtabs ${isOpen ? "show" : ""}`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <a href="#home" className="navigate navgate1">
                        <div className="navdiv"><p>Home</p></div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                >
                    <a href="#about" className="navigate navgate3">
                        <div className="navdiv"><p>About</p></div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                >
                    <a href="#connect" className="navigate navgate4">
                        <div className="navdiv"><p>Connect</p></div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Nav;
