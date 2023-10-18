import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Player from '@/components/Player'
import Albums from '@/components/albums/Albums'
import Blog from '@/components/blog/Blog'
import WhatsAppButton from '@/components/button/whatsapp'
import Events from '@/components/events/Events'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatsAppButton />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
      {/* <div className='h-[4000px]'></div> */}
      </main>
  )
}
