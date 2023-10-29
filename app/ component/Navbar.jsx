"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineAlignCenter } from "react-icons/ai";
import MenuOverlay from "./MenuOverlay";

const navLink = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "project",
        href: "#projects",
    },
    {
        title: "Contact",
        href: "#contact",
    }

]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className=" fixed top-0 left-0 right-0 z-10  bg-black bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4  py-2">
                <Link href={"/"} className=" text-2xl md:text-5xl text-white  font-semibold">
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden ">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
                        >
                            < AiOutlineAlignCenter className="h-5 w-5" />
                        </button>) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"

                        >
                            <AiFillCloseCircle className="h-5 w-5" />
                        </button>

                    )

                    }
                </div>
                <div className=" menu hidden md:block  md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md: space-x-8 mt-0">
                        {
                            navLink.map((
                                link, index) => (
                                <li key={index}>
                                    <NavLink href={link.href}
                                        title={link.title}></NavLink>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>

            {
                navbarOpen ? <MenuOverlay links={navLink} /> : null
            }
        </nav>
    );
};

export default Navbar;