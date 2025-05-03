"use client"
import {  useState } from "react";

export default function Count() {
    const [count,setcount] = useState(0);

    const handleIncrement = () => {
        return setcount(count + 1);
    }

    const handleDecrement = () => {
        if (count <= 0) {
            return setcount(0);
        }        
        return setcount(count-1);
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-2xl font-bold">Counter</h1>
            <p className="text-lg">Count: {count}</p>
            <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleDecrement}>Decrement</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleIncrement}>Increment</button>            
            </div>
        </div>
    );
}