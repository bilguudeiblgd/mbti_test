import React, { useState } from 'react'

const Footer = () => {
    const [showTester, setShowTester] = useState(false);

    const onShowTest = () => {
        if (!showTester) {
            setShowTester(true);
        }
        else {
            setShowTester(false);
        }
    }
    return (
        <div className={"mt-20 shadow-inner"}>
            <div className="container mx-auto pt-6 flex flex-col px-4 items-center">
                <h1 className={"text-xl font-medium mb-2"}>Санал хүсэлт</h1>
                <p className={"text-gray-600 text-sm text-center "}>
                    Bug {'&'} Website issues: workblgd1@gmail.com
                </p>
                <p className={"text-gray-600 text-sm text-center"}>
                    Question {'&'} Test: mainercyber@gmail.com
                </p>
                <div className={"mt-6 flex flex-row"}>
                    <h4 > <b>Website</b> by - Blgd</h4>
                    <div className={"mx-4"}>|</div>
                    <h4> <b>Questions, UI</b> - Cyberio</h4>
                    <div className={"mx-4"}>|</div>
                    <div className={"w-25"}>
                        <button onClick={onShowTest}><h4 className={"text-blue-500"}> {"Q&A"} Testers</h4></button>
                        {
                            showTester ?
                                <div><p className={"text-sm"}>-rink</p>
                                    <p className={"text-sm"}>-mbti_mongolia</p>
                                    <p className={"text-sm"}>-donnie</p>
                                    <p className={"text-sm"}>-existence</p></div>
                            : ""
                            
                        }

                    </div>
                </div>

            </div>
            <div className={"bg-[#6028AC] py-2 w-full mt-6"}>
                <h2 className={"text-white text-center"}>Copyright © MBTI MONGOLIA 2022. All rights reserved</h2>
            </div>
        </div>
    )
}
export default Footer;