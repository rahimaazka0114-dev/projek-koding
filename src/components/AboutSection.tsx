import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    
  ];

  const accordionData = [
    {
      title: "Misi & Visi",
      content: "Menciptakan ekosistem digital yang tidak hanya fungsional secara teknis, tetapi juga memberikan pengalaman emosional yang positif bagi pengguna."
    },
    {
      title: "Tech-Driven Explorer",
      content: "Sangat antusias dengan perkembangan teknologi web terbaru. Sebagai pengembang yang sedang berkembang, misi saya adalah menulis kode yang tidak hanya berfungsi, tetapi juga mudah dipelihara dan berdampak positif bagi pengguna. Di luar coding, saya aktif mengikuti komunitas teknologi untuk terus memperbarui wawasan saya. Saya mencari peluang untuk tumbuh, berkontribusi, dan menciptakan pengalaman digital yang luar biasa di setiap baris kode yang saya hasilkan.",
      content2: "saya akan terus berusaha mengembangkan bakat saya sehingga menjadi sosok yang terampil.",
      content3:"maka dari itu,saya harap akan mendapatkan dukungan dari teman teman saya untuk menjadi sosok yang lebih baik lagi",
    },
    
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block tracking-widest uppercase text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* KOLOM KIRI: FOTO DENGAN ANIMASI 3D HOVER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <motion.div 
              whileHover={{ rotateY: 15, rotateX: -5, perspective: 1000 }}
              className="relative z-10 aspect-square rounded-3xl overflow-hidden glass shadow-2xl transition-all duration-500"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 flex items-center justify-center relative">
                {/* Ganti span ini dengan tag <img> anda */}
                <span className="text-9xl filter drop-shadow-2xl">👨‍💻</span>
                
                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Badge Pengalaman Floating */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 p-6 glass rounded-2xl shadow-xl z-20 border border-white/20"
            >
              <p className="font-display font-bold text-3xl text-gradient">5+ Tahun</p>
              <p className="text-xs uppercase tracking-tighter text-muted-foreground font-bold">Pengalaman Industri</p>
            </motion.div>

            {/* Dekorasi Background */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
          </motion.div>

          {/* KOLOM KANAN: TEKS & ACCORDION */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight">
                Passionate Developer <br /> 
                <span className="text-primary">&amp; Content Creator</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Saya adalah Fullstack Web Developer yang fokus pada pembangunan solusi digital inovatif. 
                Selain coding, saya berbagi ilmu di berbagai platform teknologi.
              </p>
            </motion.div>

            {/* COMPONENT: ACCORDION */}
            <div className="space-y-3">
              {accordionData.map((item, index) => (
                <div key={index} className="border border-white/10 rounded-xl overflow-hidden glass">
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold hover:bg-white/5 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-4 pt-0 text-muted-foreground text-sm border-t border-white/5 mt-2">
                          {item.content}
                        </div>
                        <div className="p-4 pt-0 text-muted-foreground text-sm border-t border-white/5 mt-2">
                          {item.content2}
                        </div>
                         <div className="p-4 pt-0 text-muted-foreground text-sm border-t border-white/5 mt-2">
                          {item.content3}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* STATS GRID DENGAN ANIMASI STAGGER */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 glass rounded-2xl text-center border border-white/5 hover:border-primary/30 transition-all shadow-sm hover:shadow-primary/10"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}