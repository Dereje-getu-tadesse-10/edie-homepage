import PersonOne from "../../assets/images/person1.png"
import PersonTwo from "../../assets/images/person2.png"
import PersonThree from "../../assets/images/person3.png"

export const Team = () => {
    return (
        <section className="mt-16 mb-24 p-3 md:flex md:justify-around md:items-center">

            <div className="flex flex-col gap-4 md:w-[300px]">
                <h2 className="text-redColor">
                    Meet the team
                </h2>
                <h1 className="text-gray text-4xl font-medium">
                    We are chilled and a laidback team
                </h1>
                <p className="text-secondGray text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="mt-7 flex">
                <div className="flex items-center justify-center">
                    <img className="rounded-3xl w-3/4" src={PersonThree} alt="person" />
                </div>

                <div className="flex flex-col gap-7">
                    <img className="rounded-3xl w-2/3" src={PersonOne} alt="person" />
                    <img className="rounded-3xl w-9/12" src={PersonTwo} alt="person" />
                </div>
            </div>
        </section>
    )
}
