import HeroImage from '../../assets/images/heroImage.jpg'
import { Form } from './Form'
export const Hero = () => {
    return (
        <section className="mt-16 mb-24 p-3">
            <div className="pl-10 pr-10 flex flex-col gap-1 md:pl-32 md:pr-32 md:gap-5">
                <h2 className="text-blue md:text-lg">
                    Unhappy with your wesite ?
                </h2>
                <h1 className="text-2xl text-gray font-medium md:w-[490px] md:text-5xl">
                    We create beautiful and fast web services
                </h1>
            </div>

            <img
                src={HeroImage}
                className="mt-7 rounded-3xl object-cover h-36 flex justify-center items-center m-auto sm:w-full md:h-[354px]"
            />
            <div className="mt-5 sm:w-[366px] pr-10 pl-10 md:ml-32 md:mr-32 md:pr-0 md:pl-0 md:flex md:flex-col md:gap-3">
                <h3 className="text-2xl text-gray font-medium md:text-4xl md:mt-3">
                    Story, emotion and purpose
                </h3>
                <p className="mt-4 font-normal text-secondGray md:text-lg">
                    We help your ideas into real world applications that will autperform your toughest competition
                    and help you achieve your strategic goals in short period of time.
                </p>
            </div>
            <div className="mt-5 pl-10 pr-10 md:ml-32 md:mr-32 md:pr-0 md:pl-0 md:mt-10">
                <p className="text-secondGray">Want us to contact you ?</p>
                <Form />
            </div>
        </section >
    )
}
