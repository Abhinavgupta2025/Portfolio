import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeTest = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5">
      <h3 className="text-white text-xl font-bold mb-4">Theme Test</h3>
      <p className="text-[#a1a1aa] mb-4">Current theme: {isDark ? 'Dark' : 'Light'}</p>
      <button 
        onClick={toggleTheme}
        className="bg-white text-black px-4 py-2 rounded-full font-bold"
      >
        Toggle Theme ({isDark ? '☀️' : '🌙'})
      </button>
    </div>
  );
};

export default ThemeTest;
