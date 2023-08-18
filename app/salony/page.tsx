import Image from "next/image";
import slider from "../../public/slider_studio_blazkowska.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Damian Błakowski - Barber Room Przemyśl',
    description: 'Oferujemy najwyższej jakości profesjonalne usługi barberskie w Przemyślu – strzyenie męski, trymowanie brody, barber full combo, konturowanie, covering up gray, golenie i konturowanie brzytwą.',
}

const Salons = () => {
    return (
        <>
            <div className="flex justify-end lg:justify-around 2xl:container 2xl:mx-auto lg:mb-44">
                <div className="flex-col justify-center hidden ml-8 lg:flex">
                    <h1 className="font-serif text-6xl font-bold xl:mr-0">Salony</h1>
                </div>
                <div className="relative flex mt-8 ml-16 md:ml-24 lg:mt-0">
                    <Image className="z-10 border-b-8 border-l-8 border-white" src={slider} alt="Kontakt Slider" />
                    <div className="absolute w-full h-full mt-8 -ml-8 border-4 lg:w-full lg:h-full xl:mt-20 xl:-ml-20 border-blueGreen"
                    ></div>
                </div>
            </div>

            <div className="pb-40 mx-8 space-y-32 text-center lg:space-y-0 lg:space-x-8 lg:flex xl:mx-auto max-w-7xl">

    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
        <iframe className="relative z-10 px-4 mx-auto bg-white" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.9971256316576!2d22.764296327881752!3d49.78628114287732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7f1ed97f3be9%3A0xad4ced9eb4fd4cd6!2zQsWCYcW8a293c2N5IEhhaXIgU3R5bGlzdCAmIEJhcmJlclJvb20gQsWCYcW8a293c2tp!5e0!3m2!1spl!2spl!4v1625738835892!5m2!1spl!2spl" width="293" height="402" loading="lazy"></iframe>
        <h2 className="font-serif text-xl font-bold text-center">
            PRZEMYŚL
        </h2>
        <p className="text-xl">
            Grunwaldzka 5 <br />37-700 Przemyśl
        </p>
        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
    </div>

    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
        <iframe className="relative z-10 px-4 mx-auto bg-white" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.6214973188992!2d22.007584937305428!3d50.04111690986761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb02ac1e4271%3A0x1a16cfb2df6e8f10!2sSalony%20fryzjerskie%20Magdalena%20B%C5%82a%C5%BCkowska!5e0!3m2!1spl!2spl!4v1625737975265!5m2!1spl!2spl" width="293" height="402" loading="lazy"></iframe>
        <h2 className="font-serif text-xl font-bold text-center">
            RZESZÓW
        </h2>
        <p className="text-xl">
            Kolejowa 10<br /> 35-073 Rzeszów
        </p>
        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
    </div>

    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
        <iframe className="relative z-10 px-4 mx-auto bg-white" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.9971256316576!2d22.764296327881752!3d49.78628114287732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7f1ed97f3be9%3A0xad4ced9eb4fd4cd6!2zQsWCYcW8a293c2N5IEhhaXIgU3R5bGlzdCAmIEJhcmJlclJvb20gQsWCYcW8a293c2tp!5e0!3m2!1spl!2spl!4v1625738835892!5m2!1spl!2spl" width="293" height="402" loading="lazy"></iframe>
        <h2 className="font-serif text-xl font-bold text-center">
            BARBER ROOM
        </h2>
        <p className="text-xl">
            Grunwaldzka 5<br /> 37-700 Przemyśl
        </p>
        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
    </div>
    
    </div>

        </>
    );
};
export default Salons;
