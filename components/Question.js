import styles from "../styles/test.module.css";


export default function Question(props) {
    // console.log(props)
    const { index, cogfunc, question } = props;
    let questionChecked = [];
    let questionChoosen = [];
    let scoreChoice = [-1.0, -0.6, 0, 0.6, 1.0];

    const onChangeHandler = (e) => {

        let choice = e.target.id[(e.target.id).length - 1];
        if(props.cogfunc1 && props.cogfunc2) props.onClickRadio(choice, index, props.cogfunc1, props.cogfunc2);
        else props.onClickRadio(choice, index, cogfunc);
        
    }


    return <>
        <div className={"question-card-container flex flex-col items-center"} >
            <h1 className={"text-center text-1xl md:text-2xl font-semibold my-6"}>{index}. {question}</h1>
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