const router = require("express").Router();
const SSLCommerzPayment = require("sslcommerz-lts");

// configuration
const store_id = "your_store_id";
const store_passwd = "your_store_password";
const is_live = false; //true for live, false for sandbox

function generateTransactionId() {
  const timestamp = new Date().getTime().toString(); // Get current timestamp
  const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
  return timestamp + "-" + randomString; // Concatenate timestamp and random string
}

/*
 *
 * method: POST
 * endPoint: http://localhost:3030/api/payment/
 * Description: this route will accept the request body and prepare the
 * data for initailize the SSLCommerzPayment.
 * Can modify the object's property according the request body
 * If the initailization is SUCCESS, then it will again make a POST request to the success_url
 * If the initailization is FAILED, then it will again make a POST request to the success_url
 *
 */
router.post("/", async (req, res) => {
  const tran_id = generateTransactionId();
  const data = {
    total_amount: req?.body?.price,
    currency: "BDT",
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: `http://localhost:3030/api/payment/success/${tran_id}`,
    fail_url: `http://localhost:3030/api/payment/fail/${tran_id}`,
    cancel_url: `http://localhost:3030/api/payment/cancel/${tran_id}`,
    ipn_url: `http://localhost:3030/api/payment/ipn/${tran_id}`,
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: req?.body?.name,
    cus_add1: req?.body?.address,
    cus_email: "customer@example.com",
    cus_add1: req?.body?.address,
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  //sslcommerz init
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    console.log(apiResponse);
    console.log("STATUS: ", apiResponse?.status);
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ error: false, url: GatewayPageURL, message: "Success" });
    console.log("Redirecting to: ", GatewayPageURL);
  });
});

/*
 *
 * method: POST
 * endPoint: http://localhost:3030/api/payment/success/:transectionId
 * Description: this route will only trigger if the payment is successfull.
 * so, in this route we can modify DB or handle other bussiness logic.
 * After that, we will redirect to the success page in the frontend-app(http://localhost:3300)
 *
 */
router.post("/success/:transectionId", async (req, res) => {
  //update DB using transectionId
  console.log("Payment Successfull ID: ", req.params.transectionId);
  res.redirect(
    `http://localhost:3300/payment/success/${req.params.transectionId}`
  );
});

/*
 *
 * method: POST
 * endPoint: http://localhost:3030/api/payment/fail/:transectionId
 * Description: this route will only trigger if the payment is failed.
 * so, in this route we can modify DB or handle other bussiness logic.
 * After that, we will redirect to the fail page in the frontend-app(http://localhost:3300)
 *
 */
router.post("/fail/:transectionId", async (req, res) => {
  //update DB using transectionId
  console.log("Payment Failed ID: ", req.params.transectionId);
  res.redirect(
    `http://localhost:3300/payment/fail/${req.params.transectionId}`
  );
});

module.exports = router;
