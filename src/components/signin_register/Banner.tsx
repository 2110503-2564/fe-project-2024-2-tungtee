'use client';

import { useState, useEffect, useRef } from 'react'; // เพิ่ม useRef
import Image from 'next/image';

export default function Banner() {
    const covers = [
        '/img/home/topCard/1.png',
        '/img/home/topCard/2.png',
        '/img/home/topCard/3.png',
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(1);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                setFade(0);
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % covers.length);
                    setFade(1);
                }, 500);
            }, 6000);
        };

        const clearAndStartInterval = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            startInterval();
        };

        clearAndStartInterval(); // เริ่ม interval ครั้งแรก

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleDotClick = (dotIndex: number) => {
        setFade(0);
        setTimeout(() => {
            setIndex(dotIndex);
            setFade(1);
        }, 500);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setFade(0);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % covers.length);
                setFade(1);
            }, 500);
        }, 6000);
    };

    return (
        <div className="relative w-full h-full">
            {/* ภาพปัจจุบัน */}
            <Image
                src={covers[index]}
                alt="current cover"
                fill
                priority
                className="object-cover transition-opacity duration-500 ease-in-out"
                style={{ opacity: fade }}
            />

            {/* ขีดล่าง */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 gap-2">
                {covers.map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        className={`w-16 h-1.5 rounded-full cursor-pointer ${
                            dotIndex === index ? 'bg-white' : 'bg-gray-500'
                        }`}
                        onClick={() => handleDotClick(dotIndex)}
                    />
                ))}
            </div>
        </div>
    );
}