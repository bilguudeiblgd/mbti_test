import { useRouter } from "next/router";
import Navbar from "../../components/common/Navbar";
import React, { useState } from "react";
import ResultCognitive from "../../components/ResultCognitive";
import Link from 'next/link';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MbtiScores from "../../components/MbtiScores";
import { LookForMore } from "../../components/LookForMore";
import Footer from "../../components/common/Footer";
import PopModal from "../../components/PopModal/PopModal";
import CyberioPopModal from "../../components/PopModal/CyberioPopModal";
export default function Result({ result }) {
  result = decodeURIComponent(result);

  let cogFunctions = new Map();
  let cogArr = result.split("&");
  cogArr.forEach((item) => {
    let func = item.slice(0, 2);
    let funcScore = item.slice(3, item.length);
    cogFunctions.set(func, parseFloat(funcScore));
  });

  const mbtiInFunctions = [
    { INTJ: ["Ni", "Te", "Fi", "Se"] },
    { ISTP: ["Ti", "Se", "Ni", "Fe"] },
    { ENTP: ["Ne", "Ti", "Fe", "Si"] },
    { ENFP: ["Ne", "Fi", "Te", "Si"] },
    { ISFP: ["Fi", "Se", "Ni", "Te"] },
    { INFP: ["Fi", "Ni", "Si", "Te"] },
    { INTP: ["Ti", "Ne", "Si", "Fe"] },
    { INFJ: ["Ni", "Fe", "Ti", "Se"] },
    { ESTJ: ["Te", "Si", "Ne", "Fi"] },
    { ENTJ: ["Te", "Ni", "Se", "Fi"] },
    { ESFJ: ["Fe", "Si", "Ne", "Ti"] },
    { ENFJ: ["Fe", "Ni", "Se", "Ti"] },
    { ISTJ: ["Si", "Te", "Fi", "Ne"] },
    { ISFJ: ["Si", "Fe", "Ti", "Ne"] },
    { ESTP: ["Se", "Ti", "Fe", "Ni"] },
    { ESFP: ["Se", "Fi", "Te", "Ni"] },
  ];

  let personalities = new Map();

  const calculate = () => {
    for (let item of mbtiInFunctions) {
      for (let key in item) {
        let formula = 0;
        // get all the respective cognitive function
        // for(let cogfunc of item[key])
        // {
        //   if(cogfunc)
        //   formula += cogFunctions.get(cogfunc);
        // }

        formula += cogFunctions.get(item[key][0]) * 1.4;
        formula += cogFunctions.get(item[key][1]) * 1;
        formula += cogFunctions.get(item[key][2]) * 0.8;
        formula += cogFunctions.get(item[key][3]) * 0.2;
        formula = Math.round(formula * 10) / 10;
        formula = ((formula + 53.72) / 107.44) * 100;
        formula = Math.round(formula * 10) / 10;
        personalities.set(key, formula);
      }
    }

    let personalitiesSorted = new Map(
      [...personalities.entries()].sort((a, b) => b[1] - a[1])
    );

    personalities = personalitiesSorted;
  };
  let resultCyber = [];
  let creditWords = new Map();
  creditWords.set(3.5, "БАТТАЙ");
  creditWords.set(3.0, "БАТТАЙ");
  creditWords.set(2.5, "БАТТАЙ");
  creditWords.set(2.0, "ӨНДӨР МАГАДЛАЛТАЙ");
  creditWords.set(1.5, "САЙН МАГАДЛАЛТАЙ");
  creditWords.set(1.0, "МАГАДЛАЛТАЙ");
  creditWords.set(0.5, "БАГА МАГАДЛАЛТАЙ");
  const calculateCyber = () => {
    // Initializing

    let twinFunctions = new Map();
    twinFunctions.set("Fi", "Ti");
    twinFunctions.set("Ti", "Fi");
    twinFunctions.set("Ni", "Si");
    twinFunctions.set("Si", "Ni");
    twinFunctions.set("Se", "Ne");
    twinFunctions.set("Ne", "Se");
    twinFunctions.set("Fe", "Te");
    twinFunctions.set("Te", "Fe");
    let cognitiesSorted = new Map(
      [...cogFunctions.entries()].sort((a, b) => b[1] - a[1])
    );
    let cogniSortedArray = [...cognitiesSorted.entries()];
    // let twoPossibleIteration = [cogniSortedArray[0][0], cogniSortedArray[0][1]]

    for (let i = 0; i < 2; i++) {
      // Find 2 highest scoring functions
      let maxCog = cogniSortedArray[i][0];

      let credit1 = 0;
      let credit2 = 0;

      // Find 2 types that has this dominant function
      let cogWithMax1 = [];
      let mbtiWithMax1;
      let cogWithMax2 = [];
      let mbtiWithMax2;
      let foundFirst = false;

      for (let item of mbtiInFunctions) {
        for (let key in item) {
          if (maxCog == item[key][0] && !foundFirst) {
            foundFirst = true;
            cogWithMax1 = item[key];
            mbtiWithMax1 = key;
          }
          if (maxCog == item[key][0]) {
            cogWithMax2 = item[key];
            mbtiWithMax2 = key;
          }
        }
      }
      // Defining

      // Add middle functions
      let middleFuncSum1 =
        cogFunctions.get(cogWithMax1[1]) + cogFunctions.get(cogWithMax1[2]);

      let middleFuncSum2 =
        cogFunctions.get(cogWithMax2[1]) + cogFunctions.get(cogWithMax2[2]);

      if (middleFuncSum1 > middleFuncSum2) credit1++;
      else credit2++;

      // Check 2nd and 3rd function with inferior
      if (cogFunctions.get(cogWithMax1[1]) > cogFunctions.get(cogWithMax1[3]))
        credit1 = credit1 + 0.5;
      else credit1 = credit1 - 0.5;
      if (cogFunctions.get(cogWithMax1[2]) > cogFunctions.get(cogWithMax1[3]))
        credit1 = credit1 + 0.5;
      else credit1 = credit1 - 0.5;

      if (cogFunctions.get(cogWithMax2[1]) > cogFunctions.get(cogWithMax2[3]))
        credit2 = credit2 + 0.5;
      else credit2 = credit2 - 0.5;
      if (cogFunctions.get(cogWithMax2[2]) > cogFunctions.get(cogWithMax2[3]))
        credit2 = credit2 + 0.5;
      else credit2 = credit2 - 0.5;

      // Check if the twin is the lowest

      let twinOfAuxCog1 = cogFunctions.get(twinFunctions.get(cogWithMax1[1]));
      let twinOfAuxCog2 = cogFunctions.get(twinFunctions.get(cogWithMax2[1]));

      if (twinOfAuxCog1 == cogniSortedArray[7][1]) credit1 = credit1 + 0.5;
      else if (twinOfAuxCog1 == cogniSortedArray[6][1]) credit1 = credit1 + 0.5;
      if (twinOfAuxCog2 == cogniSortedArray[7][1]) credit2 = credit2 + 0.5;
      else if (twinOfAuxCog2 == cogniSortedArray[6][1]) credit2 = credit2 + 0.5;

      // Check where is the 2nd function
      let place1;
      let place2;
      for (let item in cogniSortedArray) {
        if (cogWithMax1[1] == cogniSortedArray[item][0]) {
          place1 = parseInt(item) + 1;
        }
        if (cogWithMax2[1] == cogniSortedArray[item][0]) {
          place2 = parseInt(item) + 1;
        }
      }

      let score1 = (2 - place1) * 0.5;
      let score2 = (2 - place2) * 0.5;
      credit1 += score1;
      credit2 += score2;

      if (credit1 > credit2) {
        resultCyber.push({ mbti: mbtiWithMax1, score: credit1 });
      } else {
        resultCyber.push({ mbti: mbtiWithMax2, score: credit2 });
      }
    }
    if (resultCyber[1].score > resultCyber[0].score) {
      let temp = resultCyber[0];
      resultCyber[0] = resultCyber[1];
      resultCyber[1] = temp;
    }
  };
  // saving the user data
  const [saveMsg, setSaveMsg] = useState("");
  const saveAnswer = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("personality")) {
        localStorage.removeItem("personality");
        localStorage.removeItem("url");
      }
      localStorage.setItem("personality", resultCyber[0].mbti);
      localStorage.setItem("url", result);
      setSaveMsg("Хариу хадгалагдлаа :)");
    }
  };
  return (
    <div>
      <Navbar />
      <main className={"container mx-auto"}>
        <div className={"flex flex-col justify-center items-center my-12"}>
          <h1 className={"text-4xl text-center mb-8"}>
            Зан чанарын тестийн хариу
          </h1>
          {calculate()}
          <div className={"flex flex-col md:flex-row justify-around"}>
            <div
              className={
                "border-2 mb-6 md:mb-0 md:mr-8 w-80 relative shadow-md rounded-2xl h-90 p-6"
              }
            >

              <h3 className={"text-1xl font-medium text-center"}>
                Mistype Investigator formula
              </h3>

              <div className={"flex mt-6 flex-row justify-around"}>
                <div>
                  {[...personalities.keys()].map((key, index) => {
                    return (
                      <div key={index}>
                        {index <= 7 ? (
                          <div>
                            <h2
                              style={
                                index == 0
                                  ? {
                                    backgroundColor: "#FFD93D",
                                    borderRadius: "24px",
                                    paddingTop: "4px",
                                    paddingBottom: "4px",
                                    paddingLeft: "12px",
                                    paddingRight: "12px",
                                  }
                                  : {}
                              }
                              className={"mb-2"}
                              key={index}
                            >
                              {index + 1}. {key}:{personalities.get(key)}%
                            </h2>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={"py-2"}>
                  {[...personalities.keys()].map((key, index) => {
                    return (
                      <div key={index}>
                        {index > 7 ? (
                          <div>
                            <h2 className={"mb-2"} key={index}>
                              {index + 1}. {key}:{personalities.get(key)}%
                            </h2>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <PopModal title={"Mistype Investigator formula"} text={"Mistype Investigator formula нь бүх зан чанарын cognitive function-ыг загвараар нь 1st*1.4+2nd*1+3rd*0.8+4th*0.2=Оноо гэж гаргаад оноогоор нь жагсаадаг Жишээ нь INTJ байх оноо нь тест өгөгчийн Ni оноог 1.4-т үржүүлээд, Te оноог 1-т, Fi оноог 0.8-т, Se оноог 0.2-т үржүүлээд бүх гарсан тооны нийлбэр нь болно"} />
            </div>

            {calculateCyber()}
            <div
              className={"border-2 md:ml-8 w-80 shadow-md relative rounded-2xl h-90 p-6"}
            >
              <h3 className={"text-1xl font-medium text-center"}>
                Custom formula
              </h3>
              <div className={"mt-6 flex flex-col items-center"}>
                <p className={"font-medium text-md"}>Таны зан чанар:</p>
                <div className={"w-full flex justify-center"}>
                  <h2
                    className={
                      "bg-[#FFD93D] text-xl w-max px-8 mt-2 rounded-3xl py-2 text-center"
                    }
                  >
                    {resultCyber[0].mbti}
                  </h2>
                </div>
                {/* {console.log(resultCyber[0].score, resultCyber[1].score)} */}
                <p className={"mt-2"}>
                  байх нь{" "}
                  <span className={"font-semibold"}>
                    {resultCyber[0].score < 0.5
                      ? "ТОДОРХОЙ БИШ"
                      : creditWords.get(resultCyber[0].score)}
                  </span>
                </p>
                <h4 className={"mt-6 text-lg font-medium"}>Эсвэл</h4>
                <div className={"w-full flex justify-center"}>
                  <h2
                    className={
                      "bg-[#acacac] w-max px-8 mt-2 rounded-3xl py-2 text-center"
                    }
                  >
                    {resultCyber[1].mbti}
                  </h2>
                </div>
                <p className={"mt-2"}>
                  байх нь{" "}
                  <span className={"font-semibold"}>
                    {resultCyber[1].score < 0.5
                      ? "ТОДОРХОЙ БИШ"
                      : creditWords.get(resultCyber[1].score)}
                  </span>
                </p>
              </div>
              <CyberioPopModal />
            </div>

          </div>

          <div className={"mt-12"}>
            {!saveMsg ? (
              <button
                onClick={saveAnswer}
                className={
                  "border-2 bg-[#6BCB77] px-6 py-2 text-white rounded-full"
                }
              >
                Хариуг хадгалах
              </button>
            ) : (
              <p className={"text-green-400"}>{saveMsg}</p>
            )}
          </div>
          <div className={"max-w-lg mt-6"}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className={"text-sm font-semibold"}>
                  Яагаад 16personality.com-ийн хариунаас шал өөр хариу гарна вэ?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className={"text-sm"}>
                  - Англи тестийн асуултыг янз бүрээр ойлгохоос гадна тест авж буй хэмжүүрүүд нь mistype буюу оновчгүй хариу гаргахад хүргэдэг. Үүнтэй тэмцэхийн тулд энэхүү тестийг хийсэн юм. Энэхүү тест нь Intuitive vs Sensing, Introvert vs Extrovert, Thinking vs Feeling гэх мэтийн хар цагаан аргаар тестлэх бус cognitive function буюу таны бодох арга барилыг шалгаж хариу гаргадаг. Зан чанар бүрд thinking, feeling, sensing, intuiting зэрэг агуулагдаж байдаг ба заримдаа тэд нь хосолж ажилдаг. Жишээ нь ENTP нь {'Ne>Ti>Fe>Si'} гэсэн загвартай голд байгаа 2 function нь хоорондоо солбилцдог тул ENTP нь бусад тестууд дээр Feeler гэж гарах боломжтой байдаг. Мөн ENTP зан чанартай хүмүүс ambivert байдаг тул INTP гэж гарах хандлагатай. Жич: жинхэнэ INTP нь хамгийн introverted type гэсэн байдаг. Хэрвээ илүү судлахыг хүсвэл: <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Jungian_cognitive_functions">Jungian_cognitive_functions</a>
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* section 2 */}
        </div>
        <div className={"border-b-2 w-3/4 mx-auto mb-12"}></div>
        <div className={"flex flex-col items-center mb-20"}>
          <h1 className={"text-4xl text-center mb-8"}>Тестийн оноо</h1>
          <div className={"flex flex-col items-center justify-center"}>
            <div className={""}>
              <ResultCognitive cogFunctions={cogFunctions} />
            </div>
            {/* <div className={"md:ml-8"}>
              <MbtiScores cogFunctions={cogFunctions} />
            </div> */}
            <div className={"mt-6 flex flex-col items-center"}>
              <h1 className={"text-sm px-2 text-center font-bold"}>Cognitive Function ба 16 Personality-ийн талаар дэлгэрэхгүй уншихыг хүсвэл</h1>
              <Link href="/personality16">
                <a className={"px-8 mt-4 py-2 bg-[#FFD93D] text-white rounded-full border-2"}>16 Personality тайлбар</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={"border-b-2 w-3/4 mx-auto mb-12"}></div>
        <LookForMore />
      </main>
      <footer className={""}>
        <Footer />
      </footer>
    </div>
  );
}

Result.getInitialProps = async ({ query }) => {
  const { result } = query;

  return { result };
};
