'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Palette, Calculator, Video, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const programs = [
  { name: 'TKJ', desc: 'Teknik Komputer & Jaringan', icon: <Network size={32} />, color: 'bg-blue-50' },
  { name: 'DKV', desc: 'Desain Komunikasi Visual', icon: <Palette size={32} />, color: 'bg-purple-50' },
  { name: 'AK', desc: 'Akuntansi Keuangan', icon: <Calculator size={32} />, color: 'bg-green-50' },
  { name: 'BC', desc: 'Broadcasting & Film', icon: <Video size={32} />, color: 'bg-orange-50' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Glassmorphism Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-8 py-3">
          <div className="text-xl font-extrabold tracking-tighter">
            SMK <span className="text-[#FF0000]">PRIMA UNGGUL</span>
          </div>
          <Link href="/login">
            <button className="bg-[#FF0000] hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
              Masuk ke Aplikasi
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Masa Depan <span className="text-[#FF0000]">Cemerlang</span><br /> Dimulai di Sini
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Platform ujian online resmi SMK Prima Unggul. Mengintegrasikan teknologi modern untuk pendidikan yang lebih baik.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link href="/login">
              <button className="bg-[#FF0000] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-red-200 transition-all flex items-center gap-2 mx-auto">
                Mulai Ujian Sekarang <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program Keahlian Section */}
      <section className="py-20 bg-[#F8F8F8] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Program Keahlian</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {programs.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all group"
              >
                <div className={`p-4 rounded-2xl mb-4 transition-colors ${item.color} text-[#FF0000]`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF0000] transition-colors">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
