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


export default function HomeFr() {
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
          <Image src="/images/logo.webp" alt="Logo" width={200} height={200} className="w-48" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/"><span className="pb-0.5">Accueil</span></Link>
          <div className="relative group">
            <button className="flex items-center gap-1">Langues ▾</button>
            <div className="absolute hidden group-hover:block bg-black border border-zinc-700 mt-2 p-2 text-sm">
              <Link href="/es"><div className="hover:text-yellow-400">Español</div></Link>
              <Link href="/en"><div className="hover:text-yellow-400">English</div></Link>
              <Link href="/"><div className="hover:text-yellow-400">Italiano</div></Link>
              <Link href="/fr"><div className="hover:text-yellow-400">Frances</div></Link>
            </div>
          </div>
          <Link href="/host"><span className="hover:text-yellow-400">Votre Hôte</span></Link>
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
            className="fixed top-0 left-0 w-full h-full bg-zinc-900 text-white z-50 px-10 py-8 flex flex-col gap-6 text-xl font-bold uppercase"
          >
            <button className="self-end text-3xl mb-6" onClick={() => setOpen(false)}>
              <HiX />
            </button>

            <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
            <div>
              <span>Langues ▾</span>
              <div className="pl-4 mt-2 text-base">
                <Link href="/es" onClick={() => setOpen(false)}>Español</Link><br />
                <Link href="/en" onClick={() => setOpen(false)}>English</Link><br />
                <Link href="/" onClick={() => setOpen(false)}>Italiano</Link>
                 <br />
                 <Link href="/fr" onClick={() => setOpen(false)}>Frances</Link>
              </div>
            </div>
            <Link href="/host" onClick={() => setOpen(false)}>Votre Hôte</Link>
            <Link href="https://www.facebook.com/profile.php?id=61553588529798" onClick={() => setOpen(false)}>Facebook</Link>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Section Hero */}
      <section className="relative h-[40dvh] md:h-[100dvh] flex items-center justify-center overflow-hidden">
  <Image
    src="/images/sobre.webp"
    fill
    style={{ objectPosition: 'center' }}
    alt="Façade Sunrise Residence"
    className="opacity-60 md:object-cover object-contain"
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

      {/* Caractéristiques */}
      <section className="py-20 px-6 md:px-20 bg-zinc-900 flex md:flex-row flex-col justify-center items-center">
         <img 
            src="/images/home.jpg" alt="Terrasse" width={360} height={360} className="rounded-full mx-auto" 
            />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Bienvenue à Sunrise Residence!</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
