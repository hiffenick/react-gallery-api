import axios from "axios";
import React, { useState } from "react";

const App = () => {

  const [imgs ,updtImgs] = useState(null);

  const resp = async () =>{
    const result = await axios.get('https://picsum.photos/v2/list?page=3&limit=10');
    updtImgs(result.data);
  }
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">
          React Image Gallery
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Click the button below to load images
        </p>

        {/* Button */}
        <div className="flex justify-center mb-10">
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition active:scale-95"
            onClick={()=>{
              resp()
            }}
          >
            Get Images
          </button>
        </div>

        {imgs && (
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
    {imgs.map((el, idx) => (
      <div
        key={idx}
        className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-indigo-500 hover:scale-105 transition-all duration-300"
      >
        <img
          src={el.download_url}
          alt={el.author}
          className="w-full h-60 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-bold text-white mb-2">
            {el.author}
          </h2>

          <p className="text-sm text-gray-400">
            Image ID: {el.id}
          </p>
        </div>
      </div>
    ))}
  </div>
)}
        
      </div>
    </main>
  );
};

export default App;