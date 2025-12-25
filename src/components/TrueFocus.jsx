import { useEffect, useRef, useState } from "react";
import "./TrueFocus.css";

export default function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  blurAmount = 6,
}) {
  const words = sentence.split(separator);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="focus-container">
      {words.map((word, i) => (
        <span
          key={i}
          className="focus-word"
          style={{
            filter: i === current ? "blur(0px)" : `blur(${blurAmount}px)`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
