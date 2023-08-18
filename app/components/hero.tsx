import Image from "next/image";
import Link from "next/link";
import logoBlazkowska from "../../public/logo-blazkowska.png";
import slider from "../../public/slider_salon.jpg";


const Hero = () => {
    return (
        <>
            <section className="">
                <div className="flex justify-end mb-20 lg:mb-44 lg:justify-around 2xl:container 2xl:mx-auto">
                    <div className="flex-col justify-center hidden ml-8 lg:flex">
                        <Image className="xl:mr-0" src={logoBlazkowska} alt="Logo Błakowska Przemyśl" />
                        <button className="w-1/3 p-4 mx-auto mt-8 text-xl font-bold text-white rounded-md bg-gold"><a href="/oferta" className="">OFERTA</a></button>
                    </div>
                    <div className="relative flex mt-8 ml-16 md:ml-24 lg:mt-0">
                        <Image alt="Salon Błakowska Przemyśl" className="z-10 bg-white pb-4 pl-4" src={slider} />
                        <div className="absolute w-full h-full mt-8 -ml-8 border-4 lg:w-full lg:h-full xl:mt-20 xl:-ml-20 border-blueGreen"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center mx-12 mb-12 lg:hidden">
                    <Image className="xl:mr-0" src={logoBlazkowska} alt="Logo Błakowska Przemyśl" />
                    <button className="p-4 mx-auto mt-8 text-xl font-bold text-white rounded-md bg-gold"><a href="/oferta" className="">OFERTA</a></button>
                </div>
                <div className="container justify-around mx-auto space-y-12 text-center md:space-y-0 md:flex text-primary">
                    <div className="space-y-2">
                        <p className="font-serif font-bold text-8xl text-gold">1</p>
                        <p className="font-serif text-2xl font-bold">Najlepsi <br /> styliści</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-serif font-bold text-8xl text-gold">2</p>
                        <p className="font-serif text-2xl font-bold">Wieloletnie <br /> doświadczenie</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-serif font-bold text-8xl text-gold">3</p>
                        <p className="font-serif text-2xl font-bold">Wysoka jakość <br /> obsługi</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
