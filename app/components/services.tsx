import Image from 'next/image'
import Link from 'next/link';
import strzyzenie from "../../public/strzyzenie.jpg";
import farbowanie from "../../public/farbowanie.jpg";
import modelowanie from "../../public/modelowanie.jpg";

export default function Services() {
    return (

        <>
            <section className="">
                <h1 className="mt-8 font-serif text-3xl font-bold text-center lg:mb-20 lg:mt-36 text-primary">OFERTA</h1>
                <div className="">
                    <div className="container relative flex flex-col mx-auto mt-8 lg:my-20">
                        <div className="z-10 mx-auto space-y-8 flex flex-col lg:flex-row lg:space-y-0 lg:px-12 lg:pt-0 lg:space-x-8 lg:flex lg:bg-white">
                            <Link href="/oferta/">
                                <div className="relative">
                                    <Image alt='Magdalena Błazkowska' className="border-2" src={modelowanie} />
                                    <div className="absolute inset-0 z-10 items-center justify-center hidden text-2xl font-semibold duration-300 opacity-0 lg:flex text-gold hover:bg-primary hover:bg-opacity-75 hover:opacity-100">Modelowanie</div>
                                    <div className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold bg-opacity-75 lg:hidden text-gold bg-primary">Modelowanie</div>
                                </div>
                            </Link>
                            <Link href="/oferta/">
                                <div className="relative overflow-hidden">
                                    <Image alt='Magdalena Błazkowska' className="border-2" src={farbowanie} />
                                    <div className="absolute inset-0 z-10 items-center justify-center hidden text-2xl font-semibold duration-300 opacity-0 lg:flex text-gold hover:bg-primary hover:bg-opacity-75 hover:opacity-100">Farbowanie</div>
                                    <div className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold bg-opacity-75 h-full w-full lg:hidden text-gold bg-primary">Farbowanie</div>
                                </div>
                            </Link>
                            <Link href="/oferta/">
                                <div className="relative">
                                    <Image alt='Magdalena Błazkowska' className="border-2" src={strzyzenie} />
                                    <div className="absolute inset-0 z-10 items-center justify-center hidden text-2xl font-semibold duration-300 opacity-0 lg:flex text-gold hover:bg-primary hover:bg-opacity-75 hover:opacity-100">Strzyżenie</div>
                                    <div className="absolute inset-0 z-10 flex items-center justify-center text-2xl font-semibold bg-opacity-75 lg:hidden text-gold bg-primary">Strzyżenie</div>
                                </div>
                            </Link>
                        </div>
                        <button className="z-20 px-8 py-2 mx-auto mt-6 mb-12 text-lg font-bold text-white rounded-md lg:mt-12 lg:mb-0 bg-gold"><Link href="/oferta" className="">WIĘCEJ</Link></button>
                        <div className="absolute hidden w-full h-full mx-6 mt-12 border-2 lg:block border-blueGreen"></div>
                    </div>
                </div>
            </section>
        </>

    )
}




