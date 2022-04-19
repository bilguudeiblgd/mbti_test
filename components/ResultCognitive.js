import React from "react";


export default function ResultCognitive({ cogFunctions }) {
  console.log("reeached");
  console.log(cogFunctions);
  return (
    <div>
      <div
        className={"border-2 mb-6 md:mb-0 md:mr-4 w-80 rounded-2xl h-90 p-6"}
      >
        <h3 className={"text-1xl font-medium text-center mb-4"}>
          Cognitive functions
        </h3>
        <div className={"flex flex-row"}>
          <div>
            {[...cogFunctions.entries()].map((item, index) => {
              if (index >= 4) return;

              let value = Math.floor((item[1] / 15.8) * 100 * 10) / 10;
              return (
                <div className={"flex flex-col mr-2 mb-2"}>
                  <label for={item[0]}>
                    <p className={"text-sm"}>
                      {item[0]} - {value}%
                    </p>
                  </label>
                  <input
                    className={""}
                    type="range"
                    max="100"
                    value={value}
                    name={item[0]}
                  />
                </div>
              );
            })}
          </div>
          <div>
            {[...cogFunctions.entries()].map((item, index) => {
              if (index < 4) return;

              let value = Math.floor(((item[1] + 15.8) / 31.6) * 100 * 10) / 10;
              return (
                <div className={"flex flex-col ml-2 mb-2"}>
                  <label for={item[0]}>
                    <p className={"text-sm"}>
                      {item[0]} - {value}%
                    </p>
                  </label>
                  <input type="range" max="100" value={value} name={item[0]} />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
