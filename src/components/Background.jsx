import React from 'react';
import './Background.css';

export default function Background() {
  return (
    <div className="background">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}
