'use client';
import { MainPage, Navbar } from '@/components'
import Image from 'next/image'
import { FetchFilm } from '../services/fetch';

export default function Home() {
  const shows = FetchFilm();
  const backgroundImage = shows[7]?.show.image?.original;

  return (
    <div>
      <nav className="relative overflow-hidden bg-cover bg-no-repeat p-2 h-[75vh]" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
      </nav>
      <div className="bg-gray-900">
        <MainPage />
      </div>
    </div>
  );
}

