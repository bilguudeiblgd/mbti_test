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
        let sumIntuition = Ne + Ni + 31.6;
        let sumSensing = Se + Si + 31.6;
        let highestIntuitionSensing;
        let intuitionPercent;
        let sensingPercent;
        // if both is positive
        highestIntuitionSensing = sumIntuition + sumSensing;
        intuitionPercent = Math.floor((sumIntuition * 100 / highestIntuitionSensing * 10)) / 10;
        sensingPercent = Math.floor((sumSensing * 100 / highestIntuitionSensing * 10)) / 10

        intuitionSensing.push(intuitionPercent);
        intuitionSensing.push(sensingPercent);

        let sumThinking = Ti + Te + 31.6;
        let sumFeeling = Fi + Fe + 31.6;
        let highestThinkingFeeling;
        let thinkingPercent;
        let feelingPercent;
        highestThinkingFeeling = sumThinking + sumFeeling;
        thinkingPercent = Math.floor((sumThinking * 100 / highestThinkingFeeling * 10)) / 10;
        feelingPercent = Math.floor((sumFeeling * 100 / highestThinkingFeeling * 10)) / 10

        thinkingFeeling.push(thinkingPercent);
        thinkingFeeling.push(feelingPercent);

        let sumIntro = Ti + Fi + Si + Ni + 63.2;
        let sumExtro = Te + Fe + Se + Ne + 63.2;
        let highestIntroExtro;
        let introPercent;
        let extroPercent;
        highestIntroExtro = sumIntro + sumExtro;
        introPercent = Math.floor((sumIntro * 100 / highestIntroExtro * 10)) / 10;
        extroPercent = Math.floor((sumExtro * 100 / highestIntroExtro * 10)) / 10
        // if both is positive


        introExtro.push(introPercent);
        introExtro.push(extroPercent);

        let sumJudging = Te + Fe + Ni + Si + 63.2;
        let sumProspecting = Ti + Fi + Ne + Se + 63.2;

        let highestJudgingProspecting;
        let judgingPercent;
        let prospectingPercent;
        highestJudgingProspecting = sumJudging + sumProspecting;
        judgingPercent = Math.floor((sumJudging * 100 / highestJudgingProspecting * 10)) / 10;
        prospectingPercent = Math.floor((sumProspecting * 100 / highestJudgingProspecting * 10)) / 10;

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
