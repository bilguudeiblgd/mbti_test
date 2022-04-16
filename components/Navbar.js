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
                        <li className={"pr-6"}>
                            <Link href="/">
                                <a><Image className={"rounded-full"} src={Logo} alt="MBTI Mongolia Logo" width={"50px"} height={"50px"} /></a>
                            </Link>
                        </li>
                        <li className={"pr-6"}>
                            <Link href="/about">
                                <a>Бидний тухай</a>
                            </Link>
                        </li>

                    </div>
                    <div className={"flex flex-row items-center"}>
                        <li className={"mr-6"}>
                            <Link href="/test">
                                <a>  <TestButton /></a>
                            </Link>
                        </li>
                        <li>
                            <a>
                                <FaDiscord size={"3rem"} />
                            </a>
                        </li>
                    </div>
                </ul>

            </nav>
            <div className={"border-b-2"}></div>
        </div>

    )
}
