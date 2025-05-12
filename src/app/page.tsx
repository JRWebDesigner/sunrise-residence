"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaWifi, FaParking, FaGlassCheers, FaKey, FaFireExtinguisher, FaSnowflake,
  FaSmokingBan, FaLock, FaVideo, FaUserShield, FaUtensils, FaCouch,
  FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaYoutube
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
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
          <p className="mt-4 text-xl text-white">Tu espacio ideal en el corazón del paraíso</p>
        </motion.div>
      </section>

      {/* Características */}
      <section className="py-20 px-6 md:px-20 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Características</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Si desea someterse a un cambio de imagen y regresar a casa como una nueva persona, visite el salón de belleza que opera en el lugar. Los propietarios de automóviles tienen estacionamientos. Hay una terraza de recreación. El alojamiento tiene acceso gratuito a Internet. Un servicio de desayuno en la cama está incluido en la lista de otros servicios. Aquí puede reservar habitaciones para no fumadores. Hay servicios de un masajista que puede ayudarle a reducir el estrés y la fatiga. Puede utilizar este tipo de tarjetas de pago: Visa, Mastercard, Maestro.
          </p>
          <p className="mt-6 text-lg text-gray-400 text-center">El personal del alojamiento habla Italiano, Francés, Español e Inglés.</p>
        </motion.div>
      </section>

      {/* Instalaciones estilizadas */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-16">Instalaciones</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: <FaWifi />, label: "WiFi en todas las áreas" },
              { icon: <FaParking />, label: "Parking privado y gratuito" },
              { icon: <FaGlassCheers />, label: "Vino / champagne" },
              { icon: <FaUtensils />, label: "Desayuno en la habitación" },
              { icon: <FaKey />, label: "Check-in privado" },
              { icon: <FaCouch />, label: "Terraza de recreación" },
              { icon: <FaVideo />, label: "CCTV en áreas comunes" },
              { icon: <FaFireExtinguisher />, label: "Extintores" },
              { icon: <FaSnowflake />, label: "Aire acondicionado" },
              { icon: <FaSmokingBan />, label: "Espacio libre de humo" },
              { icon: <FaUserShield />, label: "Solo para adultos" },
              { icon: <FaLock />, label: "Acceso con llave y seguridad 24h" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 bg-zinc-900 rounded-xl p-6 shadow-md"
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
        <h2 className="text-3xl md:text-5xl font-semibold text-yellow-400 text-center mb-12">Galería</h2>
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

      {/* Sobre el Alojamiento */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">Sobre el Alojamiento</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Ofrecemos un cómodo apartamento equipado con aire acondicionado, secador de pelo, cocina americana, nevera, escritorio, utensilios de planchado y microondas. Disfrutará de una vista de la ciudad desde su ventana.
          </p>
        </motion.div>
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

