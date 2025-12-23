'use client';

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const cloudImages = [
    '/cloud.png',
  ];
  const Cloud = ({ style, size = 400, opacity = 0.8, duration = 60, delay = 0, imgIndex = 0 }: {
    style: React.CSSProperties; size?: number; opacity?: number; duration?: number; delay?: number; imgIndex?: number;
  }) => (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: `${size}px`,
        height: `${size * 0.5}px`,
        opacity,
        animation: `cloud-drift ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <img
        src={cloudImages[imgIndex % cloudImages.length]}
        alt=""
        className="w-full h-auto"
      />
    </div>
  );

  return (
    <div className="relative w-full">
      <header>
        <div className="w-full mx-auto px-10 py-5 flex items-center justify-start gap-20 bg-[#4BA3C7] fixed top-0 left-0 z-50">
          <div className="text-2xl font-bold text-white">
            中華航空
          </div>
          <nav className="flex-1">
            <ul className="flex items-center justify-between gap-2 text-white font-medium  px-10 cursor-pointer ">
              <li><a href="#" className="hover:none ">首頁</a></li>
              <li><a href="#" className="hover:none">航班資訊</a></li>
              <li><a href="#" className="hover:none">會員專區</a></li>
              <li><a href="#" className="hover:none">聯絡我們</a></li>
            </ul>
          </nav>
          <button
            className="bg-white bg-opacity-20 hover:bg-opacity-30 transition px-4 py-2 rounded-full text-black  font-medium"
          >
            登入

          </button>

        </div>
      </header>

      <div className="fixed inset-0 -z-30">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #4BA3C7 0%, #7EC8E3 30%, #a3d9ed 60%, #c5e8f2 100%)' }} />
      </div>

      <div
        className="fixed w-80 h-80 rounded-full -z-25 transition-transform duration-700"
        style={{ top: '-80px', left: '-80px', background: 'radial-gradient(circle, rgba(180,160,255,0.3) 60%)', transform: `translate(${mousePos.x * 30}px, ${scrollY * 0.3 + mousePos.y * 30}px)` }}
      />
         <div
        className="fixed w-40 h-40 rounded-full -z-25 transition-transform duration-700"
        style={{ top: '380px', left: '80px', background: 'radial-gradient(circle, rgba(180,160,255,0.3) 60%)', transform: `translate(${mousePos.x * 30}px, ${scrollY * 0.3 + mousePos.y * 30}px)` }}
      />
      <div
        className="fixed w-56 h-56 rounded-full -z-25 transition-transform duration-500"
        style={{ top: '60px', right: '-50px', background: 'radial-gradient(circle, rgba(255,150,170,0.35) 0% 60%)', transform: `translate(${mousePos.x * -25}px, ${-scrollY * 0.2 + mousePos.y * 25}px)` }}
      />
        <div
        className="fixed w-36 h-36 rounded-full -z-25 transition-transform duration-500"
        style={{ top: '500px', right: '50px', background: 'radial-gradient(circle, rgba(255,150,170,0.35) 0% 60%)', transform: `translate(${mousePos.x * 125}px, ${-scrollY * 0.2 + mousePos.y * 25}px)` }}
      />


      <div className="fixed inset-0 -z-20 overflow-hidden">
        <Cloud style={{ top: '5%', right: '-300px' }} opacity={0.35} duration={90} />
        <Cloud style={{ top: '20%', right: '-300px' }} opacity={0.3} duration={100} delay={25} />
      </div>

  
  <div 
    className="flex flex-col items-center animate-plane-float pt-60 "
    style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
  >
    <div className="text-center z-10">
      <h1 className="text-6xl md:text-8xl font-black text-white" style={{ textShadow: '3px 3px 0 rgba(0,150,200,0.3)' }}>
        <span className="inline-block">動物方城市2</span>
        <br />
        <span className="inline-block">主題彩繪機</span>
      </h1>
    </div>

    <div className="w-[95vw] max-w-6xl z-20 mt-[-50px]">
      <img
        src="./fly.png"
        alt="飛機"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))' }}
      />
    </div>
  
</div>
      <div className="relative z-30 h-[300px] overflow-hidden">

        <div
          className=" inset-0"
          style={{ background: 'linear-gradient(180deg, #7EC8E3 0%, #a8dced 100%)' }}
        />

        <Cloud style={{ top: '10%', right: '-100px' }} size={350} opacity={0.7} duration={50} />
        <Cloud style={{ top: '40%', left: '-50px' }} size={300} opacity={0.6} duration={60} delay={10} />
        <Cloud style={{ top: '25%', right: '30%' }} size={280} opacity={0.5} duration={55} delay={20} />

        <svg
          viewBox="0 0 1440 150"
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
          style={{ height: '120px' }}
        >
          <path
            fill="#e3f1f5"
            d="M0,0 Q720,150 1440,0 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      <div className="relative z-40 bg-[#e3f1f5]">

        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#3BA3C7' }}>
              動物方城市2主題彩繪機
              <span className="inline-block ml-2">🌸</span>
            </h2>

            <h3 className="text-xl md:text-2xl font-bold text-[#3BA3C7] mb-6">
              台灣首架迪士尼彩繪機報到！
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              最新動畫電影「動物方城市2」的夢幻搭檔哈茱蒂、胡尼克驚喜亮相，新角色佘蓋瑞與河狸狸寶也一起躍上機身，還有大家最喜歡的樹懶快俠也有跟上這波陣容～
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              全新彩繪機首波將派飛台北(桃園)往返洛杉磯、安大略、曼谷、東京及大阪等航點，帶你享受被動物方城市2角色們圍繞的歡樂氣氛。
            </p>

            <p className="text-xl font-bold text-[#E85A71]">
              2025/11/19 CI006 台北-洛杉磯正式啟航
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ border: '4px solid rgba(255,200,210,0.5)' }}
            >
              <img
                src="https://zootopia2livery.china-airlines.com/assets/illustration_mixed_1920_697-CvGBuViL.jpg"
                alt="Zootopia 2"
                className="w-full h-full object-cover max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes cloud-drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 600px)); }
        }
        @keyframes plane-float {
          0%, 100% { transform: translateY(0) ; }
          50% { transform: translateY(-20px) ; }
        }
     
        .animate-plane-float { animation: plane-float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}