import "./navigation.css"
import Link from 'next/link';

export default function Navigation() {
    return (
        <header>
            <div className="container">
            <p className="logo">LSPR<span>NG</span></p>
            <nav>
                <div>
                    <Link href="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        About Us
                    </Link>
                </div>
                <div>
                    <Link href="/enterprise">
                        Enterprise
                    </Link>
                </div>
                <div>
                    <Link href="/course">
                        Our Courses
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        Contact Us
                    </Link>
                </div>
            </nav>
            <div className="right">
                {/* <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-64.png" alt="Cart" /> */}
                <button>
                    Sign In
                </button>
            </div>
            </div>
        </header>
    )
}