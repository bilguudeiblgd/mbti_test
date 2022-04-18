import React from 'react'
import questions from './caseStudy.json';
import { useEffect, useState } from 'react';
import styles from "../styles/test.module.css";

export default function CaseStudy({ part, cogFunctions }) {

    const [caseQuestions, setCaseQuestions] = useState([]);
    let questionChecked = [];
    let questionChoosen = [];
    let scoreChoice = [-1.0, 1.0];
    const onClickRadio = (choice, questionNum, cogfunc1, cogfunc2) => {
        if (questionChecked[questionNum]) {
            if (questionChoosen[questionNum] == choice) return;
            let preChoice = questionChoosen[questionNum];
            // call redo
            deleteChange(cogfunc1, cogfunc2, questionNum, preChoice, choice);
            return;
        }
        addChange(choice, questionNum, cogfunc1, cogfunc2);
    }
    const deleteChange = (cogfunc1, cogfunc2, questionNum, preChoice, choice) => {
        let current1 = cogFunctions.get(cogfunc1);
        let current2 = cogFunctions.get(cogfunc2);
        cogFunctions.set(cogfunc1, current1 - (scoreChoice[preChoice - 1]));
        cogFunctions.set(cogfunc2, current2 + (scoreChoice[preChoice - 1]));
        addChange(choice, questionNum, cogfunc1, cogfunc2);
    }
    const addChange = (choice, questionNum, cogfunc1, cogfunc2) => {
        questionChecked[questionNum] = true;
        questionChoosen[questionNum] = choice;
        let current1 = cogFunctions.get(cogfunc1);
        let current2 = cogFunctions.get(cogfunc2);
        cogFunctions.set(cogfunc1, current1 + (scoreChoice[choice - 1]));
        cogFunctions.set(cogfunc2, current2 - (scoreChoice[choice - 1]));
        console.log(cogFunctions);
    }

    useEffect(() => {
        setCaseQuestions(ShuffleArray(questions));
    }, [])

    const ShuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let base = 57;
    return (
        <div style={part == 3 ? { display: 'block' } : { display: 'none' }}>
            {caseQuestions.map(((item, index) => {
                return <div key={index} className={"question-card-container flex flex-col items-center"} >
                    <h1 className={"text-center text-1xl md:text-2xl font-semibold mb-6"}>{base + index}. {item.question1}</h1>
                    <div className={"flex flex-row mt-4 items-center"}>
                        <div className={"flex flex-row items-center "}>
                            <p className={"mr-4 text-left w-60"}>{item.answer1}</p>
                            <input type="radio" onClick={() => onClickRadio(1, index + base, item.cogfunc1, item.cogfunc2)} className={styles.input1} id={`choice${index + base}-1`} name={`question-${index + base}`} />
                        </div>
                        <div onChange={onClickRadio} className={"border-b-2 w-24"}></div>
                        <div className={"flex flex-row items-center "}>
                            <input type="radio" onClick={() => onClickRadio(2, index + base, item.cogfunc1, item.cogfunc2)} className={styles.input5} id={`choice${index + base}-2`} name={`question-${index + base}`} />
                            <p className={"ml-4 text-right w-60"}>{item.answer2}</p>
                        </div>

                    </div>
                    <div className={"border-b-2 m-10"} style={{ width: "100%" }}></div>
                </div>
            }))}

        </div>
    )
}
