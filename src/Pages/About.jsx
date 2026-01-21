import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const values = [
  {
    title: "Quality",
    text: "We carefully select every book and always put quality first.",
  },
  {
    title: "Trust",
    text: "Our customers’ trust is our greatest asset.",
  },
  {
    title: "Growth",
    text: "We are constantly growing and striving for innovation.",
  },
];

const About = () => {
  return (
    <div className="bg-[#fdfbf7] text-gray-900 font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-blue-300">
        <img
          src="https://images.unsplash.com"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Large library"
        />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8">
            About Us
          </h1>
          <div className="h-1 w-32 bg-black mx-auto mb-8"></div>
          <p className="text-xl md:text-3xl text-white italic">
            "Every book is an unfinished conversation."
          </p>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <img
            src=" "
            className="rounded-2xl shadow-2xl"
            alt="Reading"
          />
          <div className="space-y-8">
            <span className="text-black font-bold uppercase text-sm">
              Our Mission
            </span>
            <h2 className="text-5xl font-serif font-bold">
              Taking reading culture to the next level
            </h2>
            <p className="text-xl text-gray-600">
              We don’t just sell books — we share knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <section className="bg-blue-300 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {[
            { label: "Years of Experience", val: "10+" },
            { label: "Books", val: "250K" },
            { label: "Customers", val: "500K" },
            { label: "Partners", val: "45" },
          ].map((stat, i) => (
            <div key={i} className="text-center border-l-2 border-black pl-6">
              <div className="text-5xl font-bold">{stat.val}</div>
              <div className="text-gray-500 uppercase text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Values */}
      <section className="py-32 bg-[#f9f7f2] bg-blue-300">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-20">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((box, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
                <p className="text-gray-600">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 text-center ">
        <h2 className="text-4xl font-serif mb-8">
          Join Our Team
        </h2>
        <button className="bg-black text-white px-12 py-4 rounded-full font-bold">
          View Open Positions
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
