import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06060f] via-[#3d4d39] to-black text-white">

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-serif">
          💎 Diamond <span className="text-green-300 italic">Oracle</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A premium valuation platform offering precise diamond pricing based on 
          industry-standard gemstone grading criteria and global market trends.
        </p>

        <button 
          className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold hover:scale-105 transition duration-300" 
          onClick={() => navigate("/pre")}
        >
          Start Valuation
        </button>
      </section>

      {/* GALLERY SECTION (NEW) */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-serif text-yellow-400 mb-8 text-center">
          The Exquisite Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img 
            src="https://media.istockphoto.com/id/639777488/photo/diamond-on-the-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRJDmKZV4hfYct8HFGkBxboHTnGOxRLwWUdtMxOHxd4=" 
            alt="Loose Diamond" 
            className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:scale-105 hover:border-yellow-400/50 transition duration-500 opacity-80 hover:opacity-100 shadow-lg"
          />
          <img 
            src="https://media.istockphoto.com/id/1391079962/photo/sale-of-emerald-gemstone.webp?a=1&b=1&s=612x612&w=0&k=20&c=FN5KNhFgmMhBVkNDdp-YoBtW-NWiLC9fM-5X7vyWmgA=" 
            alt="Diamond Ring" 
            className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:scale-105 hover:border-yellow-400/50 transition duration-500 opacity-80 hover:opacity-100 shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1560427450-00fa9481f01e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5c3RhbHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Sparkling Gem" 
            className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:scale-105 hover:border-yellow-400/50 transition duration-500 opacity-80 hover:opacity-100 shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1771788893954-4df59b9e265d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJlZGljdGlvbiUyMG9mJTIwZGlhbW9uZHN8ZW58MHx8MHx8fDA%3D" 
            alt="Luxury Jewelry" 
            className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:scale-105 hover:border-yellow-400/50 transition duration-500 opacity-80 hover:opacity-100 shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Clear Diamond" 
            className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:scale-105 hover:border-yellow-400/50 transition duration-500 opacity-80 hover:opacity-100 shadow-lg"
          />
          <img 
            src="https://media.istockphoto.com/id/2245918319/photo/diamond-price-increase-concept-red-arrow-up-on-us-dollar-bill-with-lab-grown-diamonds-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=SevzMbMfqumMRG14I33bzECn2K1ZV2yAfJAXKv7w2Oo=" 
            alt="Diamond Close Up" 
            className="w-full h-64 object-cover rounded-2xl border border-white/10 hover:scale-105 hover:border-yellow-400/50 transition duration-500 opacity-80 hover:opacity-100 shadow-lg"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-yellow-400 mb-6">
          About Diamond Valuation
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          Diamonds are among the most valuable gemstones due to their rarity,
          durability, and brilliance. Their pricing is intricately tied to multiple
          physical and optical properties, making precise valuation a highly specialized task.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Our sophisticated valuation engine analyzes these precise structural properties to 
          provide accurate, market-reflective price estimations instantly.
        </p>
      </section>

      {/* 4Cs SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <Property title="Carat Weight" desc="Carat refers to the weight of the diamond. Larger diamonds are rarer and exponentially more valuable." />
        <Property title="Cut Quality" desc="Cut determines how well the diamond reflects light. A masterfully cut diamond exhibits superior brilliance." />
        <Property title="Color Grade" desc="Diamonds are graded from D (colorless) to J (slightly colored). A lack of color significantly increases luxury value." />
        <Property title="Clarity" desc="Clarity measures microscopic internal characteristics. Flawless structural integrity results in peak valuation." />
      </section>

      {/* EXTRA PROPERTIES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <Property title="Depth Percentage" desc="The height of the diamond relative to its width, meticulously calculated to ensure optimal light return." />
        <Property title="Table Percentage" desc="The largest top facet of the stone. Proper proportioning here acts as a window to the diamond's inner fire." />
        <Property title="Physical Dimensions" desc="Precise X, Y, and Z millimeter measurements that dictate the stone's absolute visual footprint and symmetry." />
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <Feature title="Precision Valuation" desc="Delivering highly accurate pricing using advanced analytical models." />
        <Feature title="Premium Experience" desc="A refined, intuitive interface designed for luxury jewelers and enthusiasts." />
        <Feature title="Market-Driven Data" desc="Estimations aligned with current global gemstone market trends." />
        <Feature title="Instant Insights" desc="Receive comprehensive valuations instantly with minimal input." />
        <Feature title="Industry Standard" desc="Built entirely on the foundational 4Cs and detailed geometric proportions." />
        <Feature title="Confidential & Secure" desc="Your valuation inquiries remain completely private and secure." />
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-400 text-sm leading-relaxed">
          This platform provides estimated diamond valuations based on structural inputs. 
          Results are intended for informational purposes and should be verified by a certified gemologist for official appraisal.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 flex  justify-between ml-10 mr-10">
        <p className="text-gray-400 text-sm">
          © 2026 Diamond Oracle. All rights reserved. <br></br>
          <span> Het Vasaniya</span>

        </p>
          <a href="https://www.linkedin.com/in/het-vasaniya-12461a340"  ><i class="fa-brands fa-linkedin fa-2x" ></i></a>
    </footer>
    </div>
  );
};

const Property = ({ title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg hover:scale-105 transition duration-300 shadow-lg">
    <h3 className="text-xl text-yellow-400 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Feature = ({ title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg hover:scale-105 transition duration-300 shadow-lg">
    <h3 className="text-lg text-yellow-300 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>  
  </div>
);

export default Home;