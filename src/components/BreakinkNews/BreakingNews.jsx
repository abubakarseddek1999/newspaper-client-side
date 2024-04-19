import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className=" bg-white flex">
            <div className=" bg-red-500">
                <p className="text-white font-bold text-xl p-5 whitespace-nowrap">Breaking News</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <Marquee>
                    <p className="text-4xl font-bold text-black ">Sports YouTuber Angry Rantman, 27, Dies After Multiple Organ Failure; ISL Clubs Pay Tribute</p>
                </Marquee>

            </div>

        </div>
    );
};

export default BreakingNews;