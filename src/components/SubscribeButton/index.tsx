import { api } from "@/service/api";
import { getStripeJs } from "@/service/stripe-js";
import { signIn, useSession } from "next-auth/react";

interface SubscribeButton {
  priceId: string;
}

export default function SubscribeButton({priceId}:SubscribeButton) {

  const {data: session} = useSession();

  async function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribes');

      const {sessionId} = response.data;

      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({sessionId});

    }catch (error){
      alert(error);
    }
  }
  
  return  (
        <button type="button"
                className="w-[268px] h-16 border-[0] rounded-full bg-yellow-500
                text-gray-900 text-xl font-bold flex items-center justify-center
                duration-200 hover:brightness-75 mt-10"    
                onClick={handleSubscribe}
            >
                Subscribe now
        </button>
  );
}