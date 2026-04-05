import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const page = () => {
   const navigate=useNavigate()
  // State for the diamond characteristics
  const [form, setForm] = useState({
    carat: "",
    depth: "",
    table: "",
    x: "",
    y: "",
    z: "",
    cut: "Ideal",
    color: "",
    clarity: "",
  });
  const handleSubmit = async () => {
  setLoading(true);

  try {
    const preparedData = {
      carat: parseFloat(form.carat),
      depth: parseFloat(form.depth),
      table: parseFloat(form.table),
      x: parseFloat(form.x),
      y: parseFloat(form.y),
      z: parseFloat(form.z),
      cut: form.cut,
      color: form.color,
      clarity: form.clarity,
    };

   const res = await fetch("https://diamonds-price-prediction.onrender.com/predict", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(preparedData),
});

    const data = await res.json();

    setResultPrice(data.price); // backend should return { price: value }
  } catch (err) {
    console.error(err);
    alert("Error connecting to model");
  }

  setLoading(false);
};

  // State for UI and Animation
  const [loading, setLoading] = useState(false);
  const [resultPrice, setResultPrice] = useState(null);
  const [displayPrice, setDisplayPrice] = useState(0);



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Smooth easing animation for the final price calculation
  useEffect(() => {
    if (resultPrice === null) return;
    
    let start = displayPrice;
    const end = resultPrice;
    const duration = 1500; // 1.5 seconds for a premium feel
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo for a fast start and smooth deceleration
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (end - start) * easeOutExpo);
      
      setDisplayPrice(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [resultPrice]);

  return (
    <div className="app-container">
      {/* Scoped CSS: Keeping styles encapsulated so they don't break the rest of your app.
        Grid and box-sizing are fully optimized to prevent column overflow.
      */}
      <style>{`
        :root {
          --bg-dark: #AEB784;           
          --bg-card: #1a2223;           
          --bg-input: #252f40;          
          --accent: #f97316;            
          --accent-glow: rgba(249, 115, 22, 0.5);
          --text-main: #F7F6E5;
          --text-muted: #9F7F6E5;
        }

        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes revealUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }

        .app-container { 
          min-height: 100vh; 
background: linear-gradient(3deg,rgba(0, 0, 0, 1) 0%, rgba(183, 255, 173, 1) 100%);          font-family: 'Inter', system-ui, sans-serif;
          color: var(--text-main); 
          padding: 3rem 1.5rem; 
        }

       /* Top Running Line */
.hero-line {
  width: 100%;
  
  overflow: hidden;
  background: linear-gradient(90deg, #06060f, #0c0c1e, #06060f);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  border-radius:10px
}

.hero-track {
  display: flex;
  width: max-content;
  animation: scrollText 30s linear infinite;
  
}

.hero-track span {
  white-space: nowrap;
  padding-right: 60px;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: white; /* gold */
}

/* Animation */
@keyframes scrollText {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

        .header { text-align: center; margin-bottom: 3.5rem;  }
        .title { font-size: 2.75rem; font-weight: 900; letter-spacing: -1.5px; margin: 0; }
        .title span { color: green; margin-left:10px }
        .subtitle { font-size: 0.8rem;  text-transform: uppercase; letter-spacing: 4px; color: black; font-weight: 700; margin-top: 0.5rem; }

        .card {
          max-width: 760px; /* Perfect width for 3 columns */
          margin: 0 auto;
          background: var(--bg-card);
          border-radius: 28px;
          padding: 3rem;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background glow effect */
        .card::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle at top right, rgba(249, 115, 22, 0.05), transparent 40%);
          pointer-events: none;
        }

        .section-tag { font-size: 0.7rem; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 1.5rem; display: block; }

        /* Responsive Grid System */
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        
        @media (max-width: 640px) {
          .card { padding: 2rem 1.5rem; }
          .grid-3 { grid-template-columns: 1fr; gap: 1rem; }
          .grid-2 { grid-template-columns: 1fr; gap: 1rem; }
        }

        .field { display: flex; flex-direction: column; gap: 0.6rem; }
        .label { font-size: 0.7rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }

        .input-lux, .select-lux {
          background: var(--bg-input);
          border: 1.5px solid transparent;
          border-radius: 14px;
          padding: 0.9rem 1.2rem;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          outline: none;
          width: 100%;
          box-sizing: border-box; /* Prevents overflow */
          transition: all 0.25s ease;
        }
        
        .input-lux:focus, .select-lux:focus { 
          border-color: var(--accent); 
          background: #1e293b; 
          box-shadow: 0 0 0 4px var(--accent-glow); 
        }

        .select-lux {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f97316'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.2rem center;
          background-size: 1.2rem;
        }

        .select-lux option {
          background-color: var(--bg-card);
          color: white;
        }

        .pill-container { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2rem; }
        .pill { 
          padding: 0.7rem 1.4rem; 
          background: var(--bg-input); 
          border-radius: 99px; 
          font-size: 0.8rem; 
          font-weight: 700; 
          cursor: pointer; 
          transition: all 0.2s ease; 
          color: var(--text-muted); 
          border: 1px solid transparent;
          user-select: none;
        }
        .pill:hover { background: #334155; color: white; }
        .pill.active { background: var(--accent); color: white; box-shadow: 0 4px 15px var(--accent-glow); border-color: var(--accent); }

        .btn-predict { 
          width: 100%; 
          padding: 1.25rem; 
          border-radius: 16px; 
          border: none; 
          background: linear-gradient(135deg, var(--accent), #ea580c); 
          color: white; 
          font-weight: 800; 
          font-size: 1.05rem; 
          letter-spacing: 0.5px;
          cursor: pointer; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 1rem;
        }
        .btn-predict:hover { transform: translateY(-3px); box-shadow: 0 12px 25px var(--accent-glow); filter: brightness(1.1); }
        .btn-predict:active { transform: translateY(0); }
        .btn-predict:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        .loader { width: 22px; height: 22px; border: 3px solid rgba(255,255,255,0.25); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; }

        .result-container { 
          margin-top: 2.5rem; 
          padding: 2.5rem; 
          background: rgba(255,255,255,0.02); 
          border-radius: 20px; 
          border: 1px dashed rgba(249, 115, 22, 0.4); 
          text-align: center; 
          animation: revealUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .price-text { font-size: 3.5rem; font-weight: 900; color: white; margin: 0.5rem 0; letter-spacing: -2px; line-height: 1.1; }
        .details-text { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
        .stars { color: #fbbf24; margin-top: 1.5rem; font-size: 1.2rem; letter-spacing: 6px; }
      `}</style>
   <button className="text-black font-bold  hover:text-red-900 hover:animate-bounce " onClick={()=>navigate('/')}>HOME</button>
     <div className="hero-line">
  <div className="hero-track">
    <span>
      💎 Premium Diamond Price Prediction • AI Powered • Accurate Valuation • Luxury Gem Analysis •
    </span>
    <span>
      💎 Premium Diamond Price Prediction • AI Powered • Accurate Valuation • Luxury Gem Analysis •
    </span>
  </div>
</div>

<header className="header animate-[bounce_5s_infinite] mt-10 ani">        <h1 className="title text-red-900 ">DIAMOND<span >ORACLE</span></h1>
        <p className="subtitle">AI-Powered Valuation Engine</p>
      </header>

      <main className="card">
        {/* Dimensions Section */}
        <span className="section-tag">01 · Proportions</span>
        <div className="grid-3">
          <div className="field">
            <label className="label">Carat Weight</label>
            <input className="input-lux" type="number" name="carat" value={form.carat} onChange={handleChange} step="0.01" min="0" />
          </div>
          <div className="field">
            <label className="label">Depth %</label>
            <input className="input-lux" type="number" name="depth" value={form.depth} onChange={handleChange} step="0.1" />
          </div>
          <div className="field">
            <label className="label">Table %</label>
            <input className="input-lux" type="number" name="table" value={form.table} onChange={handleChange} step="1" />
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
          <div className="field">
            <label className="label">Length (X mm)</label>
            <input className="input-lux" type="number" name="x" value={form.x} onChange={handleChange} step="0.01" />
          </div>
          <div className="field">
            <label className="label">Width (Y mm)</label>
            <input className="input-lux" type="number" name="y" value={form.y} onChange={handleChange} step="0.01" />
          </div>
          <div className="field">
            <label className="label">Height (Z mm)</label>
            <input className="input-lux" type="number" name="z" value={form.z} onChange={handleChange} step="0.01" />
          </div>
        </div>

        {/* Quality Characteristics Section */}
        <span className="section-tag">02 · Characteristics</span>
        {/* Cut Quality */}
<div className="mb-6">
  <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
    Cut Quality
  </label>

  <div className="flex flex-wrap gap-3">
    {["Fair","Good","Very Good","Premium","Ideal"].map((cutGrade) => (
      <button
        key={cutGrade}
        onClick={() => setForm({ ...form, cut: cutGrade })}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
          ${
            form.cut === cutGrade
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
              : "bg-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
      >
        {cutGrade}
      </button>
    ))}
  </div>
</div>

{/* Color + Clarity */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

  {/* Color */}
  <div className="flex flex-col gap-2">
    <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
      Color Grade
    </label>

    <select
      name="color"
      value={form.color}
      onChange={handleChange}
      className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 hover:border-orange-400 transition duration-200"
    >
      {["D","E","F","G","H","I","J"].map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  </div>

  {/* Clarity */}
  <div className="flex flex-col gap-2">
    <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
      Clarity
    </label>

    <select
      name="clarity"
      value={form.clarity}
      onChange={handleChange}
      className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 
                 hover:border-orange-400 transition duration-200"
    >
      {["IF","VVS1","VVS2","VS1","VS2","SI1","SI2","I1"].map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  </div>

</div>
        {/* Action Button */}
        <button className="btn-predict" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <div className="loader"></div>
              <span>Processing...</span>
            </>
          ) : (
            "Generate Appraisal →"
          )}
        </button>
        

        {/* Dynamic Results Area */}
        {resultPrice !== null && !loading && (
          <div className="result-container">
            <span className="section-tag" style={{ marginBottom: 0 }}>Estimated Market Value</span>
          <div className="price-text">${displayPrice.toLocaleString('en-US')}</div>
            <div className="details-text">
              
            </div>
            <div className="stars">✦✦✦✦✦</div>

          </div>

          
        )}
        
      </main>
       <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-yellow-700 text-sm leading-relaxed">
         "If the prediction yields a negative value, please verify the input dimensions as they are likely invalid."
        </p>
      </section>
    </div>
  );
};

export default page;