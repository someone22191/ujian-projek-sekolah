'use client';

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  LogOut, 
  Timer, 
  User,
  ChevronRight
} from 'lucide-react';

export default function DashboardPage() {
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b">
          <div className="font-bold text-lg">SMK <span className="text-[#FF0000]">PRIMA</span></div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <SidebarLink icon={<LayoutDashboard size={20} />} label="Beranda" active />
          <SidebarLink icon={<BookOpen size={20} />} label="Ujian Saya" />
          <SidebarLink icon={<FileText size={20} />} label="Hasil Nilai" />
        </nav>
        <div className="p-4 border-t">
          <SidebarLink icon={<LogOut size={20} />} label="Keluar" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="font-bold text-gray-800">Dashboard Siswa</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-red-50 text-[#FF0000] px-4 py-2 rounded-lg font-mono font-bold">
              <Timer size={18} /> {formatTime(timeLeft)}
            </div>
            <div className="flex items-center gap-2 border-l pl-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-medium">Budi Santoso</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Ujian Berlangsung</h1>
            <p className="text-gray-500">Silahkan pilih ujian yang tersedia hari ini.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <ExamCard 
              title="Ujian Tengah Semester - Pemrograman Web"
              subject="TKJ - XI"
              duration="90 Menit"
              totalQuestions={50}
            />
            <ExamCard 
              title="Bahasa Indonesia - Literasi Digital"
              subject="UMUM - XI"
              duration="60 Menit"
              totalQuestions={40}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active ? 'bg-[#FF0000] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
    }`}>
      {icon}
      <span className="font-semibold">{label}</span>
    </div>
  );
}

function ExamCard({ title, subject, duration, totalQuestions }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF0000] bg-red-50 px-2 py-1 rounded">Aktif</span>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{subject}</span>
          <span>•</span>
          <span>{duration}</span>
          <span>•</span>
          <span>{totalQuestions} Soal</span>
        </div>
      </div>
      <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
        Kerjakan <ChevronRight size={18} />
      </button>
    </div>
  );
}
