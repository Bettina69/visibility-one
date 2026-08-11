"use client";

import { useEffect, useState } from "react";

const PROMPT_TEXT = "Beste Online-Shops für nachhaltige Produkte in Deutschland?";

export function AiMock() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i <= PROMPT_TEXT.length) {
        setTyped(PROMPT_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(id);
      }
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="ai-mock">
      <div className="prompt-text">
        {typed}
        <span className="cursor"></span>
      </div>
      <div className="footer-row">
        <span>↪ 60% aller Suchen enden ohne Klick</span>
        <span>● live</span>
      </div>
    </div>
  );
}
