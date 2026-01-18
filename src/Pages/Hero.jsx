import { useEffect, useState } from "react";

const slides = [
  {
    title: "BMW M5 F90",
    desc: "600 HP · Twin-Turbo V8 · Ultimate Sport Sedan",
    img: "/images/m5-1.png",
  },
  {
    title: "Pure Performance",
    desc: "0–100 km/h in 3.4 seconds",
    img: "/images/m5-2.png",
  },
  {
    title: "Luxury Interior",
    desc: "Premium leather · Digital cockpit",
    img: "/images/m5-3.png",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT — TEXT */}
        <div className="space-y-6">
          <span className="text-blue-500 tracking-widest uppercase">
            BMW M Series
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {slides[index].title}
          </h1>

          <p className="text-gray-300 text-lg max-w-md">
            {slides[index].desc}
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full">
              Explore Model
            </button>
            <button className="px-6 py-3 border border-white/40 hover:border-blue-500 transition rounded-full">
              Test Drive
            </button>
          </div>

          {/* DOTS */}
          <div className="flex gap-3 pt-6">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all
                ${i === index ? "bg-blue-500 scale-125" : "bg-white/30"}`}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-blue-600/20 blur-3xl"></div>

          <img
            src={slides[index].img}
            alt="BMW"
            className="relative w-[320px] md:w-[520px] transition-all duration-700 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
