import React from "react";
import { motion } from "framer-motion"
import "../Style/about.css"
function About() {

    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ amount: 0.7, once: true }}
                className="abouthead">
                <h1>About</h1>
            </motion.div>
            <div className="about">
                <motion.h3
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                    viewport={{ amount: 0.7, once: true }}
                >
                    <span>QuizStacker</span> is an interactive quiz web app that makes learning fun through challenges and instant feedback.
                </motion.h3>


            </div>
            <div className="features">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ amount: 0.7, once: true }}
                >Key Features</motion.h1>
                <div className="featureDIV">
                    <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ amount: 0.7, once: true }}
                    className="featureCard">
                        <img src={process.env.PUBLIC_URL + "/images/menu.png"} className="featureIMG" alt="Category" />
                        <h3>Category-Based Quizzes</h3>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                    viewport={{ amount: 0.7, once: true }}
                    className="featureCard">
                        <img src={process.env.PUBLIC_URL + "/images/shuffle.png"} className="featureIMG" alt="Category" />
                        <h3>Randomized Questions & Options</h3>
                    </motion.div>
                </div>


                <div className="featureDIV">
                    <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ amount: 0.7, once: true }}
                    className="featureCard">
                        <img src={process.env.PUBLIC_URL + "/images/tap.png"} className="featureIMG" alt="Category" />
                        <h3>Instant Score & Feedback</h3>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
                    viewport={{ amount: 0.7, once: true }}
                    className="featureCard">
                        <img src={process.env.PUBLIC_URL + "/images/responsive.png"} className="featureIMG" alt="Category" />
                        <h3>Responsive & Simple UI</h3>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6}}
                    viewport={{ amount: 0.1, once: true }}
                >
                    <a href="#home" className="navigate navgate1">
                        <div className="startBTN">
                            <h3>Let's Play</h3>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}


export default About;