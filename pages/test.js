import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router';
import Link from 'next/link';
import styles from "../styles/test.module.css";
import Logo from '../public/logo.jpg';
import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';



export default function Test() {
  // const [stateCogFunc, setStateCogFunc] = useState(new Map());
  const router = useRouter();
  const [soloQuestions, setSoloQuestions] = useState([])
  let cogFunctions = new Map();
  console.log("rendering again")
  cogFunctions.set("Ne", 0);
  cogFunctions.set("Ni", 0);
  cogFunctions.set("Se", 0);
  cogFunctions.set("Si", 0);
  cogFunctions.set("Te", 0);
  cogFunctions.set("Ti", 0);
  cogFunctions.set("Fe", 0);
  cogFunctions.set("Fi", 0);
  let tempArray = [{
    cogfunc: "Ne",
    question: "Миний толгойгоор дүүрэн шинэ санаанууд байдаг",
  }, {
    cogfunc: "Ne",
    question: "Би хамааралгүй мэт хоёр зүйлсийн хоорондын холбоо ажиглах дуртай"
  }, {
    cogfunc: "Ne",
    question: "Миний ухаан санаа энд тэндгүй байх хандлагатай"
  }, {
    cogfunc: "Ni",
    question: "Холын ирээдүй өөрийн эрхгүй нүдэнд харагддаг"
  }, {
    cogfunc: "Ni",
    question: "Юмсын зүй тогтол надад амархан ажиглагддаг"
  }, {
    cogfunc: "Ni",
    question: "Би нэг харах өнцгөндөө хэт туйлшрах хандлагатай"
  }, {
    cogfunc: "Se",
    question: "Би хурдан шаламгай сэтгэж дасан зохицохдоо сайн"
  }, {
    cogfunc: "Se",
    question: "Би тухайн цаг үе мөчдөө төвлөрч бүрэн мэдрэх дуртай"
  }, {
    cogfunc: "Se",
    question: "Би эрсдэлтэй үйлдэл авах дуртай"
  }, {
    cogfunc: "Si",
    question: "Би баримт, болсон үйл явдлуудыг маш тод санадаг"
  }, {
    cogfunc: "Si",
    question: "Цагийн хуваарь гэх мэт дадал зуршил хэвшүүлэх надад амархан"
  }, {
    cogfunc: "Si",
    question: "Би өнгөрсөндөө уягдах хандлагатай"
  }, {
    cogfunc: "Te",
    question: "Би ямарваа нэгэн асуудлыг шийдэх хамгийн дөт замыг олохдоо сайн"
  }, {
    cogfunc: "Te",
    question: "Би бодит үр дүнтэй үйлдлүүд авахыг эрхэмлэдэг"
  }, {
    cogfunc: "Te",
    question: "Би хэт захирангүй байх хандлагатай"
  }, {
    cogfunc: "Ti",
    question: "Бусдын логикийн алдаа надад амархан олддог"
  }, {
    cogfunc: "Ti",
    question: "Би юмсын логик учир шалтгааныг гүн тунгаан боддог"
  }, {
    cogfunc: "Ti",
    question: "Надад хариунаас илүү бодох арга барил нь чухал"
  }, {
    cogfunc: "Fe",
    question: "Би хэнтэй ч хамаагүй аашийг нь олоод харьцчихдаг"
  }, {
    cogfunc: "Fe",
    question: "Бусдын сэтгэл хөдлөл надад чухал"
  }, {
    cogfunc: "Fe",
    question: "Надад өөрийнхөө шаардлагыг бусдад тавих хэцүү байдаг"
  }, {
    cogfunc: "Fi",
    question: "Өөрийн ёс зүй, хэм хэмжээндээ үнэнч"
  }, {
    cogfunc: "Fi",
    question: "Шударга байдал надад эвтэй байхаас чухал"
  },];

  let questionChecked = [];
  let questionChoosen = [];
  let scoreChoice = [-1.0, -0.6, 0, 0.6, 1.0];
  let Ne, Ni;
  useEffect(() => {
    tempArray = ShuffleArray(tempArray);
    setSoloQuestions(tempArray);
  }, [])

  const onClickRadio = (choice, questionNum, cogfunc) => {

    // check whether it's change or new
    if (questionChecked[questionNum]) {
      if (questionChoosen[questionNum] == choice) return;
      let preChoice = questionChoosen[questionNum];
      // call redo
      deleteChange(cogfunc, questionNum, preChoice, choice);
      return;
    }
    addChange(choice, questionNum, cogfunc);
  }
  const addChange = (choice, questionNum, cogfunc) => {
    questionChecked[questionNum] = true;
    questionChoosen[questionNum] = choice;
    let current = cogFunctions.get(cogfunc);

    cogFunctions.set(cogfunc, current + scoreChoice[choice - 1]);

    console.log(cogFunctions);
  }
  const deleteChange = (cogfunc, questionNum, preChoice, choice) => {
    let current = cogFunctions.get(cogfunc);
    cogFunctions.set(cogfunc, current - scoreChoice[preChoice - 1]);
    addChange(choice, questionNum, cogfunc);
  }

  // shuffle the array
  // Defacto Fisher-Yates shuffle
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
  tempArray = ShuffleArray(tempArray);
  let resParameter = "";
  function createUrl()
  {
    
    let url = "/result/" + 
    "Ne=" + cogFunctions.get("Ne") +
    "&Ni=" + cogFunctions.get("Ni") + 
    "&Se=" + cogFunctions.get("Se") + 
    "&Si=" + cogFunctions.get("Si") + 
    "&Te=" + cogFunctions.get("Te") + 
    "&Ti=" + cogFunctions.get("Ti") + 
    "&Fe=" + cogFunctions.get("Fe") + 
    "&Fi=" + cogFunctions.get("Fi");
    
    router.push(url)
    
  }

  return (
    <div>
      <Navbar />
      <main className={"container mx-auto py-6"}>
        <div>
          header background
        </div>

        <div className={"max-w-4xl mx-auto"}>
          {soloQuestions.map((item, index) => {
            let sendIndex = index + 1;
            return <QuestionComponent key={index} index={sendIndex} cogfunc={item.cogfunc} question={item.question}
              onClickRadio={(choice, questionNum, cogfunc) => onClickRadio(choice, questionNum, cogfunc)} />
          })}
          {/* <SubmitCalculation cogFunctions={cogFunctions} /> */}
          <button onClick={createUrl}>
            <a>Submit</a>
          </button>
        </div>
      </main>
    </div>
  )
}



