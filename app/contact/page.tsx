"use client";
import "./contact.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { useState } from "react";
const page = () => {
    const [choice, setChoice] = useState('email');
  return (
    <main id="Contact">
        <Navigation/>
        <p className="us">CONTACT US</p>
        <section className="main">
            <div className="container">
                <div className="left">
                    <p className="how">How can we help you?</p>
                    <p className="did">{"Did you go through our FAQs and didn't find answers suitable to your enquires? Then send us an email, text or call us, We're happy to help and will reply to you promptly."}</p>
                    <div className="contacts">
                        <div className="contact">
                            <img src="/contact/home.png" alt="Contact Icon"/>
                            <p>13, Folorunsho Street, Bada,<br/>Balogun, Ayobo, Lagos, Nigeria.</p>
                        </div>
                        <div className="contact">
                            <img src="/contact/call.png" alt="Contact Icon"/>
                            <p>+234 8177047279</p>
                        </div>
                        <div className="contact">
                            <img src="/contact/message.png" alt="Contact Icon"/>
                            <p>hello@lsprnigeria.com</p>
                        </div>
                    </div>
                    <div className="socials">
                        <img src="/contact/facebook.png" alt="facebook" />
                        <img src="/contact/instagram.png" alt="instagram" />
                        <img src="/contact/x.png" alt="x" />
                        <img src="/contact/linkedin.png" alt="linkedin" />
                    </div>
                </div>
                <div className="right">
                    <form>
                        <div className="group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="group">
                            <label>How do you want us to contact you?</label>
                            <div className="choose">
                                <div onClick={()=>setChoice('email')} className="choice">
                                    <div className={choice === 'email' ? 'selected big' : 'big'}><div></div></div>
                                    <p>Through Email</p>
                                </div>
                                <div onClick={()=>setChoice('phone')} className="choice">
                                    <div className={choice === 'phone' ? 'selected big' : 'big'}><div></div></div>
                                    <p>Through Phone</p>
                                </div>
                            </div>
                            {
                                choice === 'email'? <input type="email" placeholder="Enter your email address"/>:<input type="email" placeholder="Enter phone number"/>
                            }
                        </div>
                        <div className="group">
                            <label>Subject</label>
                            <input type="text" placeholder="Enter your subject here" />
                        </div> 
                        <div className="group">
                            <label>Message</label>
                            <textarea placeholder="Enter your message here" />
                        </div>
                        <button>
                            Send Message
                            <img src="/contact/Send.png" alt="send icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <Footer/>
        {/* <div className="MODAL">
        <div className="modal">
           <div className="modal-cont">
           <img className="close" src="/contact/close.png" alt="close modal"/>
            <div className="modal-in">
                <img src="/contact/modalImg.png" alt="Message Icon"/>
                <p className="sent">Message Sent!</p>
                <p>Your message has been sent successfully. <br /> You will hear from us soon.</p>
            </div>
           </div>
        </div>
        <div className="overlay"></div>
        </div> */}
    </main>
  )
}

export default page