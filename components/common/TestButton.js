import { AiOutlineArrowRight } from "react-icons/ai";

const TestButton = () => {
  return (
    <div>
      <button
        className={
          "py-2 px-6 md:px-8 flex flex-row items-center hover:scale-105 duration-300 group"
        }
        style={{
          backgroundColor: "rgb(122,70,138)",
          border: "2px solid rgb(122,70,138)",
          color: "white",
          borderRadius: "25px",
          width: "100%",
        }}
      >
        <h3 className={"whitespace-nowrap mr-3"}>Тест өгөх</h3>
        <AiOutlineArrowRight
          size={"16px"}
          className="group-hover:translate-x-1 duration-300 hover:scale-110"
        />
      </button>
    </div>
  );
};

export default TestButton;
