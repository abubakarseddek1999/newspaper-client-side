import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publish key 
const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
    return (
        <div className="pt-20 bg-slate-200 h-[900px]">
            <h2 className="text-2xl mb-5 font-bold text-center">Please pay Your Bill</h2>
            <div className="w-full  h-[300px] flex justify-center">
                <img className="h-[300px]" src="https://i.postimg.cc/hPGysyLy/MC-World-Credit-Card-2021-1.webp" alt="" />
            </div>
            <div className="m-20 p-16">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>


        </div>
    );
};

export default Payment;