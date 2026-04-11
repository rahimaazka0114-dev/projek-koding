import React from 'react';
// Import ikon jika Anda menggunakan library seperti lucide-react
// import { Languages, Globe, Brain } from 'lucide-react';

// 1. Data Baru (Diletakkan di luar atau di dalam komponen)
const akademikData = [
  {
    category: "Bahasa",
    icon: "🗣️", // Contoh emoji, bisa diganti ikon Lucide
    skills: [
      { name: "Bahasa Indonesia", level: 97 },
      { name: "Bahasa Inggris", level: 90 },
      { name: "Bahasa Arab", level: 85 },
      { name: "Bahasa Jepang", level: 70 },
    ],
  },
  {
    category: "IPS",
    icon: "🌎",
    skills: [
      { name: "Sosiologi", level: 90 },
      { name: "Ekonomi", level: 85 },
      { name: "Geografi", level: 88 },
      { name: "Sejarah", level: 82 },
    ],
  },
  {
    category: "IPA",
    icon: "🧠",
    skills: [
      { name: "Biologi", level: 95 },
      { name: "Kimia", level: 80 },
      { name: "Fisika", level: 75 },
      { name: "Matematika", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-stone-950 text-stone-100"> {/* Background gelap Anda */}
      <div className="container mx-auto px-4">
        
        {/* 2. Ubah Judul Utama Di Sini */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-cyan-400 font-medium">Keahlian</p> {/* Label kecil Anda */}
          <h2 className="text-4xl md:text-5xl font-bold">Kemampuan Akademis</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4" />
        </div>

        {/* 3. Rendering Kartu Secara Dinamis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {akademikData.map((card, cardIndex) => (
            // Komponen Kartu (Gunakan styling kartu gelap Anda)
            <div key={cardIndex} className="p-8 rounded-3xl border border-stone-800 bg-stone-900 shadow-xl space-y-8 hover:border-cyan-400/50 transition-colors">
              
              {/* Header Kartu (Ikon & Kategori) */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center text-3xl">
                  {/* Tampilkan ikon di sini */}
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-stone-100">{card.category}</h3>
              </div>

              {/* Daftar Skill di Dalam Kartu */}
              <div className="space-y-5">
                {card.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    {/* Nama Skill & Persentase */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-stone-300">{skill.name}</span>
                      <span className="text-stone-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar (Gunakan warna cyan Anda) */}
                    <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cyan-400 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;