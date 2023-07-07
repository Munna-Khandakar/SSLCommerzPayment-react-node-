import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  // used dummy data
  // you can generate your own using form
  const formData = {
    name: "Mr. Khandakar",
    price: 200,
    address: "Mirpur,Dhaka",
  };

  const onClickHandler = async () => {
    try {
      // backend api end-point
      const res = await axios.post(
        "http://localhost:3030/api/payment",
        formData
      );
      // redirect to the payment page
      router.push(res?.data?.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  p-10">
      <p>Name:{formData?.name}</p>
      <p>Price:{formData?.price}</p>
      <p>Address:{formData?.address}</p>
      <div
        className=" rounded bg-slate-400 px-2 py-1 text-white"
        onClick={onClickHandler}
      >
        Pay
      </div>
    </div>
  );
};

export default Payment;
