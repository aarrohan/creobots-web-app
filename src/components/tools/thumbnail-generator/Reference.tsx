"use client";
import { useState } from "react";
import { ImageIcon, Paperclip, Play, X } from "lucide-react";
import { getYTThumbnailUrl, isValidYTLink } from "@/lib/utils";

interface IProps {
  refImg: File | null;
  setRefImg: (file: File | null) => void;
  refWeight: number;
  setRefWeight: (weight: number) => void;
}

export default function Reference({
  refImg,
  setRefImg,
  refWeight,
  setRefWeight,
}: IProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [isYoutubeLink, setIsYoutubeLink] = useState<boolean>(false);

  const [ytLink, setYTLink] = useState<string>("");
  const [invalidYTLink, setInvalidYTLink] = useState<boolean>(false);

  const handleGenerate = () => {
    if (ytLink) {
      if (isValidYTLink(ytLink)) {
        const thumbnailUrl = getYTThumbnailUrl(ytLink);

        fetch(thumbnailUrl)
          .then((response) => {
            if (response.ok) {
              setInvalidYTLink(false);

              return response.blob();
            } else {
              setInvalidYTLink(true);
            }
          })
          .then((blob) => {
            if (blob) {
              setRefImg(
                new File([blob], "thumbnail.jpg", { type: "image/jpeg" })
              );
            }
          })
          .catch((error) => {
            setInvalidYTLink(true);
          });
      } else {
        setInvalidYTLink(true);
      }
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center gap-2"
      >
        <div className="group p-1.5 pr-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full flex items-center gap-2 cursor-pointer duration-200">
          <div className="w-[25px] h-[25px] bg-gradient rounded-full flex justify-center items-center">
            <Paperclip size={15} className="text-black" />
          </div>

          <p className="text-sm">Reference</p>
        </div>
      </div>

      {isOpened && (
        <div className="fixed z-[2000] top-0 left-0 w-full h-[100svh] px-5 bg-black/50 backdrop-blur-xl flex justify-center items-center">
          <div className="w-full max-w-[550px] p-6 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl">
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-lg">Reference</h3>

              <button onClick={() => setIsOpened(false)} className="flex">
                <X size={20} />
              </button>
            </div>

            {!refImg && (
              <div className="mb-4 w-fit mx-auto p-1.5 bg-white/5 rounded-full flex gap-1">
                <div
                  onClick={() => setIsYoutubeLink(false)}
                  className={`${
                    !isYoutubeLink
                      ? "border-white/5 bg-white/10"
                      : "border-transparent hover:bg-white/5"
                  } group p-1.5 pr-3 border rounded-full flex items-center gap-2 cursor-pointer duration-200`}
                >
                  <div className="w-[25px] h-[25px] bg-gradient rounded-full flex justify-center items-center">
                    <ImageIcon size={15} className="text-black" />
                  </div>

                  <p className="text-sm">Image</p>
                </div>

                <div
                  onClick={() => setIsYoutubeLink(true)}
                  className={`${
                    isYoutubeLink
                      ? "border-white/5 bg-white/10"
                      : "border-transparent hover:bg-white/5"
                  } group p-1.5 pr-3 border rounded-full flex items-center gap-2 cursor-pointer duration-200`}
                >
                  <div className="w-[25px] h-[25px] bg-gradient rounded-full flex justify-center items-center">
                    <Play size={15} className="text-black" />
                  </div>

                  <p className="text-sm">Youtube Link</p>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center">
              {refImg && (
                <>
                  <div className="relative mb-4 w-fit">
                    <img
                      src={URL.createObjectURL(refImg)}
                      alt=""
                      className="w-auto h-[100px] rounded-md"
                    />

                    <button
                      onClick={() => setRefImg(null)}
                      className="absolute -top-1.5 -right-1.5 w-[16px] h-[16px] bg-red-400 rounded-full flex justify-center items-center"
                    >
                      <X size={12} strokeWidth={3} />
                    </button>
                  </div>

                  <div className="w-full flex items-center gap-3">
                    <p className="text-sm text-white/50">Similarity:</p>

                    <div className="flex-1 grid grid-cols-5 gap-1.5">
                      <button
                        onClick={() => setRefWeight(60)}
                        className={`${
                          refWeight === 60
                            ? "!border-white/5 hover:!border-white/15 bg-white/10"
                            : "!border-transparent hover:bg-white/5"
                        } p-2 !border rounded text-xs font-medium uppercase duration-200`}
                      >
                        Low
                      </button>

                      <button
                        onClick={() => setRefWeight(70)}
                        className={`${
                          refWeight === 70
                            ? "!border-white/5 hover:!border-white/15 bg-white/10"
                            : "!border-transparent hover:bg-white/5"
                        } p-2 !border rounded text-xs font-medium uppercase duration-200`}
                      >
                        Medium
                      </button>

                      <button
                        onClick={() => setRefWeight(80)}
                        className={`${
                          refWeight === 80
                            ? "!border-white/5 hover:!border-white/15 bg-white/10"
                            : "!border-transparent hover:bg-white/5"
                        } p-2 !border rounded text-xs font-medium uppercase duration-200`}
                      >
                        Default
                      </button>

                      <button
                        onClick={() => setRefWeight(90)}
                        className={`${
                          refWeight === 90
                            ? "!border-white/5 hover:!border-white/15 bg-white/10"
                            : "!border-transparent hover:bg-white/5"
                        } p-2 !border rounded text-xs font-medium uppercase duration-200`}
                      >
                        High
                      </button>

                      <button
                        onClick={() => setRefWeight(100)}
                        className={`${
                          refWeight === 100
                            ? "!border-white/5 hover:!border-white/15 bg-white/10"
                            : "!border-transparent hover:bg-white/5"
                        } p-2 !border rounded text-xs font-medium uppercase duration-200`}
                      >
                        Exact
                      </button>
                    </div>
                  </div>
                </>
              )}

              {!isYoutubeLink ? (
                <>
                  {!refImg && (
                    <>
                      <input
                        value={""}
                        onChange={(e) => {
                          const file = e.target.files?.[0];

                          if (file) {
                            setRefImg(file);
                          }
                        }}
                        type="file"
                        id="refInput"
                        hidden
                      />

                      <label
                        htmlFor="refInput"
                        className="w-full h-[65px] px-4 border border-white/5 hover:border-white/15 bg-white/5 rounded-md flex flex-col justify-center items-center gap-1 font-light cursor-pointer duration-200"
                      >
                        Upload any thumbnail
                        <span className="text-xs text-white/50">
                          (PNG, JPG, JPEG & WebP formats, up to 4 MB.)
                        </span>
                      </label>
                    </>
                  )}
                </>
              ) : (
                <>
                  {!refImg && (
                    <div className="w-full flex items-center gap-2">
                      <input
                        value={ytLink}
                        onChange={(e) => setYTLink(e.target.value)}
                        type="text"
                        placeholder="Link to Youtube video"
                        className="flex-1 h-[40px] px-4 !border !border-white/5 focus:!border-white/15 bg-white/5 rounded-md font-light placeholder:text-white/50 duration-200"
                      />

                      <button
                        onClick={handleGenerate}
                        className="group relative active:scale-95 h-[40px] px-8 bg-gradient rounded-lg flex items-center font-semibold text-black duration-200"
                      >
                        <span className="relative z-10 w-full flex justify-center items-center gap-2">
                          Generate
                        </span>

                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/75 to-transparent rounded-md opacity-0 group-hover:opacity-100 duration-200"></span>
                      </button>
                    </div>
                  )}
                </>
              )}

              {!refImg && invalidYTLink && (
                <p className="mt-1 w-full text-sm font-medium text-red-400">
                  Please enter a valid YouTube URL
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
