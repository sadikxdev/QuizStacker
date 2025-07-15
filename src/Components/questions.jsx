import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../Style/questions.css'

function SendQuestion(props) {
    // Hooks Declarations
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [message, setMessage] = useState('');
    const [showingAnswer, setShowingAnswer] = useState(false);
    const [difficulty,setDifficulty] = useState('');


    // Use State Hook
    useEffect(() => {

        if (
            props.Question &&
            props.Question.length > 0 &&
            props.Question[currentQuestionNumber] &&
            !showingAnswer
        ) {
            if (score >= 8) {
                setMessage("Aced it! You’re on a roll!");
            }
            else if (score >= 5) {
                setMessage('Well played! Level up next round!!');
            }
            else {
                setMessage('Don’t sweat it — every genius starts somewhere!!')
            }

            setDifficulty(props.Question[currentQuestionNumber].difficulty);
            setCurrentAnswer(props.Question[currentQuestionNumber].correct_answer);
            setCurrentQuestion(props.Question[currentQuestionNumber].question);
            const options = [
                ...props.Question[currentQuestionNumber].incorrect_answers,
                props.Question[currentQuestionNumber].correct_answer,
            ];
            const shuffled = options.sort(() => Math.random() - 0.5);
            setShuffledOptions(shuffled);
        }
    }, [props.Question, currentQuestionNumber, score,showingAnswer]);
    if (
        !props.Question ||
        props.Question.length === 0 ||
        !props.Question[currentQuestionNumber]
    ) {
        // Final Score
        if (currentQuestionNumber > 9) {
            return <section id="home">
            <div className="loading">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ amount: 0.7, once: true }}
                    className="loadingtext"
                    style={{ fontSize: '30px' }}
                >
                    {message}
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                    viewport={{ amount: 0.7, once: true }}
                    className="loadingtext"
                    style={{ fontSize: '30px' }}
                >
                    Your Have Scored {score}/10
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ amount: 0.7, once: true }}
                    className="loadingtext"
                    style={{marginTop:'-10px',fontSize:'18px'}}
                >
                    (Category : {props.Category})
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ amount: 0.7, once: true }}
                >
                    <button
                        style={{ marginTop: '50px' }}
                        className="optionButton"
                        onClick={handleRestart}>Play Again!!</button>
                </motion.div>
            </div>
            </section>;
        }
        else {
            return <div className="loading">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="loadingtext"
                >
                    Loading questions...
                </motion.h2>
            </div>;
        }
    }

    console.log(props.Question[currentQuestionNumber]);
    console.log(shuffledOptions)
    console.log(`Correct Answer is ${currentAnswer}`);
    // Handle Functions

    function handleRestart(){
        setCurrentQuestionNumber(0);
        setScore(0);
        setCurrentQuestion('');
        setShuffledOptions([]);
        setCurrentAnswer('');
        props.restart();
    }

    function handleOptionClick(e) {
        const answer = e.target.value;
        setButtonsDisabled(true);
        setShowingAnswer(true);
        if (answer === currentAnswer) {
            setCurrentQuestion(`Correct Answer!!`);
            setScore(score + 1);
        } else {
            setCurrentQuestion(`Wrong! The correct answer was: ${currentAnswer}`);
        }
        setTimeout(() => {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setButtonsDisabled(false);
            setShowingAnswer(false);
        }, 2000);
    }


    return (
        <section id="home">
            <div
                className="questionform"
            >
                <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >Category Choosen : {props.Category}</motion.h3>
                <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >Question Difficulty : {difficulty}</motion.h3>
                <div className="scorecard">

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{color:'#ddd9d2'}}
                    >Question No: {currentQuestionNumber + 1}/10</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{color:'#ddd9d2'}}
                    >Current Score: {score}</motion.p>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                    dangerouslySetInnerHTML={{  __html:currentQuestion }}>

                    </motion.h2>
                <div className="options">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 }}
                    >
                        <button

                            disabled={buttonsDisabled}
                            className="optionButton"
                            dangerouslySetInnerHTML={{ __html: shuffledOptions[0] }}
                            value={shuffledOptions[0]}
                            onClick={handleOptionClick}></button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 }}
                    >
                        <button
                            disabled={buttonsDisabled}
                            className="optionButton"
                            dangerouslySetInnerHTML={{ __html: shuffledOptions[1] }}
                            value={shuffledOptions[1]}
                            onClick={handleOptionClick}></button>
                    </motion.div>
                </div>

                <div className="options">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
                    >
                        <button
                            disabled={buttonsDisabled}
                            className="optionButton"
                            dangerouslySetInnerHTML={{ __html: shuffledOptions[2] }}
                            value={shuffledOptions[2]}
                            onClick={handleOptionClick}></button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
                    >
                        <button
                            disabled={buttonsDisabled}
                            className="optionButton"
                            dangerouslySetInnerHTML={{ __html: shuffledOptions[3] }}
                            value={shuffledOptions[3]}
                            onClick={handleOptionClick}></button>
                    </motion.div>
                </div>

            </div>

        </section>)
}


export default SendQuestion;