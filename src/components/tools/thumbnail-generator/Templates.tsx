"use client";
import { useState } from "react";
import { GalleryHorizontalEnd, X } from "lucide-react";

export default function Templates() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex items-center gap-2"
      >
        <div className="group p-1.5 pr-3 border border-white/5 bg-white/5 hover:bg-white/10 rounded-full flex items-center gap-2 cursor-pointer duration-200">
          <div className="w-[25px] h-[25px] bg-gradient rounded-full flex justify-center items-center">
            <GalleryHorizontalEnd size={15} className="text-black" />
          </div>

          <p className="text-sm">Templates</p>
        </div>
      </div>

      {isOpened && (
        <div className="fixed z-[2000] top-0 left-0 w-full h-[100svh] px-5 bg-black/50 backdrop-blur-xl flex justify-center items-center">
          <div className="w-full max-w-[550px] p-6 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl">
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-lg">Templates</h3>

              <button onClick={() => setIsOpened(false)} className="flex">
                <X size={20} />
              </button>
            </div>

            <p className="text-xs uppercase text-center text-white/50">
              Coming soon...
            </p>
          </div>
        </div>
      )}
    </>
  );
}
