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


export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const images = Array.from({ length: 32 }, (_, i) => `/images/img-${i + 1}.webp`);

  const [open, setOpen] = useState(false);
   return (
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

      {/* Características */}
      <section className="py-20 px-6 md:px-20 bg-zinc-900 flex md:flex-row flex-col justify-center items-center">
         <img 
            src="/images/home.jpg" alt="Terraza" width={360} height={360} className="rounded-full mx-auto" 
            />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Benvenuto</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
Sunrise Residence si tratta di un appartamento recentemente ristrutturato e offre alloggio ad Alba. Questa sistemazione offre una vista sul cortile interno e un balcone. L&apos;appartamento dispone di camere climatizzate, parcheggio privato gratuito e connessione Wi-Fi gratuita.
          </p>
        </motion.div>
      </section>
      
      {/* Sobre el Alojamiento */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800 flex md:flex-row flex-col justify-center items-center gap-10">
      <Image src="/images/sobre.webp" alt="Terraza" width={600} height={400} className="w-[95%] md:w-[50%]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Sunrise Residence</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
La struttura è composta da due moderni appartamenti completamente attrezzati, con capacità per 4 persone ciascuno. Questa comoda posizione centrale è perfetta per coloro che desiderano visitare la città. Gli appartamenti sono stati progettati per offrire il massimo comfort e un soggiorno indimenticabile.
          </p>
        </motion.div>
      </section>
       <section className="bg-black py-20 px-6 md:px-20 grid gap-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/terraza.webp" alt="Terraza" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Noi Offriamo</h3>
            <p className="text-gray-300 leading-7">
              L&apos;appartamento dispone di terrazza, vista sulla città, area salotto, TV a schermo piatto, angolo cottura completamente attrezzato con lavastoviglie, forno a microonde, tostapane, frigorifero, macchinetta del caffè e bollitore. Il bagno privato è completo di bidet e asciugacapelli.
            </p>
          </div>
        </div>

        <div className="flex justify-around flex-col md:flex-row gap-8 items-center md:flex-row-reverse">
          <Image src="/images/camara.webp" alt="Camera" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Spazi confortevoli</h3>
            <p className="text-gray-300 leading-7 mb-4">
              Camere confortevoli, con ampia illuminazione. Ulteriori servizi in camera includono vino o champagne.
            </p>
            <a href="https://www.airbnb.it/users/show/475678499" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">VIENI A TROVARCI SU AIRBNB</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/cocina.webp" alt="Cocina" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Buona Posizione</h3>
            <p className="text-gray-300 leading-7 mb-4">
              Vicino all&apos;appartamento potete trovare diversi ristoranti, luoghi di intrattenimento e zone turistiche che vi consigliamo di visitare. L &apos;aeroporto più vicino è quello internazionale di Cuneo, a 46 km dall’appartamento.
            </p>
            <a href="https://facebook.com" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">IL NOSTRO FACEBOOK</a>
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-16">Servizi</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      { icon: <FaCity />, label: "Vista sulla città" },
      { icon: <FaWifi />, label: "WiFi Gratuito" },
      { icon: <FaCouch />, label: "Terrazza" },
      { icon: <FaParking />, label: "Parcheggio Gratuito" },
      { icon: <FaDoorClosed />, label: "Balcone" },
      { icon: <FaSnowflake />, label: "Aria condizionata" },
      { icon: <FaBath />, label: "Bagno Privato" },
      { icon: <FaSmokingBan />, label: "Camere non fumatori" },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4 bg-zinc-800 rounded-xl p-6 shadow-md"
      >
        <div className="text-yellow-400 text-3xl">{item.icon}</div>
        <p className="text-lg text-gray-200">{item.label}</p>
      </motion.div>
    ))}
  </div>
        </motion.div>
      </section>

     <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Caratteristiche dell&apos;edificio</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg leading-8">
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Cucina</h3>
              <ul className="list-disc ml-6">
                <li>Tavolo da pranzo</li>
                <li>Macchina da caffè</li>
                <li>Prodotti per le pulizie</li>
                <li>Tostapane</li>
                <li>Piano cottura</li>
                <li>Forno</li>
                <li>Utensili da cucina</li>
                <li>Bollitore elettrico</li>
                <li>Lavatrice</li>
                <li>Lavastoviglie</li>
                <li>Forno a microonde</li>
                <li>Frigorifero</li>
                <li>Angolo cottura</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Bagno</h3>
              <ul className="list-disc ml-6">
                <li>Carta igienica</li>
                <li>Bidet</li>
                <li>Vasca o doccia</li>
                <li>Bagno privato</li>
                <li>WC</li>
                <li>Asciugacapelli</li>
                <li>Doccia</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Camera da letto</h3>
              <ul className="list-disc ml-6">
                <li>Matrimoniale e singole</li>
                <li>Credenza</li>
                <li>Comodino</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Area soggiorno</h3>
              <ul className="list-disc ml-6">
                <li>Divano</li>
                <li>Zona soggiorno</li>
                <li>Scrivania</li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Spazi all&apos;aperto</h3>
              <ul className="list-disc ml-6">
                <li>Balcone</li>
                <li>Terrazza</li>
                <li>Parcheggio gratuito</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Media e tecnologia</h3>
              <ul className="list-disc ml-6">
                <li>Servizio streaming (per es. Netflix)</li>
                <li>TV a schermo piatto</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Strutture</h3>
              <ul className="list-disc ml-6">
                <li>Presa elettrica vicino al letto</li>
                <li>Stendibiancheria</li>
                <li>Stand appendiabiti</li>
                <li>Parquet o pavimento in legno</li>
                <li>Ferro e asse da stiro</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Protezione e sicurezza</h3>
              <ul className="list-disc ml-6">
                <li>Estintori</li>
                <li>Telecamere a circuito chiuso all&apos;esterno della struttura</li>
                <li>Telecamere a circuito chiuso nelle zone in comune</li>
                <li>Accesso con chiavi</li>
                <li>Sicurezza 24 ore su 24</li>
              </ul>Michel
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Dintorni della struttura</h3>
              <ul className="list-disc ml-6">
                <li><strong>Ristoranti e caffetterie</strong></li>
                <li>Zenzero & Caffè (50m)</li>
                <li>Hope&apos;s Food (100m)</li>
                <li>Piccolo Caffè (100m)</li>
                <li><strong>Bellezze della natura</strong></li>
                <li>Monte Passo della Bossola (22 km)</li>
                <li>Mare/oceano Riviera delle Palme (49 km)</li>
                <li><strong>Turismo</strong></li>
                <li>San Grato-Pian del Bal Chair Lift (47 km)</li>
                <li>Pineta (47km)</li>
                <li>Sapel (47 km)</li>
                <li><strong>Mezzi pubblici</strong></li>
                <li>Treno Alba (500 m)</li>
                <li>Treno Mussotto (2,6 km)</li>
                <li>Stazione degli autobus (39m)</li>
                <li>Posteggio dei taxi (100m)</li>
                <li><strong>Aeroporti più vicini</strong></li>
                <li>Aeroporto di Cuneo - Levaldigi (35 km)</li>
                <li>Aeroporto di Turín (62 km)</li>
                <li>Aeroporto di Genova-Sestri (70 km)</li>
                <li>Aeroporto di Malpensa-Milano</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12 uppercase tracking-wide">
            Places to Visit in Alba
          </h2>
          <div className="space-y-10 text-gray-300 text-lg leading-8">
            <div>
              <Image
                src={`/images/atr1.webp`}
                width={600}
                height={400}
                objectFit="cover"
                alt='imagen'
                className="rounded-3xl mx-auto mb-7"
              />
              <h3 className="text-yellow-400 text-2xl font-semibold mb-2">The International Truffle Fair</h3>
              <p>
                È la manifestazione enogastronomica più importante del Piemonte. Ogni anno nel mese di ottobre, per quasi due mesi, Alba e i suoi dintorni celebrano il pregiato Tarturo d&apos;alba con un ricchissimo programma di eventi tra mostre, esposizioni, cooking show, incontri e degustazioni.
              </p>
            </div>
            <div>
                <Image
                    src={`/images/atr2.webp`}
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt='imagen'
                    className="rounded-3xl mx-auto  mb-7"
                  />
              <h3 className="text-yellow-400 text-2xl font-semibold mb-2">The International Truffle Fair</h3>
              <p>
                Il tartufo, frutto prezioso e raro della terra, viene celebrato in molte città italiane in diversi periodi dell&apos;anno. Il tartufo bianco e nero sono spesso presenti sui banchi di degustazione delle tante manifestazioni autunnali o nei primi mesi dell&apos;anno dedicate a loro e agli altri prodotti legati a questo tubero. Se sei un amante del tartufo e una buona forchetta, non perderti questi eventi!
              </p>
            </div>
            <div>
                <Image
                    src={`/images/atr3.webp`}
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt='imagen'
                    className="rounded-3xl mx-auto mb-7"
                  />
              <h3 className="text-yellow-400 text-2xl font-semibold mb-2">The International Truffle Fair</h3>
              <p>
                Il cuore della Fiera del Tartufo d&apos;Alba è, come ogni anno, il Mercato Mondiale del Tartufo Bianco d&apos;Alba, il luogo dove acquistare i tartufi del territorio del Monferrato, del Roreo e delle Langhe. All&apos;interno di quest&apos;area, inoltre, è presente anche lo spazio dedicato alla cucina e denominato Alba Truffle Show. Si tratta di un grande contenitore di eventi gastronomici e culturali che celebrano l&apos;eccellenza del sapore prodotto. Nei weekend della fiera saranno presenti chef nazionali e internazionali, scrittori, artisti, chef locali e designer.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="bg-black py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto space-y-16"
        >
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0dZ9ePGGjtc"
              title="Fiera Internazionale del Tartufo Bianco d&apos;Alba"
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
                Barolo è uno degli antichi comuni nel cui territorio si può coltivare l’uva Nebbiolo, utilizzata per produrre il famoso vino da cui il vino prende il nome. Oggi questa cittadina è conosciuta in tutto il mondo per la sua offerta enogastronomica e culturale.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VmVKNWbnt6g"
                  title="Video Barolo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-yellow-400 text-xl font-bold">Barolo</h3>
              <p className="text-gray-300">
                Uno di questi è il “Barolo Wine Festival”, che si celebra la seconda domenica di settembre e attira l’attenzione dei turisti, anche internazionali.
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
              &ldquo;Accoglienza super cordiale. Appartamento pulito e ben attrezzato. La posizione è ottima vicino al centro.&rdquo;
            </p>
            <p className="text-yellow-400 font-semibold">Michel (Svizzera)</p>
          </div>
        </motion.div>
      </section>

      {/* Redes Sociales */}
      <section className="bg-yellow-400 text-black py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Síguenos</h3>
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://instagram.com/sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaInstagram />
          </a>
          <a href="https://instagram.com/sunrise_residence_?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaTwitter />
          </a>
          <a href="https://www.tiktok.com/@_sunrise_residence?_t=8hzWij28TIG&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaTiktok />
          </a>
          <a href="https://youtube.com/sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
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
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Contáctanos</h2>
          <form className="space-y-6">
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
  );
}

