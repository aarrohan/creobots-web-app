"use client";
import { useState } from "react";
import { Key, Settings, X } from "lucide-react";
import preferencesJson from "@/lib/preferences.json";

interface IProps {
  theme: string;
  setTheme: (theme: string) => void;
  layout: string;
  setLayout: (layout: string) => void;
  textStyle: string;
  setTextStyle: (textStyle: string) => void;
  emotion: string;
  setEmotion: (emotion: string) => void;
  colorMood: string;
  setColorMood: (colorMood: string) => void;
  textEmphasis: string;
  setTextEmphasis: (textEmphasis: string) => void;
  category: string;
  setCategory: (category: string) => void;
  overlayElements: string[];
  setOverlayElements: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Preferences({
  theme,
  setTheme,
  layout,
  setLayout,
  textStyle,
  setTextStyle,
  emotion,
  setEmotion,
  colorMood,
  setColorMood,
  textEmphasis,
  setTextEmphasis,
  category,
  setCategory,
  overlayElements,
  setOverlayElements,
}: IProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center gap-2"
      >
        <div className="group p-1.5 pr-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full flex items-center gap-2 cursor-pointer duration-200">
          <div className="w-[25px] h-[25px] bg-gradient rounded-full flex justify-center items-center">
            <Settings size={15} className="text-black" />
          </div>

          <p className="text-sm">Preferences</p>
        </div>
      </div>

      {isOpened && (
        <div className="fixed z-[2000] top-0 left-0 w-full h-[100svh] px-5 bg-black/50 backdrop-blur-xl flex justify-center items-center">
          <div className="w-full max-w-[550px] max-h-[75svh] p-6 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl overflow-y-auto">
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-lg">Preferences</h3>

              <button onClick={() => setIsOpened(false)} className="flex">
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-10">
              {/* Theme */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.theme.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.theme.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setTheme(key);
                          }}
                          className={`${
                            key === theme
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Layout */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.layout.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.layout.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setLayout(key);
                          }}
                          className={`${
                            key === layout
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Text Style */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.textStyle.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.textStyle.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setTextStyle(key);
                          }}
                          className={`${
                            key === textStyle
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Emotion */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.emotion.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.emotion.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setEmotion(key);
                          }}
                          className={`${
                            key === emotion
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Color Mood */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.colorMood.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.colorMood.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setColorMood(key);
                          }}
                          className={`${
                            key === colorMood
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Text Emphasis */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.textEmphasis.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.textEmphasis.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setTextEmphasis(key);
                          }}
                          className={`${
                            key === textEmphasis
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Category */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.category.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.category.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setCategory(key);
                          }}
                          className={`${
                            key === category
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Overlay Elements */}
              <div>
                <p className="mb-3 text-xs uppercase text-white/50">
                  {preferencesJson.overlayElements.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(preferencesJson.overlayElements.options).map(
                    ([key]) => {
                      return (
                        <p
                          key={key}
                          onClick={() => {
                            setOverlayElements((prev: string[]) => {
                              if (prev.includes(key)) {
                                return prev.filter((item) => item !== key);
                              }

                              return [...prev, key];
                            });
                          }}
                          className={`${
                            overlayElements.includes(key)
                              ? "bg-white font-medium text-black"
                              : "bg-white/10"
                          } w-fit py-[2px] px-3 border border-white/5 rounded-full text-sm cursor-pointer duration-200`}
                        >
                          {key}
                        </p>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
