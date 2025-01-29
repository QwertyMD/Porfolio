import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Home } from "lucide-react";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 grid grid-rows-[0.1fr_1fr]">
      <div className="flex justify-center items-center gap-10 p-10">
        <Button className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 text-gray-800 transition duration-300 hover:shadow-md hover:shadow-white text-lg hover:scale-105 active:scale-95">
          Profile
        </Button>
        <Button className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 text-gray-800 transition duration-300 hover:shadow-md hover:shadow-white text-lg hover:scale-105 active:scale-95 rounded-full w-12 h-12">
          <Home className="scale-150" />
        </Button>
        <Button className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 text-gray-800 transition duration-300 hover:shadow-md hover:shadow-white text-lg hover:scale-105 active:scale-95">
          Project
        </Button>
      </div>

      <div className="self-end">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
