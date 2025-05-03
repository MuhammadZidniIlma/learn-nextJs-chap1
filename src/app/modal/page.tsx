"use client";
import ModalForm from "@/component/ModalForm";
import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name,setName] = useState("");

  const handleSaveName = (name: string) => {
    setName(name); // Simpan nama yang diinput
  };
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-center min-h-screen items-center flex-col">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Nama Saya Adalah:{" "}
            <span className="text-blue-500">{ name ||  "Belum diisi"}</span>
          </h1>
          <p>Klik button dibawah ini untuk mengisi nama</p>
        </div>
        <button
          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      </div>
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmitName={handleSaveName} />
    </>
  );
}
