import React from "react";
import { motion } from "framer-motion";
import '../Style/connect.css'


function Connect() {
    const now = new Date();
    const time12hr = now.toLocaleTimeString('en-US', { hour12: true });
    const [hour, minute, secondAndPeriod] = time12hr.split(':');
    const [second, period] = secondAndPeriod.split(' ');
    const monthName = now.toLocaleString('default', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();
    console.log(second,monthName);


    return (
        <section id="connect">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ amount: 0.7, once: true }}
                className="connect"
            >
                <h1>Connect</h1>
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                    viewport={{ amount: 0.7, once: true }}
                >
                    The best solutions come from the most unexpected collaborations.
                </motion.h2>
            </motion.div>
            <div
                className="collab"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                    viewport={{ amount: 0.7, once: true }}
                >Let's
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ amount: 0.7, once: true }}
                >
                    <a href="mailto:sadikshaikh21001@gmail.com">
                        <div className="startBTN">
                            <h2 className="collabATC">Collaborate</h2>
                        </div>
                    </a>
                </motion.div>
            </div>
            <div className="signoff">
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ amount: 0.7, once: true }}
                >Crafted with logic, styled with passion</motion.h2>
                <div className="signoffName">
                    <motion.h3
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 10 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                        viewport={{ amount: 0.7, once: true }}
                    >SADIK SHAIKH<span></span>FULLSTACK DEV</motion.h3>
                </div>
                <div className="timeStamp">
                    <motion.p
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 10 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ amount: 0.7, once: true }}
                    >{hour}:{minute} {period} [IND] {date} {monthName} {year}</motion.p>
                </div>
            </div>
        </section>
    )
}

export default Connect;