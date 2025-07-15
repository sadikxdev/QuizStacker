import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../Style/header.css'
import QuizStart from "./QuizStart";
function Headerr() {
    const [start, setStart] = useState(false);
    function handleClick() {
        setStart(true);
        console.log(start);
    }


    useEffect(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        const handleAnchorClick = function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        };
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });
    }, []);
    return  start === true ?(
        <QuizStart/>
    ):(
        <section id="home">
            <div className="header">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut",delay:0.2 }}
                >
                    <a href="localhost:3000" style={{ textDecoration: 'none', color: '#ddd9d2', userSelect: 'none' }}><h1 style={{ userSelect: 'none' }}>QuizStacker</h1></a>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}>
                    <p>A fast, fun, and challenging quiz platform built for curious minds.</p>
                </motion.div>

                <div style={{ userSelect: 'none' }} className="beginBTN" onClick={handleClick}>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}>
                    <div className="startBTN">
                        <h3>Start The Quest</h3>
                    </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}


export default Headerr;