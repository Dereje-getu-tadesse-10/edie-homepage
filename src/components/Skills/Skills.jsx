import { Icon } from './Icon'

export const Skills = () => {
    return (
        <section className="mt-16 mb-24 p-3">
            <h1 className="pl-10 pr-10 text-2xl md:pl-0 md:pr-0 md:ml-[1rem]">
                We offer high demand services
            </h1>

            <div className="md:flex md:justify-center md:items-center">

                <div className="mt-16 p-5 flex flex-col gap-5 rounded-3xl md:flex">
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
                    <button className="p-2 w-max bg-buttonInactive text-thirdGray rounded-xl">
                        Get started
                    </button>
                </div>

                <div className="mt-16 p-5 flex flex-col gap-5 shadow-2xl rounded-3xl">

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
                    <button className="p-2 w-max bg-blue text-white rounded-xl">
                        Get started
                    </button>
                </div>

                <div className="mt-16 p-5 flex flex-col gap-5  rounded-3xl">

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
                    <button className="p-2 w-max bg-buttonInactive text-thirdGray rounded-xl">
                        Get started
                    </button>
                </div>

            </div>

        </section >
    )
}
