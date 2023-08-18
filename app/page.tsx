import Hero from './components/hero'
import Services from './components/services'
import Contact from './components/contact'
import { Metadata } from 'next'
import Stylists from './components/stylists'

export const metadata: Metadata = {
  title: 'Barber Room Przemyśl - Damian Błażkowski',
  description: 'Usługi barberskie w Przemyślu. Trymowanie brody, golenie brzytwą, strzyżenie, covering up gray, konnturowanie brody, barber full combo.',
}
export default function Home() {
  return (
    <>
      <Hero />
      <Stylists />
      <Services />
      <Contact />
    </>
  )
}
