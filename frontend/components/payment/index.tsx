import React from "react";
import axios from "axios";

const Payment = () => {
  const formData = {
    name: "Mr. Khandakar",
    price: 200,
    address: "Dhaka",
  };

  const onClickHandler = async () => {
    try {
      const res = await axios.post("http://localhost:3030/order", formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
    </>
  );
};

export default Payment;
