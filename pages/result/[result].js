import { useRouter } from "next/router";
import Navbar from '../../components/Navbar';
import React from 'react'

export default function Result({ result }) {

  result = decodeURIComponent(result);
  let cogFunctions = new Map();
  let cogArr = result.split("&");
  cogArr.forEach((item) => {
    let func = item.slice(0, 2);
    let funcScore = item.slice(3, item.length);
    cogFunctions.set(func, parseFloat(funcScore));
  })

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

        formula += cogFunctions.get(item[key][0]) * 1;
        formula += cogFunctions.get(item[key][1]) * 0.8;
        formula += cogFunctions.get(item[key][2]) * 0.6;
        formula += cogFunctions.get(item[key][3]) * 0.4;
        formula = Math.round((formula) * 10) / 10
        formula = ((formula + 15.8) / 31.6) * 100
        formula = Math.round((formula) * 10) / 10
        personalities.set(key, formula);
      }
    }

    let personalitiesSorted = new Map([...personalities.entries()].sort((a, b) => b[1] - a[1]));

    console.log(personalitiesSorted);
    personalities = personalitiesSorted;

  }
  return (

    <div>
      <Navbar />
      <main className={"container mx-auto"}>
        <div className={"flex flex-col justify-center items-center my-12"}>
          <h1 className={"text-4xl mb-8"}>Зан чанарын тестийн хариу</h1>
          {calculate()}
          <div>
            <div className={"border-2 w-80 rounded-2xl h-90 p-6"}>
              <h3 className={"text-1xl font-medium text-center"}>Mistype Investigator formula</h3>
              <div className={"flex mt-6 flex-row justify-around"}>
                <div>
                  {
                    [...personalities.keys()].map((key, index) => {
                      return <div key={index}>
                        {
                          index <= 7
                            ?
                            <div>
                              <h2 style={
                                index == 0
                                  ? { backgroundColor: "#ffb703", borderRadius: "24px", paddingTop: "4px", paddingBottom: "4px", paddingLeft: "12px", paddingRight: "12px" }
                                  : {}
                              } className={"mb-2"} key={index}>{index + 1}. {key}:{personalities.get(key)}%</h2>
                            </div>
                            :
                            <div></div>
                        }
                      </div>
                    })
                  }
                </div>
                <div className={"py-2"}>
                  {
                    [...personalities.keys()].map((key, index) => {
                      return <div key={index}>
                        {
                          index > 7
                            ?
                            <div>
                              <h2 className={"mb-2"} key={index}>{index + 1}. {key}:{personalities.get(key)}%</h2>
                            </div>
                            :
                            <div></div>
                        }
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>

          <div className={"border-2"}>

          </div>
        </div>
      </main>
    </div>
  )
}

Result.getInitialProps = async ({ query }) => {
  const { result } = query

  return { result }
}