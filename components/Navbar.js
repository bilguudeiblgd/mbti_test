import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link';
import Logo from '../public/logo.jpg';
import { FaDiscord } from 'react-icons/fa';
import TestButton from './TestButton.js';
export default function Navbar() {
    return (
        <div>
            <nav className={"container mx-auto px-4 py-2"}>
                <ul className={"flex flex-row justify-between"}>
                    <div className={"flex flex-row items-center"}>
                        <li className={"pr-6 flex shrink-0"}>
                            <Link href="/">
                                <a><Image className={"rounded-full "} src={Logo} alt="MBTI Mongolia Logo" width={"50px"} height={"50px"} /></a>
                            </Link>
                        </li>
                        <li className={"pr-6 hidden md:block"}>
                            <Link href="/about">
                                <a className={"text-gray-600 hover:text-black"}>Бидний тухай</a>
                            </Link>
                        </li>

                    </div>
                    <div className={"flex flex-row items-center"}>
                        <li className={"mr-2 md:mr-6"}>
                            <Link href="/test">
                                <a>  <TestButton /></a>
                            </Link>
                        </li>
                        <li className={"hidden md:block"}>
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/a3tUXncYBG" className={"cursor-pointer "}>
                                <FaDiscord className={""} style={{color: "rgb(210,162,55)"}} size={"3rem"} />
                            </a>
                        </li>
                    </div>
                </ul>

            </nav>
            <div className={"border-b-2"}></div>
        </div>

    )
}
