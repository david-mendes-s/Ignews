interface SubscribeButton {
  priceId: string;
}

export default function SubscribeButton({priceId}:SubscribeButton) {

  return  (
        <button type="button"
                className="w-[268px] h-16 border-[0] rounded-full bg-yellow-500
                text-gray-900 text-xl font-bold flex items-center justify-center
                duration-200 hover:brightness-75 mt-10"    

            >
                Subscribe now
        </button>
  );
}