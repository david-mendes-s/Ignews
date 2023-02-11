import { GetServerSideProps } from "next";
import Image from "next/image";
import  Head  from "next/head";

import { stripe } from "@/service/stripe";
import Header from "@/components/header/Header";
import SubscribeButton from "@/components/SubscribeButton";

import Avatar from '/public/avatar.svg';

interface IProps {
  product: {
    amount: number,
    priceId: string
  }
}

export default function Home({product}: IProps) {
  console.log(product);
 
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
            <span className="text-cyan-500 font-bold">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.amount/100) } month
            </span>
            
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>
        <Image src={Avatar} alt="avatar" />


     </main>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1MVhEpAqBf5UG3fHzrHocmRr', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount
  }
  
  return {
    props: {
      product
    }
  }
}