const QuestionComponent = (props) => {

  const { index, cogfunc, question } = props;


  const onChangeHandler = (e) => {

    let choice = e.target.id[(e.target.id).length - 1];

    props.onClickRadio(choice, index, cogfunc);

  }


  return <>
    <div className={"question-card-container flex flex-col items-center"} >
      <h1 className={"text-center text-2xl font-semibold my-6"}>{index}. {question}</h1>
      <div>
        <div onChange={onChangeHandler} className="question-radio flex flex-row justify-center items-center">
          <input className={styles.input1} type="radio" id={`choice${index}-1`} name={`question-${index}`} />
          <input className={styles.input2} type="radio" id={`choice${index}-2`} name={`question-${index}`} />
          <input className={styles.input3} type="radio" id={`choice${index}-3`} name={`question-${index}`} />
          <input className={styles.input4} type="radio" id={`choice${index}-4`} name={`question-${index}`} />
          <input className={styles.input5} type="radio" id={`choice${index}-5`} name={`question-${index}`} />
        </div>
        <div className="flex flex-row justify-between px-4">
          <h1>Үгүй</h1>
          <h1>Тийм</h1>
        </div>
      </div>
      <div className={"border-b-2 m-10"} style={{ width: "100%" }}></div>
    </div>
  </>
}