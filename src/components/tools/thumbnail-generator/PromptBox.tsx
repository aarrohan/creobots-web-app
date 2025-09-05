"use client";
import { useEffect, useRef, useState } from "react";
import { thumbnailGeneratorPromptPlaceholders } from "@/lib/constants";

interface IProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const VISIBLE_MS = 3000;
const FADE_MS = 250;

export default function PromptBox({ prompt, setPrompt }: IProps) {
  const placeholders = thumbnailGeneratorPromptPlaceholders;

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCycle = () => {
    t1.current = setTimeout(() => {
      setVisible(false);

      t2.current = setTimeout(() => {
        setIndex((i) => (i + 1) % placeholders.length);
        setVisible(true);

        startCycle();
      }, FADE_MS);
    }, VISIBLE_MS);
  };

  const clearTimers = () => {
    if (t1.current) clearTimeout(t1.current);
    if (t2.current) clearTimeout(t2.current);

    t1.current = null;
    t2.current = null;
  };

  useEffect(() => {
    clearTimers();
    if (prompt.length === 0) {
      setVisible(true);
      startCycle();
    } else {
      setVisible(false);
    }

    return clearTimers;
  }, [prompt, placeholders.length]);

  useEffect(() => {
    if (prompt.length === 0) setIndex(0);
  }, [prompt]);

  const currentPlaceholder = placeholders[index];

  return (
    <div className="relative">
      <p
        aria-hidden="true"
        className={`${
          visible ? "opacity-100" : "opacity-0"
        } absolute top-0 left-0 w-full font-light text-white/50 transition-opacity duration-[${FADE_MS}ms] ease-out pointer-events-none`}
      >
        {currentPlaceholder}
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onFocus={() => {
          setVisible(prompt.length === 0 ? false : false);
        }}
        onBlur={() => {
          if (prompt.length === 0) setVisible(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();

            if (prompt.length === 0) {
              setPrompt(currentPlaceholder);
            }
          }
        }}
        className="w-full h-[200px] resize-none font-light bg-transparent text-white placeholder-transparent outline-none"
      />
    </div>
  );
}
