import { useState } from "react";
import { motion } from "motion/react";
import Lightbox from "./Lightbox";

const notes = [
  "/img/Visual Notes/1.png",
  "/img/Visual Notes/2.png",
  "/img/Visual Notes/3.jpg",
  "/img/Visual Notes/4.jpg",
  "/img/Visual Notes/5.jpg",
  "/img/Visual Notes/6.jpg",
];

export default function SocialNotes() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: "", alt: "" });
  };

  return (
    <>
      <section id="social" className="py-32 px-6 md:px-12">
        <div className="mb-16">
          <span className="text-neon text-[10px] uppercase tracking-[0.3em] font-mono mb-4 block">Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold">Visual Notes</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {notes.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square bg-surface overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(img, `Note ${i + 1}`)}
            >
              <img 
                src={img} 
                alt={`Note ${i}`} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        src={lightbox.src}
        alt={lightbox.alt}
      />
    </>
  );
}