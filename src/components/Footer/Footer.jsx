import { Form } from "../Hero/Form"

export const Footer = () => {
    return (
        <footer className="relative w-full bg-footerBackground">
            <div className="md:flex md:justify-between md:w-full md:px-36">
                <div className="p-10">
                    <ul className="text-white font-normal flex flex-col gap-4 md:text-lg">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Our Work</a>
                        </li>
                        <li>
                            <a href="#">Clients</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="p-10">
                    <h1 className="text-white font-extrabold text-4xl">Edie</h1>
                    <div className="mt-3 text-2xl text-white flex gap-2">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>

                <div className="p-10">
                    <p className="text-thirdGray">Want us to contact you ?</p>
                    <Form />
                </div>
            </div>
            <p className="pt-5 pb-5 text-white text-sm text-center">
                Created by Dereje Getu Tadesse - devChallange.io
            </p>
        </footer>
    )
}
