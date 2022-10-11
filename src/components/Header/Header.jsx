import { useState, useEffect } from 'react'

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        }
    })

    return (
        <header className="flex justify-between items-center overflow-hidden px-10 py-5">
            <div className="z-10 mt-3 ml-3 font-extrabold text-2xl text-gray">
                Edie
            </div>
            <nav>
                {
                    isMobile ?
                        (
                            <>
                                <span onClick={toggleMenu} className="relative z-20 mt-3 mr-3 text-3xl material-symbols-outlined">
                                    menu
                                </span>

                                <ul className={`absolute top-0 left-0 h-full w-full flex flex-col justify-center bg-white items-center gap-7 font-bold text-2xl text-gray transition-all ${openMenu ? 'block' : 'hidden'}`}>
                                    <li
                                        onClick={toggleMenu}
                                    >
                                        <a href="#">Home</a>
                                    </li>
                                    <li
                                        onClick={toggleMenu}
                                    >
                                        <a href="#">Services</a>
                                    </li>
                                    <li
                                        onClick={toggleMenu}
                                    >
                                        <a href="#">Our works</a>
                                    </li>
                                    <li
                                        onClick={toggleMenu}
                                    >
                                        <a href="#">Clients</a>
                                    </li>
                                    <li
                                        onClick={toggleMenu}
                                    >
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </>
                        )
                        :
                        (
                            <>
                                <ul className="flex gap-7 font-medium text-2xl text-gray">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Our works</a>
                                    </li>
                                    <li>
                                        <a href="#">Clients</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>

                            </>
                        )
                }


            </nav>
        </header >
    )
}
