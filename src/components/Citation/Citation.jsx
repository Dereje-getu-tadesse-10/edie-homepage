import PersonFour from '../../assets/images/person4.png'

export const Citation = () => {
    return (
        <section className="mb-28 p-3 md:w-[530px] md:ml-36"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
            <p className="font-medium text-2xl text-gray md:text-4xl md:w-[800px]">
                “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
            </p>
            <div className="flex gap-5 mt-10">
                <img
                    className="w-20 h-20 rounded-xl"
                    src={PersonFour}
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-gray text-2xl font-medium">
                        Carlos Tran
                    </h1>
                    <p className="text-thirdGray font-medium md:text-lg">
                        The Decorate Gatsby
                    </p>
                </div>
            </div>
        </section>
    )
}
