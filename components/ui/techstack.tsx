
"use client"

import Image from "next/image"
import { RiSupabaseFill } from "react-icons/ri"

function Techstack() {
  return (
   <>
    {/* TECH STACK MARQUEE */}
          <div className="py-10 relative w-full overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[
                { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
                { name: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
                { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                { name: "Express", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
                { name: "Supabase", img: "https://avatars.githubusercontent.com/u/54469796?v=4" },
              ].map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center min-w-30"
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="h-16 w-16 object-contain mb-2"
                  />
                  <span className="text-sm text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}

              {[
                { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
                { name: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
                { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                { name: "Express", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
                { name: "NodeJS", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
                { name: "Tailwind CSS", img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
                  
              ].map((tech, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex flex-col items-center justify-center min-w-30"
                >
                  <Image
                    src={tech.img}
                    alt={tech.name}
                    width={300}
                    height={300}
                    className="h-16 w-16 object-contain mb-2"
                  />
                  <span className="text-sm text-gray-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .animate-marquee {
              display: flex;
              width: max content;
              animation: marquee 20s linear infinite ;
            }

            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
      
   
   
   </>
  )
}

export default Techstack