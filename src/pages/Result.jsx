import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const API_URL = "https://clipdrop-api.co/text-to-image/v1";
  const API_KEY = "82a13e900ddd467025eb9c6a05a1f25175389e01ea776851ad693957b7bd19cf9182ec7de9b6a4bdaa65bd5734b55535"; // 🔥 Replace with your actual API key

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent empty submission

    setLoading(true);
    setIsImageLoaded(false);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json", // Corrected request format
        },
        body: JSON.stringify({ prompt: input }), // Sending JSON data
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get error message from API
        throw new Error(`Failed: ${response.status} - ${errorText}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
      setIsImageLoaded(true);
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Error: ${error.message}`); // Show error message
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] items-center">
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={image} alt="Generated" />
          {loading && <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />}
        </div>
        {loading && <p className="text-white mt-2">Loading...</p>}
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 placeholder-color"
          />
          <button type="submit" className="bg-zinc-900 px-10 py-3 rounded-full">Generate</button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p onClick={() => setIsImageLoaded(false)} className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">
            Generate Another
          </p>
          <a className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer" href={image} download>
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
