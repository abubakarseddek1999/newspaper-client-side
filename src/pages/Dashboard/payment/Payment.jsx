import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publish key 
const stripePromise =loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle Heading={"Payment"} SubHeading={"Please pay to eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>

                </Elements>
            </div>
           
            
        </div>
    );
};

export default Payment;