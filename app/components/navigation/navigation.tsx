'use client'
import "./navigation.css"
import Link from 'next/link';
import { useState } from "react";

export default function Navigation() {
    const [showTab, setShowTab] = useState(false);
    return (
        <header>
            <div className="container">
            <img src="/course/logo.png" alt="logo" className="logo" />
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
                <div className="cart">
                <img src="/course/cart.png" alt="logo" className="logo" />
                <div>0</div>
                </div>
                <div onClick={()=> setShowTab(!showTab)} className="burger">
                    <img src="/course/burger.png" alt="logo" className="logo" />
                </div>
                <button id="big-sign">
                    Sign In
                </button>
            </div>
            </div>
            {
                showTab && 
                <div id="small-screen">
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
                <button>
                    Sign In
                </button>
            </div>
            }
        </header>
    )
}