"use client";
import { useEffect, useState } from "react";
import { thumbnailGeneratorPromptPlaceholders } from "@/lib/constants";

interface IProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const placeholders = thumbnailGeneratorPromptPlaceholders;

export default function PromptBox({ prompt, setPrompt }: IProps) {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const [currentPlaceholder, setCurrentPlaceholder] = useState<string>(
    placeholders[0]
  );

  useEffect(() => {
    if (prompt.length === 0) {
      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => {
          const nextIndex =
            (placeholders.indexOf(prev) + 1) % placeholders.length;
          return placeholders[nextIndex];
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [prompt]);

  useEffect(() => {
    if (showPlaceholder && prompt.length === 0) {
      const interval = setInterval(() => {
        setShowPlaceholder(false);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [showPlaceholder, prompt]);

  useEffect(() => {
    if (!showPlaceholder && prompt.length === 0) {
      const interval = setInterval(() => {
        setShowPlaceholder(true);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [showPlaceholder, prompt]);

  useEffect(() => {
    if (prompt.length === 0) {
      setShowPlaceholder(true);
    } else {
      setShowPlaceholder(false);
    }
  }, [prompt]);

  return (
    <div className="relative">
      <p
        className={`${
          !showPlaceholder ? "opacity-0" : ""
        } absolute top-0 left-0 w-full font-light text-white/50 pointer-events-none duration-200`}
      >
        {currentPlaceholder}
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-[200px] resize-none font-light"
      ></textarea>
    </div>
  );
}
