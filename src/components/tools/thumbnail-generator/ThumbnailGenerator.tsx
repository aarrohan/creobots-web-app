"use client";
import { useEffect, useState } from "react";
import PromptBox from "./PromptBox";
import { Sparkles } from "lucide-react";
import AspectRatio from "./AspectRatio";
import Preferences from "./Preferences";
import Templates from "./Templates";
import * as Tooltip from "@radix-ui/react-tooltip";
import Generations from "./Generations";
import { IProps as IGeneration } from "./Generation";

export default function ThumbnailGenerator() {
  const [prompt, setPrompt] = useState<string>("");

  const [aspectRatio, setAspectRatio] = useState<"9:16" | "16:9" | "1:1">(
    "9:16"
  );

  const [theme, setTheme] = useState<string>("Default");
  const [layout, setLayout] = useState<string>("Default");
  const [textStyle, setTextStyle] = useState<string>("Default");
  const [emotion, setEmotion] = useState<string>("Default");
  const [colorMood, setColorMood] = useState<string>("Default");
  const [textEmphasis, setTextEmphasis] = useState<string>("Default");
  const [category, setCategory] = useState<string>("Default");
  const [overlayElements, setOverlayElements] = useState<string[]>([]);

  const [generations, setGenerations] = useState<IGeneration[]>([
    {
      isGenerating: false,
      prompt: `Let's replace this woman's face with Chris Hemsworth's face, the Oscar trophy on the left and the doll will be replaced by Thor's hammer. The color of the thumbnail can be blue, let's add contrast, well-lit points of light.`,
      aspectRatio: "16:9",
      images: [
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-04_result.webp",
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-03_result.webp",
      ],
    },
    {
      isGenerating: true,
      prompt: `Let's replace this woman's face with Chris Hemsworth's face, the Oscar trophy on the left and the doll will be replaced by Thor's hammer. The color of the thumbnail can be blue, let's add contrast, well-lit points of light.`,
      aspectRatio: "16:9",
      images: [
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-04_result.webp",
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-03_result.webp",
      ],
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGenerations((prev) =>
        prev.map((gen) =>
          gen.isGenerating ? { ...gen, isGenerating: false } : gen
        )
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const buildSuffix = () => {
    const chunks: string[] = [];
    const push = (s?: string) => s && chunks.push(s);

    push();
  };

  const handleGenerate = () => {};

  return (
    <>
      <div className="relative w-full max-w-[750px] p-5 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl">
        <PromptBox prompt={prompt} setPrompt={setPrompt} />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AspectRatio
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
            />

            <Preferences
              theme={theme}
              setTheme={setTheme}
              layout={layout}
              setLayout={setLayout}
              textStyle={textStyle}
              setTextStyle={setTextStyle}
              emotion={emotion}
              setEmotion={setEmotion}
              colorMood={colorMood}
              setColorMood={setColorMood}
              textEmphasis={textEmphasis}
              setTextEmphasis={setTextEmphasis}
              category={category}
              setCategory={setCategory}
              overlayElements={overlayElements}
              setOverlayElements={setOverlayElements}
            />

            <Templates />
          </div>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={handleGenerate}
                  className="group relative active:scale-95 h-[40px] px-8 bg-gradient rounded-lg flex items-center font-semibold text-black duration-200"
                >
                  <span className="relative z-10 w-full flex justify-center items-center gap-2">
                    <Sparkles size={18} /> Generate
                  </span>

                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/75 to-transparent rounded-md opacity-0 group-hover:opacity-100 duration-200"></span>
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="bottom"
                className="z-[1000] py-1.5 px-2 bg-[#fff] rounded"
              >
                <p className="text-xs font-semibold leading-5 text-black">
                  10 Coins
                </p>
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>

      <Generations generations={generations} />
    </>
  );
}
