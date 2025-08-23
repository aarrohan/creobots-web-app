import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowUpRight, Crown, Info } from "lucide-react";
import IncludedIcon from "./IncludedIcon";
import ExcludedIcon from "./ExcludedIcon";

interface IProps {
  setType: (type: "monthly" | "annually") => void;
}

export default function StarterMonthlyPlan({ setType }: IProps) {
  return (
    <div className="p-7 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] rounded-xl">
      <h3 className="w-fit text-xl font-semibold text-gradient">Starter</h3>

      <h4 className="my-3 text-5xl font-semibold">
        $9<span className="text-sm font-light">/mo.</span>
      </h4>

      <p className="mb-4 text-sm font-light text-white/65">
        Generate up to{" "}
        <span className="font-semibold text-gradient">60 thumbnails</span> per
        month.
      </p>

      <button className="group relative active:scale-95 w-full h-[44px] bg-gradient rounded-lg flex items-center font-semibold text-black duration-200">
        <span className="relative z-10 w-full flex justify-center items-center gap-2">
          <Crown size={20} /> Subscribe
        </span>

        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/75 to-transparent rounded-md opacity-0 group-hover:opacity-100 duration-200"></span>
      </button>

      <div className="mt-4 p-5 border border-white/5 bg-white/5 rounded-lg space-y-2.5">
        <div className="flex items-center gap-2">
          <IncludedIcon /> <p className="text-sm">20 Coins</p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                1 Coin = 3 Thumbnails (Turbo) <br />
                1 Coin = 1 Thumbnail (Quality)
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="w-fit py-px px-2 bg-gradient rounded text-xs font-medium uppercase text-black">
                  Increases monthly
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                Keep your subscription active and collect loyalty bonus:
                <br />
                <br />
                Month 1: <br />{" "}
                <span className="text-green-500">
                  +1 Coin or 3 Thumbnails
                </span>{" "}
                <br />
                <br />
                Month 2 & onward:
                <br />{" "}
                <span className="text-green-500">+2 Coins or 6 Thumbnails</span>
                <br />
                <br />
                <span className="text-red-400">
                  {" "}
                  Note: If your subscription is canceled, your loyalty progress
                  resets to Month 0.
                </span>
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <IncludedIcon /> <p className="text-sm">All Languages</p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                You can enter prompt and generate thumbnails & titles in any
                language.
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <IncludedIcon /> <p className="text-sm">Priority Support</p>{" "}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="flex items-center gap-2">
          <IncludedIcon /> <p className="text-sm">Viral Thumbnails Generator</p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                Generate viral thumbnails for your videos using AI in just a few
                seconds.
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <IncludedIcon /> <p className="text-sm">FaceSwap</p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                Swap faces in your thumbnails by simply uploading the desired
                face.
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <IncludedIcon />{" "}
          <p className="text-sm">Titles & Hooks Generator (Coming Soon)</p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                Generate catchy titles and hooks for your next videos to
                increase views.
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <ExcludedIcon />{" "}
          <p className="text-sm opacity-50">
            1-Click Video Editor (Coming Soon)
          </p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                Simply upload your raw short form video and let our AI do the
                rest.
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <ExcludedIcon />{" "}
          <p className="text-sm opacity-50">All Generations Remains Private</p>{" "}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="flex text-white/50">
                  <Info size={15} />
                </button>
              </Tooltip.Trigger>

              <Tooltip.Content
                side="top"
                className="z-[1000] max-w-[250px] py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
              >
                All generations are processed securely and remain strictly
                private.
                <Tooltip.Arrow className="fill-[#fff]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <div className="flex items-center gap-2">
          <ExcludedIcon />{" "}
          <p className="text-sm opacity-50">Early access to new features</p>{" "}
        </div>
      </div>

      <button
        onClick={() => setType("annually")}
        className="mt-4 w-full flex justify-center items-center gap-1 text-sm font-light text-center opacity-50 hover:opacity-100 duration-200"
      >
        <span>
          <span className="font-medium text-white">Save 10%</span> with annual
          plan
        </span>{" "}
        <ArrowUpRight size={18} className="text-white" />
      </button>
    </div>
  );
}
