import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import React, { useState } from "react";
import ResultCognitive from "../../components/ResultCognitive";

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

  const calculateCyber = () => {
    // Initializing

    let twinFunctions = new Map();
    twinFunctions.set('Fi', 'Ti'); twinFunctions.set('Ti', 'Fi');
    twinFunctions.set('Ni', 'Si'); twinFunctions.set('Si', 'Ni');
    twinFunctions.set('Se', 'Ne'); twinFunctions.set('Ne', 'Se');
    twinFunctions.set('Fe', 'Te'); twinFunctions.set('Te', 'Fe');
    let cognitiesSorted = new Map([...cogFunctions.entries()].sort((a, b) => b[1] - a[1]));
    let cogniSortedArray = [...cognitiesSorted.entries()];
    // let twoPossibleIteration = [cogniSortedArray[0][0], cogniSortedArray[0][1]]
    for (let i = 0; i < 2; i++) {
      // Find 2 highest scoring functions
      let maxCog = cogniSortedArray[i][0];
      console.log(maxCog);
      let credit1 = 0;
      let credit2 = 0;

      // Find 2 types that has this dominant function
      let cogWithMax1 = [];
      let mbtiWithMax1;
      let cogWithMax2 = [];
      let mbtiWithMax2
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
      console.log(cogWithMax1);
      console.log(cogWithMax2);

      // Add middle functions
      let middleFuncSum1 = cogFunctions.get(cogWithMax1[1]) + cogFunctions.get(cogWithMax1[2]);

      let middleFuncSum2 = cogFunctions.get(cogWithMax2[1]) + cogFunctions.get(cogWithMax2[2]);

      if (middleFuncSum1 > middleFuncSum2) credit1++
      else credit2++;
      console.log("Combo score");
      console.table([credit1, credit2]);
      // Check 2nd and 3rd function with inferior
      if (cogFunctions.get(cogWithMax1[1]) > cogFunctions.get(cogWithMax1[3])) credit1 = credit1 + 0.5
      else credit1 = credit1 - 0.5;
      if (cogFunctions.get(cogWithMax1[2]) > cogFunctions.get(cogWithMax1[3])) credit1 = credit1 + 0.5
      else credit1 = credit1 - 0.5;

      if (cogFunctions.get(cogWithMax2[1]) > cogFunctions.get(cogWithMax2[3])) credit2 = credit2 + 0.5
      else credit2 = credit2 - 0.5;
      if (cogFunctions.get(cogWithMax2[2]) > cogFunctions.get(cogWithMax2[3])) credit2 = credit2 + 0.5
      else credit2 = credit2 - 0.5;

      console.log("Checking with inferior");
      console.table([credit1, credit2]);
      // Check if the twin is the lowest

      let twinOfAuxCog1 = cogFunctions.get(twinFunctions.get(cogWithMax1[1]));
      let twinOfAuxCog2 = cogFunctions.get(twinFunctions.get(cogWithMax2[1]));

      if (twinOfAuxCog1 == cogniSortedArray[7][1]) credit1 = credit1 + 0.5;
      else if (twinOfAuxCog1 == cogniSortedArray[6][1]) credit1 = credit1 + 0.5;
      if (twinOfAuxCog2 == cogniSortedArray[7][1]) credit2 = credit2 + 0.5;
      else if (twinOfAuxCog2 == cogniSortedArray[6][1]) credit2 = credit2 + 0.5;
      console.log("Checking with Twin");
      console.table([credit1, credit2]);
      // Check where is the 2nd function
      let place1;
      let place2;
      for (let item in cogniSortedArray) {
        console.log(item);
        if (cogWithMax1[1] == cogniSortedArray[item][0]) {
          place1 = parseInt(item) + 1;

        }
        if (cogWithMax2[1] == cogniSortedArray[item][0]) {
          place2 = parseInt(item) + 1;
        }
      }
      console.log("place" + place1);
      let score1 = (2 - (place1)) * 0.5;
      let score2 = (2 - (place2)) * 0.5;
      credit1 += score1;
      credit2 += score2;
      console.log("Checking the position");
      console.table([credit1, credit2]);

      if (credit1 > credit2) {
        console.log(mbtiWithMax1);
        resultCyber.push({ mbti: mbtiWithMax1, score: credit1 });
      }
      else {
        console.log(mbtiWithMax2);
        resultCyber.push({ mbti: mbtiWithMax2, score: credit2 });
      }
      console.log(credit1);
      console.log(credit2);
    }


  }

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
                "border-2 mb-6 md:mb-0 md:mr-4 w-80 rounded-2xl h-90 p-6"
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
            </div>
            {calculateCyber()}
            <div className={"border-2 md:ml-4 w-80 rounded-2xl h-90 p-6"}>
              <h3 className={"text-1xl font-medium text-center"}>
                Cyberio{"\'"}s formula
                <div className={"mt-6 flex flex-col items-center"}>
                  <p>Таны зан чанар:</p>
                  <div className={"w-full flex justify-center"}>
                    <h2
                      className={
                        "bg-[#FFD93D] w-max px-8 mt-2 rounded-3xl py-2 text-center"
                      }
                    >
                      {resultCyber[0].mbti}
                    </h2>
                  </div>
                  <p>байх нь БАТТАЙ</p>
                  <h4 className={"mt-4"}>Эсвэл</h4>
                  <div className={"w-full flex justify-center"}>
                    <h2
                      className={
                        "bg-[#868686] w-max px-8 mt-2 rounded-3xl py-2 text-center"
                      }
                    >
                      {resultCyber[1].mbti}
                    </h2>
                  </div>
                  <p>байх нь ӨНДӨР МАГАДЛАЛТАЙ</p>
                </div>
              </h3>
            </div>
          </div>
          {/* section 2 */}
        </div>
        <div className={"border-b-2 w-3/4 mx-auto mb-12"}></div>
        <div className={"flex flex-col items-center"}>
          <h1 className={"text-4xl text-center mb-8"}>Тестийн оноо</h1>
          <ResultCognitive cogFunctions={cogFunctions} />
        </div>
      </main>
    </div>
  );
}

Result.getInitialProps = async ({ query }) => {
  const { result } = query;

  return { result };
};
