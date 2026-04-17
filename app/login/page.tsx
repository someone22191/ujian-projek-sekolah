'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2] px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden"
      >
        <div className="bg-[#FF0000] p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Selamat Datang</h2>
          <p className="text-red-100 text-sm opacity-80 mt-1">Portal Ujian SMK Prima Unggul</p>
        </div>
        
        <form className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Email Siswa</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#FF0000] transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="email@smkprimaunggul.sch.id"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Kata Sandi</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-[#FF0000] transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-all"
              />
            </div>
          </div>

          <button className="w-full bg-[#FF0000] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 shadow-lg shadow-red-100 transition-all">
            <LogIn size={20} /> Masuk Sekarang
          </button>

          <button type="button" className="w-full border-2 border-[#FF0000] text-[#FF0000] py-3.5 rounded-xl font-bold hover:bg-red-50 transition-all">
            Daftar Akun Baru
          </button>

          <div className="text-center">
            <Link href="#" className="text-xs text-gray-500 hover:text-[#FF0000] transition-colors">
              Lupa kata sandi? Hubungi admin sekolah
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