Nous sommes ravis de vous accueillir à Sunrise Residence, le point de départ idéal pour votre séjour à Alba. Situé dans un quartier central, cet appartement récemment rénové offre un équilibre parfait entre confort, commodité et style. Que vous soyez ici pour le tourisme ou le travail, vous trouverez à Sunrise Residence tout ce dont vous avez besoin pour vous sentir comme chez vous.
          </p>
        </motion.div>
      </section>
      
      {/* À propos du logement */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800 flex md:flex-row flex-col justify-center items-center gap-10">
      <Image src="/images/sobre.webp" alt="Terrasse" width={600} height={400} className="w-[95%] md:w-[50%]" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Description de Sunrise Residence</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
Sunrise Residence est un appartement moderne et spacieux, conçu pour offrir une expérience de séjour confortable et relaxante. Avec des chambres spacieuses, meublées avec goût.
          </p>
        </motion.div>
      </section>
       <section className="bg-black py-20 px-6 md:px-20 grid gap-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/terraza.webp" alt="Terrasse" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Ce que nous offrons</h3>
            <p className="text-gray-300 leading-7">
              - Emplacement central : À quelques pas des principales attractions touristiques, restaurants et magasins.
                   <br />
                - Chambres confortables : Chambres climatisées avec WiFi gratuit et une cuisine entièrement équipée.
<br />
                - Services inclus : Parking privé gratuit, buanderie et linge de lit et de toilette fourni.
<br />
                - Excellent rapport qualité-prix : Un séjour confortable et économique sans compromis sur la qualité.
            </p>
          </div>
        </div>

        <div className="flex justify-around flex-col md:flex-row gap-8 items-center md:flex-row-reverse">
          <Image src="/images/camara.webp" alt="Chambre" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Un séjour confortable à des prix compétitifs</h3>
            <p className="text-gray-300 leading-7 mb-4">
              Que vous voyagiez seul, en couple ou en famille, Sunrise Residence est un choix idéal pour ceux qui cherchent un hébergement pratique et économique. Avec une propreté impeccable, des espaces bien conçus et un emplacement stratégique, nous vous garantissons un séjour sans stress, pour découvrir Alba.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image src="/images/cocina.webp" alt="Cuisine" width={600} height={400} className="rounded-lg" />
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">Réservez votre séjour maintenant !</h3>
            <p className="text-gray-300 leading-7 mb-4">
            N&lsquo;attendez pas ! Réservez votre séjour à Sunrise Residence et vivez une expérience unique, alliant confort et économies.
            </p>
            <a href="https://www.facebook.com/profile.php?id=61553588529798" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">NOTRE FACEBOOK</a>
          </div>
        </div>
      </section>
       {/* Galerie */}
          <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-yellow-400 text-center mb-12">Galerie</h2>

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
              <img src={src} alt={`Image ${i + 1}`} className="w-full h-96 object-cover rounded-lg" />
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
              <img src={src} alt={`Miniature ${i + 1}`} className="w-full h-20 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
      {/* Installations stylisées */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-16">Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      { icon: <FaCity />, label: "Vue sur la ville" },
      { icon: <FaWifi />, label: "WiFi Gratuit" },
      { icon: <FaCouch />, label: "Terrasse" },
      { icon: <FaParking />, label: "Parking Gratuit" },
      { icon: <FaDoorClosed />, label: "Balcon" },
      { icon: <FaSnowflake />, label: "Climatisation" },
      { icon: <FaBath />, label: "Salle de bain privée" },
      { icon: <FaSmokingBan />, label: "Chambres non-fumeurs" },
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
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Caractéristiques du bâtiment</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg leading-8">
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Cuisine</h3>
              <ul className="list-disc ml-6">
                <li>Table à manger</li>
                <li>Machine à café</li>
                <li>Produits de nettoyage</li>
                <li>Grille-pain</li>
                <li>Plaque de cuisson</li>
                <li>Four</li>
                <li>Ustensiles de cuisine</li>
                <li>Bouilloire électrique</li>
                <li>Lave-linge</li>
                <li>Lave-vaisselle</li>
                <li>Four à micro-ondes</li>
                <li>Réfrigérateur</li>
                <li>Coin cuisine</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Salle de bain</h3>
              <ul className="list-disc ml-6">
                <li>Papier toilette</li>
                <li>Bidet</li>
                <li>Baignoire ou douche</li>
                <li>Salle de bain privée</li>
                <li>WC</li>
                <li>Sèche-cheveux</li>
                <li>Douche</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Chambre</h3>
              <ul className="list-disc ml-6">
                <li>Lits doubles et simples</li>
                <li>Commode</li>
                <li>Table de chevet</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Espace salon</h3>
              <ul className="list-disc ml-6">
                <li>Canapé</li>
                <li>Espace détente</li>
                <li>Bureau</li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-400 font-semibold mb-2">Espaces extérieurs</h3>
              <ul className="list-disc ml-6">
                <li>Balcon</li>
                <li>Terrasse</li>
                <li>Parking gratuit</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Médias et technologie</h3>
              <ul className="list-disc ml-6">
                <li>Service de streaming (ex. Netflix)</li>
                <li>Télévision à écran plat</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Équipements</h3>
              <ul className="list-disc ml-6">
                <li>Prise électrique près du lit</li>
                <li>Séchoir à linge</li>
                <li>Porte-manteau</li>
                <li>Parquet ou sol en bois</li>
                <li>Fer et planche à repasser</li>
              </ul>
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Sécurité et protection</h3>
              <ul className="list-disc ml-6">
                <li>Extincteurs</li>
                <li>Caméras de surveillance à l&lsquo;extérieur du bâtiment</li>
                <li>Caméras de surveillance dans les parties communes</li>
                <li>Accès par clé</li>
                <li>Sécurité 24h/24</li>
              </ul>Michel
              <h3 className="text-yellow-400 font-semibold mt-6 mb-2">Environnement</h3>
              <ul className="list-disc ml-6">
                <li><strong>Restaurants et cafés</strong></li>
                <li>Zenzero & Caffè (50m)</li>
                <li>Hopes Food (100m)</li>
                <li>Piccolo Caffè (100m)</li>
                <li><strong>Beautés naturelles</strong></li>
                <li>Monte Passo della Bossola (22 km)</li>
                <li>Mer/océan Riviera delle Palme (49 km)</li>
                <li><strong>Tourisme</strong></li>
                <li>San Grato-Pian del Bal Chair Lift (47 km)</li>
                <li>Pineta (47km)</li>
                <li>Sapel (47 km)</li>
                <li><strong>Transports publics</strong></li>
                <li>Gare d&lsquo;Alba (500 m)</li>
                <li>Gare de Mussotto (2,6 km)</li>
                <li>Station de bus (39m)</li>
                <li>Station de taxis (100m)</li>
                <li><strong>Aéroports les plus proches</strong></li>
                <li>Aéroport de Cuneo - Levaldigi (35 km)</li>
                <li>Aéroport de Turin (62 km)</li>
                <li>Aéroport de Gênes-Sestri (70 km)</li>
                <li>Aéroport de Malpensa-Milan</li>
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
            Lieux à visiter à Alba
          </h2>
          <div className="space-y-10 text-gray-300 text-lg leading-8">
            <div>
              <Image
                src={`/images/atr1.webp`}
                width={600}
                height={400}
                objectFit="cover"
                alt='image'
                className="rounded-3xl mx-auto mb-7"
              />
              <h3 className="text-yellow-400 text-2xl font-semibold mb-2">La Foire Internationale de la Truffe</h3>
              <p>
                C&lsquo;est la manifestation gastronomique la plus importante du Piémont. Chaque année au mois d&lsquo;octobre, pendant près de deux mois, Alba et ses environs célèbrent le précieux Tartufo d&lsquo;Alba avec un programme très riche d&lsquo;événements entre expositions, démonstrations culinaires, rencontres et dégustations.
              </p>
            </div>
            <div>
                <Image
                    src={`/images/atr2.webp`}
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt='image'
                    className="rounded-3xl mx-auto  mb-7"
                  />
              <h3 className="text-yellow-400 text-2xl font-semibold mb-2">La Foire Internationale de la Truffe</h3>
              <p>
                La truffe, fruit précieux et rare de la terre, est célébrée dans de nombreuses villes italiennes à différentes périodes de l&lsquo;année. Les truffes blanches et noires sont souvent présentes sur les stands de dégustation des nombreuses manifestations automnales ou dans les premiers mois de l&lsquo;année qui leur sont consacrées ainsi qu&lsquo;aux autres produits liés à ce tubercule. Si vous êtes un amateur de truffes et un bon vivant, ne manquez pas ces événements !
              </p>
            </div>
            <div>
                <Image
                    src={`/images/atr3.webp`}
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt='image'
                    className="rounded-3xl mx-auto mb-7"
                  />
              <h3 className="text-yellow-400 text-2xl font-semibold mb-2">La Foire Internationale de la Truffe</h3>
              <p>
                Le cœur de la Foire de la Truffe d&lsquo;Alba est, comme chaque année, le Marché Mondial de la Truffe Blanche d&lsquo;Alba, le lieu où acheter les truffes du territoire du Montferrat, du Roero et des Langhe. Dans cet espace, il y a également un espace dédié à la cuisine appelé Alba Truffle Show. Il s&lsquo;agit d&lsquo;un grand contenant d&lsquo;événements gastronomiques et culturels qui célèbrent l&lsquo;excellence du produit. Les week-ends de la foire, des chefs nationaux et internationaux, des écrivains, des artistes, des chefs locaux et des designers seront présents.
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
              src="https://www.youtube.com/embed/n8j3mMyA5xQ"
              title="Foire Internationale de la Truffe Blanche d'Alba"
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
                Barolo est l&lsquo;une des anciennes communes dont le territoire permet de cultiver le raisin Nebbiolo, utilisé pour produire le fameux vin qui donne son nom à la ville. Aujourd&lsquo;hui, cette petite ville est connue dans le monde entier pour son offre gastronomique et culturelle.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/KWmqBGPGb8A"
                  title="Vidéo Barolo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-yellow-400 text-xl font-bold">Barolo</h3>
              <p className="text-gray-300">
                L&lsquo;un d&lsquo;eux est le Barolo Wine Festival, qui a lieu le deuxième dimanche de septembre et attire l&lsquo;attention des touristes, y compris internationaux.
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
            <Image src="/images/testimonio.webp" alt="Témoignage" width={600} height={400} className="rounded-full shadow-lg" />
          </div>
          <div className="text-gray-300 text-xl leading-relaxed">
            <p className="italic text-white text-2xl mb-4">
              Accueil très chaleureux. Appartement propre et bien équipé. L&lsquo;emplacement est excellent, proche du centres
            </p>
            <p className="text-yellow-400 font-semibold">Michel (Suisse)</p>
          </div>
        </motion.div>
      </section>

      {/* Réseaux Sociaux */}
      <section className="bg-yellow-400 text-black py-10 text-center">
        <h3 className="text-2xl font-bold mb-6">Suivez-nous</h3>
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
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Contactez-nous</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nom"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:scale-105 transition"
            >
              Envoyer le message
            </button>
          </form>
        </motion.div>
      </section>
<section className='w-full bg-black py-20 px-6 md:px-20'>
        <div className='max-w-6xl mx-auto'>
          <div className='w-full h-[450px] overflow-hidden rounded-lg shadow-lg'>
            <iframe
              title='Localisation de Sunrise Residence'
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
      {/* Contact */}
        <footer className='relative z-50 bg-zinc-900 text-gray-300 text-sm py-12 px-6 md:px-20'>
        <div className='max-w-6xl mx-auto flex flex-col items-center gap-6'>
          <nav className='flex gap-6 text-xs uppercase tracking-wide'>
            <a href='#' className='border-b border-yellow-400 text-yellow-400'>Accueil</a>
            <a href='#host' className='hover:text-yellow-400'>Votre Hôte</a>
            <a href='https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA' className='hover:text-yellow-400'>Facebook</a>
          </nav>
          <div className='flex gap-6 text-xl'>
            <a href='https://www.facebook.com/profile.php?id=61553588529798&locale=es_LA'><FaFacebookF /></a>
            <a href='https://www.instagram.com/sunrise_residence_'><FaInstagram /></a>
            <a href='https://www.tiktok.com/@_sunrise_residence?_t=8hzWij28TIG&_r=1'><FaTiktok /></a>
            <a href='https://www.x.com/AlbaResiden'><FaTwitter /></a>
            <a href='https://www.youtube.com/@SunriseResidence0'><FaYoutube /></a>
          </div>
          <div className='text-center'>
            <h4 className='font-semibold text-white'>Sunrise Residence</h4>
            <p>Corso Langhe 1, 12051 Alba Cuneo, Italie</p>
            <a href="https://wa.link/d0e69n" className='relative z-50 text-yellow-400 text-3xl'>+39 331 741 5002</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
