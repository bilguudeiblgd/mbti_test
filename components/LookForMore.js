import React, { useEffect, useState } from 'react'
import { BsDiscord, BsInstagram, BsFacebook } from 'react-icons/bs';

export const LookForMore = () => {

    const [url, setUrl] = useState("");
    useEffect(() => {
        // window is accessible here.
        setUrl(window.location.pathname);
    }, []);

    return (
        <div className={"flex flex-col items-center"}>
            <div>
                <p className={"text-md text-semibold text-center"}>MBTI болон Cognitive Function-ийн тухай мэдээллийг дараах холбоосуудаар аваарай</p>
                <div className={"flex flex-row justify-center mt-6"}>
                    <a href="https://discord.gg/ch2Pj23jhZ" target="_blank" rel="noopener noreferrer" >
                        <BsDiscord size={"50px"} className={"text-[#8b4766] cursor-pointer"} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mbti_mongolia/"><BsInstagram size={"50px"} className={"mx-8 text-[#8b4766] cursor-pointer"} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mbtimongolia" > <BsFacebook size={"50px"} className={"text-[#8b4766] cursor-pointer"} /></a>

                </div>
            </div>
            <div className={"mt-12 shadow-md border-2 rounded-2xl mb-12 px-2 md:px-10 pt-2 pb-4 flex flex-col items-center"}>
                <p className={"font-bold mb-2 "}>Таны тестний хариуны линк</p>
                <a target="_blank" rel="noopener noreferrer" className={"text-blue-600 text-center"} href={`https://mbti-test-nine.vercel.app${url}`}>
                    <p className={"text-sm"}>Миний хариу</p>
                </a>
            </div>
            <div>
                <h1 className={"text-center font-bold"}>Тест сайжруулахад туслах:</h1>
                <a className={"text-blue-500"} target="_blank" rel="noopener noreferrer" href="https://forms.gle/gQxoiMSe3DtjFSaF8">https://forms.gle/gQxoiMSe3DtjFSaF8</a>
            </div>
        </div>
    )
}
