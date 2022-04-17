import { AiOutlineArrowRight } from 'react-icons/ai';


const TestButton = () => {
    return <div className={"py-2"}>
        <button className={"py-2 px-8 flex flex-row items-center"} style={{ backgroundColor: "rgb(122,70,138)", color: "white", borderRadius: "25px", width: "100%" }}>
            <h3 className={"whitespace-nowrap mr-3"}>Тест өгөх</h3>
            <AiOutlineArrowRight size={"16px"} />
        </button>
    </div>
}


export default TestButton;