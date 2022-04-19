import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router';
import Link from 'next/link';
import styles from "../styles/test.module.css";
import Logo from '../public/logo.jpg';
import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DuoFunctions from '../components/DuoFunctions';
import Question from '../components/Question';
import CaseStudy from '../components/CaseStudy';


export default function Test() {

  const router = useRouter();
  const [soloQuestions, setSoloQuestions] = useState([]);
  const [savingCogFunc, setSavingCogFunc] = useState(new Map());
  const [part, setPart] = useState(1);
  let cogFunctions = new Map();

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
  },
  {
    cogfunc: "Fi",
    question: "Би давгүй мэдрэмжтэй"
  },
   {
    cogfunc: "Fi",
    question: "Өөрийн ёс зүй, хэм хэмжээндээ үнэнч"
  }, {
    cogfunc: "Fi",
    question: "Шударга байдал надад эвтэй байхаас чухал"
  },];

  let questionChecked = [];
  let questionChoosen = [];
  let scoreChoice = [-1.0, -0.6, 0, 0.6, 1.0];

  useEffect(() => {
    tempArray = ShuffleArray(tempArray);
    setSoloQuestions(tempArray);
    setSavingCogFunc(cogFunctions);
  }, [])

  const onClickRadio = (choice, questionNum, cogfunc) => {

    cogFunctions = savingCogFunc;
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
  function createUrl() {
    
    let url = "/result/"
    let funcUrl =
      "Ne=" + Math.floor(savingCogFunc.get("Ne") * 10) / 10 +
      "&Ni=" + Math.floor(savingCogFunc.get("Ni") * 10) / 10 +
      "&Se=" + Math.floor(savingCogFunc.get("Se") * 10) / 10 +
      "&Si=" + Math.floor(savingCogFunc.get("Si") * 10) / 10 +
      "&Te=" + Math.floor(savingCogFunc.get("Te") * 10) / 10 +
      "&Ti=" + Math.floor(savingCogFunc.get("Ti") * 10) / 10 +
      "&Fe=" + Math.floor(savingCogFunc.get("Fe") * 10) / 10 +
      "&Fi=" + Math.floor(savingCogFunc.get("Fi") * 10) / 10;
      window.localStorage.setItem('previousTest', url + funcUrl);  
    router.push(url + funcUrl)

  }

  function changePart(item) {

    let currentPage = part;
    if (item == "next") {
      setPart(currentPage + 1);
    }
    else {
      cogFunctions = savingCogFunc;
      setPart(currentPage - 1);
    }
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <Navbar />
      <main className={"container mx-auto py-6"}>
        <div>
          {/* header background */}
        </div>
        {/* PART NEG */}
        <div style={part != 1 ? { display: 'none' } : { display: 'block' }} className={"max-w-4xl mx-auto"}>
          {soloQuestions.map((item, index) => {
            let sendIndex = index + 1;
            return <Question key={index} index={sendIndex} cogfunc={item.cogfunc} question={item.question}
              onClickRadio={(choice, questionNum, cogfunc) => onClickRadio(choice, questionNum, cogfunc)} />
          })}
          {/* <SubmitCalculation cogFunctions={cogFunctions} /> */}



        </div>
        {/* Part 2 */}

        <DuoFunctions part={part} cogFunctions={savingCogFunc} />
        <CaseStudy part={part} cogFunctions={savingCogFunc} />

        <div className={"flex justify-around"}>
          <button style={part == 1 ? { display: "none" } : { display: "block" }} className={"bg-[#6028ac] text-white px-6 py-2 rounded-full"} onClick={() => changePart("previous")}>
            <a>Өмнөх</a>
          </button>
          <button style={part == 3 ? { display: "none" } : { display: "block" }} className={"bg-[#6028ac] text-white px-6 py-2 rounded-full"} onClick={() => changePart("next")}>
            <a>Дараах</a>
          </button>
          <button style={part == 3 ? { display: "block" } : { display: "none" }} className={"bg-[#649821] text-white px-6 py-2 rounded-full"} onClick={() => createUrl()}>
            <a>Дуусгах</a>
          </button>
        </div>
      </main>
    </div>
  )
}


