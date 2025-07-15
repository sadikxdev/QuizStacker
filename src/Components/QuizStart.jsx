import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SendQuestion from "./questions";
import '../Style/quizstart.css'
function QuizStart() {
    // Use State Declaration
    const [category, setCategory] = useState("");
    const [questions, setQuestion] = useState('')
    const [categoryName, setCategoryName] = useState('');
    const [start, setStart] = useState(false);

    // Use Effect
    useEffect(() => {
        if(category === '9'){
            setCategoryName("General Knowledge")
        }
        else if(category === '18'){
            setCategoryName("Science(Computers)")
        }
        else if(category === '21'){
            setCategoryName("Sports")
        }
        else if(category === '11'){
            setCategoryName("Entertainment(Film)")
        }
        else if(category === '23'){
            setCategoryName("History")
        }
        else if(category === '15'){
            setCategoryName("Entertainment(Video Games)")
        }
        else if(category === '32'){
            setCategoryName("Entertainment(Cartoon & Animations)")
        }
        else if(category === '19'){
            setCategoryName("Science(Mathematics)")
        }


        if (category) {
            fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`) //&difficulty=easy
                .then((res) => res.json())
                .then((data) => setQuestion(data.results));
        }
    }, [setQuestion, category])

    // Handle Functions
    function hanldeStartQuiz() {
        setStart(true);
        console.log(start)
    }

    function handleCategory(e) {
        const newCategory = e.target.value;
        setCategory(newCategory);
        console.log(category)
    }

    function handleRestart(){
        setCategory('');
        setQuestion('');
        setCategoryName('');
        setStart(false);
    }



    return start === true ?
        <SendQuestion Question = {questions} Category = {categoryName} restart = {handleRestart} />

        : (
            <section id="home">
                <div className="header2">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                    >Select an Category to be Quized!!</motion.h1>

                    {/* Category Selection */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    >
                        <select onChange={handleCategory} className="category" defaultValue='' required>
                            <option className="selectHead" value="">Select an Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="11">Entertainment(Film)</option>
                            <option value="15">Entertainment(Video Games)</option>
                            <option value="32">Entertainment(Cartoon & Animations)</option>
                            <option value="18">Science(Computers)</option>
                            <option value="19">Science(Mathematics)</option>
                            <option value="21">Sports</option>
                            <option value="23">History</option>
                        </select>
                    </motion.div>
                    
                    <div style={{ userSelect: 'none' }} className="beginBTN" onClick={hanldeStartQuiz}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}>
                            <div className="startBTN startBTN2">
                                <h3>Start the Quiz</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
}


export default QuizStart;