"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import iconColoredWhiteImg from "@/assets/images/brand/icon/icon-colored-white.svg";

export interface IProps {
  title?: string;
  isGenerating: boolean;
  prompt: string;
  aspectRatio: "9:16" | "16:9" | "1:1";
  images: string[];
}

function Loader({ isGenerating }: { isGenerating: boolean }) {
  const [width, setWidth] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setWidth((prev) => {
          if (prev === 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + 5;
        });
      }, 250);

      return () => clearInterval(interval);
    } else {
      setWidth(100);

      setTimeout(() => {
        setHide(true);
      }, 500);
    }
  }, [isGenerating]);

  return (
    <>
      <div
        className={`${
          hide ? "opacity-0" : "loader-fading-animation"
        } absolute top-0 left-0 h-full bg-gradient pointer-events-none duration-200`}
        style={{
          width: `${width}%`,
        }}
      ></div>

      <div
        className={`absolute top-0 left-0 h-full pointer-events-none duration-200`}
        style={{
          width: `${width}%`,
        }}
      >
        <div
          className={`${
            hide ? "opacity-0" : ""
          } absolute top-0 right-0 w-[2px] h-full bg-gradient duration-200`}
        ></div>
      </div>

      <p
        className={`${
          hide ? "opacity-0" : "opacity-10"
        } absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl font-extrabold text-white pointer-events-none duration-200`}
      >
        {width}%
      </p>
    </>
  );
}

export default function Generation({
  title,
  isGenerating,
  prompt,
  aspectRatio,
  images,
}: IProps) {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [showImages, setShowImages] = useState<boolean>(false);

  const session = useSession();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isGenerating) {
      setTimeout(() => {
        setShowImages(true);
      }, 500);
    }
  }, [isGenerating]);

  return (
    <div className="w-full p-5 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl space-y-5">
      {isClient && session.data?.user?.name && session.data?.user?.image && (
        <div className="ml-auto w-fit flex items-start gap-3">
          <div className="p-4 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="mb-1 font-medium">{title}</h3>

            <p className="text-sm text-white/65">{prompt}</p>
          </div>

          <Image
            src={session.data.user.image ?? ""}
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </div>
      )}

      <div className="flex items-start gap-3">
        <Image src={iconColoredWhiteImg} alt="" className="w-[40px]" />

        <div className="flex-1 p-5 border border-white/10 bg-white/5 rounded-lg">
          <div className="relative rounded-md grid grid-cols-2 gap-5 overflow-hidden">
            {images.map((image, imageIndex) => {
              return (
                <div
                  key={imageIndex}
                  className="w-full bg-cover bg-center rounded-md"
                  style={{
                    aspectRatio: aspectRatio.replace(":", "/"),
                    backgroundImage: showImages ? `url(${image})` : "",
                  }}
                ></div>
              );
            })}

            <Loader isGenerating={isGenerating} />
          </div>
        </div>
      </div>
    </div>
  );
}
