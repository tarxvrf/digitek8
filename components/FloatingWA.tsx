import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  const phoneNumber = "085693397146"; // ganti nomor kamu
  const message = "Halo, saya tertarik dengan jasa Anda";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <MessageCircle size={20} />
      <span className="hidden md:block">Chat</span>
    </a>
  );
}