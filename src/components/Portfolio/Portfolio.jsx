import Smarthome from "../../assets/images/smarthome.jpg";
import Onboard from "../../assets/images/onboard.png";
import Booking from "../../assets/images/booking.png";
import Juice from "../../assets/images/juice-product.png"
export const Portfolio = () => {
    return (
        <section className="md:m-auto md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="pl-10 pr-10 ">Good design means good business</h1>
            <div className="md:flex">
                <div className="mt-5 p-2 md:mt-32">
                    <img className="rounded-xl" src={Smarthome} alt="smarthome" />
                    <p className="mt-2 text-xs text-thirdGray font-light">
                        Full stack application
                    </p>
                    <h1 className="font-medium text-lg text-gray">
                        Smart home dashboard
                    </h1>
                </div>
                <div className="mt-5 p-2">
                    <img className="rounded-xl" src={Onboard} alt="onboard" />
                    <p className="mt-2 text-xs text-thirdGray font-light">
                        UX/UI design
                    </p>
                    <h1 className="font-medium text-lg text-gray">
                        Onboard application
                    </h1>
                </div>
            </div>

            <div className="md:flex">
                <div className="mt-5 p-2 md:mt-32">
                    <img className="rounded-xl" src={Booking} alt="Booking" />
                    <p className="mt-2 text-xs text-thirdGray font-light">
                        Mobile application
                    </p>
                    <h1 className="font-medium text-lg text-gray">
                        Booking systeme
                    </h1>
                </div>

                <div className="mt-5 p-2">
                    <img className="rounded-xl" src={Juice} alt="Juice" />
                    <p className="mt-2 text-xs text-thirdGray font-light">
                        Front End application
                    </p>
                    <h1 className="font-medium text-lg text-gray">
                        Juice systeme
                    </h1>
                </div>
            </div>
        </section>
    )
}
