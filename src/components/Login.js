import React from 'react';
import "./login.css";
import { db } from "../firebase_config.js";

function Login() {
    const login = () => {
        // console.log("Hellooo")
        // cont.setLogin(true);
        // console.log(cont.login)
        // console.log("Login status:" + cont.login)
        // document.getElementById('aadhar').setAttribute('disabled', 'disabled');
        var email = document.getElementById('aadhar').value;
        console.log("Aadhar No ", email);
        const users = [];
        var log;
        db.collection("AadharCards")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let data = doc.data();
                    users.push(data.AadharCardNo);
                    console.log(data.AadharCardNo)
                    for (var i = 0; i <= users.length; i++) {
                        if (email === data.AadharCardNo) {
                            log = 1;
                        }
                    }

                });
                if (log === 1) {
                    console.log("Login Success")
                }
                else {
                    console.log("Login Denied")
                }
            })

    }
    return (
        <>
            <div>

                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                                    alt="not found" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Aadhar No.</label>
                                        <input required type="tel" pattern="[0-9]{12}" id="aadhar" placeholder="111122223333" className="form-control form-control-lg"
                                        />

                                    </div>
                                    <button onClick={login} type="submit " className="btn btn-primary btn-lg mb-3"
                                        style={{ fontSize: "0.8rem", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Send OTP</button>
                                    {/* <!-- Password input --> */}

                                    <div className="form-outline mb-3">
                                        <label className="form-label" htmlFor="form3Example4">OTP</label>
                                        <input required type="password" id="form3Example4" className="form-control form-control-lg"
                                            placeholder="Enter OTP" />

                                    </div>




                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        {/* <Link to='tokenPage'> */}
                                        <button onClick={login} type="submit " className="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                        {/* </Link> */}

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>

        </>);
}

export default Login;
