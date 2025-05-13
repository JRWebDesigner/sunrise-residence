"use client"
import { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"
import {
   FaWifi, FaParking, FaCity, FaSnowflake,
  FaSmokingBan, FaCouch, FaBath,
  FaDoorClosed, FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaYoutube
} from "react-icons/fa";
import { HiMenu, HiX } from 'react-icons/hi';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <Link href="#"><span className="border-b border-yellow-400 pb-0.5">Home</span></Link>
          <div className="relative group">
            <button className="flex items-center gap-1">Languages ▾</button>
            <div className="absolute hidden group-hover:block bg-black border border-zinc-700 mt-2 p-2 text-sm">
              <Link href="/es"><div className="hover:text-yellow-400">Español</div></Link>
              <Link href="/en"><div className="hover:text-yellow-400">English</div></Link>
              <Link href="/it"><div className="hover:text-yellow-400">Italiano</div></Link>
            </div>
          </div>
          <Link href="/"><span className="hover:text-yellow-400">Your Host</span></Link>
          <Link href="https://facebook.com"><span className="hover:text-yellow-400">Facebook</span></Link>
          <Link href="https://booking.com"><span className="hover:text-yellow-400">Booking.com</span></Link>
          <Link href="https://airbnb.com"><span className="hover:text-yellow-400">Airbnb.com</span></Link>
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

            <Link href="#" onClick={() => setOpen(false)}>Home</Link>
            <div>
              <span>Languages ▾</span>
              <div className="pl-4 mt-2 text-base">
                <Link href="/es" onClick={() => setOpen(false)}>Español</Link><br />
                <Link href="/en" onClick={() => setOpen(false)}>English</Link><br />
                <Link href="/it" onClick={() => setOpen(false)}>Italiano</Link>
              </div>
            </div>
            <Link href="/" onClick={() => setOpen(false)}>Your Host</Link>
            <Link href="https://facebook.com" onClick={() => setOpen(false)}>Facebook</Link>
            <Link href="https://booking.com" onClick={() => setOpen(false)}>Booking.com</Link>
            <Link href="https://airbnb.com" onClick={() => setOpen(false)}>Airbnb.com</Link>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/fachada.webp"
          layout="fill"
          objectFit="cover"
          alt="Fachada Sunrise Residence"
          className="opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">Sunrise Residence</h1>
        </motion.div>
      </section>

      {/* Características */}
      <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Benvenuto</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
Sunrise Residence si tratta di un appartamento recentemente ristrutturato e offre alloggio ad Alba. Questa sistemazione offre una vista sul cortile interno e un balcone. L appartamento dispone di camere climatizzate, parcheggio privato gratuito e connessione Wi-Fi gratuita.
          </p>
        </motion.div>
      </section>
      
      {/* Sobre el Alojamiento */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
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
              L appartamento dispone di terrazza, vista sulla città, area salotto, TV a schermo piatto, angolo cottura completamente attrezzato con lavastoviglie, forno a microonde, tostapane, frigorifero, macchinetta del caffè e bollitore. Il bagno privato è completo di bidet e asciugacapelli.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <Image src="/images/camara.webp" alt="Camera" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Spazi confortevoli</h3>
            <p className="text-gray-300 leading-7 mb-4">
              Camere confortevoli, con ampia illuminazione. Ulteriori servizi in camera includono vino o champagne.
            </p>
            <a href="https://airbnb.com" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">VIENI A TROVARCI SU AIRBNB</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/cocina.webp" alt="Cocina" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Buona Posizione</h3>
            <p className="text-gray-300 leading-7 mb-4">
              Vicino all appartamento potete trovare diversi ristoranti, luoghi di intrattenimento e zone turistiche che vi consigliamo di visitare. L aeroporto più vicino è quello internazionale di Cuneo, a 46 km dall’appartamento.
            </p>
            <a href="https://facebook.com" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">IL NOSTRO FACEBOOK</a>
          </div>
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

      {/* Galería */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-yellow-400 text-center mb-12">Gallería</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['departamento.webp', 'cuarto.webp', 'bano.webp', 'sala.webp', 'comedor.webp'].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={`/images/${img}`}
                width={600}
                height={400}
                objectFit="cover"
                alt={img.split('.')[0]}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reserva */}
      <section className="py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Reserva en Línea</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
            Puede reservar SUNRISE Residence rápidamente y con ganancias en nuestro sitio web. Completar la solicitud tomará un par de minutos, y la confirmación de la reserva se envía a su correo electrónico de inmediato.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Reservar Ahora
          </button>
        </motion.div>
      </section>

      {/* Redes Sociales */}
      <section className="bg-yellow-400 text-black py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Síguenos</h3>
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://instagram.com/sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaTwitter />
          </a>
          <a href="https://tiktok.com/@sunriseresidence" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
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

      {/* Contacto */}
      <footer className="py-6 text-center text-sm text-gray-400">
        <p>Contáctanos: +39 331 741 5002</p>
        <p>&copy; 2025 Sunrise Residence. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

