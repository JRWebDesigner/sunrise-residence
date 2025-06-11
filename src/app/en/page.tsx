"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper';

import {
   FaWifi, FaParking, FaCity, FaSnowflake,
  FaSmokingBan, FaCouch, FaBath,
  FaDoorClosed, FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaYoutube
} from "react-icons/fa";
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';


export default function HomeEn() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const images = Array.from({ length: 32 }, (_, i) => `/images/img-${i + 1}.webp`);

  const [open, setOpen] = useState(false);
   return (
    <main className="bg-black text-white min-h-screen font-sans">
<header className="w-full bg-zinc-900 px-6 py-4 flex justify-between items-center text-xl font-bold text-white">
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
            <div className="absolute hidden group-hover:block bg-black border border-zinc-700 mt-2 p-2 text-sm w-full z-50">
              <Link href="/es"><div className="hover:text-yellow-400">Español</div></Link>
              <Link href="/en"><div className="hover:text-yellow-400">English</div></Link>
              <Link href="/"><div className="hover:text-yellow-400">Italiano</div></Link>
              <Link href="/fr"><div className="hover:text-yellow-400">Frances</div></Link>
            </div>
          </div>
          <Link href="/host"><span className="hover:text-yellow-400">Your Host</span></Link>
          <Link href="https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA"><span className="hover:text-yellow-400">Facebook</span></Link>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 left-0 w-full h-full bg-zinc-900 text-white z-50 px-10 py-8 flex flex-col gap-6 text-xl font-bold"
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
                <Link href="/" onClick={() => setOpen(false)}>Italiano</Link><br />
                <Link href="/fr" onClick={() => setOpen(false)}>Frances</Link>
              </div>
            </div>
            <Link href="/host" onClick={() => setOpen(false)}>Your Host</Link>
            <Link href="https://www.facebook.com/profile.php?id=61553588529798" onClick={() => setOpen(false)}>Facebook</Link>

          </motion.aside>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[40dvh] md:h-[100dvh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/fachada.webp"
            fill
            style={{ objectPosition: 'center' }}
            alt="Fachada Sunrise Residence"
            className="opacity-40 md:object-cover object-contain"
            priority
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10 px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-400">
              Sunrise Residence
            </h1>
          </motion.div>
        </section>

            <section className="py-20 px-6 md:px-20 bg-zinc-900 flex md:flex-row flex-col justify-center items-center">
          <img 
            src="/images/home.jpg" alt="Terrace" width={360} height={360} className="rounded-full mx-auto" 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Welcome to Sunrise Residence!</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
              We are pleased to welcome you to Sunrise Residence, the ideal starting point for your stay in Alba. Located in a central area, this recently renovated apartment offers a perfect balance of comfort, convenience, and style. Whether you&apos;re here for tourism or work, you&apos;ll find everything you need to feel at home at Sunrise Residence.
            </p>
          </motion.div>
        </section>

        <section className="py-20 px-6 md:px-20 bg-zinc-800 flex md:flex-row flex-col justify-center items-center gap-10">
          <Image src="/images/sobre.webp" alt="Terrace" width={600} height={400} className="w-[95%] md:w-[50%]" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Description of Sunrise Residence</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
              Sunrise Residence is a modern and spacious apartment, designed to offer a comfortable and relaxing stay. With large, tastefully furnished rooms.
            </p>
          </motion.div>
        </section>
        <section className="py-20 px-6 md:px-20 bg-black grid gap-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="/images/terraza.webp" alt="Terrace" width={600} height={400} className="rounded-lg" />
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">What We Offer</h3>
              <p className="text-gray-300 leading-7">
                - Central location: Just a few steps from main tourist attractions, restaurants, and shops.<br />
                - Comfortable rooms: Air-conditioned rooms with free Wi-Fi and a fully equipped kitchen.<br />
                - Included services: Free private parking, laundry, and provided bed and bath linens.<br />
                - Excellent value: Comfortable and convenient stay without compromising quality.
              </p>
            </div>
          </div>

          <div className="flex justify-around flex-col md:flex-row gap-8 items-center md:flex-row-reverse">
            <Image src="/images/camara.webp" alt="Room" width={600} height={400} className="rounded-lg" />
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">A Comfortable Stay at Competitive Prices</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Whether you&apos;re traveling solo, as a couple, or with family, Sunrise Residence is an ideal choice for those looking for practical and affordable accommodation. With spotless cleanliness, well-designed spaces, and a strategic location, we guarantee a stress-free stay while exploring Alba.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="/images/cocina.webp" alt="Kitchen" width={600} height={400} className="rounded-lg" />
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">Book Your Stay Now!</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Don&apos;t wait! Book your stay at Sunrise Residence and enjoy a unique experience, full of comfort and savings.
              </p>
              <a href="https://facebook.com" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">OUR FACEBOOK</a>
            </div>
          </div>
        </section>
       {/* Galería */}
          <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-yellow-400 text-center mb-12">Gallería</h2>

      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          loop
          navigation
          modules={[Thumbs, Navigation]}
          thumbs={{ swiper: thumbsSwiper }}
          className="mb-6"
        >
          {images.map((src, i) => (
            <SwiperSlide key={`main-${i}`}>
              <img src={src} alt={`Imagen ${i + 1}`} className="w-full h-96 object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={10}
          slidesPerView={6}
          watchSlidesProgress
          modules={[Thumbs]}
        >
          {images.map((src, i) => (
            <SwiperSlide key={`thumb-${i}`}>
              <img src={src} alt={`Miniatura ${i + 1}`} className="w-full h-20 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
      {/* Instalaciones estilizadas */}
    <section className="py-20 px-6 md:px-20 bg-zinc-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-16">Amenities</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: <FaCity />, label: "City View" },
            { icon: <FaWifi />, label: "Free WiFi" },
            { icon: <FaCouch />, label: "Terrace" },
            { icon: <FaParking />, label: "Free Parking" },
            { icon: <FaDoorClosed />, label: "Balcony" },
            { icon: <FaSnowflake />, label: "Air Conditioning" },
            { icon: <FaBath />, label: "Private Bathroom" },
            { icon: <FaSmokingBan />, label: "Non-Smoking Rooms" },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex items-center gap-4 bg-zinc-800 rounded-xl p-6 shadow-md">
              <div className="text-yellow-400 text-3xl">{item.icon}</div>
              <p className="text-lg text-gray-200">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

     <section className="py-20 px-6 md:px-20 bg-zinc-900">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Building Features</h2>
    <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg leading-8">
      <div>
        <h3 className="text-yellow-400 font-semibold mb-2">Kitchen</h3>
        <ul className="list-disc ml-6">
          <li>Dining table</li>
          <li>Coffee machine</li>
          <li>Cleaning products</li>
          <li>Toaster</li>
          <li>Stovetop</li>
          <li>Oven</li>
          <li>Kitchenware</li>
          <li>Electric kettle</li>
          <li>Washing machine</li>
          <li>Dishwasher</li>
          <li>Microwave</li>
          <li>Refrigerator</li>
          <li>Kitchenette</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Bathroom</h3>
        <ul className="list-disc ml-6">
          <li>Toilet paper</li>
          <li>Bidet</li>
          <li>Bathtub or shower</li>
          <li>Private bathroom</li>
          <li>Toilet</li>
          <li>Hairdryer</li>
          <li>Shower</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Bedroom</h3>
        <ul className="list-disc ml-6">
          <li>Double and single beds</li>
          <li>Wardrobe</li>
          <li>Nightstand</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Living Area</h3>
        <ul className="list-disc ml-6">
          <li>Sofa</li>
          <li>Seating area</li>
          <li>Desk</li>
        </ul>
      </div>
      <div>
        <h3 className="text-yellow-400 font-semibold mb-2">Outdoor Areas</h3>
        <ul className="list-disc ml-6">
          <li>Balcony</li>
          <li>Terrace</li>
          <li>Free parking</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Media & Technology</h3>
        <ul className="list-disc ml-6">
          <li>Streaming service (e.g. Netflix)</li>
          <li>Flat-screen TV</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Facilities</h3>
        <ul className="list-disc ml-6">
          <li>Power socket near the bed</li>
          <li>Drying rack</li>
          <li>Clothes rack</li>
          <li>Wood or parquet floor</li>
          <li>Iron and ironing board</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Security</h3>
        <ul className="list-disc ml-6">
          <li>Fire extinguishers</li>
          <li>CCTV outside property</li>
          <li>CCTV in common areas</li>
          <li>Key access</li>
          <li>24-hour security</li>
        </ul>
        <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Nearby</h3>
        <ul className="list-disc ml-6">
          <li><strong>Restaurants and Cafes</strong></li>
          <li>Zenzero & Caffè (50m)</li>
          <li>Hope&apos;s Food (100m)</li>
          <li>Piccolo Caffè (100m)</li>
          <li><strong>Natural Attractions</strong></li>
          <li>Monte Passo della Bossola (22 km)</li>
          <li>Sea/Ocean Riviera delle Palme (49 km)</li>
          <li><strong>Tourist Attractions</strong></li>
          <li>San Grato-Pian del Bal Chair Lift (47 km)</li>
          <li>Pineta (47 km)</li>
          <li>Sapel (47 km)</li>
          <li><strong>Public Transport</strong></li>
          <li>Alba Train (500 m)</li>
          <li>Mussotto Train (2.6 km)</li>
          <li>Bus Station (39 m)</li>
          <li>Taxi Stand (100 m)</li>
          <li><strong>Nearest Airports</strong></li>
          <li>Cuneo - Levaldigi Airport (35 km)</li>
          <li>Turin Airport (62 km)</li>
          <li>Genoa-Sestri Airport (70 km)</li>
          <li>Milan-Malpensa Airport</li>
        </ul>
      </div>
    </div>
  </motion.div>
</section>
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12 uppercase tracking-wide">
      Places to Visit in Alba
    </h2>
    <div className="space-y-10 text-gray-300 text-lg leading-8">
      <div>
        <Image src="/images/atr1.webp" width={600} height={400} objectFit="cover" alt="image" className="rounded-3xl mx-auto mb-7" />
        <h3 className="text-yellow-400 text-2xl font-semibold mb-2">The International Truffle Fair</h3>
        <p>
          This is the most important food and wine event in Piedmont. Every year in October, for almost two months, Alba and its surroundings celebrate the prized Alba White Truffle with a rich program of events including exhibitions, shows, cooking demos, meetings, and tastings.
        </p>
      </div>
      <div>
        <Image src="/images/atr2.webp" width={600} height={400} objectFit="cover" alt="image" className="rounded-3xl mx-auto mb-7" />
        <h3 className="text-yellow-400 text-2xl font-semibold mb-2">The International Truffle Fair</h3>
        <p>
          The truffle, a precious and rare fruit of the earth, is celebrated in many Italian cities at various times of the year. Both white and black truffles are often found at tasting booths in many fall festivals or events early in the year dedicated to this tuber and its related products. If you&apos;re a truffle lover and a foodie, don&apos;t miss these events!
        </p>
      </div>
      <div>
        <Image src="/images/atr3.webp" width={600} height={400} objectFit="cover" alt="image" className="rounded-3xl mx-auto mb-7" />
        <h3 className="text-yellow-400 text-2xl font-semibold mb-2">The International Truffle Fair</h3>
        <p>
          The heart of the Alba Truffle Fair is, as every year, the World Market of the Alba White Truffle—the place to buy truffles from the Monferrato, Roero, and Langhe areas. Inside this space, there&apos;s also the Alba Truffle Show, a large venue for food and cultural events celebrating the excellence of local flavor. On fair weekends, national and international chefs, writers, artists, local chefs, and designers are featured.
        </p>
      </div>
    </div>
  </motion.div>
</section>
      <section className="bg-black py-20 px-6 md:px-20">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-6xl mx-auto space-y-16">
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/n8j3mMyA5xQ "
        title="Alba White Truffle International Fair"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="text-center space-y-4">
        <Image src="/images/barolo1.webp" alt="Barolo" width={600} height={400} className="mx-auto rounded-lg" />
        <h3 className="text-yellow-400 text-xl font-bold">Barolo</h3>
        <p className="text-gray-300">
          Barolo is one of the ancient towns where Nebbiolo grapes can be cultivated, used to produce the famous wine that bears its name. Today, this town is known worldwide for its food, wine, and cultural offerings.
        </p>
      </div>
      <div className="text-center space-y-4">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/KWmqBGPGb8A"
            title="Barolo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-yellow-400 text-xl font-bold">Barolo</h3>
        <p className="text-gray-300">
          One of the highlights is the Barolo Wine Festival, held on the second Sunday of September, attracting attention from tourists, including many international visitors.
        </p>
      </div>
    </div>
  </motion.div>
</section>

      <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Image src="/images/testimonio.webp" alt="Testimonial" width={600} height={400} className="rounded-full shadow-lg" />
          </div>
          <div className="text-gray-300 text-xl leading-relaxed">
            <p className="italic text-white text-2xl mb-4">
              &ldquo;Super friendly welcome. Clean and well equipped apartment. The location is great near the center.&rdquo;
            </p>
            <p className="text-yellow-400 font-semibold">Michel</p>
          </div>
        </motion.div>
      </section>

      {/* Redes Sociales */}
      <section className="bg-yellow-400 text-black py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Follow</h3>
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://instagram.com/sunrise_residence_?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaFacebookF />
          </a>
          <a href="https://www.x.com/AlbaResiden" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaTwitter />
          </a>
          <a href="https://www.tiktok.com/@_sunrise_residence?_t=8hzWij28TIG&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaTiktok />
          </a>
          <a href="https://www.youtube.com/@SunriseResidence0" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaYoutube />
          </a>
        </div>
      </section>
        <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Contacts</h2>
          <form className="space-y-6" action="https://formsubmit.co/rossana46@hotmail.it" method="POST" >
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Mensaje"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </section>
<section className='w-full bg-black py-20 px-6 md:px-20'>
        <div className='max-w-6xl mx-auto'>
          <div className='w-full h-[450px] overflow-hidden rounded-lg shadow-lg'>
            <iframe
              title='Sunrise Residence Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.255472956018!2d8.031658975106744!3d44.69398288449983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b36f357e8a51%3A0xf0bb5e1e3fadc81c!2sCorso%20Langhe%2C%207%2C%2012051%20Alba%20CN%2C%20Italia!5e0!3m2!1ses-419!2sbo!4v1747136383520!5m2!1ses-419!2sbo'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </section>
      {/* Contacto */}
        <footer className='relative z-50 bg-zinc-900 text-gray-300 text-sm py-12 px-6 md:px-20'>
        <div className='max-w-6xl mx-auto flex flex-col items-center gap-6'>
          <nav className='flex gap-6 text-xs uppercase tracking-wide'>
            <a href='#' className='border-b border-yellow-400 text-yellow-400'>Home</a>
            <a href='#host' className='hover:text-yellow-400'>Your Host</a>
            <a href='https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA' className='hover:text-yellow-400'>Facebook</a>
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
            <a href="https://wa.link/d0e69n" className='text-yellow-400 text-3xl z-50'>+39 331 741 5002</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

