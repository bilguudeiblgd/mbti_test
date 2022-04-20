import React from 'react'

export default function MbtiScores({ cogFunctions }) {

    let introExtro = [];
    let intuitionSensing = [];
    let thinkingFeeling = [];
    let judgingProspecting = [];
    const calculateMbtiRatio = () => {

        let Fi = cogFunctions.get("Fi");
        let Fe = cogFunctions.get("Fe");
        let Te = cogFunctions.get("Te");
        let Ti = cogFunctions.get("Ti");
        let Ne = cogFunctions.get("Ne");
        let Ni = cogFunctions.get("Ni");
        let Se = cogFunctions.get("Se");
        let Si = cogFunctions.get("Si");
        let sumIntuition = Ne + Ni;
        let sumSensing = Se + Si;
        let highestIntuitionSensing;
        let intuitionPercent;
        let sensingPercent;
        // if both is positive
        if (sumIntuition >= 0 && sumSensing >= 0) {
            highestIntuitionSensing = sumIntuition + sumSensing;
            intuitionPercent = Math.floor((sumIntuition * 100 / highestIntuitionSensing * 10)) / 10;
            sensingPercent = Math.floor((sumSensing * 100 / highestIntuitionSensing * 10)) / 10
        }
        // if 1 is minus and the other is not
        else if (sumIntuition < 0 && sumSensing >= 0) {
            sumIntuition = Math.abs(sumIntuition);
            sumSensing += sumIntuition * 2;
            highestIntuitionSensing = sumIntuition + sumSensing;
            intuitionPercent = Math.floor((sumIntuition * 100 / highestIntuitionSensing * 10)) / 10;
            sensingPercent = Math.floor((sumSensing * 100 / highestIntuitionSensing * 10)) / 10;
        }
        else if (sumSensing < 0 && sumIntuition >= 0) {
            sumSensing = Math.abs(sumSensing);
            sumIntuition += sumSensing * 2;
            highestIntuitionSensing = sumIntuition + sumSensing;
            intuitionPercent = Math.floor((sumIntuition * 100 / highestIntuitionSensing * 10)) / 10;
            sensingPercent = Math.floor((sumSensing * 100 / highestIntuitionSensing * 10)) / 10;
        }
        else if (sumSensing < 0 && sumIntuition < 0) {
            highestIntuitionSensing = Math.abs(sumIntuition) + Math.abs(sumSensing);
            intuitionPercent = Math.floor((Math.abs(sumSensing) * 100 / highestIntuitionSensing * 10)) / 10;
            sensingPercent = Math.floor((Math.abs(sumIntuition)  * 100 / highestIntuitionSensing * 10)) / 10;
        }
        intuitionSensing.push(intuitionPercent);
        intuitionSensing.push(sensingPercent);

        let sumThinking = Ti + Te;
        let sumFeeling = Fi + Fe;
        let highestThinkingFeeling;
        let thinkingPercent;
        let feelingPercent;
        // if both is positive
        if (sumThinking >= 0 && sumFeeling >= 0) {
            highestThinkingFeeling = sumThinking + sumFeeling;
            thinkingPercent = Math.floor((sumThinking * 100 / highestThinkingFeeling * 10)) / 10;
            feelingPercent = Math.floor((sumFeeling * 100 / highestThinkingFeeling * 10)) / 10
        }
        // if 1 is minus and the other is not
        else if (sumThinking < 0 && sumFeeling >= 0) {
            sumThinking = Math.abs(sumThinking);
            sumFeeling += sumThinking * 2;
            highestThinkingFeeling = sumThinking + sumFeeling;
            thinkingPercent = Math.floor((sumThinking * 100 / highestThinkingFeeling * 10)) / 10;
            feelingPercent = Math.floor((sumFeeling * 100 / highestThinkingFeeling * 10)) / 10;
        }
        else if (sumFeeling < 0 && sumThinking >= 0) {
            sumFeeling = Math.abs(sumFeeling);
            sumThinking += sumFeeling * 2;
            highestThinkingFeeling = sumThinking + sumFeeling;
            thinkingPercent = Math.floor((sumThinking * 100 / highestThinkingFeeling * 10)) / 10;
            feelingPercent = Math.floor((sumFeeling * 100 / highestThinkingFeeling * 10)) / 10;
        }
        else if (sumFeeling < 0 && sumThinking < 0) {
            highestThinkingFeeling = Math.abs(sumThinking) + Math.abs(sumFeeling);
            thinkingPercent = Math.floor((Math.abs(sumFeeling) * 100 / highestThinkingFeeling * 10)) / 10;
            feelingPercent = Math.floor((Math.abs(sumThinking)  * 100 / highestThinkingFeeling * 10)) / 10;
        }

        thinkingFeeling.push(thinkingPercent);
        thinkingFeeling.push(feelingPercent);

        let sumIntro = Ti + Fi + Si + Ni;
        let sumExtro = Te + Fe + Se + Ne;
        let highestIntroExtro;
        let introPercent;
        let extroPercent;
        // if both is positive
        if (sumIntro >= 0 && sumExtro >= 0) {
            highestIntroExtro = sumIntro + sumExtro;
            introPercent = Math.floor((sumIntro * 100 / highestIntroExtro * 10)) / 10;
            extroPercent = Math.floor((sumExtro * 100 / highestIntroExtro * 10)) / 10
        }
        // if 1 is minus and the other is not
        else if (sumIntro < 0 && sumExtro >= 0) {
            sumIntro = Math.abs(sumIntro);
            sumExtro += sumIntro * 2;
            highestIntroExtro = sumIntro + sumExtro;
            introPercent = Math.floor((sumIntro * 100 / highestIntroExtro * 10)) / 10;
            extroPercent = Math.floor((sumExtro * 100 / highestIntroExtro * 10)) / 10;
        }
        else if (sumExtro < 0 && sumIntro >= 0) {
            sumExtro = Math.abs(sumExtro);
            sumIntro += sumIntro * 2;
            highestIntroExtro = sumExtro + sumIntro;
            introPercent = Math.floor((sumIntro * 100 / highestIntroExtro * 10)) / 10;
            extroPercent = Math.floor((sumExtro * 100 / highestIntroExtro * 10)) / 10;
        }
        else if (sumExtro < 0 && sumIntro < 0) {
            highestIntroExtro = Math.abs(sumExtro) + Math.abs(sumIntro);
            introPercent = Math.floor((Math.abs(sumExtro) * 100 / highestIntroExtro * 10)) / 10;
            extroPercent = Math.floor((Math.abs(sumIntro) * 100 / highestIntroExtro * 10)) / 10;
        }
        
        introExtro.push(introPercent);
        introExtro.push(extroPercent);

        let sumJudging = Te + Fe + Ni + Si;
        let sumProspecting = Ti + Fi + Ne + Se;
        
        let highestJudgingProspecting;
        let judgingPercent;
        let prospectingPercent;
        // if both is positive
        if (sumJudging >= 0 && sumProspecting >= 0) {
            highestJudgingProspecting = sumJudging + sumProspecting;
            judgingPercent = Math.floor((sumJudging * 100 / highestJudgingProspecting * 10)) / 10;
            prospectingPercent = Math.floor((sumProspecting * 100 / highestJudgingProspecting * 10)) / 10
        }
        // if 1 is minus and the other is not
        else if (sumJudging < 0 && sumProspecting >= 0) {
            sumJudging = Math.abs(sumJudging);
            sumProspecting += sumJudging * 2;
            highestJudgingProspecting = sumJudging + sumProspecting;
            judgingPercent = Math.floor((sumJudging * 100 / highestJudgingProspecting * 10)) / 10;
            prospectingPercent = Math.floor((sumProspecting * 100 / highestJudgingProspecting * 10)) / 10;
        }
        else if (sumProspecting < 0 && sumJudging >= 0) {
            sumProspecting = Math.abs(sumProspecting);
            sumJudging += sumProspecting * 2;
            highestJudgingProspecting = sumProspecting + sumJudging;
            judgingPercent = Math.floor((sumJudging * 100 / highestJudgingProspecting * 10)) / 10;
            prospectingPercent = Math.floor((sumProspecting * 100 / highestJudgingProspecting * 10)) / 10;
        }
        else if (sumProspecting < 0 && sumJudging < 0) {
            highestJudgingProspecting = Math.abs(sumProspecting) + Math.abs(sumJudging);
            
            judgingPercent = Math.floor((Math.abs(sumJudging) * 100 / highestJudgingProspecting * 10)) / 10;
            prospectingPercent = Math.floor((Math.abs(sumProspecting) * 100 / highestJudgingProspecting * 10)) / 10;
        }
        
        judgingProspecting.push(judgingPercent);
        judgingProspecting.push(prospectingPercent);
    };


    return (
        <div>
            {calculateMbtiRatio()}
            <div
                className={"border-2 mb-6 md:mb-0 w-80 rounded-2xl shadow-md h-90 p-6"}
            >
                <h3 className={"text-1xl font-medium text-center mb-4"}>
                    MBTI Үсэгнүүд
                </h3>
                <div className={"flex flex-col"}>
                    <div className={"mb-2"}>
                        <div className={"flex flex-row mb-1 justify-between"}>
                            <p className={"text-sm"}>Introversion {introExtro[0]}%</p>
                            <p className={"text-sm"}>{introExtro[1]}% Extraversion</p>
                        </div>
                        <div className={"w-66 h-3 border-2 bg-[#FFD93D] flex justify-start items-center rounded-2xl overflow-hidden"}>
                            <div style={{ width: `${(introExtro[0] * 266) / 100}px` }} className={"w-32 h-3 border-2 rounded-2xl bg-[#6BCB77]"}></div>
                        </div>
                    </div>
                    <div className={"mb-2"}>
                        <div className={"flex flex-row mb-1 justify-between"}>
                            <p className={"text-sm"}>Intuition {intuitionSensing[0]}%</p>
                            <p className={"text-sm"}>{intuitionSensing[1]}% Sensing</p>
                        </div>
                        <div className={"w-66 h-3 border-2 bg-[#FFD93D] flex justify-start items-center rounded-2xl overflow-hidden"}>
                            <div style={{ width: `${(intuitionSensing[0] * 266) / 100}px` }} className={"h-3 border-2 rounded-2xl bg-[#6BCB77]"}></div>
                        </div>
                    </div>
                    <div className={"mb-2"}>
                        <div className={"flex flex-row mb-1 justify-between"}>
                            <p className={"text-sm"}>Thinking {thinkingFeeling[0]}%</p>
                            <p className={"text-sm"}>{thinkingFeeling[1]}% Feeling</p>
                        </div>
                        <div className={"w-66 h-3 border-2 bg-[#FFD93D] flex justify-start items-center rounded-2xl overflow-hidden"}>
                            <div style={{ width: `${(thinkingFeeling[0] * 266) / 100}px` }} className={"h-3 border-2 rounded-2xl bg-[#6BCB77]"}></div>
                        </div>
                    </div>
                    <div className={"mb-2"}>
                        <div className={"flex flex-row mb-1 justify-between"}>
                            <p className={"text-sm"}>Judging {judgingProspecting[0]}%</p>
                            <p className={"text-sm"}>{judgingProspecting[1]}% Prospecting</p>
                        </div>
                        <div className={"w-66 h-3 border-2 bg-[#FFD93D] flex justify-start items-center rounded-2xl overflow-hidden"}>
                            <div style={{ width: `${(judgingProspecting[0] * 266) / 100}px` }} className={"h-3 border-2 rounded-2xl bg-[#6BCB77]"}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
