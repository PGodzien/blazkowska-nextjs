import Image from 'next/image'
import logo from "/public/logo-blazkowska.png"
import Link from 'next/link'

export default function Footer() {
    return (

        <>
            <section className="py-12 mt-8 bg-primary">
                <div className="container flex flex-col items-center text-center md:text-left md:flex-row space-y-8 md:space-y-0 justify-between px-4 mx-auto max-w-7xl text-white font-bold text-xl">
                    <div className="">
                        <p className="mb-3">Przemyśl</p>
                        <p className="text-base font-normal">Grunwaldzka 5, 37-700 Przemyśl</p>
                        <p className="text-base font-normal">(16) 670 45 83</p>
                    </div>
                    <div className="">
                        <Link href="/">
                            <Image className='w-44 h-auto' alt='logo Blazkowska' src={logo} />
                        </Link>
                    </div>
                    <div className="">
                        <p className="mb-3">Rzeszów</p>
                        <p className="text-base font-normal">Kolejowa 10, 35-073 Rzeszów</p>
                        <p className="text-base font-normal">+48 572 327 761</p>
                        <p className="text-base font-normal">(17) 852 79 81</p>
                    </div>
                </div>
                <div className="container mx-auto max-w-7xl px-4 mt-4 border-t">
                    <div className="mt-4 text-center text-white">Stworzono przez <a href="https://getpromo.pl/strony-internetowe/" target='blank' className="text-secondary">Strony internetowe Getpromo</a></div>
                </div>
            </section>
        </>

    )
}




