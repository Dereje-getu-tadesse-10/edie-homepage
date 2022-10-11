
export const Form = () => {
    return (
        <form className="mt-2 h-12 p-1 rounded-xl bg-white flex justify-between sm:w-[291px] md:w-[350px] md:h-[57px]">
            <input
                className="p-1 h-full bg-inherit"
                type="text"
                placeholder="Enter your email"
            />
            <button className="text-white bg-blue h-full w-2/6 rounded-xl">
                Join
            </button>
        </form>
    )
}
