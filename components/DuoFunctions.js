import React from 'react'
import { useEffect, useState } from 'react';
import questions from './duoFunctions.json'
import Question from './Question';

export default function DuoFunctions({ part, cogFunctions }) {
    
    
    const [duoQuestions, setDuoQuestions] = useState([]);
    let questionChecked = [];
    let questionChoosen = [];
    let scoreChoice = [-1.0, -0.6, 0, 0.6, 1.0];

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
    const addChange = (choice, questionNum, cogfunc1, cogfunc2) => {
        questionChecked[questionNum] = true;
        questionChoosen[questionNum] = choice;
        let current1 = cogFunctions.get(cogfunc1);
        let current2 = cogFunctions.get(cogfunc2);
        cogFunctions.set(cogfunc1, current1 + (scoreChoice[choice - 1]));
        cogFunctions.set(cogfunc2, current2 + (scoreChoice[choice - 1] / (10/7)));
        console.log(cogFunctions);
    }
    const deleteChange = (cogfunc1, cogfunc2, questionNum, preChoice, choice) => {
        let current1 = cogFunctions.get(cogfunc1);
        let current2 = cogFunctions.get(cogfunc2);
        cogFunctions.set(cogfunc1, current1 - (scoreChoice[preChoice - 1]));
        cogFunctions.set(cogfunc2, current2 - (scoreChoice[preChoice - 1] / (10/7)));
        addChange(choice, questionNum, cogfunc1, cogfunc2);
    }
    useEffect(() => {
        setDuoQuestions(ShuffleArray(questions));
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


    return (
        <div style={part == 2 ? { display: 'block' } : { display: "none" }}>
            {duoQuestions.map((item, index) => {

                return (<Question key={index} index={index + 25} question={item.question} cogfunc1={item.func1} cogfunc2={item.func2}
                    onClickRadio={(choice, questionNum, cogfunc1, cogfunc2) => onClickRadio(choice, questionNum, cogfunc1, cogfunc2)} />)
            })}
        </div>
    )
}

