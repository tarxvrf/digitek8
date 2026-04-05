
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 text-gray-400 px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Digitek8
          </h2>
          <p className="text-sm">
            Membangun website modern, cepat, dan scalable untuk bisnis Anda.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-white font-semibold mb-4">Menu</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Web Development</li>
            <li>Backend API</li>
            <li>UI/UX Design</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Email: email@domain.com</li>
            <li>Phone: +62-85811293229</li>
            <li>Indonesia</li>
          </ul>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebook size={18} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-white"><FaGithub size={18} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={18} /></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Digitek8. All rights reserved.
      </div>

    </footer>
  );
}