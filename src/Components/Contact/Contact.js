import React from "react";

function Contact() {

    return(
        <div>
            <div className="flex justify-center bg-catracha-blue text-white border-t-4 border-b-4 border-solid border-black">
                <h1 className="text-4xl font-medium font-splatch py-4">Contact</h1>
            </div>
            <div className="flex flex-col items-center mt-16">
                <h2 className="text-xl font-bold font-splatch">La Casa Catracha</h2>
                <p className="text-lg mt-2">120 N. Dale Mabry Hwy</p>
                <p className="text-lg">Tampa, FL 33609</p>
                <p className="text-lg">(813) 512-7924</p>
                <div className="flex flex-col items-center mt-16">
                    <h3 className="text-lg font-bold font-splatch">HOURS OF OPERATION</h3>
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
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="facebook" height={50} width={50} /></a></li>
                        <li className="m-4"><a href="https://www.instagram.com/lacasacatracha/"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"  alt="instagram" height={50} width={50} /></a></li>
                    </ul>
                </div>
            </div>
            <footer className="flex justify-center mt-10 bg-catracha-blue text-white bottom-0">designed and developed by McMillion Media</footer>
        </div>
    )
}

export default Contact;