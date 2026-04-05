import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Backend API",
    desc: "API scalable & aman",
    img: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2VuZCUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Web Development",
    desc: "AWebsite Modern Scalable dan Cepat",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZSUyMGRldmVsb3BtZW50JTIwbmV4dGpzfGVufDB8fDB8fHww"
  },
  {
    title: "UI/UX Design",
    desc: "Design clean & user friendly",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWl1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="glass group rounded-2xl overflow-hidden hover:scale-105 transition bg-gray-900"
          >
            <Link href={"services/1"}>
            <Image src={s.img} 
            className="h-52 w-full object-cover group-hover:scale-110 transition duration-500 " 
            width={1000} height={1000} loading="eager" 
            alt={""}
            /></Link>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}