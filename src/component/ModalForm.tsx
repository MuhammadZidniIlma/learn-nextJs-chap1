"use client";

import React, { useState } from "react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitName: (name: string) => void;
}

export default function ModalForm({ isOpen, onClose,onSubmitName }: ModalFormProps) {  
  const [name, setName] = useState("");  
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman
    onSubmitName(name); // Panggil fungsi untuk mengirim nama ke parent component
    setName("");    // Simpan nama yang diinput
    onClose();  // Tutup modal
  };

  if(!isOpen) return null; // Jika modal tidak terbuka, tidak perlu render apapun

  return (
    <>       
        {isOpen && (
          <div className="w-full min-h-screen flex items-center justify-center fixed top-0 left-0 bg-transparent bg-opacity-50">
            <div className="w-3/12 mx-auto bg-white rounded-lg shadow-lg p-6 relative">
              <button
                className="text-2xl text-black absolute top-2 right-4 cursor-pointer"
                onClick={onClose}
              >
                x
              </button>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="px-4 mt-4 flex items-center justify-end">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}      
    </>
  );
}
