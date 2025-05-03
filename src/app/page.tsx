"use client";
import Alert from "@/component/Alert";
import Image from "next/image";
import { Poppins } from "next/font/google";
import React, { useRef, useState } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function Home() {
  const [name, setName] = useState("");
  const [showPromptName, setShowPromptName] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleShowPromptName = () => {
    setShowPromptName(false);
    setShowAlert(true);
    if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio play error:", err);
        });
      }
  };
  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />

        {/* Pemutar musik tersembunyi */}
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />

      {/* prompt nama */}
        {showPromptName &&(
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6" id="promptName">
            <div className="min-w-xl flex justify-center items-center bg-white rounded-lg">
            <div className="text-center text-gray-900/80 font-semibold p-8 w-full flex justify-center items-center flex-col">
              <Image
                src="/stiker1.gif"
                alt="chat"
                width={100}
                height={100}
                priority
              />
              <p className="mt-4 text-xl">
                <span className={poppins.className}> Masukin nama kamu</span>
              </p>
              <input
                type="text"
                value={name}
                onChange={handleInputName}
                suppressHydrationWarning
                className="input bg-transparent border-2 border-gray-300 rounded-md px-4 py-2 mt-4 shadow-md"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-6 text-sm font-bold hover:bg-blue-600 shadow-xl cursor-pointer "
                onClick={handleShowPromptName} suppressHydrationWarning
              >
                Lanjut
              </button>
            </div>
          </div>
      </div>
        )}
      {showAlert && (          
        <Alert name={name}/> 
      )}
    </div>
  );
}
