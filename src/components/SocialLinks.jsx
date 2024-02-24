import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com",
        },
        {
            id: 3,
            child: (
                <>
                    Mail
                    <IoIosMail size={30} />
                </>
            ),
            href: "mailto:prince@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: 'rounded-br-md',
            downlode: true,
            
        }
    ]

    return (
        <div className=" hidden  lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {links.map(({ id, child, href, style, downlode }) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gradient-to-l from-cyan-700' }>
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={downlode}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default SocialLinks;
