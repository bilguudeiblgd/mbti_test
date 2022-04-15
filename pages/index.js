import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link';
import Logo from '../public/logo.jpg';
import Navbar from '../components/Navbar';
import TestButton from '../components/TestButton';
export default function Home() {


  return (
    <div className={""}>
      <Head>
        <title>MBTI Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={"container mx-auto px-4 my-12"}>
        <div className={"grid grid-cols-2 gap-6"}>
          <div className={"flex flex-col items-end mt-6"}>
            <div className={"ml-12"}>
              <h1 className={"text-6xl mb-6"}>
                Бидний бэлтгэсэн Тест
              </h1>
              <h4 className={"text-1xl"}>
                Бид уг тестийг сайн дураараа хийсэн болно. Мэдээж бусад тесттэй адилхан mistype хийгдэх асуудал гарахыг үгүйсгүй. Тиймэрхүү асуудал болгон дээр бид нар хариуцлага хүлээхгүй болохыг мэдэгдэе.
              </h4>
              <div className={"w-40"}>
              <TestButton/>
              </div>
             
            </div>

          </div>
          <div className={"flex justify-start"}>
            <Image className={"rounded-full"} src={Logo} width={400} height={400} />
          </div>
        </div>


      </main>


      <footer className={""}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={""}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
