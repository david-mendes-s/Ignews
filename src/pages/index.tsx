import Header from "@/components/header/Header";
import SubscribeButton from "@/components/SubscribeButton";
import  Head  from "next/head";
import Image from "next/image";

import Avatar from '/public/avatar.svg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>
      
     <Header />
     <main className="max-w-screen-lg h-[calc(100vh-5rem)] my-0 mx-auto py-0 px-8
                          flex items-center justify-between text-white">
        <section className="max-w-[600px] ">
          <span className="text-2xl font-bold">👏 Hey, Welcome</span>
          <h1 className="text-7xl leading-[4.5rem] font-bold mt-10">
            News about <br/>the <span className="text-cyan-500">React</span> world.</h1>
          <p className="text-2xl leading-9 mt-6">
            Get access to all the publications <br/>
            <span className="text-cyan-500 font-bold">for $9.90</span>
          </p>

          <SubscribeButton />
        </section>
        <Image src={Avatar} alt="avatar" />


     </main>
    </>
  )
}
