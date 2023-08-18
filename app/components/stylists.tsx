import Image from 'next/image'
import Magdalena from "../../public/magdalena_blazkowska.jpg";
import Patrycja from "../../public/patrycja_blazkowska.jpg";
import Damian from "../../public/damian_blazkowski.jpg";

export default function Stylists() {
    return (

        <>
            <section className="">
                <h1 className="mt-16 font-serif text-3xl font-bold text-center lg:mb-20 lg:mt-36 text-primary">STYLIŚCI</h1>

                <div className="container relative flex flex-col mx-auto mt-8 lg:my-20">
                    <div className="z-10 mx-auto space-y-8 lg:space-y-0 lg:px-12 lg:pt-0 lg:space-x-8 lg:flex lg:bg-white">
                        <div className=""><Image alt='Magdalena Błazkowska' className="border-2 border-blueGreen" src={Magdalena} /></div>
                        <div className=""><Image alt='Damian Blazkowski' className="border-2 border-blueGreen" src={Damian} /></div>
                        <div className=""><Image alt='Patrycja Blazkowska' className="border-2 border-blueGreen" src={Patrycja} /></div>
                    </div>
                    <button className="z-20 px-8 py-2 mx-auto mt-6 mb-12 text-lg font-bold text-white rounded-md lg:mt-12 lg:mb-0 bg-gold"><a href="/o-nas" className="">WIĘCEJ</a></button>
                    <div className="absolute hidden w-full h-full mx-6 mt-12 border-2 lg:block border-blueGreen"></div>
                </div>
            </section>
        </>

    )
}




