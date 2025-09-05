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
import preferencesJson from "@/lib/preferences.json";
import Reference from "./Reference";
import { useSession } from "next-auth/react";

export default function ThumbnailGeneratorTool() {
  const [prompt, setPrompt] = useState<string>("");

  const [aspectRatio, setAspectRatio] = useState<"9:16" | "16:9" | "1:1">(
    "9:16"
  );
  const [refImg, setRefImg] = useState<File | null>(null);
  const [refWeight, setRefWeight] = useState<number>(80);

  const [theme, setTheme] = useState<string>("Default");
  const [style, setStyle] = useState<string>("Default");
  const [textStyle, setTextStyle] = useState<string>("Default");
  const [emotion, setEmotion] = useState<string>("Default");
  const [colorMood, setColorMood] = useState<string>("Default");
  const [textEmphasis, setTextEmphasis] = useState<string>("Default");
  const [category, setCategory] = useState<string>("Default");
  const [overlayElements, setOverlayElements] = useState<string[]>([]);

  const [generations, setGenerations] = useState<IGeneration[]>([
    {
      id: Math.random().toString(36).substring(2, 15),
      isGenerating: false,
      prompt: `Let's replace this woman's face with Chris Hemsworth's face, the Oscar trophy on the left and the doll will be replaced by Thor's hammer. The color of the thumbnail can be blue, let's add contrast, well-lit points of light.`,
      aspectRatio: "16:9",
      images: [
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-04_result.webp",
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-03_result.webp",
      ],
    },
    {
      id: Math.random().toString(36).substring(2, 15),
      isGenerating: false,
      prompt: `Let's replace this man's face with Chris Hemsworth's face, the Oscar trophy on the left and the doll will be replaced by Thor's hammer. The color of the thumbnail can be blue, let's add contrast, well-lit points of light.`,
      aspectRatio: "16:9",
      images: [
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-20_result.webp",
        "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-05_result.webp",
      ],
    },
  ]);

  const { data: session, status } = useSession();

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

    // Theme
    if (theme !== "Default") {
      push(
        preferencesJson.theme.options[
          theme as keyof typeof preferencesJson.theme.options
        ]
      );
    }

    // Style
    if (style !== "Default") {
      push(
        preferencesJson.style.options[
          style as keyof typeof preferencesJson.style.options
        ]
      );
    }

    // Text style
    if (textStyle !== "Default") {
      push(
        `Text style: ${
          preferencesJson.textStyle.options[
            textStyle as keyof typeof preferencesJson.textStyle.options
          ]
        }, no misspellings`
      );
    }

    // Emotion
    if (emotion !== "Default") {
      push(
        preferencesJson.emotion.options[
          emotion as keyof typeof preferencesJson.emotion.options
        ]
      );
    }

    // Color mood
    if (colorMood !== "Default") {
      push(
        `Color palette: ${
          preferencesJson.colorMood.options[
            colorMood as keyof typeof preferencesJson.colorMood.options
          ]
        }`
      );
    }

    // Text emphasis
    if (textEmphasis !== "Default") {
      push(
        preferencesJson.textEmphasis.options[
          textEmphasis as keyof typeof preferencesJson.textEmphasis.options
        ]
      );
    }

    // Category
    if (category !== "Default") {
      push(
        preferencesJson.category.options[
          category as keyof typeof preferencesJson.category.options
        ]
      );
    }

    // Overlay elements
    if (overlayElements.length > 0) {
      push(
        `Overlay: ${overlayElements
          .map(
            (el) =>
              preferencesJson.overlayElements.options[
                el as keyof typeof preferencesJson.overlayElements.options
              ]
          )
          .join(", ")}`
      );
    }

    return chunks.join(". ") + (chunks.length ? "." : "");
  };

  const handleGenerate = async () => {
    if (prompt.length > 10) {
      const suffix = buildSuffix();
      const compiled = `${
        aspectRatio === "9:16"
          ? "A horizontal Youtube Shorts thumbnail"
          : aspectRatio === "16:9"
          ? "A vertical Youtube style thumbnail"
          : "A square social media post thumbnail"
      }. ${prompt.trim()}. ${suffix} Ensure text and key elements are inside safe zone to avoid cropping on previews.`.trim();

      const currentGenIndex = generations.length;

      setGenerations((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 15),
          isGenerating: true,
          prompt: compiled,
          aspectRatio,
          images: [
            "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-20_result.webp",
            "https://storage.googleapis.com/serveradv/landing-page/carrosel/Adv-05_result.webp",
          ],
        },
      ]);

      try {
        const res = await fetch("/api/tools/thumbnail-generator/generate", {
          method: "POST",
          body: JSON.stringify({
            userId: session?.user?.id,
            opts: {
              prompt: compiled,
              ar:
                aspectRatio === "16:9"
                  ? "AR_16_9"
                  : aspectRatio === "9:16"
                  ? "AR_9_16"
                  : "AR_1_1",
              refImg: refImg ? await refImg.arrayBuffer() : undefined,
              refWeight: refImg ? refWeight : undefined,
            },
          }),
        });

        if (res.ok) {
          const resJson = await res.json();

          if (resJson.success) {
            setGenerations((prev) =>
              prev.map((gen, i) =>
                i === currentGenIndex
                  ? {
                      ...gen,
                      isGenerating: false,
                      images: resJson.data.outputUrls,
                    }
                  : gen
              )
            );
          } else {
            throw new Error(resJson.msg);
          }
        }
      } catch {
        setGenerations((prev) => prev.filter((_, i) => i !== currentGenIndex));
      }
    }
  };

  return (
    <>
      <div className="relative w-full max-w-[850px] p-5 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl">
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
              style={style}
              setStyle={setStyle}
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

            <Reference
              refImg={refImg}
              setRefImg={setRefImg}
              refWeight={refWeight}
              setRefWeight={setRefWeight}
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
