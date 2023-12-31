import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PlanSection = () => {
    return (
        <div>
            <SectionTitle Heading={"All Plans"}></SectionTitle>
            <div className="p-2 gap-2 flex flex-col md:flex-row justify-between">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="relative flex w-full  md:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-teal-600 to-slate-600 bg-clip-border p-8 text-white shadow-md shadow-gray-500">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            Free For 1 Month
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-xl"></span>Free
                            <span className="self-end text-xl">/1 month</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Read any news
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    cancel anytime
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    40+ built-in pages
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <button
                            className="block w-full select-none rounded-lg bg-teal-700 border-b-2 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Try Free form 1 month
                        </button>
                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="relative flex w-full md:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-teal-600 to-slate-600 bg-clip-border p-8 text-white shadow-md shadow-gray-500">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            Premium Duo
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>15
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Read any news
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    cancel anytime
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    40+ built-in pages
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">

                        <Link to="/payment">
                            <button
                                className="block w-full select-none rounded-lg bg-teal-700 border-b-2 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                Get Premium Duo
                            </button>
                        </Link>

                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="relative flex w-full md:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-teal-600 to-slate-600 bg-clip-border p-8 text-white shadow-md shadow-gray-500">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            Premium Family
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">$</span>20
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Read any news
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    cancel anytime
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    40+ built-in pages
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    1 year free updates
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Life time technical support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-0 mt-12">
                        <Link to='/payment'>
                            <button
                                className="block w-full select-none rounded-lg bg-teal-700 border-b-2 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                Get premium Family
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlanSection;