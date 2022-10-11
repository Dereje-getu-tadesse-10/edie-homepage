import Smarthome from "../../assets/images/smarthome.jpg";
import Onboard from "../../assets/images/onboard.png";
import Booking from "../../assets/images/booking.png";
import Juice from "../../assets/images/juice-product.png"
export const Portfolio = () => {
    return (
        <section
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <h1 className="pl-10 pr-10 md:text-4xl md:font-medium md:w-[396px]">Good design means good business</h1>

            <div className="md:m-auto md:flex md:flex-col md:justify-center md:items-center text-gray">

                <div className="md:flex">
                    <div className="mt-5 p-2 md:mt-32">
                        <img className="rounded-xl" src={Smarthome} alt="smarthome" />
                        <p className="mt-2 text-xs text-thirdGray font-light sm:text-sm">
                            Full stack application
                        </p>
                        <h1 className="font-medium text-lg text-gray sm:text-2xl">
                            Smart home dashboard
                        </h1>
                    </div>
                    <div className="mt-5 p-2">
                        <img className="rounded-xl" src={Onboard} alt="onboard" />
                        <p className="mt-2 text-xs text-thirdGray font-light sm:text-sm">
                            UX/UI design
                        </p>
                        <h1 className="font-medium text-lg text-gray sm:text-2xl">
                            Onboard application
                        </h1>
                    </div>
                </div>

                <div className="md:flex">
                    <div className="mt-5 p-2 md:mt-32">
                        <img className="rounded-xl" src={Booking} alt="Booking" />
                        <p className="mt-2 text-xs text-thirdGray font-light sm:text-sm">
                            Mobile application
                        </p>
                        <h1 className="font-medium text-lg text-gray sm:text-2xl">
                            Booking systeme
                        </h1>
                    </div>

                    <div className="mt-5 p-2">
                        <img className="rounded-xl" src={Juice} alt="Juice" />
                        <p className="mt-2 text-xs text-thirdGray font-light sm:text-sm">
                            Front End application
                        </p>
                        <h1 className="font-medium text-lg text-gray sm:text-2xl">
                            Juice systeme
                        </h1>
                    </div>
                </div>

            </div>
        </section>
    )
}
