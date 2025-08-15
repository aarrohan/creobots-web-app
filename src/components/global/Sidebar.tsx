"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  Airplay,
  ArrowLeftToLine,
  ArrowRightToLine,
  Eclipse,
  History,
  Info,
  LogOut,
  Webhook,
  Play,
  Flag,
} from "lucide-react";
import logoColoredWhiteImg from "@/assets/images/brand/logo/logo-colored-white.svg";
import iconColoredWhiteImg from "@/assets/images/brand/icon/icon-colored-white.svg";
import creditCoinImg from "@/assets/images/brand/credit-coin.png";
import { usePathname } from "next/navigation";
import * as Tooltip from "@radix-ui/react-tooltip";

interface ILink {
  icon: React.ReactNode;
  title: string;
  href: string;
  label?: string;
}

interface ILinksPart {
  title: string;
  links: ILink[];
}

function UserBox({
  userImg,
  userName,
}: {
  userImg?: string;
  userName: string;
}) {
  return (
    <div className="mb-4 p-4 border border-white/5 bg-white/5 rounded-lg">
      <div className="flex items-center gap-3">
        {userImg && (
          <Image
            src={userImg}
            alt=""
            width={48}
            height={48}
            className="object-cover rounded-full"
          />
        )}

        <div>
          <h1 className="mb-1 text-center font-medium">{userName}</h1>

          <p className="w-fit py-px px-2 bg-gradient rounded-full text-xs font-medium uppercase text-black">
            Free trial
          </p>
        </div>
      </div>

      <div className="mt-4 mb-2 py-2 px-3 border border-white/10 bg-white/10 rounded-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={creditCoinImg} alt="" className="w-[22px]" />

          <p>
            <span className="font-medium">20</span>{" "}
            <span className="font-light text-white/65">jobs left</span>
          </p>
        </div>

        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className="flex text-white/50">
                <Info size={15} />
              </button>
            </Tooltip.Trigger>

            <Tooltip.Content
              side="top"
              className="py-1.5 px-2 bg-[#fff] rounded text-xs font-medium text-black"
            >
              1 Job = 4 Thumbnail Variations (Turbo) <br />
              1 Job = 2 Thumbnail Variations (Quality) <br />
              1 Job = 1 Thumbnail Variation (Max)
              <Tooltip.Arrow className="fill-[#fff]" />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <button className="group relative active:scale-95 w-full h-[40px] bg-gradient rounded-lg font-semibold text-black duration-200">
        <span className="relative z-10 w-full flex justify-center items-center gap-2">
          Upgrade
        </span>

        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[calc(100%-5px)] h-[calc(100%-5px)] bg-gradient-to-b from-white/75 to-transparent rounded-md opacity-0 group-hover:opacity-100 duration-200"></span>
      </button>
    </div>
  );
}

function LogoutBtn({ isOpened }: { isOpened: boolean }) {
  return (
    <button
      onClick={() => signOut()}
      className={`w-full h-[48px] px-4 hover:bg-red-400/15 rounded-lg flex justify-center items-center gap-2.5 text-red-400 duration-200`}
    >
      <LogOut size={20} />
      {isOpened && "Log out"}
    </button>
  );
}

export default function Sidebar() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const [menuContainerHeight, setMenuContainerHeight] = useState<number>(0);

  const menuContainerRef = useRef<HTMLDivElement>(null);

  const session = useSession();

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setMenuContainerHeight(menuContainerRef.current?.clientHeight || 0);
    }
  }, [isClient]);

  const linksParts: ILinksPart[] = [
    {
      title: "Tools",
      links: [
        {
          icon: <Airplay size={20} />,
          title: "Viral Thumbnails",
          href: "/dashboard",
        },
        {
          icon: <Webhook size={20} />,
          title: "Titles & Hooks",
          href: "#",
          label: "Coming soon",
        },
        {
          icon: <Play size={20} />,
          title: "1-Click Video Edit",
          href: "#",
          label: "Coming soon",
        },
      ],
    },
    {
      title: "Other",
      links: [
        {
          icon: <Eclipse size={20} />,
          title: "Manage Subscription",
          href: "#",
        },
        {
          icon: <History size={20} />,
          title: "Job History",
          href: "#",
        },
        {
          icon: <Flag size={20} />,
          title: "Roadmap",
          href: "/dashboard/roadmap",
        },
      ],
    },
  ];

  return (
    <div
      className={`${
        isOpened ? "w-[420px] min-w-[420px]" : "w-[170px] min-w-[170px]"
      } h-[100svh] p-5`}
    >
      <div className="h-full p-7 border border-white/10 bg-[rgba(52,76,125,0.15)] shadow-[inset_0px_64px_64px_32px_rgba(144,167,216,0.15)] backdrop-blur-3xl rounded-xl flex flex-col justify-between gap-5">
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center">
            <Link href={"/dashboard"}>
              {isOpened ? (
                <Image
                  src={logoColoredWhiteImg}
                  alt=""
                  className="w-auto h-[54px]"
                />
              ) : (
                <Image
                  src={iconColoredWhiteImg}
                  alt=""
                  className="w-auto h-[54px]"
                />
              )}
            </Link>

            <button
              onClick={() => setIsOpened(!isOpened)}
              className="pt-[10px] flex"
            >
              {isOpened ? (
                <ArrowLeftToLine size={20} />
              ) : (
                <ArrowRightToLine size={20} />
              )}
            </button>
          </div>

          <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div ref={menuContainerRef} className="flex-1 mt-5 overflow-hidden">
            <div
              style={{
                maxHeight: menuContainerHeight,
              }}
              className="space-y-5 overflow-y-auto"
            >
              {linksParts.map((linksPart, index) => {
                return (
                  <div key={index} className="space-y-5">
                    {index !== 0 && (
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    )}

                    <div>
                      <p className="mb-2 text-xs uppercase text-white/50">
                        {linksPart.title}
                      </p>

                      <div className="space-y-1">
                        {linksPart.links.map((link, lIndex) => {
                          return (
                            <Link
                              key={lIndex}
                              href={link.href}
                              className={`${
                                pathname === link.href
                                  ? "bg-white/10"
                                  : "hover:bg-white/5 font-light"
                              } ${
                                !isOpened ? "justify-center" : ""
                              } h-[48px] px-4 rounded-lg flex items-center gap-2.5 duration-200`}
                            >
                              {link.icon}
                              {isOpened && link.title}
                              {isOpened && link.label && (
                                <p className="w-fit py-px px-2 bg-gradient rounded-full text-xs font-medium uppercase text-black">
                                  {link.label}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          {isClient &&
            isOpened &&
            session.data?.user?.name &&
            session.data?.user?.image && (
              <UserBox
                userImg={session.data.user.image ?? ""}
                userName={session.data.user.name}
              />
            )}

          <LogoutBtn isOpened={isOpened} />
        </div>
      </div>
    </div>
  );
}
