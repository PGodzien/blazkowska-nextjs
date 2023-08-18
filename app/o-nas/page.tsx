import Image from "next/image";
import slider from "../../public/slider_studio_blazkowska.jpg"
import type { Metadata } from "next";
import Patrycja from "../../public/patrycja_blazkowska.jpg";
import Damian from "../../public/damian_blazkowski.jpg";
import Magdalena from "../../public/magdalena_blazkowska.jpg";
import Anna from "../../public/ania_golebiowska.jpg";
import onas from "../../public/o_nas.jpg";

export const metadata: Metadata = {
    title: 'O nas | Studio Błażkowska - Salon Fryzjerski Przemyśl',
    description: 'Poznaj nasz zespół stylistów. Zarezerwuj wizytę i ciesz się profesjonalnymi usługami naszego studio fryzur. Serdecznie zapraszamy.',
}

const About = () => {
    return (
        <>
            <div className="flex justify-end lg:justify-around 2xl:container 2xl:mx-auto lg:mb-44">
                <div className="flex-col justify-center hidden ml-8 lg:flex">
                    <h1 className="font-serif text-6xl font-bold xl:mr-0">O nas</h1>
                </div>
                <div className="relative flex mt-8 ml-16 md:ml-24 lg:mt-0">
                    <Image className="z-10 border-b-8 border-l-8 border-white" src={slider} alt="Kontakt Slider" />
                    <div className="absolute w-full h-full mt-8 -ml-8 border-4 lg:w-full lg:h-full xl:mt-20 xl:-ml-20 border-blueGreen"
                    ></div>
                </div>
            </div>
            <div className="items-end justify-center mx-8 space-y-8 lg:space-x-8 xl:mx-auto mt-20 lg:flex max-w-7xl">
                <Image alt="" className="mx-auto md:w-1/2" src={onas} />
                <p className="lg:text-lg lg:leading-10">
                    Historia marki rozpoczęła się w 1995 roku od otwarcia pierwszego
                    salonu fryzjerskiego „Las Palmas” przez Magdalenę Błażkowską. Był to
                    jeden z pierwszych salonów fryzjerskich w Przemyślu. W roku 1999
                    powstała filia marki w Rzeszowie pod nazwą „Studio Stylizacji M.
                    Błażkowska”.
                </p>
            </div>
            <p className="py-8 mx-8 lg:text-lg lg:leading-10 xl:mx-auto max-w-7xl">
                W 2013 roku ważna role w rozwoju marki odegrał syn Damian Błażkowski,
                stał się on pasjonatem fryzjerstwa oraz współwłaścicielem firmy. Jego
                młodość, kreatywność i chęć rozwoju doprowadziła do przełomowych zmian,
                w których m.in. zmieniono nazwę marki na Studio Stylizacji Błażkowska &
                Błażkowski. Salony marki Błażkowska & Błażkowski zatrudniają wysokiej
                klasy stylistów fryzjerów specjalizujących się w spersonalizowanym
                doborze stylizacji fryzur zarówno do kształtu twarzy, sylwetki oraz do
                stylu ubierania, jak i osobowości klienta. Oddając się w nasze ręce,
                masz pewność, że wydobędziemy i podkreślimy walory twojej urody.
            </p>
            <div className="">
                <h1 className="mt-20 mb-20 font-serif text-3xl font-bold text-center text-primary">STYLIŚCI</h1>
                <div className="pb-40 mx-8 space-y-32 lg:space-y-0 lg:space-x-8 lg:flex xl:mx-auto max-w-7xl">
                    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
                        <Image alt="" className="relative z-10 px-4 mx-auto bg-white" src={Magdalena} />
                        <h2 className="font-serif text-xl font-bold text-center">
                            MAGDALENA BŁAŻKOWSKA WŁAŚCICIEL FIRMY / TOP STYLISTKA
                        </h2>
                        <p className="text-sm">
                            Doświadczona stylistka fryzur i designer sztuki fryzjerskiej.
                            Lider przekazujący wiedzę innym. Kreuje nowe możliwości oraz
                            doświadczenie w dziedzinie profesjonalnego fryzjerstwa. Przez
                            wiele lat należała do Elitarnego Stowarzyszenia Artystów
                            Fryzjerów „Intercoiffure” z siedzibą w Paryżu. Przez wiele lat
                            była instruktorem – trenerem w najbardziej prestiżowej Akademii
                            Stylizacji Babicz & Babicz z siedzibą w Krakowie. Współpracując
                            z Akademią od jej powstania, brała udział w wielu pokazach
                            sztuki fryzjerskiej między innymi w Paryżu, Londynie, Berlinie,
                            Mediolanie, Warszawie, Poznaniu oraz Krakowie. Brała udział
                            również w pokazach mody znanych projektantów takich jak Plich i
                            Maciej Zień. Swoje kwalifikacje podnosi w wielu akademiach na
                            świecie między innymi w Vidal Sassoon, Toni&Guy, Sanrizz, oraz
                            Academie Aleksandre de Paris.
                        </p>
                        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
                    </div>
                    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
                        <Image alt="" className="relative z-10 px-4 mx-auto bg-white" src={Damian} />
                        <h2 className="font-serif text-xl font-bold text-center">
                            DAMIAN BŁAŻKOWSKI WSPÓŁWŁAŚCICIEL / TOP STYLISTA
                        </h2>
                        <p className="text-sm">
                            Młody, kreatywny stylista szlifujący swoją wiedzę. Fryzjerstwo
                            to jego pasja. Był instruktorem fryzjerstwa w Studio WELLA
                            Professionals z siedzibą w Warszawie. Swoje cenne doświadczenie
                            oraz wiedzę zdobywa przede wszystkim pod okiem Magdaleny
                            Błażkowskiej. W przeszłości prowadził szkolenia w Akademii
                            Stylizacji Babicz & Babicz, a także w wieku akademiach na
                            świecie między innymi Vidal Sassoon, Sanrizz, Toni&Guy.
                            Specjalizuje się w stylizacjach damskich oraz męskich. Jego
                            młodość i kreatywność wnosi do naszej marki oraz całego zespołu
                            chęć rozwoju.
                        </p>
                        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
                    </div>
                    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
                        <Image alt="" className="relative z-10 px-4 mx-auto bg-white" src={Patrycja} />
                        <h2 className="font-serif text-xl font-bold text-center">
                            PATRYCJA BŁAŻKOWSKA WSPÓŁWŁAŚCICIEL / TOP STYLISTKA
                        </h2>
                        <p className="text-sm">
                            Swoje cenne doświadczenie oraz wiedzę zdobywa w rodzinnej firmie
                            przede wszystkim pod okiem mamy Magdaleny Błażkowskiej. Młoda
                            kreatywna, posiadająca wewnętrzna chęć rozwoju w sztuce
                            fryzjerskiej. Bardzo ambitna, ceni sobie profesjonalizm i wielką
                            precyzję. Z każdym dniem zdobywa nowe umiejętności w pracy, jak
                            i na wielu szkoleniach między innymi w Akademii Stylizacji
                            BABICZ & BABICZ, Studio WELLA. Specjalizuje się w strzyżeniach,
                            jak i stylizacjach wieczorowych.
                        </p>
                        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
                    </div>
                </div>
                <div className="pb-40 mx-8 space-y-32 justify-evenly lg:space-y-0 lg:space-x-8 lg:flex xl:mx-auto max-w-7xl">
                    <div className="relative z-10 px-8 space-y-4 bg-white lg:w-1/3">
                        <Image alt="" className="relative z-10 px-4 mx-auto bg-white" src={Anna} />
                        <h2 className="font-serif text-xl font-bold text-center">
                            ANIA GOŁĘBIOWSKA / STYLISTKA
                        </h2>
                        <p className="text-sm">
                            Fryzjerstwo to jej największa pasja. Jest miłośniczką
                            barberingu, strzyżeń damskich oraz koloryzacji. W codziennej
                            pracy ceni sobie możliwość rozwoju oraz pracy z klientem.
                            Zdobywa doświadczenie, inspirując się pracą całego zespołu, a w
                            swojej pracy nieustannie dąży do perfekcji!
                        </p>
                        <div className="absolute inset-0 z-0 border-2 top-20 -bottom-10 border-blueGreen"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
