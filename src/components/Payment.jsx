import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const stripePromise = loadStripe(
  'pk_test_51M8nPkEZcBXalvvxy6k87YiwyWvwCp0oIq0mQgCuQ9zgLOYchA31na4kTE6pAZRMRstxM7sCtL1knjNv49MDaP5g00nxM62vC9'
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const { postCheckout } = useAuth();
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('submiteando..');
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement), //captura la info tipeada por el usuario
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        // const order = { id, amount: 10000 };
        // console.log(user.email);
        setIsSubmitting(true);
        const data = await postCheckout({ id, amount: 100 });
        console.log(data);
        if (data.success) {
          console.log('successfull payment');
          setSuccess(true);
          Swal.fire({
            icon: 'success',
            title: 'El pago se ha realizado exitósamente',
            text: 'Realizando pago.. ',
            position: 'top',
            timer: 2500,
            timerProgressBar: true,
          });
          navigate('/home');
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full justify-center"
    >
      <CardElement className="p-3 rounded-sm w-full md:w-4/6 bg-gray" />
      <div className="flex flex-row w-full md:w-4/6 items-start">
        <button
          type="button"
          className="bg-third text-xl font-bold w-1/3 mr-2 mt-2 px-2 py-1 rounded-sm text-fourth hover:bg-thirdHover"
        >
          <Link to="/paid">Volver</Link>
        </button>

        {isSubmitting ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-third text-xl font-bold w-1/4 mt-2 px-2 py-2 rounded-sm text-fourth hover:bg-thirdHover flex justify-center"
          >
            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-third text-xl font-bold w-full md:w-1/2 mt-2 px-2 py-1 rounded-sm text-fourth hover:bg-thirdHover"
          >
            Pagar
          </button>
        )}
      </div>
    </form>
  );
};

function Payment() {
  return (
    <div className="bg-fifth w-3/4 md:w-1/2 p-2 m-auto">
      <header className="text-center p-1 mb-2 font-bold text-2xl text-fourth">
        <h1>Ingresa tus datos</h1>
        <hr className="mt-2" />
      </header>
      <div className="my-2"></div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
