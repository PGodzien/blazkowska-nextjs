import Image from "next/image";
import slider from "../../public/slider_studio_blazkowska.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Kontakt | Studio Błażkowska - Salon Fryzjerski Przemyśl',
    description: 'Zapraszamy do kontaktu z nami w celu umówienia i rezerwacji wizyty w naszym studio fryzur.',
}

const Contact = () => {
    return (
        <>
            <div className="flex justify-end lg:justify-around 2xl:container 2xl:mx-auto lg:mb-44">
                <div className="flex-col justify-center hidden ml-8 lg:flex">
                    <h1 className="font-serif text-6xl font-bold xl:mr-0">Kontakt</h1>
                </div>
                <div className="relative flex mt-8 ml-16 md:ml-24 lg:mt-0">
                    <Image className="z-10 border-b-8 border-l-8 border-white" src={slider} alt="Kontakt Slider" />
                    <div className="absolute w-full h-full mt-8 -ml-8 border-4 lg:w-full lg:h-full xl:mt-20 xl:-ml-20 border-blueGreen"
                    ></div>
                </div>
            </div>

            <div className="mt-20 mb-12 lg:hidden">
                <h1
                    className="font-serif text-6xl font-bold text-center xl:mr-0"
                >Kontakt</h1>
            </div>
            <div className="container justify-center w-4/5 mx-auto my-6 lg:space-x-24 lg:flex text-primary">
                    <div className="flex flex-col justify-center">
                        <div className="z-10 px-2 mx-auto -mb-6 bg-white">
                            <svg className="" width="90px" height="135px" viewBox="0 0 90 135" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="⚙️-Symbols" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                                    <g id="Group" fill="#0E7490" fill-rule="nonzero">
                                        <path d="M45,0 C21.375,0 0,19.125 0,42.75 C0,66.375 19.5187,94.5563 45,135 C70.4813,94.5563 90,66.375 90,42.75 C90,19.125 68.625,0 45,0 Z M45,78.75 C26.3813,78.75 11.25,63.6188 11.25,45 C11.25,26.3813 26.3813,11.25 45,11.25 C63.6188,11.25 78.75,26.3813 78.75,45 C78.75,63.6188 63.6188,78.75 45,78.75 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="p-16 space-y-4 leading-6 text-center border-4 border-blueGreen">
                            <h3 className="font-serif text-3xl font-bold">Salon Przemyśl</h3>
                            <p className="text-xl font-bold">Dane kontaktowe</p>
                            <p className="text-sm lg:text-base">Grunwaldzka 5<br />37-700 Przemyśl</p>
                            <p className="text-xl font-bold">Godziny otwarcia</p>
                            <p className="text-sm lg:hidden">Wt-Pt: 10-18<br />Sobota: 8-13</p>
                            <p className="hidden text-sm lg:block lg:text-base">Wtorek-Piątek: 10-18<br />Sobota: 8-13</p>
                            <p className="text-xl font-bold">Rezerwacja telefoniczna</p>
                            <p className="text-sm lg:text-base">(16) 670 45 83</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-12 lg:mt-0">
                        <div className="z-10 px-2 mx-auto -mb-6 bg-white">
                            <svg className="" width="90px" height="135px" viewBox="0 0 90 135" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="⚙️-Symbols" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                                    <g id="Group" fill="#0E7490" fill-rule="nonzero">
                                        <path d="M45,0 C21.375,0 0,19.125 0,42.75 C0,66.375 19.5187,94.5563 45,135 C70.4813,94.5563 90,66.375 90,42.75 C90,19.125 68.625,0 45,0 Z M45,78.75 C26.3813,78.75 11.25,63.6188 11.25,45 C11.25,26.3813 26.3813,11.25 45,11.25 C63.6188,11.25 78.75,26.3813 78.75,45 C78.75,63.6188 63.6188,78.75 45,78.75 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="p-16 space-y-4 leading-6 text-center border-4 border-blueGreen">
                            <h3 className="font-serif text-3xl font-bold">Salon Rzeszów</h3>
                            <p className="text-xl font-bold">Dane kontaktowe</p>
                            <p className="text-sm lg:text-base">Kolejowa 10<br />37-073 Rzeszów</p>
                            <p className="text-xl font-bold">Godziny otwarcia</p>
                            <p className="text-sm lg:hidden">Wt-Pt: 10-18<br />Sobota 8-13</p>
                            <p className="hidden text-sm lg:block">Wtorek-Piątek: 10-18<br />Sobota 8-13</p>
                            <p className="text-xl font-bold">Rezerwacja telefoniczna</p>
                            <p className="text-sm lg:text-base">+48 572 327 761</p>
                            <p className="text-sm lg:text-base">(17) 852 79 81</p>
                        </div>
                    </div>
                </div>
        </>
    );
};
export default Contact;
