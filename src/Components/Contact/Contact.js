import React from "react";

function Contact() {

    return(
        <div>
            <div>
                <h1>CONTACT</h1>
            </div>
            <div>
                <h2>LA CASA CATRACHA</h2>
                <p>120 N. Dale Mabry Hwy</p>
                <p>Tampa, FL 33609</p>
                <p>(813) 512-7924</p>
                <div>
                    <h3>HOURS OF OPERATION</h3>
                    <p>Sunday 10AM-9PM</p>
                    <p>Monday 10AM-9PM</p>
                    <p>Tuesday Closed</p>
                    <p>Wednesday 10AM-9PM</p>
                    <p>Thursday 10AM-9PM</p>
                    <p>Friday 10AM-12AM</p>
                    <p>Saturday 10AM-12AM</p>
                </div>
                <div>
                    <ul>
                        <li><a href="https://www.facebook.com/pages/La-Casa-Catracha/">
                        <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1654568677~hmac=07b7e47baf10dda1a8f92795896c3310" alt="facebook" height={30} width={30} /></a></li>
                        <li><a href="https://www.instagram.com/lacasacatracha/"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"  alt="instagram" height={30} width={30} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;