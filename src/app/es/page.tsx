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


export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const images = Array.from({ length: 32 }, (_, i) => `/images/img-${i + 1}.webp`);

  const [open, setOpen] = useState(false);
   return(
    <>
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
              <Link href="/"><div className="hover:text-yellow-400">Italiano</div></Link>
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
                <Link href="/" onClick={() => setOpen(false)}>Italiano</Link>
              </div>
            </div>
            <Link href="/host" onClick={() => setOpen(false)}>Your Host</Link>
            <Link href="https://www.facebook.com/profile.php?id=61553588529798" onClick={() => setOpen(false)}>Facebook</Link>
            <Link href="https://www.booking.com/hotel/it/sunrise-veronica.html?aid=964694&app_hotel_id=10680979&checkin=2023-11-15&checkout=2023-11-16&from_sn=android&group_adults=3&group_children=0&label=hotel_details-5WyBiO%401700081590&no_rooms=1&req_adults=3&req_children=0&room1=A%2CA%2CA&lang=en-us&soz=1&lang_changed=1" onClick={() => setOpen(false)}>Booking.com</Link>
            <Link href="https://www.airbnb.it/users/show/475678499" onClick={() => setOpen(false)}>Airbnb.com</Link>
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
            src="/images/home.jpg" alt="Terraza" width={360} height={360} className="rounded-full mx-auto" 
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">¡Bienvenido a Sunrise Residence!</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
              Nos complace darte la bienvenida a Sunrise Residence, el punto de partida ideal para tu estadía en Alba. Ubicado en una zona céntrica,  este apartamento recientemente renovado ofrece un equilibrio perfecto entre confort, conveniencia y estilo. Ya sea que estés aquí por turismo o trabajo, en Sunrise Residence encontrarás todo lo que necesitas para sentirte como en casa.
            </p>
          </motion.div>
        </section>

        <section className="py-20 px-6 md:px-20 bg-zinc-800 flex md:flex-row flex-col justify-center items-center gap-10">
          <Image src="/images/sobre.webp" alt="Terraza" width={600} height={400} className="w-[95%] md:w-[50%]" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Descripción de Sunrise Residence</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
              Sunrise Residence es un apartamento moderno y espacioso, diseñado para ofrecer una experiencia de estancia cómoda y relajante. Con habitaciones amplias, decoradas con buen gusto.
            </p>
          </motion.div>
        </section>
        
        
       <section className="bg-black py-20 px-6 md:px-20 grid gap-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="/images/terraza.webp" alt="Terraza" width={600} height={400} className="rounded-lg" />
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">Lo que ofrecemos</h3>
              <p className="text-gray-300 leading-7">
                - Ubicación céntrica: A pocos pasos de las principales atracciones turísticas, restaurantes y tiendas.<br />
                - Habitaciones confortables: Habitaciones climatizadas con Wi-Fi gratuito y cocina completamente equipada.<br />
                - Servicios incluidos: Estacionamiento privado gratuito, lavandería, ropa de cama y toallas proporcionadas.<br />
                - Excelente relación calidad-precio: Una estancia cómoda y asequible sin comprometer la calidad.
              </p>
            </div>
          </div>

          <div className="flex justify-around flex-col md:flex-row gap-8 items-center md:flex-row-reverse">
            <Image src="/images/camara.webp" alt="Habitación" width={600} height={400} className="rounded-lg" />
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">Una estancia confortable a precios competitivos</h3>
              <p className="text-gray-300 leading-7 mb-4">
                Ya sea que viajes solo, en pareja o en familia, Sunrise Residence representa una elección ideal para quienes buscan un alojamiento práctico y económico. Con limpieza impecable, espacios bien diseñados y una ubicación estratégica, te garantizamos una estadía sin estrés, descubriendo Alba.
              </p>
              <a href="https://www.airbnb.it/users/show/475678499" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">VEN A VISITARNOS EN AIRBNB</a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image src="/images/cocina.webp" alt="Cocina" width={600} height={400} className="rounded-lg" />
            <div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">¡Reserva tu estancia ahora!</h3>
              <p className="text-gray-300 leading-7 mb-4">
                ¡No esperes más! Reserva tu estadía en Sunrise Residence y vive una experiencia única, marcada por la comodidad y el ahorro.
              </p>
              <a href="https://www.facebook.com/profile.php?id=61553588529798" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">NUESTRA PÁGINA DE FACEBOOK</a>
            </div>
          </div>
        </section>
       {/* Galería */}
          <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-yellow-400 text-center mb-12">Galeria</h2>

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
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-16">Sevicios</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      { icon: <FaCity />, label: "Vista de la ciudad" },
      { icon: <FaWifi />, label: "Wi-Fi gratis" },
      { icon: <FaCouch />, label: "Terraza" },
      { icon: <FaParking />, label: "Aparcamiento gratuito" },
      { icon: <FaDoorClosed />, label: "Balcón"},
      { icon: <FaSnowflake />, label: "Aire acondicionado" },
      { icon: <FaBath />, label: "Baño privado" },
      { icon: <FaSmokingBan />, label: "Habitaciones para no fumadores" },
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
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Características del edificio</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg leading-8">
            <div>
  <h3 className="text-yellow-400 font-semibold mb-2">Cocina</h3>
  <ul className="list-disc ml-6">
    <li>Mesa de comedor</li>
    <li>Cafetera</li>
    <li>Productos de limpieza</li>
    <li>Tostadora</li>
    <li>Placa de cocina</li>
    <li>Horno</li>
    <li>Utensilios de cocina</li>
    <li>Hervidor eléctrico</li>
    <li>Lavadora</li>
    <li>Lavavajillas</li>
    <li>Microondas</li>
    <li>Refrigerador</li>
    <li>Cocina americana</li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Baño</h3>
  <ul className="list-disc ml-6">
    <li>Papel higiénico</li>
    <li>Bidet</li>
    <li>Bañera o ducha </li>
    <li>Baño privado</li>
    <li>WC</li>
    <li>Secador de pelo</li>
    <li>Ducha</li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Dormitorio</h3>
  <ul className="list-disc ml-6">
    <li>Camas dobles e individuales</li>
    <li>Aparador </li>
    <li>Mesita de noche</li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Zona de estar</h3>
  <ul className="list-disc ml-6">
    <li>Sofá</li>
    <li>Zona de estar</li>
    <li>Escritorio</li>
  </ul>
</div>

<div>
  <h3 className="text-yellow-400 font-semibold mb-2">Espacios al aire libre</h3>
  <ul className="list-disc ml-6">
    <li>Balcón </li>
    <li>Terraza </li>
    <li>Aparcamiento gratuito </li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Medios y tecnología </h3>
  <ul className="list-disc ml-6">
    <li>Servicio de streaming (ej. Netflix)</li>
    <li>Televisor de pantalla plana</li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Instalaciones</h3>
  <ul className="list-disc ml-6">
    <li>Enchufe cerca de la cama </li>
    <li>Tendedero</li>
    <li>Perchero</li>
    <li>Suelo de parquet o madera</li>
    <li>Plancha y tabla de planchar</li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Seguridad</h3>
  <ul className="list-disc ml-6">
    <li>Extintores </li>
    <li>Cámaras de seguridad en el exterior </li>
    <li>Cámaras de seguridad en zonas comunes</li>
    <li>Acceso con llaves </li>
    <li>Seguridad 24 horas</li>
  </ul>

  <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Alrededores</h3>
  <ul className="list-disc ml-6">
    <li><strong>Restaurantes y cafeterías </strong></li>
    <li>Zenzero & Café (50 m)</li>
    <li>Hope's Food (100 m)</li>
    <li>Piccolo Caffè (100 m)</li>

    <li><strong>Belleza natural </strong></li>
    <li>Monte Passo della Bossola (22 km)</li>
    <li>Mar</li>

    <li><strong>Turismo </strong></li>
    <li>Telesilla San Grato-Pian del Bal (47 km)</li>
    <li>Pinar </li>
    <li>Sapel (47 km)</li>

    <li><strong>Transporte público </strong></li>
    <li>Tren Alba (500 m)</li>
    <li>Tren Mussotto (2,6 km)</li>
    <li>Estación de autobuses (39 m)</li>
    <li>Parada de taxis (100 m) </li>

    <li><strong>Aeropuertos cercanos </strong></li>
    <li>Aeropuerto de Cuneo - Levaldigi (35 km)</li>
    <li>Aeropuerto de Turín (62 km) </li>
    <li>Aeropuerto de Génova-Sestri (70 km)</li>
    <li>Aeropuerto de Milán-Malpensa </li>
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
    Lugares para Visitar en Alba
  </h2>

  <div className="space-y-10 text-gray-300 text-lg leading-8">
    <div>
      <Image
        src={`/images/atr1.webp`}
        width={600}
        height={400}
        objectFit="cover"
        alt="imagen"
        className="rounded-3xl mx-auto mb-7"
      />
      <h3 className="text-yellow-400 text-2xl font-semibold mb-2">
        La Feria Internacional de la Trufa
      </h3>
      <p>
        Es el evento enogastronómico más importante del Piamonte. Cada año, en octubre, durante casi dos meses, Alba y sus alrededores celebran la preciada Trufa Blanca de Alba con un programa repleto de eventos como exposiciones, muestras, shows de cocina, encuentros y degustaciones.
      </p>
    </div>

    <div>
      <Image
        src={`/images/atr2.webp`}
        width={600}
        height={400}
        objectFit="cover"
        alt="imagen"
        className="rounded-3xl mx-auto mb-7"
      />
      <h3 className="text-yellow-400 text-2xl font-semibold mb-2">
        La Feria Internacional de la Trufa
      </h3>
      <p>
        La trufa, un tesoro raro de la tierra, es celebrada en muchas ciudades italianas en distintos momentos del año. Las trufas blancas y negras suelen estar presentes en los stands de degustación de numerosos eventos otoñales o de principios de año dedicados a ellas y a otros productos relacionados con este tubérculo. ¡Si eres amante de la trufa y de la buena comida, no te pierdas estos eventos!
      </p>
    </div>

    <div>
      <Image
        src={`/images/atr3.webp`}
        width={600}
        height={400}
        objectFit="cover"
        alt="imagen"
        className="rounded-3xl mx-auto mb-7"
      />
      <h3 className="text-yellow-400 text-2xl font-semibold mb-2">
        La Feria Internacional de la Trufa
      </h3>
      <p>
        El corazón de la Feria de la Trufa de Alba es, como cada año, el Mercado Mundial de la Trufa Blanca de Alba, el lugar donde comprar trufas del Monferrato, Roero y Langhe. Dentro de esta área también se encuentra el espacio culinario llamado Alba Truffle Show, un gran contenedor de eventos gastronómicos y culturales que celebran la excelencia del sabor local. Durante los fines de semana del evento estarán presentes chefs nacionales e internacionales, escritores, artistas, chefs locales y diseñadores.
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
                Barolo es uno de los antiguos municipios en cuyo territorio es posible cultivar la uva Nebbiolo, utilizada para producir el famoso vino del cual el vino toma el nombre. Hoy en día este pueblo es conocido en todo el mundo por su oferta gastronómica, vinícola y cultural.
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
                Una de ellas es la “Fiesta del Vino Barolo”, que se celebra el segundo domingo de septiembre y atrae la atención de turistas, incluidos los internacionales.
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
              &ldquo;Bienvenida súper amable. Apartamento limpio y bien equipado. La ubicación es excelente cerca del centro.&rdquo;
            </p>
            <p className="text-yellow-400 font-semibold">Michel (Suizo)</p>
          </div>
        </motion.div>
      </section>

      {/* Redes Sociales */}
      <section className="bg-yellow-400 text-black py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Síguenos</h3>
        <div className="flex justify-center gap-10 text-3xl">
          <a href="https://instagram.com/sunrise_residence_?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553588529798" target="_blank" rel="noopener noreferrer" className="hover:text-black text-zinc-800">
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
            <a href="https://wa.link/d0e69n" className='text-yellow-400'>+39 331 741 5002</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
