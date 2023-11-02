import Image from "next/image"



export default function Landing() {
    return(
        <div className="">
            <section className="grid gap-2 grid-flow-row md:grid-flow-col grid-cols-2">
                <div className="hero-intro">
                    <div className=" w-max mb-6 border flex justify-center items-center px-2 border-gray-300 h-11">Classes are Covid Safe</div>
                    <div className="mb-6">
                        <h2 className=" mb-2 text-4xl">Fast Track Your Career With LSPR Certificate</h2>
                        <p>Become an expert in Public Relations and Business Branding. Learn the value and strategies of public relations, crisis management, and corporate social responsibility.</p>
                    </div>

                    <div className="ctas mb-14">
                        <button className=" bg-button_primary h-12 px-2">
                            Explore Courses
                        </button>
                    </div>

                    <div className="subtext">
                        <p>Classes are 100% virtual</p>
                    </div>
                </div>

                <div className="relative grid md:grid-cols-2 md:grid-rows-2 gap-4 md:grid-flow-col items-center hero-image">
                        <div className="col-span-1">
                            <img alt="hero-image" src="/landing/hero-image-1.png"></img>
                        </div>

                        <div className="col-span-1">
                            <img alt="hero-image" src="/landing/hero-image-2.png"></img>
                        </div>

                        <div className="col-span-1">
                            <img src="/landing/hero-image-3.png"></img>
                        </div>
                      

                </div>
            </section>
        </div>
    )
}