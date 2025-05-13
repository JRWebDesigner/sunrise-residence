"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link"
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import {
   FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaYoutube
} from "react-icons/fa";
export default function HomeHost(){
  const [open, setOpen] = useState(false);
  return(
      <main className="bg-black text-white min-h-screen font-sans">
  <header className="w-full bg-zinc-900 px-6 py-4 flex justify-between items-center text-xl font-bold uppercase text-white">
        <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
          <HiMenu />
        </button>

        <div className="flex flex-col items-center">
          <Image src="/images/logo.webp" alt="Logo" width={160} height={160} className="w-40" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/"><span className="pb-0.5">Home</span></Link>
          <div className="relative group">
            <button className="flex items-center gap-1">Languages ▾</button>
            <div className="absolute hidden group-hover:block bg-black border border-zinc-700 mt-2 p-2 text-sm">
              <Link href="/es"><div className="hover:text-yellow-400">Español</div></Link>
              <Link href="/en"><div className="hover:text-yellow-400">English</div></Link>
              <Link href="/it"><div className="hover:text-yellow-400">Italiano</div></Link>
            </div>
          </div>
          <Link href="/host"><span className="hover:text-yellow-400">Your Host</span></Link>
          <Link href="https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA"><span className="hover:text-yellow-400">Facebook</span></Link>
          <Link href="https://www.booking.com/hotel/it/sunrise-veronica.html?aid=964694&app_hotel_id=10680979&checkin=2023-11-15&checkout=2023-11-16&from_sn=android&group_adults=3&group_children=0&label=hotel_details-5WyBiO%401700081590&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&lang=en-us&soz=1&lang_changed=1"><span className="hover:text-yellow-400">Booking.com</span></Link>
          <Link href="https://www.airbnb.it/users/show/475678499"><span className="hover:text-yellow-400">Airbnb.com</span></Link>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 left-0 w-full h-full bg-zinc-900 text-white z-50 px-10 py-8 flex flex-col gap-6 text-xl font-bold uppercase"
          >
            <button className="self-end text-3xl mb-6" onClick={() => setOpen(false)}>
              <HiX />
            </button>

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <div>
              <span>Languages ▾</span>
              <div className="pl-4 mt-2 text-base">
                <Link href="/es" onClick={() => setOpen(false)}>Español</Link><br />
                <Link href="/en" onClick={() => setOpen(false)}>English</Link><br />
                <Link href="/it" onClick={() => setOpen(false)}>Italiano</Link>
              </div>
            </div>
            <Link href="/host" onClick={() => setOpen(false)}>Your Host</Link>
            <Link href="https://facebook.com" onClick={() => setOpen(false)}>Facebook</Link>
            <Link href="https://booking.com" onClick={() => setOpen(false)}>Booking.com</Link>
            <Link href="https://airbnb.com" onClick={() => setOpen(false)}>Airbnb.com</Link>
          </motion.aside>
        )}
      </AnimatePresence>

    <section id='host' className='bg-zinc-900 py-20 px-6 md:px-20'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div>
              <span className='uppercase tracking-widest text-xs text-yellow-400 border border-yellow-400 px-2 py-1'>Your Host</span>
              <h2 className='text-3xl font-bold text-white mt-4'>Roxana</h2>
            </div>
            <div className='space-y-4 text-gray-300 text-lg leading-relaxed'>
              <p>
                It gives us great pleasure to give you the warmest welcome to this cozy retreat, where every corner is infused with hospitality and comfort. Here, we seek to offer you much more than a place to rest; We open the doors to a memorable experience full of warmth.
              </p>
              <p>
                We are always happy to help you with anything you need, whether it&apos;s local recommendations, guidance on activities or just a friendly chat.
              </p>
              <p>
                Nos complace darles la más cordial bienvenida a este acogedor refugio, donde cada rincón está impregnado de hospitalidad y comodidad. Aquí buscamos ofrecerte mucho más que un lugar para descansar; Te abrimos las puertas a una experiencia memorable y llena de calidez.
              </p>
              <p>
                Siempre estaremos encantados de ayudarte con cualquier cosa que necesites, ya sean recomendaciones locales, orientación sobre actividades o simplemente una charla amistosa.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white border-b border-white pb-1 w-fit'>Email and Instagram</h3>
              <p className='text-gray-300'>Email: <a href='mailto:rossana46@hotmail.it' className='underline text-yellow-400'>rossana46@hotmail.it</a></p>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition'>Instagram</a>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white border-b border-white pb-1 w-fit'>Whatsapp</h3>
              <p className='text-gray-300'>Whatsapp: +39 331 741 5002</p>
              <a href='https://wa.me/393317415002' target='_blank' rel='noopener noreferrer' className='inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition'>Send me a message</a>
            </div>
          </div>

          <div>
            <Image src='/images/sala.webp' alt='Host Room' width={800} height={600} className='rounded-lg shadow-lg' />
          </div>
        </div>
      </section>
        <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Image src="/images/roxana.webp" alt="Testimonial" width={600} height={400} className="rounded-full shadow-lg" />
          </div>
          <div className="text-gray-300 text-xl leading-relaxed">
            <p className="italic text-white text-2xl mb-4">
              &ldquo; Mi casa es tu casa, It is the axiom that fully expresses the warmth of my hospitality. 

I invite you to relax and enjoy every moment in this environment that we have lovingly created for you. May your stay here be unforgettable and full of special moments!.&rdquo;
            </p>
          </div>
        </motion.div>
      </section>
      <footer className='bg-zinc-900 text-gray-300 text-sm py-12 px-6 md:px-20'>
        <div className='max-w-6xl mx-auto flex flex-col items-center gap-6'>
          <nav className='flex gap-6 text-xs uppercase tracking-wide'>
            <a href='#' className='border-b border-yellow-400 text-yellow-400'>Home</a>
            <a href='#host' className='hover:text-yellow-400'>Your Host</a>
            <a href='https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA' className='hover:text-yellow-400'>Facebook</a>
            <a href='https://www.booking.com/hotel/it/sunrise-veronica.html?aid=964694&app_hotel_id=10680979&checkin=2023-11-15&checkout=2023-11-16&from_sn=android&group_adults=3&group_children=0&label=hotel_details-5WyBiO%401700081590&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&lang=en-us&soz=1&lang_changed=1' className='hover:text-yellow-400'>Booking.com</a>
            <a href='https://www.airbnb.it/users/show/475678499' className='hover:text-yellow-400'>Airbnb.com</a>
          </nav>
          <div className='flex gap-6 text-xl'>
            <a href='https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA'><FaFacebookF /></a>
            <a href='https://www.instagram.com/sunrise_residence_/'><FaInstagram /></a>
            <a href='https://www.tiktok.com/@_sunrise_residence?_t=8hzWij28TIG&_r=1'><FaTiktok /></a>
            <a href='https://www.x.com/AlbaResiden'><FaTwitter /></a>
            <a href='https://www.youtube.com/@SunriseResidence0'><FaYoutube /></a>
          </div>
          <div className='text-center'>
            <h4 className='font-semibold text-white'>Sunrise Residence</h4>
            <p>Corso Langhe 1, 12051 Alba Cuneo, Italy</p>
            <p className='text-yellow-400'>+39 331 741 5002</p>
          </div>
        </div>
      </footer>
      </main>
  )
}
