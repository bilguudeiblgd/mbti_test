import { useRouter } from "next/router";
import Navbar from '../../components/Navbar';
import React from 'react'

export default function Result() {

  const router = useRouter();
  const {result} = router.query;
  let cogFunctions = new Map();
  let cogArr = result.split("-");
  cogArr.forEach((item) => {
    let func = item.slice(0, 2);
    let funcScore = item.slice(3, item.length);
    
    cogFunctions.set(func, parseFloat(funcScore));
  })

  return (
    
    <div>
      <Navbar/>
      <main className={"container mx-auto"}>
        <div className={"flex flex-col justify-center items-center my-12"}>
          <h1 className={"text-4xl"}>Таны хариу</h1>
        </div>
      </main>
    </div>
  )
}
