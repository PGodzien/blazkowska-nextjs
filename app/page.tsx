import Hero from './components/hero'
import Services from './components/services'
import Contact from './components/contact'
import { Metadata } from 'next'
import Stylists from './components/stylists'

export const metadata: Metadata = {
  title: 'Studio Błażkowska - Salon Fryzjerski Przemyśl',
  description: 'Fryzjer damskie w Przemyślu. Strzyżenie damskie, modelowanie, koloryzacja, regeneracja, dekoloryzacja.',
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
