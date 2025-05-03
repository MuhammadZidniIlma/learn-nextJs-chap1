"use client";

import {  useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AlertProps {
  name?: string;
}

export default function Alert({ name }: AlertProps) {
  const pesan = useMemo(
    () => [
      "Aku Cuman Mau Bilang Nih...",
      "Kamu itu Berharga",
      "Jangan pernah ragu untuk bersinar!",
      "Kamu bisa melakukan apapun yang kamu inginkan!",
      "Jangan pernah menyerah!",
      "Kamu itu istimewa!",
      "Terima kasih sudah ada di dunia ini!",
      "Semangat terus ya!",
    ],
    []
  );
  const gifList = [
    "/stiker2.gif",    
    "/stiker3.gif",    
    "/stiker4.gif",    
    "/stiker5.gif",        
    "/stiker6.gif",        
  ];

  const [message, setMessage] = useState(pesan[0]);
  const [displayText, setDispalyText] = useState(" ");
  const [showTombol, setShowTombol] = useState(true);
  const [gifIndex, setGifIndex] = useState(0);


  // 🕒 Ubah GIF tiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setGifIndex((prev) => (prev + 1) % gifList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gifList.length]);

  useEffect(() => {
    setDispalyText("");
    let index = 0;
    const interval = setInterval(() => {
      setDispalyText(message.slice(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, 60); // kecepatan ketik (ms)
    return () => clearInterval(interval);
  }, [message, pesan]); // Hanya jalankan saat message berubah
  const handleMessageClick = () => {
    const totalIndex = pesan.length - 1;
    const Nextindex = pesan.indexOf(message) + 1;
    if (totalIndex === Nextindex) {
      setShowTombol(false);
    }
    setMessage(pesan[Nextindex] );
  };

  return (
    <div className="relative z-10 flex flex-col items-center pt-36  h-full gap-6 min-h-screen overflow-hidden">
        <div className="p-4 bg-gray-200/30 mt-10 rounded-full shadow-lg w-28 h-28 flex items-center justify-center">
            <Image
              src={gifList[gifIndex]} // 🟢 GIF berganti otomatis
              alt="chat"
              width={100}
              height={100}
              priority
            />
          </div>
      <AnimatePresence>
        <motion.div
          className="w-11/12 sm:w-8/12 lg:w-1/2 h-44 relative bg-gray-900/60 rounded-lg shadow-lg flex items-center justify-center border border-white flex-col"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >          
          <div className="text-center text-white text-2xl font-bold">
            <h1 className="text-base md:text-xl capitalize">Hallo {name} 😊</h1>
            <p className="mt-4 text-lg md:text-xl font-extralight">{displayText}</p>
          </div>
          <div className="flex justify-end  w-full p-2 absolute bottom-0 right-0">
            {showTombol && (
              <button
                id="tombol"
                className="text-gray-300 font-semibold text-xs hover:text-gray-200 cursor-pointer px-3 py-2"
                onClick={handleMessageClick}
              >
                Klik untuk Lanjut
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
