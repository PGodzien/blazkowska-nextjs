import Image from "next/image";
import slider from "../../public/slider_studio_blazkowska.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Damian Błakowski - Barber Room Przemyśl',
    description: 'Oferujemy najwyższej jakości profesjonalne usługi barberskie w Przemyślu – strzyenie męski, trymowanie brody, barber full combo, konturowanie, covering up gray, golenie i konturowanie brzytwą.',
}

const Offer = () => {
    return (
        <>
            <div className="flex justify-end lg:justify-around 2xl:container 2xl:mx-auto lg:mb-44">
                <div className="flex-col justify-center hidden ml-8 lg:flex">
                    <h1 className="font-serif text-6xl font-bold xl:mr-0">Oferta</h1>
                </div>
                <div className="relative flex mt-8 ml-16 md:ml-24 lg:mt-0">
                    <Image className="z-10 border-b-8 border-l-8 border-white" src={slider} alt="Kontakt Slider" />
                    <div className="absolute w-full h-full mt-8 -ml-8 border-4 lg:w-full lg:h-full xl:mt-20 xl:-ml-20 border-blueGreen"
                    ></div>
                </div>
            </div>

            <div className="pb-40 mx-8 space-y-32 text-center lg:space-y-0 lg:space-x-8 lg:flex xl:mx-auto max-w-7xl">

            <div className="relative z-20 pt-4 pb-16 text-center bg-white lg:py-0 2xl:mx-auto lg:mb-44 lg:flex max-w-7xl lg:justify-evenly">
                <div className="relative z-10 px-12 py-4 mt-12 text-center bg-white lg:py-0 lg:mx-0 lg:mt-0">
                    <svg className="mx-auto" width="90px" height="135px" viewBox="0 0 90 135" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="⚙️-Symbols" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                            <g id="Group" fill="#0E7490" fill-rule="nonzero">
                                <path d="M45,0 C21.375,0 0,19.125 0,42.75 C0,66.375 19.5187,94.5563 45,135 C70.4813,94.5563 90,66.375 90,42.75 C90,19.125 68.625,0 45,0 Z M45,78.75 C26.3813,78.75 11.25,63.6188 11.25,45 C11.25,26.3813 26.3813,11.25 45,11.25 C63.6188,11.25 78.75,26.3813 78.75,45 C78.75,63.6188 63.6188,78.75 45,78.75 Z" id="Shape"></path>
                            </g>
                        </g>
                    </svg>
                    <button className="py-3 mt-8 text-2xl font-bold text-white rounded-md lg:text-4xl px-9 lg:px-12 lg:py-4 bg-gold"><a href="/oferta-przemysl" className="">PRZEMYŚL</a></button>
                </div>
                <div className="relative z-10 px-12 py-4 mt-12 text-center bg-white lg:py-0 lg:mx-0 lg:mt-0">
                    <svg className="mx-auto" width="90px" height="135px" viewBox="0 0 90 135" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="⚙️-Symbols" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                            <g id="Group" fill="#0E7490" fill-rule="nonzero">
                                <path d="M45,0 C21.375,0 0,19.125 0,42.75 C0,66.375 19.5187,94.5563 45,135 C70.4813,94.5563 90,66.375 90,42.75 C90,19.125 68.625,0 45,0 Z M45,78.75 C26.3813,78.75 11.25,63.6188 11.25,45 C11.25,26.3813 26.3813,11.25 45,11.25 C63.6188,11.25 78.75,26.3813 78.75,45 C78.75,63.6188 63.6188,78.75 45,78.75 Z" id="Shape"></path>
                            </g>
                        </g>
                    </svg>
                    <button className="py-3 mt-8 text-2xl font-bold text-white rounded-md lg:text-4xl px-9 lg:px-12 lg:py-4 bg-gold"><a href="/oferta-rzeszow" className="">RZESZÓW</a></button>
                </div>
                <div className="absolute inset-0 hidden w-5/12 h-full mx-8 border-2 lg:block lg:h-1/2 lg:mt-52 md:w-5/12 md:ml-16 lg:ml-0 lg:w-full border-blueGreen"></div>
            </div>

    </div>

        </>
    );
};
export default Offer;
