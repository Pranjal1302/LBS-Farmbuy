import React from "react";
import { useState } from "react";
import "./Crops.css";
import { props ,useEffect} from "react";
import { Navigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

function Crops(props) {

  const [demand, setDemand] = useState(0);
  const [r_demand, setR_demand] = useState(demand);

  useEffect(() => {
    // console.log("hello")

    fetch('http://127.0.0.1:5000/predict',{
      method:'POST',

      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:3000'
      },

      body: JSON.stringify({"crop": props.no})
    }).then(async response =>await response.json())
      .catch(error => {
          console.error('There was an error!', error);
      })
      .then(data =>{
        // console.log(data.total_demand)
        setDemand(data.total_demand*10000000)

       })


  }, [props.no])

  const paybtn = () => {
    let input  = document.getElementById("id1").value
    console.log(input)
  }


  const [product, setproduct] = useState({
    name: "token",
    price: 10,
    productBy: "Government",
  });
  const [auth, setAuth] = useState(true);
  const inputF = document.getElementById("id1");
  const [buttonText, setButtonText] = useState("Pay");


const makePayment = token => {

  let input  = document.getElementById("id1").value
  console.log(input)
  setR_demand(demand-input)

  const body = {
    token,
    product
  }
  const headers ={
    "Content-Type":"application/json"
  }
return fetch(`http://localhost:8282/payment`,{
  method:"POST",
  headers,
  body:JSON.stringify(body)
})
.then(response => {
  console.log("RESPONSE", response)
  const {status} = response;
  console.log("STATUS", status)
})
.catch(error => console.log(error))


}

  if (!auth) {
    console.log(inputF.value);
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="cropName" style={{ backgroundImage: "url(/1.jpg)" }}>
        <h1>{props.crop}</h1>
      </div>
      <div className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.

            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Demand</h4>
              <h1>{demand} QT</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Remaining demand</h4>
              <h1>{r_demand} QT</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">MSP</h4>
              <h1>{props.msp}</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">fertilizer</h4>
              <h1>{props.msp}</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Seeds</h4>
              <h1>{props.msp}</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Insuarance</h4>
              <h1>{props.msp}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container inputPart ">


            <h2 className="heading">Buy Tokens</h2>
            <div className="container yeild">
              <label className="col-md-6 control-label">
                Enter weight of yeild
              </label>
              <div className="col-md-6 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-home"></i>
                  </span>
                  <input
                    onChange={() => {
                      setButtonText("Pay");
                    }}
                    id="id1"
                    required
                    name="zip"
                    placeholder=" weight of yeild"
                    className="form-control"
                    type="text"
                  />
                </div>
                <p style={{ color: "red", float: "right" }}>
                  *Max Limit 100 Quintal
                </p>
              </div>

              <StripeCheckout
                stripeKey="pk_test_51KUAbVSBqbVFSEsjamFouBXi77tfqeITc8lXqXLOi3ouGqETLySLdPWGUVgZv8K6rKFI7rx9mUl76aQzvg3qAugL008y5pCiGz"
                token={makePayment}
                name="Buy Token"
                amount={product.price * 100}
                shippingAddress
                billingAddress
              >
                {/* onClick={() => setAuth(false)} */}
                <button onClick={paybtn} className="btn btn-warning lg">
                  Pay {product.price}
                  <span className="glyphicon glyphicon-send"></span>
                </button>
              </StripeCheckout>
            </div>


      </div>
    </>
  );
}

export default Crops;
//demand
//remaining demand
//MSP
//fertilizer
//<==============>
//input
// private key sk_test_51KUAbVSBqbVFSEsjhidiw1FDz2ARN97Xkk91HxvLWwG5piKNycdWonrhkU8aPbUlikoKPz9pJscFTUg4aZ8smFJi00JBrAwksa
