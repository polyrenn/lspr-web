export default function Footer() {
    return(
        <footer>
            <div className="footer-grid grid grid-cols-3">
                <div className="branding col-span-1">
                    <img src="/branding/lspr-ng-logo.png"></img>

                    <div className="statement">
                        <p>Become an expert in Public Relations and Business Branding. Learn the value and strategies of public relations, crisis management, and corporate social responsibility.</p>
                    </div>

                    <div className="social">

                    </div>
                </div>

                <div className="grid grid-flow-col col-span-2">
                    <div className="sitemap ml-auto">
                        <h4 className=" text-base font-bold">Sitemap</h4>
                        <div className="nav-links grid gap-2">
                            <a  href="#">Home</a>
                            <a  href="#">About Us</a>
                            <a  href="#">LSPR for Enterprise</a>
                            <a  href="#">Instructors</a>
                            <a  href="#">Courses</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>

                    <div className="support">
                        <h4 className=" text-base font-semibold">Support</h4>
                        <div className="nav-links grid gap-2">
                            <a  href="#">Faq</a>
                            <a  href="#">Contact us</a>
                        </div>
                    </div>

                    <div className="legal">
                        <h4 className=" text-base font-semibold">Legal</h4>
                        <div className="nav-links grid gap-2">
                            <a  href="#">Pricacy Policy</a>
                            <a  href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </footer>
    )
}