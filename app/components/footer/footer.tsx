import "./footer.css";
import Link from "next/link"

const Footer = () => {
  return (
    <div id="Footer">
        <div className="container">
            <div className="one">
                <p className="logo">LSPR<span>NG</span></p>
                <p id="become">Become an expert in Public Relations and Business Branding. Learn the value and strategies of public relations, crisis management, and corporate social responsibility.</p>
                <div className="socials">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="right">
                <div className="two">
                    <h4>Our Links</h4>
                    <ul>
                        <li> <Link href="/">Home</Link> </li>
                        <li> <Link href="/">About us</Link> </li>
                        <li> <Link href="/">LSPR NG for Enterprise</Link> </li>
                        <li> <Link href="/">Instructors</Link> </li>
                        <li> <Link href="/">Blog</Link> </li>
                    </ul>
                </div>
                <div className="two">
                    <h4>Support</h4>
                    <ul>
                        <li> <Link href="/">F.A.Q</Link> </li>
                        <li> <Link href="/">Contact Us</Link> </li>
                    </ul>
                </div>
                <div className="two">
                    <h4>Legal</h4>
                    <ul>
                        <li> <Link href="/">Privacy Policy</Link> </li>
                        <li> <Link href="/">Terms and Condition</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer><p>2021 LSPR Nigeria. All RIghts Reserved.</p></footer>
    </div>
  )
}

export default Footer