import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


var d = new Date();
var n = d.getFullYear();

export default function Footer() {
    return (
        <footer>
            <div id="address" className="foot">
                <h6>OFFICE ADDRESS</h6>
                <p>MySolar Pvt Limited <br />
                    102,Sector-12 <br />
                    Mumbai-310234</p>
            </div>
            <div id="follow" className="foot">
                <h6>FOLLOW US</h6>
                <br />
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-google-plus"></i>
                <br />
                <i className="fa fa-linkedin-square"></i>
                <i className="fa fa-youtube-play"></i>
                <i className="fa fa-instagram"></i>

            </div>
            <div id="contactus" className="foot">
                <h6>CONTACT US</h6>
                <p>+91 1234567890 <br />
                    MySolar @skype <br />
                    enquiry @mysolar.com
                </p>
            </div>
            <br/>
            <div id="disclaimer">
            {/* <Link>Legal Disclaimer</Link> |<Link> Privacy Policy </Link>| <Link>Terms of Use</Link>  © MySolar Pvt Ltd. {n} */}
            </div>
        </footer>
    )
}
