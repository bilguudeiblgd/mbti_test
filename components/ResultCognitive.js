import React from "react";

export default function ResultCognitive({ cogFunctions }) {
    console.log("reeached")
  console.log(cogFunctions);
  return (
    <div>
      <div
        className={"border-2 mb-6 md:mb-0 md:mr-4 w-80 rounded-2xl h-90 p-6"}
      >
        <h3 className={"text-1xl font-medium text-center"}>
          Cognitive functions
        </h3>
        {[...cogFunctions.entries()].map((item, index) => {
          if (index >= 4) return;
          console.log(item);
          let value = (item[1] / 15.8) * 100;
          return (
            <div>
              <label value="dada" />
              <input type="range" max="100" value={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
