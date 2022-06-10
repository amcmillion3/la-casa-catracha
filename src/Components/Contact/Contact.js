import React from "react";

function Contact() {

    return(
        <div>
            <div className="flex justify-center bg-catracha-blue text-white border-t-4 border-b-4 border-solid border-black">
                <h1 className="text-4xl font-medium">CONTACT</h1>
            </div>
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-2xl font-bold">LA CASA CATRACHA</h2>
                <p className="text-lg">120 N. Dale Mabry Hwy</p>
                <p className="text-lg">Tampa, FL 33609</p>
                <p className="text-lg">(813) 512-7924</p>
                <div className="flex flex-col items-center mt-10">
                    <h3 className="text-xl font-bold">HOURS OF OPERATION</h3>
                    <p className="text-lg">Sunday 10AM-9PM</p>
                    <p className="text-lg">Monday 10AM-9PM</p>
                    <p className="text-lg">Tuesday Closed</p>
                    <p className="text-lg">Wednesday 10AM-9PM</p>
                    <p className="text-lg">Thursday 10AM-9PM</p>
                    <p className="text-lg">Friday 10AM-12AM</p>
                    <p className="text-lg">Saturday 10AM-12AM</p>
                </div>
                <div className="mt-6">
                    <ul className="flex">
                        <li className="m-4"><a href="https://www.facebook.com/pages/La-Casa-Catracha/">
                        <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1654827292~hmac=f867bb97d4c5d9a72a43bae3db49bb54" alt="facebook" height={30} width={30} /></a></li>
                        <li className="m-4"><a href="https://www.instagram.com/lacasacatracha/"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"  alt="instagram" height={30} width={30} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;