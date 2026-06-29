import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex justify-center py-4 bg-white">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v14m0 0l-5-5m5 5l5-5" stroke="#E4A107" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 20h14" stroke="#E4A107" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
