import "./footer.css";
import Link from "next/link"

const Footer = () => {
  return (
    <div id="FOOTER">
        <section className="sec-5">
        <div className="container">
        <div className="left">
            <h2>Set your PR career on an upward trajectory</h2>
            <button>Explore Courses</button>
        </div>
        <img src="/about/Group13057.png" alt="people" className="image" />
        </div>
    </section>
    <section className="sec-6">
        <div className="container">
        <p>ENROL NOW</p>
        <p>Have you decided to take our course?</p>
        <p>Level up your career and upskill your workforce with any of our world-class courses and authentic learning experience.</p>
        <button>Explore Courses</button>
        </div>
    </section>
    <div id="Footer">
        <div className="container">
            <div className="one">
                <img src="/course/logo.png" alt="logo" />
                <p id="become">Become an expert in Public Relations and Business Branding. Learn the value and strategies of public relations, crisis management, and corporate social responsibility.</p>
                <div className="socials">
                    <div><img src="/about/facebook.png" alt="facebook" /></div>
                    <div><img src="/about/instagram.png" alt="instagram" /></div>
                    <div><img src="/about/x.png" alt="x" /></div>
                    <div><img src="/about/linkedin.png" alt="linkedin" /></div>
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
    </div>
  )
}

export default Footer