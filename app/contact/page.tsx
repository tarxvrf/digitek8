import Title from "@/components/ui/Tittle";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 right-0 w-75 h-75 bg-blue-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-indigo-500 blur-[120px] opacity-20"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
         <Title nama="Lets Work Together"/>

          <p className="text-gray-400 mb-8">
            Punya project atau ide? Saya siap membantu membangun solusi digital terbaik untuk bisnis Anda.
          </p>

          <div className="flex flex-col gap-4 text-gray-300">

            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" />
              <span>digitek8mail@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" />
              <span>+62-85811293229</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <span>Indonesia</span>
            </div>


            <div className="flex gap-4 mt-6">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="glass p-8 rounded-2xl flex flex-col gap-4 z-10">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-white/10 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-white/10 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="bg-transparent border border-white/10 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 py-3 rounded-xl hover:scale-105 transition font-semibold"
          >
            Send Message
          </button>


        </form>
      </div>
    </section>
  );
}