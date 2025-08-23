"use client";
import { useState } from "react";
import {
  Check,
  RectangleHorizontal,
  RectangleVertical,
  Square,
  X,
} from "lucide-react";
import Image from "next/image";
import youtubeLogoImg from "@/assets/images/logos/youtube.svg";
import twitchLogoImg from "@/assets/images/logos/twitch.svg";
import youtubeShortsLogoImg from "@/assets/images/logos/youtube-shorts.svg";
import tiktokLogoImg from "@/assets/images/logos/tiktok.svg";
import facebookLogoImg from "@/assets/images/logos/facebook.svg";
import instagramLogoImg from "@/assets/images/logos/instagram.svg";

interface IProps {
  aspectRatio: "9:16" | "16:9" | "1:1";
  setAspectRatio: (ratio: "9:16" | "16:9" | "1:1") => void;
}

export default function AspectRatio({ aspectRatio, setAspectRatio }: IProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center gap-2"
      >
        <div className="group p-1.5 pr-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full flex items-center gap-2 cursor-pointer duration-200">
          <div className="w-[25px] h-[25px] bg-gradient rounded-full flex justify-center items-center">
            {aspectRatio === "9:16" ? (
              <RectangleVertical size={18} className="text-black" />
            ) : aspectRatio === "16:9" ? (
              <RectangleHorizontal size={18} className="text-black" />
            ) : (
              <Square size={15} className="text-black" />
            )}
          </div>

          <p className="text-sm">Aspect ratio: {aspectRatio}</p>
        </div>
      </div>

      {isOpened && (
        <div className="fixed z-[2000] top-0 left-0 w-full h-[100svh] px-5 bg-black/50 backdrop-blur-xl flex justify-center items-center">
          <div className="w-full max-w-[550px] p-6 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl">
            <div className="mb-3 flex justify-between items-center">
              <h3 className="text-lg">Aspect ratio</h3>

              <button onClick={() => setIsOpened(false)} className="flex">
                <X size={20} />
              </button>
            </div>

            <div className="mb-8 h-[260px] flex justify-center items-center">
              {aspectRatio === "9:16" && (
                <div className="h-[260px] aspect-[9/16] border border-white bg-black/75 rounded-lg flex flex-col justify-center items-center">
                  <p>9:16</p>
                </div>
              )}

              {aspectRatio === "16:9" && (
                <div className="h-[160px] aspect-[16/9] border border-white bg-black/75 rounded-lg flex flex-col justify-center items-center">
                  <p>16:9</p>
                </div>
              )}

              {aspectRatio === "1:1" && (
                <div className="h-[160px] aspect-[1/1] border border-white bg-black/75 rounded-lg flex flex-col justify-center items-center">
                  <p>1:1</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div
                onClick={() => setAspectRatio("9:16")}
                className={`${
                  aspectRatio === "9:16" ? "border-white" : "border-white/5"
                } relative p-4 border bg-white/5 hover:bg-white/10 rounded-md flex flex-col items-center gap-3 cursor-pointer duration-200`}
              >
                {aspectRatio === "9:16" && (
                  <div className="absolute -top-1.5 -right-1.5 w-[15px] h-[15px] bg-white rounded-full flex justify-center items-center">
                    <Check size={11} strokeWidth={4} className="text-black" />
                  </div>
                )}

                <p>9:16</p>

                <div className="flex items-center gap-2">
                  <Image
                    src={youtubeShortsLogoImg}
                    alt=""
                    className="w-[14px]"
                  />

                  <Image src={tiktokLogoImg} alt="" className="w-[18px]" />

                  <Image src={facebookLogoImg} alt="" className="w-[18px]" />

                  <Image src={instagramLogoImg} alt="" className="w-[18px]" />
                </div>
              </div>

              <div
                onClick={() => setAspectRatio("16:9")}
                className={`${
                  aspectRatio === "16:9" ? "border-white" : "border-white/5"
                } relative p-4 border bg-white/5 hover:bg-white/10 rounded-md flex flex-col items-center gap-3 cursor-pointer duration-200`}
              >
                {aspectRatio === "16:9" && (
                  <div className="absolute -top-1.5 -right-1.5 w-[15px] h-[15px] bg-white rounded-full flex justify-center items-center">
                    <Check size={11} strokeWidth={4} className="text-black" />
                  </div>
                )}

                <p>16:9</p>

                <div className="flex items-center gap-2">
                  <Image src={youtubeLogoImg} alt="" className="w-[18px]" />
                  <Image src={twitchLogoImg} alt="" className="w-[14px]" />
                </div>
              </div>

              <div
                onClick={() => setAspectRatio("1:1")}
                className={`${
                  aspectRatio === "1:1" ? "border-white" : "border-white/5"
                } relative p-4 border bg-white/5 hover:bg-white/10 rounded-md flex flex-col items-center gap-3 cursor-pointer duration-200`}
              >
                {aspectRatio === "1:1" && (
                  <div className="absolute -top-1.5 -right-1.5 w-[15px] h-[15px] bg-white rounded-full flex justify-center items-center">
                    <Check size={11} strokeWidth={4} className="text-black" />
                  </div>
                )}

                <p>1:1</p>

                <div className="flex items-center gap-2">
                  <Image src={facebookLogoImg} alt="" className="w-[18px]" />

                  <Image src={instagramLogoImg} alt="" className="w-[18px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
