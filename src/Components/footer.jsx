import React from "react";
import { motion } from 'framer-motion';
import '../Style/footer.css'
function Footer() {
    const year = new Date().getFullYear();
    return (<div className="footer">
        <motion.h3
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            viewport={{ amount: 0.7, once: true }}
        >Copyright &copy;{year} QuizStacker. All Right Reserved!</motion.h3>
        <div className="footNav">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                viewport={{ amount: 0.4, once: true }}
            >
                <a href="https://github.com/sadikxdev/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/images/github.png"} className="qimg" alt="Github" />
                </a>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                viewport={{ amount: 0.4, once: true }}
            >
                <a href="https://www.linkedin.com/in/sadik-shaikh-994b51266/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/images/linkedin.png"} className="qimg" alt="LinkedIn" />
                </a>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                viewport={{ amount: 0.4, once: true }}
            >
                <a href="https://www.instagram.com/sadikxdev18/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/images/instagram.png"} className="qimg noimg" alt="Instagram" />
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
                viewport={{ amount: 0.4, once: true }}
            >
                <a href="https://x.com/sadikxdev18/" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + "/images/twitter.png"} className="qimg" alt="X" />
                </a>
            </motion.div>
        </div>
    </div>);
}



export default Footer;