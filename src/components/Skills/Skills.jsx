import { Icon } from './Icon'
import { useState, useEffect } from 'react'

export const Skills = () => {

    const [isHovered, setIsHovered] = useState(false)

    const handleHover = e => {
        console.log(e.target.className);
        e.target.classList.add('shadow-2xl')
    }

    return (
        <section className="mt-16 mb-24 p-3"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
        >
            <h1 className="pl-10 pr-10 text-2xl md:pl-0 md:pr-0 md:ml-24 md:text-4xl md:w-72">
                We offer high demand services
            </h1>

            <div className="md:flex md:justify-center md:items-center md:mx-20">

                <div className="mt-16 p-5 flex flex-col gap-5 rounded-3xl md:flex md:shadow-none md:hover:shadow-2xl cursor-pointer transition-all">
                    <div className="rounded-2xl bg-blue w-16 h-16 flex justify-center items-center text-white text-2xl">
                        <Icon
                            icon="fa-pen"
                        />
                    </div>

                    <h2 className="text-2xl text-gray font-bold">
                        UI/UX Design
                    </h2>
                    <p className="text-secondGray text-base font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
                    </p>
                    <button className="p-2 w-max bg-buttonInactive text-thirdGray rounded-xl md:hover:bg-blue md:hover:text-white transition-all">
                        Get started
                    </button>
                </div>

                <div className="mt-16 p-5 flex flex-col gap-5 shadow-2xl rounded-3xl md:shadow-none md:hover:shadow-2xl cursor-pointer transition-all">
                    <div className="rounded-2xl bg-greenIcon w-16 h-16 flex justify-center items-center text-white text-2xl">
                        <Icon
                            icon="fa-code"
                        />
                    </div>

                    <h2 className="text-2xl text-gray font-bold">
                        Front End
                    </h2>
                    <p className="text-secondGray text-base font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
                    </p>
                    <button className="p-2 w-max bg-blue md:bg-buttonInactive text-white md:text-thirdGray md:hover:bg-blue md:hover:text-white rounded-xl transition-all">
                        Get started
                    </button>
                </div>

                <div className="mt-16 p-5 flex flex-col gap-5 rounded-3xl cursor-pointer hover:shadow-2xl transition-all">

                    <div className="rounded-2xl bg-redColor w-16 h-16 flex justify-center items-center text-white text-2xl">
                        <Icon
                            icon="fa-code"
                        />
                    </div>

                    <h2 className="text-2xl text-gray font-bold">
                        Back End
                    </h2>
                    <p className="text-secondGray text-base font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
                    </p>
                    <button className="p-2 w-max bg-buttonInactive text-thirdGray rounded-xl md:hover:text-white md:hover:bg-blue transition-all">
                        Get started
                    </button>
                </div>

            </div>
        </section >
    )
}
